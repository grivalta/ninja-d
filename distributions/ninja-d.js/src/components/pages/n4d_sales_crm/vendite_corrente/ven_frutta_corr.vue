<template>
    <h3 class="text-h5 text--primary text-center">Analisi Vendite Frutta 2025</h3>
    <div ref="venfru01" style="width: 600px; height: 50vh"></div>
</template>

<script>
    export default {
        data() {
            return {
                myChart: null
            }
        },
        
        // Attesa di Echarts e inizializzazione nella componente
        mounted() {
            // Al montaggio della componente deve inizializzarsi l'istanza locale
            // (quando la libreria Echarts è completamente caricata) 
            let interval = setInterval(() => {
                if (window.echarts) {
                    clearInterval(interval);
                    this.initChart();  //Inizializzazione
                }
            }, 100);
            
            // Listener per l'evento resize del container
            window.addEventListener('resize', this.onResize);

        },

        methods: { //Metodi dell'oggetto (no syntactic sugar "class" di ECMAScript 2015, JavaScript ES6)
            initChart: function () { //Inizializzazione effettiva dell'istanza grafica (nella DIV contenitore "venfru01" del Template)
                this.myChart = echarts.init(this.$refs.venfru01, null, { // Si specifica null per non selezionare un tema specifico
                    renderer: 'canvas',  // Il rendering engine "canvas" è indicato per grafici complessi o maggiore reattività, mentre SVG richiede meno memoria (p. es. mobile); Rif.: https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/
                    locale: 'it' // Il locale italiano della libreria Echarts è registrato globalmente dal nodo di importazione librerie con scope applicativo
                });

                // Dati demo statici per caricamento di default (iniziale)
                /*const datiDemo = {
                    mesi: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ot', 'Nov', 'Dic'],
                    frutta: [
                        { name: 'Mele delizia', data: [0, 0, 0, 0, 0, 65, 96, 91, 110, 84, 23, 10], type: 'line' },
                        { name: 'Mele renetta', data: [0, 0, 0, 0, 0, 10, 35, 87, 95, 78, 33, 9], type: 'line' },
                        { name: 'Albicocche', data: [0, 0, 0, 0, 0, 0, 18, 45, 158, 111, 23, 0], type: 'line' },
                        { name: 'Fichi', data: [50, 32, 8, 0, 0, 0, 0, 0, 11, 97, 168, 120], type: 'line' },
                        { name: 'Pere', data: [50, 32, 8, 0, 0, 0, 0, 0, 67, 98, 145, 43], type: 'line' },
                        { name: 'Pesche', data: [0, 0, 0, 0, 0, 0, 22, 56, 145, 49, 10, 4], type: 'line' }
                    ]
                };
                
                // Caricamento iniziale Dati demo statici nel grafico
                this.applyEchartsOption(datiDemo);*/

            },

            updateChart: function (msg) {
                if (msg && msg.payload && msg.payload.mesi && msg.payload.frutta) {
                    
                    //Elimina l'istanza precedente
                    if (this.myChart && this.myChart.isDisposed() === false) {
                        this.myChart.dispose();
                        this.myChart = null;
                    }

                    //Ritardo di inizializzare nuova istanza (per ricalcolo dimensioni della div 'venfru01')
                    setTimeout(() => {
                        this.myChart = echarts.init(this.$refs.venfru01, null, {
                            renderer: 'canvas',
                            locale: 'it'
                        });

                        this.applyEchartsOption(msg.payload);
                        
                        this.myChart.resize();
                    }, 50); // 50ms possono risolvere i glitch visivi
                    
                }
            },

            applyEchartsOption: function (datiIn) {
                const serieMsg = datiIn.frutta.map(item => {
                    return {
                        name: item.name || 'Senza nome',
                        type: item.type || 'line',
                        data: item.data,
                        emphasis: { focus: 'series' }
                    };
                });

                const option = {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: 10,
                        extraCssText: 'box-shadow: 0 0 8px rgba(0,0,0,0.2); border-radius: 4px;',
                        formatter: function (params) {
                            let res = `<div style="margin-bottom:5px; font-weight:bold; color:#666; border-bottom:1px solid #eee; padding-bottom:3px;">${params[0].name}</div>`;
                            res += `<table style="width:100%; min-width:160px; border-collapse:collapse;">`;
                            params.forEach(item => {
                                res += `
                                    <tr>
                                        <td style="padding:3px 0; text-align:left;">
                                            ${item.marker} <span style="color:#333; margin-left:5px;">${item.seriesName}</span>
                                        </td>
                                        <td style="padding:3px 0; text-align:right; font-weight:bold; padding-left:20px; color:#000;">
                                            ${item.value} k€
                                        </td>
                                    </tr>`;
                            });
                            res += `</table>`;
                            return res;
                        }
                    },

                    legend: { top: 0, padding: [5, 10] },

                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '12%', 
                        containLabel: true
                    },

                    dataZoom: [
                        {
                            type: 'slider',
                            show: true,
                            xAxisIndex: [0],
                            start: 0,
                            end: 100,
                            bottom: 5,
                            height: 20
                        },
                        {
                            type: 'inside', // Attiva zoom con rotellina mouse
                            xAxisIndex: [0]
                        }
                    ],

                    toolbox: {
                        show: true,
                        top: 25,
                        right: 10,
                        itemGap: 15,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false,
                                title: 'Tabella Dati',
                                lang: ['Dati Vendite', 'Chiudi', 'Aggiorna'],
                                optionToContent: function(opt) {
                                    let axisData = opt.xAxis[0].data;
                                    let series = opt.series;
                                    let table = '<div class="selectable-table-container"><table class="echarts-view-table"><thead><tr><th>Frutto</th>';
                                    axisData.forEach(m => { table += `<th>${m}</th>`; });
                                    table += '</tr></thead><tbody>';
                                    series.forEach(s => {
                                        table += `<tr><td style="text-align:left; font-weight:bold;">${s.name}</td>`;
                                        s.data.forEach(v => { table += `<td>${v}</td>`; });
                                        table += '</tr>';
                                    });
                                    table += '</tbody></table></div>';
                                    return table;
                                }
                            },
                            myExportCsv: {
                                show: true,
                                title: 'Esporta CSV',
                                icon: 'path://M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z',
                                onclick: () => {
                                    let csv = 'Prodotto;' + datiIn.mesi.join(';') + '\n';
                                    datiIn.frutta.forEach(f => { csv += f.name + ';' + f.data.join(';') + '\n'; });
                                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                                    const link = document.createElement("a");
                                    link.href = URL.createObjectURL(blob);
                                    link.setAttribute("download", "vendite_frutta.csv");
                                    link.click();
                                }
                            },
                            magicType: { type: ['line', 'bar', 'stack'] },
                            restore: {},
                            saveAsImage: {}
                        }
                    },

                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: datiIn.mesi
                    },
                    yAxis: {
                        type: 'value',
                        name: 'k€'
                    },
                    series: serieMsg
                };

                this.myChart.setOption(option, true);
                setTimeout(() => { if(this.myChart) this.myChart.resize(); }, 200);
            },


            onResize() {
                if (this.myChart) this.myChart.resize();
            }
        },

        //Watcher dei messaggi input
        watch: {
            msg(newMsg) {
                if (this.myChart) {
                    this.updateChart(newMsg);
                }
            }
        }
    }

</script>


<style>
    /*Attivazione della selezione di testo in tabella DataView */
    .selectable-table-container {
        user-select: text !important;
        -webkit-user-select: text !important;
        cursor: auto;
    }

    .echarts-view-table {
        width: 100%;
        border-collapse: collapse;
        font-family: sans-serif;
        font-size: 13px;
    }

    .echarts-view-table th {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        padding: 8px;
        position: sticky;
        top: 0;
    }

    .echarts-view-table td {
        border: 1px solid #dee2e6;
        padding: 6px;
        text-align: right;
    }

    .echarts-view-table td:first-child {
        text-align: left;
        font-weight: bold;
    }

    /*Rimedio per la sovrapposizione delle icone in Dashboard*/
    .selectable-table-container table tr:nth-child(even) {
        background-color: #fafafa;
    }
</style>
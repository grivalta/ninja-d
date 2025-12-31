<template>
    <h3 class="text-h5 text--primary text-center">Analisi Vendite Ortaggi 2025</h3>
    <div ref="venort01" style="width: 600px; height: 50vh"></div>
</template>

<script>
    export default {
        data() {
            return { myChart: null }
        },
        mounted() {
            let interval = setInterval(() => {
                if (window.echarts) {
                    clearInterval(interval);
                    this.initChart();
                }
            }, 100);
            window.addEventListener('resize', this.onResize);
        },
        methods: {
            initChart: function () {
                this.myChart = echarts.init(this.$refs.venort01, null, { renderer: 'canvas', locale: 'it' });
            },
            updateChart: function (msg) {
                if (msg && msg.payload && msg.payload.mesi) {
                    if (this.myChart) { this.myChart.dispose(); }
                    setTimeout(() => {
                        this.myChart = echarts.init(this.$refs.venort01, null, { renderer: 'canvas', locale: 'it' });
                        this.applyOptions(msg.payload);
                    }, 50);
                }
            },
            applyOptions: function (d) {
                const option = {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: 'rgba(255,255,255,0.98)',
                        formatter: (params) => {
                            let res = `<div style="font-weight:bold; border-bottom:1px solid #ddd; margin-bottom:5px;">${params[0].name}</div>`;
                            res += `<table style="width:180px;">`;
                            params.forEach(p => {
                                res += `<tr><td>${p.marker} ${p.seriesName}</td><td style="text-align:right; font-weight:bold;">${p.value} k€</td></tr>`;
                            });
                            return res + `</table>`;
                        }
                    },
                    legend: { top: 0 },
                    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
                    dataZoom: [{ type: 'slider', height: 20, bottom: 10 }, { type: 'inside' }],
                    toolbox: {
                        show: true,
                        top: 25,
                        right: 10,
                        itemGap: 12,
                        feature: {
                            dataView: { 
                                show: true, 
                                readOnly: false,
                                optionToContent: (opt) => {
                                    let axisData = opt.xAxis[0].data;
                                    let series = opt.series;
                                    let table = '<div class="selectable-table-container"><table class="ui-table"><thead><tr><th>Ortaggio</th>';
                                    axisData.forEach(m => { table += `<th>${m}</th>`; });
                                    table += '</tr></thead><tbody>';
                                    series.forEach(s => {
                                        table += `<tr><td style="text-align:left; font-weight:bold;">${s.name}</td>`;
                                        s.data.forEach(v => { table += `<td>${v}</td>`; });
                                        table += '</tr>';
                                    });
                                    return table + '</tbody></table></div>';
                                }
                            },
                            myExportCsv: {
                                show: true,
                                title: 'Download CSV',
                                icon: 'path://M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z',
                                onclick: () => {
                                    let csv = 'Ortaggio;' + d.mesi.join(';') + '\n';
                                    d.prodotti.forEach(p => { csv += p.name + ';' + p.data.join(';') + '\n'; });
                                    const link = document.createElement("a");
                                    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
                                    link.setAttribute("download", "vendite_ortaggi.csv");
                                    link.click();
                                }
                            },
                            magicType: { type: ['line', 'bar', 'stack'] },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: { type: 'category', data: d.mesi },
                    yAxis: { type: 'value', name: 'k€' },
                    series: d.prodotti.map(p => ({ ...p, emphasis: { focus: 'series' } }))
                };
                this.myChart.setOption(option);
            },
            onResize() { if (this.myChart) this.myChart.resize(); }
        },
        watch: { msg(n) { this.updateChart(n); } }
    }
</script>

<style>
    .selectable-table-container { user-select: text !important; padding: 15px; background: white; }
    .ui-table { width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 12px; }
    .ui-table th { background: #eee; border: 1px solid #ccc; padding: 8px; }
    .ui-table td { border: 1px solid #ccc; padding: 6px; text-align: right; }
    .ui-table tr:hover { background: #f5f5f5; }
</style>
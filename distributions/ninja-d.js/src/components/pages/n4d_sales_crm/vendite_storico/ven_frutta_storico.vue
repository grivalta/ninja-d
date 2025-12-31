<template>
    <h3 class="text-h5 text--primary text-center">Vendite frutta (2019-2025)</h3>
    <div ref="chart_vefr_02" style="width: 600px; height: 500px"></div>
</template>

<script>

export default {
    data() {
        return {
            myChart: null,
            defaultSource: [
                ['product', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                ['Mele delizia', 53.3, 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['Mele renetta', 32.2, 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['Albicocche', 67.4, 48.1, 32.2, 89.5, 56.4, 49.2, 82.5],
                ['Fichi', 70.1, 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['Pere', 22.4, 54.1, 32.2, 43.5, 67.4, 45.2, 40.5],
                ['Pesche', 45.2, 25.2, 37.1, 41.2, 18, 33.9, 49.1]
            ]
        }
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

    beforeUnmount() {
        if (this.myChart) {
            window.removeEventListener('resize', this.onResize);
            this.myChart.off('updateAxisPointer');
            this.myChart.dispose();
        }
    },

    methods: {
        initChart: function () {
            this.myChart = echarts.init(this.$refs.chart_vefr_02, null, {
                renderer: 'canvas',  // Il rendering engine "canvas" è indicato per grafici complessi o maggiore reattività, mentre SVG richiede meno memoria (p. es. mobile); Rif.: https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/
                locale: 'it' // Il locale italiano della libreria Echarts è registrato globalmente dal nodo di importazione librerie con scope applicativo
            });

            //Listener per interazione con il grafico
            this.myChart.on('updateAxisPointer', this.updatePieChart);

            //Dati statici iniziali
            this.applyEchartsOption(this.defaultSource);
        },

        updatePieChart: function (event) {
            const xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1; //Colonna 'product' esclusa
                
                this.myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        },

        updateChart: function (msg) {
            if (msg && msg.payload && Array.isArray(msg.payload) && msg.payload.length > 0) {
                this.applyEchartsOption(msg.payload);
            } else {
                 console.warn("Messaggio ricevuto ma formato payload non valido per Echarts dataset.");
            }
        },

        applyEchartsOption: function (sourceData) {
            const numLines = sourceData.length - 1; 
            const series = [];

            for (let i = 0; i < numLines; i++) {
                series.push({
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                });
            }

            series.push({
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: { focus: 'self' },
                label: {
                    formatter: '{b}: {@' + sourceData[0][sourceData[0].length - 1] + '} ({d}%)' 
                },
                encode: {
                    itemName: 'product',
                    value: sourceData[0][sourceData[0].length - 1],
                    tooltip: sourceData[0][sourceData[0].length - 1]
                }
            });

            const option = {
                legend: {},
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                toolbox: { 
                    show: true, 
                    feature: { 
                        restore: {}, saveAsImage: {}, dataView: {}, dataZoom: {}, 
                        magicType: { type: ['line', 'bar', 'stack'] } 
                    } 
                },
                dataset: {
                    source: sourceData
                },
                xAxis: { type: 'category' },
                yAxis: { gridIndex: 0 },
                grid: { top: '55%' },
                series: series
            };

            this.myChart.setOption(option, true);
        },

        onResize() {
            if (this.myChart) this.myChart.resize();
        }
    },

    watch: {
        msg(newMsg) {
            if (this.myChart) {
                this.updateChart(newMsg);
            }
        }
    }
}
</script>
<template>
    <h3 class="text-h5 text--primary text-center">Situazione meteo e storico clima</h3>
    <div ref="chart23" style="width: 1200px; height: 500px"></div>
</template>

<script>
export default {
    data() {
        return {
            myChart: null,
            chartTitle: "Situazione meteo e storico clima",
            defaultSource: {
                title: "Andamento Idro-Climatico Italia",
                months: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
                seriesData: [
                    {
                        name: "Portata media rivi (m³/s)",
                        data: [150.0, 130.0, 100.0, 70.0, 50.0, 40.0, 30.0, 30.0, 60.0, 90.0, 120.0, 150.0],
                        type: 'line',
                        yAxisIndex: 0
                    },
                    {
                        name: "Pioggia cumulata (mm)",
                        data: [50.0, 70.0, 120.0, 90.0, 60.0, 30.0, 15.0, 25.0, 40.0, 80.0, 110.0, 65.0],
                        type: 'bar',
                        yAxisIndex: 1
                    }
                ]
            }
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
            this.myChart.dispose();
        }
    },

    methods: {
        initChart: function () {
            this.myChart = echarts.init(this.$refs.chart23, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            this.applyEchartsOption(this.defaultSource);
        },

        updateChart: function (msg) {
            if (msg && msg.payload && msg.payload.seriesData) {
                this.applyEchartsOption(msg.payload);
            } else {
                 console.warn("Formato payload non valido in msg.");
            }
        },

        applyEchartsOption: function (inputData) {
            
            this.chartTitle = inputData.title;

            const option = {
                title: { text: inputData.title, subtext: 'Fonte: ISPRA/Protezione Civile' },
                tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                legend: { data: inputData.seriesData.map(s => s.name) },
                toolbox: { 
                    show: true, 
                    feature: { 
                        dataView: { show: true, readOnly: false }, 
                        magicType: { show: true, type: ['line', 'bar'] }, 
                        restore: { show: true }, 
                        saveAsImage: { show: true } 
                    } 
                },
                xAxis: {
                    type: 'category',
                    data: inputData.months
                },
                yAxis: [
                    {
                        type: 'value',
                        name: 'Portata (m³/s)',
                        min: 0,
                        max: 200,
                        position: 'right',
                        axisLabel: { formatter: '{value} m³/s' }
                    },
                    {
                        type: 'value',
                        name: 'Pioggia (mm)',
                        min: 0,
                        max: 200,
                        position: 'left',
                        axisLabel: { formatter: '{value} mm' }
                    }
                ],
                series: inputData.seriesData.map(s => ({
                    name: s.name,
                    type: s.type,
                    yAxisIndex: s.yAxisIndex,
                    data: s.data,
                    emphasis: { focus: 'series' }
                }))
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
<!-- template -->
    <div id="chart03"  style="width: 600px; height: 500px"></div>
<!-- /template -->


<script>

var myChart = echarts.init(document.getElementById('chart03'));

var option = {
    title: {
        text: 'Break-Even Point (BEP) - Ortaggi',
    },
    legend: {
        data: ['Costi Fissi', 'Costi Variabili', 'Costi Totali', 'Ricavi']
    },
    xAxis: {
        name: 'Qtà',
        type: 'value',
        min: 0,
        max: 2000,
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        name: 'Valore (€)',
        type: 'value',
        min: 0,
        max: 40000,
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name: 'Costi Fissi',
            type: 'line',
            data: [[0, 16000], [2000, 16000]],
            smooth: false,
            symbol: 'none',
            lineStyle: {
                type: 'dashed'
            }
        },
        {
            name: 'Costi Variabili',
            type: 'line',
            data: [[0, 0], [2000, 21000]],
            smooth: false,
            symbol: 'none'
        },
        {
            name: 'Costi Totali',
            type: 'line',
            data: [[0, 16000], [2000, 37000]],
            smooth: false,
            symbol: 'none',
        },
        {
            name: 'Ricavi',
            type: 'line',
            data: [[0, 0], [2000, 40000]],
            smooth: false,
            symbol: 'none',
            markPoint: {
                data: [
                    {
                        name: 'Break-Even Point',
                        coord: [1700, 34000],
                        value: 'BEP',
                        itemStyle: {
                            color: 'green'
                        }
                    }
                ]
            }
        }
    ]
};

myChart.setOption(option);

</script>
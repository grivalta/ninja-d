<!-- template -->
    <div id="chart04"  style="width: 600px; height: 500px"></div>
<!-- /template -->


<script>

var myChart = echarts.init(document.getElementById('chart04'));

var option = {
    title: {
        text: 'Break-Even Point (BEP) - Frutta',
    },
    //tooltip: {},
    legend: {
        data: ['Costi Fissi', 'Costi Variabili', 'Costi Totali', 'Ricavi']
    },
    // 4. Configurazione degli assi X e Y
    xAxis: {
        name: 'Qtà)',
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
        max: 220000,
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name: 'Costi Fissi',
            type: 'line',
            data: [[0, 44000], [2000, 44000]],
            smooth: false,
            symbol: 'none',
            lineStyle: {
                type: 'dashed'
            }
        },
        {
            name: 'Costi Variabili',
            type: 'line',
            data: [[0, 0], [2000, 100000]],
            smooth: false,
            symbol: 'none'
        },
        {
            name: 'Costi Totali',
            type: 'line',
            data: [[0, 44000], [2000, 144000]],
            smooth: false,
            symbol: 'none'
        },
        {
            name: 'Ricavi',
            type: 'line',
            data: [[0, 0], [2000, 200000]],
            smooth: false,
            symbol: 'none',
            markPoint: {
                data: [
                    {
                        name: 'Break-Even Point',
                        coord: [860, 85000],
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
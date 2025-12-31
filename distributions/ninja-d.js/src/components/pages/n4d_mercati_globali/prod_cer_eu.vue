<!-- template -->
  <h3 class="text-h5 text--primary text-center">Produzione Cereali EU</h3>
  <div id="chart01" style="width: 700px; height: 600px"></div>

<!-- /template -->


<script>

    var dom = document.getElementById('chart01');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',  // Il rendering engine "canvas" è indicato per grafici complessi o maggiore reattività, mentre SVG richiede meno memoria (p. es. mobile); Rif.: https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/
                locale: 'it' // Il locale italiano della libreria Echarts è registrato globalmente dal nodo di importazione librerie con scope applicativo
    });
    var app = {};
    
    var option;

    option = {
  
      toolbox: {
      show: true,
      feature: {
      restore: {},
      saveAsImage: {},
      dataView: {},
      dataZoom: {},
      magicType: {
      type: ['line', 'bar', 'stack']
      },
      },
      },
  
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  yAxis: {
    type: 'value',
    axisLabel: {
    formatter: '{value}€'
    }
  },
  xAxis: {
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023e', '2024f', '2025p']
  },
  series: [
    {
      name: 'Avena',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [6944, 8494, 7481, 7441, 5895, 7747, 8977]
    },
    {
      name: 'Grano duro',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [7475, 7422, 8164, 7543, 7491, 7367, 8344]
    },
    {
      name: 'Grano tenero',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [132156, 119027, 130023, 126802, 126168, 111814, 134408]
    },
    {
      name: 'Mais',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [70416, 67717, 73501, 53339, 61483, 59567, 57007]
    },
    {
      name: 'Orzo',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [55513, 54399, 51883, 51858, 47450, 49012, 56412]
    },
    {
      name: 'Segale',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [8455, 8936, 7948, 7449, 7551, 7080, 7593]
    },
    {
      name: 'Sorgo',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [1015, 1029, 814, 530, 828, 1003, 898]
    },
    {
      name: 'Triticale',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [11203, 12347, 11675, 11365, 10969, 9963, 11761]
    },
    {
      name: 'Altri cereali',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [3908, 3652, 3835, 2738, 2327, 2216, 2847]
    },


    {
    name: 'Totale',
    type: 'line',
    data: [297089, 283027, 295329, 269070, 270167, 255773, 288252],
    //data: [{ type: 'average', name: 'Avg' }],
    markPoint: {
    data: [
    { type: 'max', name: 'Max' },
    { type: 'min', name: 'Min' }
    ]
    },
    markLine: {
    data: [{ type: 'average', name: 'Avg' }]
    }
    }


  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
</script>
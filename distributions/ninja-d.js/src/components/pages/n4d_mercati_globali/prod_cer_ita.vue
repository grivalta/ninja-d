<!-- template -->
  <h3 class="text-h5 text--primary text-center">Produzione Cereali ITA</h3>
  <div id="chart02" style="width: 700px; height: 600px"></div>
<!-- /template -->


<script>

    var dom = document.getElementById('chart02');
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


  yAxis: [
    {
    type: 'value',
    name: 'ITA',axisLabel: {
    formatter: '{value}€'
    }
    },
    {
    type: 'value',
    name: 'EU',
    axisLabel: {
    formatter: '{value}€'
    }
    }
  ],
  
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
      data: [238, 243, 233, 242, 226, 207, 230]
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
      data: [3849, 3885, 4065, 3690, 3688, 3500, 3799]
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
      data: [2727, 2669, 3053, 2760, 3040, 2563, 2585]
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
      data: [6259, 6771, 6060, 4682, 5331, 4925, 5289]
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
      data: [1072, 1091, 1060, 1124, 1159, 892, 923]
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
      data: [13, 11, 11, 10, 11, 12, 11]
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
      data: [312, 362, 223, 191, 239, 248, 260]
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
      data: [59, 59, 62, 63, 74, 66, 62]
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
      data: [103, 107, 94, 74, 69, 66, 79]
    },


    {
    name: 'Totale ITA',
    type: 'line',
    data: [14633, 15197, 14862, 12837, 13837, 12476, 13238],
    markPoint: {
    data: [
    { type: 'max', name: 'Max' },
    { type: 'min', name: 'Min' }
    ]
    },
    markLine: {
    data: [{ type: 'average', name: 'Avg' }]
    }
    },
    
    
    {
    name: 'Totale EU',
    type: 'line',
    
    yAxisIndex: 1,

    data: [297089, 283027, 295329, 269070, 270167, 255773, 288252],
    
    }


  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
</script>
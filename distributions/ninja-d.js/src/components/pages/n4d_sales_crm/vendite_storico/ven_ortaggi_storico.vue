<!-- template -->
  <h3 class="text-h5 text--primary text-center">Vendite verdura e ortaggi (2019-2025)</h3>
    <!-- div ref="charttpw" style="width: 600px; height: 500px"></div -->

<div id="container2"  style="width: 600px; height: 500px"></div>


<!-- /template -->

<!-- GLR.Sost script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script -->
<!-- script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@6.0.0/dist/echarts.min.js"></script -->
<!-- script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script -->

<script>

    var dom = document.getElementById('container2');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',  // Il rendering engine "canvas" è indicato per grafici complessi o maggiore reattività, mentre SVG richiede meno memoria (p. es. mobile); Rif.: https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/
      locale: 'it' // Il locale italiano della libreria Echarts è registrato globalmente dal nodo di importazione librerie con scope applicativo
    });
    var app = {};
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    toolbox: {
    show: true,
    feature: {
    saveAsImage: {},
    dataView: {},
    dataZoom: {},
    magicType: {
    type: ['line', 'bar', 'stack']
    },
    },
    },
    dataset: {
      source: [
        ['product', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        ['Patate', 45.2, 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Pomodori', 57.0, 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['finocchi', 31.4, 48.1, 32.2, 89.5, 56.4, 49.2, 82.5],
        ['Rape', 51.9, 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Insalata', 33.6, 54.1, 32.2, 43.5, 67.4, 45.2, 40.5],
        ['Verze', 29.4, 45.2, 61.1, 41.2, 35.7, 15.3, 25],
        ['Melanzane', 97.6, 86.2, 75.1, 46.2, 30.3, 53.9, 69.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2025} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2025',
          tooltip: '2025'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
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
  });
  myChart.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

</script>
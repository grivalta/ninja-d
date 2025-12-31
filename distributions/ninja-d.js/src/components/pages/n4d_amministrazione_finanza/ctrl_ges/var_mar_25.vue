<!-- template -->
  <div id="varmargin1"  style="width: 600px; height: 500px"></div>
<!-- /template -->


<script>

var myChart = echarts.init(document.getElementById('varmargin1'));

var option = {
    /*title: {
        text: 'Variazione MARGINI 2025',
    },*/
    title: { text: 'Variazione MARGINI 2025', subtext: 'MdC = Ricavi - Costi' },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      let dep;
      if (params[1] && params[1].value !== '-') {
        dep = params[1];
      } else {
        dep = params[2];
      }
//      return dep && dep.name + '<br/>' + dep.seriesName + ' : ' + dep.value;
      return dep && dep.name + '<br/>' + dep.seriesName + ' : ' + dep.value + '<br/>' + params[0].seriesName + ' : ' + params[0].value;
    }
  },
  legend: {
    data: ['Decremento', 'Incremento'],
    bottom: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  },
        toolbox: {
      show: true,
        top: '10%',
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
xAxis: {
    type: 'category',
        data: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Margine',
      type: 'line',
      stack: 'Total',
      silent: false,
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
    },
    {
      name: 'Incremento',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
//      data: [900, 345, 393, 108, 154, 135, 178, 286, 119, 361, 203]
    },
    {
      name: 'Decremento',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'bottom'
      },
      data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
    }
  ]
};

myChart.setOption(option);

</script>
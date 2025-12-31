<!-- template -->
  <div id="compcost1"  style="width: 600px; height: 500px"></div>
<!-- /template -->


<script>
var myChart = echarts.init(document.getElementById('compcost1'));

var option = {
    title: {
        text: 'Composizione Costi Colturali',
        textVerticalAlign: "top"
    },
	legend: { data: ['Costi fissi', 'Costi variabili'] },
	toolbox: {
      show: true,
        top: '10%',
        feature: {
          restore: {},
          saveAsImage: {},
          dataView: {}
        }
      },
	tooltip: {},
	radar: {
		indicator: [
		  { name: 'Seminativi', max: 3100 },
		  { name: 'Miste', max: 3100 },
		  { name: 'Fruttiferi', max: 3100 },
		  { name: 'Olivicoltura', max: 3100 },
		  { name: 'Viticoltura', max: 3100 },
		  { name: 'Ortofloricoltura', max: 3100 },
		  { name: 'Cerealicoltura', max: 3100 }
		],
		splitNumber: 10,
		radius: ["0%", "65%"]
	},
	series: [
		{
		  name: 'Costi colturali',
		  type: 'radar',
		  //label: { show: true },
		  data: [
			{value: [200, 300, 1000, 500, 150, 1800, 800], name: 'Costi fissi'},
			{value: [500, 1400, 2800, 2600, 420, 2100, 1200], name: 'Costi variabili'}
		  ]
		}
	]
};

myChart.setOption(option);

</script>
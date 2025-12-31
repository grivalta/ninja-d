<!-- template -->
  <div id="comprica1"  style="width: 600px; height: 500px"></div>
<!-- /template -->


<script>
var myChart = echarts.init(document.getElementById('comprica1'));

var option = {
    title: {
        text: 'Composizione Ricavi Colturali',
        textVerticalAlign: "top"
    },
	legend: { data: ['B2B', 'B2C'] },
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
		  { name: 'Seminativi', max: 50000 },
		  { name: 'Miste', max: 50000 },
		  { name: 'Fruttiferi', max: 50000 },
		  { name: 'Olivicoltura', max: 50000 },
		  { name: 'Viticoltura', max: 50000 },
		  { name: 'Ortofloricoltura', max: 50000 },
		  { name: 'Cerealicoltura', max: 50000 }
		],
		splitNumber: 10,
		radius: ["0%", "65%"]
	},
	series: [
		{
		  name: 'Ricavi colturali',
		  type: 'radar',
		  //label: { show: true },
		  data: [
			{value: [4200, 30000, 20000, 35000, 50000, 18000, 8000], name: 'B2B'},
			{value: [5000, 14000, 28000, 26000, 42000, 21000, 12000], name: 'B2C'}
		  ]
		}
	]
};

myChart.setOption(option);

</script>
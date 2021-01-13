require.config({
  paths: {
    get_map: "../results/example-results/get-data/get_map_results",
    get_unordered_map: "../results/example-results/get-data/get_unordered_map_results",
    get_tree_map: "../results/example-results/get-data/get_tree_map_results"
  },
});

function renderChart(chartName, chartData) {
  const ctx = document.getElementById(chartName).getContext("2d");
  const keys = chartData.map((item) => item.key);
  const values = chartData.map((item) => item.gas_burnt);
  const gasBurnt = chartData.reduce((acc, curr) => acc + curr.gas_burnt,0);
  const avgGasBurnt = (gasBurnt / chartData.length).toFixed(2)
  const tokens_burnt = chartData.reduce((acc, curr) => acc + curr.tokens_burnt,0);
  const totalTxCost = "Total Tx Fee: " + tokens_burnt.toFixed(4) + " Ⓝ";
  const avgGasAndTotalCalls = "Calls made: " + chartData.length.toString() + " | Avg. TGas Burnt: " + avgGasBurnt;

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: keys, 
      datasets: [
        {
          label: totalTxCost,
          data: values,
          backgroundColor: ["rgba(0, 114, 206, .5)"],
          borderColor: ["rgba(0, 0, 0, .25)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: chartName,
        fontFamily: 'Source Code Pro',
        fontSize: 16,
        fontColor: '#333'
      },
      legend: {
        display: true,
        labels: {
          fontFamily: 'Source Code Pro',
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontColor: '#333',
              fontSize: 16,
              fontFamily: 'Source Code Pro',
              labelString: avgGasAndTotalCalls,
            },
            ticks: {
              fontSize: 8,
              fontFamily: 'Source Code Pro',
            }
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontFamily: 'Source Code Pro',
              labelString: "TGas Burnt (10^12)",
            },
            ticks: {
              fontFamily: 'Source Code Pro',
              fontSize: 12,
              suggestedMin: 5,
              suggestedMax: 10,
            },
          },
        ],
      },
    },
  });
  return myChart;
}

requirejs(["get_map"], function () {
  return renderChart("get_map", get_map_data);
});

requirejs(["get_unordered_map"], function () {
  return renderChart("get_unordered_map", get_unordered_map_data);
});

requirejs(["get_tree_map"], function () {
  return renderChart("get_tree_map", get_tree_map_data);
});
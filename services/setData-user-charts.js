require.config({
  paths: {
    add_map: "../results/user-results/set-data/add_map_results",
    add_unordered_map: "../results/user-results/set-data/add_unordered_map_results",
    add_tree_map: "../results/user-results/set-data/add_tree_map_results"
  },
});

function renderChart(chartName, chartData) {
  const ctx = document.getElementById(chartName).getContext("2d");
  const keys = chartData.map((item) => item.key);
  const values = chartData.map((item) => item.gas_burnt);
  const tokens_burnt = chartData.reduce((acc, curr) => acc + curr.tokens_burnt,0);
  const totals = "Total Tx Fee: " + tokens_burnt.toFixed(4) + " Ⓝ";

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: keys, 
      datasets: [
        {
          label: chartName,
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
        text: chartData.length.toString() + " records" ,
        fontFamily: 'Source Code Pro',
        fontSize: 16
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
              labelString: totals,
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
              suggestedMax: 40,
            },
          },
        ],
      },
    },
  });
  return myChart;
}

requirejs(["add_map"], function () {
  return renderChart("add_map", add_map_data);
});

requirejs(["add_unordered_map"], function () {
  return renderChart("add_unordered_map", add_unordered_map_data);
});

requirejs(["add_tree_map"], function () {
  return renderChart("add_tree_map", add_tree_map_data);
});
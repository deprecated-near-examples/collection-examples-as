require.config({
  paths: {
    add_map: "../results/user-results/add_map_results",
    add_unordered_map: "../results/user-results/add_unordered_map_results"
  },
});

function renderChart(chartName, chartData) {
  const ctx = document.getElementById(chartName).getContext("2d");
  const keys = chartData.map((n) => Object.keys(n)[0]);
  const values = chartData.map((n) => Object.values(n)[0]);

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: keys,
      datasets: [
        {
          label: chartName,
          data: values,
          backgroundColor: ["rgba(0, 114, 206, .5)"],
          borderColor: ["rgba(0, 0, 0, .5)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      elements: {
        line: {
          borderJoinStyle: "round",
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 5000000000000,
              suggestedMax: 8000000000000,
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

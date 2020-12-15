require.config({
  paths: {
    add_persistent_map: "../results/user-results/add_persistent_map_results"
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
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
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
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
  return myChart;
}

requirejs(["add_persistent_map"], function () {
  return renderChart("add_persistent_map", add_persistent_map_data);
});

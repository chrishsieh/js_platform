$(document).ready(function() {
  const next = JSON.parse($('#__NEXT_DATA__').text());

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  let oData = [];
  let oBackgroundColor = [];
  let oHoverBackgroundColor = [];
  let oLabels = [];
  for (g of next.query.AdultsGenderCount) {
    oData.push(g.numb);
    if (g.per_Gender === 1) {
      oBackgroundColor.push('#003399');
      oHoverBackgroundColor.push('#3366ff');
      oLabels.push('Men');
    } else {
      oBackgroundColor.push('#9900ff');
      oHoverBackgroundColor.push('#ff66cc');
      oLabels.push('Women');
    }
  }

  for (g of next.query.KidsGenderCount) {
    oData.push(g.numb);
    if (g.per_Gender === 1) {
      oBackgroundColor.push('#3399ff');
      oHoverBackgroundColor.push('#99ccff');
      oLabels.push('Boys');
    } else {
      oBackgroundColor.push('#009933');
      oHoverBackgroundColor.push('#99cc00');
      oLabels.push('Girls');
    }
  }

  var doughnut_config = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: oData,
          backgroundColor: oBackgroundColor,
          hoverBackgroundColor: oHoverBackgroundColor,
        },
      ],
      labels: oLabels,
    },
    options: {
      responsive: true,
      legend: {
        position: 'right',
      },
      animation: {
        animateRotate: false,
      },
    },
  };
  var pieChartCanvas = $('#gender-donut')
    .get(0)
    .getContext('2d');
  var pieChart = new Chart(pieChartCanvas, doughnut_config);

  var ageBase = [];
  for (var i = 0; i < 120; i++) {
    ageBase.push({ x: i, y: 0 });
  }
  var ageLabels = Object.keys(next.query.AgeCountGroup);
  var ageValuesX = ageLabels.map((value) => parseInt(value));
  var ageValuesY = Object.values(next.query.AgeCountGroup);
  ageValuesX.forEach((value, index) => {
    ageBase[parseInt(value)] = { x: value, y: ageValuesY[index] };
  });
  var bar_config = {
    type: 'line',
    data: {
      datasets: [
        {
          data: ageBase,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          label: 'Ages',
        },
      ],
      labels: ageLabels,
    },
    options: {
      responsive: true,
      legend: {
        position: 'right',
      },
      animation: {
        animateRotate: false,
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        },
      },
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  var ageStatsCanvas = $('#age-stats-bar')
    .get(0)
    .getContext('2d');
  var AgeChart = new Chart(ageStatsCanvas, bar_config);
});

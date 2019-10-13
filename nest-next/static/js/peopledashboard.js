$(document).ready(function() {
  // const next = JSON.parse($('#__NEXT_DATA__').text());
  // console.log(next.query);
  console.log(window);
  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var PieData = [
    { value: 22, color: '#003399', highlight: '#3366ff', label: 'Men' },
    { value: 17, color: '#9900ff', highlight: '#ff66cc', label: 'Women' },
    { value: 16, color: '#3399ff', highlight: '#99ccff', label: 'Boys' },
    { value: 14, color: '#009933', highlight: '#99cc00', label: 'Girls' },
  ];
  var pieOptions = {
    //String - Point label font colour
    pointLabelFontColor: '#666',

    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: '#fff',
    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //String - A legend template
    legendTemplate:
      '<% for (var i=0; i<segments.length; i++){%><span style="color: white;padding-right: 4px;padding-left: 2px;background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span><%}%></ul>',
  };

  var pieChartCanvas = $('#gender-donut')
    .get(0)
    .getContext('2d');
  var pieChart = new Chart(pieChartCanvas);

  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart = pieChart.Doughnut(PieData, pieOptions);
  $('#gender-donut-legend').append(pieChart.generateLegend());
  var ageLabels = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    13,
    14,
    16,
    18,
    25,
    26,
    27,
    28,
    31,
    32,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    49,
    51,
    52,
    53,
    54,
    55,
    58,
    59,
    60,
    63,
    66,
    67,
    68,
    72,
    73,
    74,
    109,
  ];
  var ageValues = [
    2,
    1,
    2,
    5,
    4,
    2,
    2,
    4,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    1,
    1,
    2,
    5,
    2,
    1,
    1,
    3,
    1,
    4,
    1,
    2,
    2,
    1,
    1,
    7,
    3,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    1,
  ];
  var ageStatsCanvas = $('#age-stats-bar')
    .get(0)
    .getContext('2d');
  var AgeChart = new Chart(ageStatsCanvas);
  AgeChart.Bar(
    {
      labels: ageLabels,
      datasets: [
        {
          label: 'Ages',
          data: ageValues,
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
    {
      scales: {
        xAxes: [
          {
            display: false,
            barPercentage: 1.3,
            ticks: {
              max: 3,
            },
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
    }
  );
});

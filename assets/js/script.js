$("document").ready(function () {

  // lottery button heid
  $('.barsIconTog').click(function(){
    $('.toggleDM_1').slideToggle();
    $('.crossIconTog').show();
    $('.barsIconTog').hide();
  })
  $('.crossIconTog').click(function(){
    $('.toggleDM_1').hide();
    $('.barsIconTog').show();
    $('.crossIconTog').hide();
  })
  // lottery button heid
  $('.singleMBMenuRight').click(function(){
    $('.toggleDM_1').slideToggle();
    $('.colos2').show();
    $('.singleMBMenuRight').hide();
  })
  $('.colos2').click(function(){
    $('.toggleDM_1').hide();
    $('.singleMBMenuRight').show();
    $('.colos2').hide();
  })

  // Chart Header Circle
  var options = {
    series: [100],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels: {
          style: {
            colors: ["#FF5733", "#00FF00", "#0000FF"] 
            // Specify colors for each category
          }
        }
      },
    },
    labels: ["563"],
  };

  var chart = new ApexCharts(
    document.querySelector("#chartHeaderCircle"),
    options
  );
  chart.render();

  //   Chart 02
  var options = {
    chart: {
      height: 210,
      width: "100%",
      type: "line",
      animations: {
        initialAnimation: {
          enabled: false,
        },
      },
    },
    colors: ["#FF5733"],
    series: [
      {
        name: "Series 1",
        data: [
          {
            x: "תשרי",
            y: 1120,
          },
          {
            x: "חשוון",
            y: 1180,
          },
          {
            x: "כסליו",
            y: 950,
          },
          {
            x: "טבת",
            y: 1410,
          },
          {
            x: "אדר",
            y: 1420,
          },
          {
            x: "ניסן",
            y: 990,
          },
          {
            x: "אייר",
            y: 1230,
          },
          {
            x: "סיון",
            y: 1040,
          },
          {
            x: "תמוז",
            y: 1300,
          },
          {
            x: "אב",
            y: 940,
          },
          {
            x: "אלול",
            y: 1278,
          },
        ],
      },
    ],
    xaxis: {
      type: "numeric",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  // Circle Chart
  chart.render();

  var options = {
    series: [100, 100, 100],
    chart: {
      height: 220,
      type: "radialBar",
    },
    colors: ["#E1DBFF", "#BBACFF", "#9079FD"],
    // plotOptions: {
    //   radialBar: {
    //     dataLabels: {
    //       name: {
    //         fontSize: "22px",
    //       },
    //       value: {
    //         fontSize: "16px",
    //       },
    //       total: {
    //         show: true,
    //         label: "Total",
    //         formatter: function (w) {
    //           // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
    //           return 249;
    //         },
    //       },
    //     },
    //   },
    // },
    labels: ["משפחה", "חברים", "קהילה"],
  };

  var chart = new ApexCharts(document.querySelector("#chart-circle"), options);
  chart.render();
  
  // pie1 chart
  var pie1 = {
    series: [25, 40, 35],
    labels: ['חברים', 'משפחה', 'קהילה'],
    chart: {
      width: 130,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '76%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors:[
      "#BBACFF",
      "#E1DBFF",
      "#9079FD",
    ],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 130,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#pie1"), pie1);
  chart.render();

  // Number Counter
  let currentNumber = 8000;
  const counterElement = document.getElementById("counter");
  const targetNumber = 8256;

  function updateCounter() {
    if (currentNumber <= targetNumber) {
      counterElement.textContent = currentNumber;
      currentNumber++;
      setTimeout(updateCounter, 1); // Change this value to adjust the speed of counting
    }
  }
  updateCounter();

  // Number Counter
  let currentNumber2 = 0;
  const counterElement2 = document.getElementById("counter2");
  const targetNumber2 = 256;

  function updateCounter2() {
    if (currentNumber2 <= targetNumber2) {
      counterElement2.textContent = currentNumber2;
      currentNumber2++;
      setTimeout(updateCounter2, 1); // Change this value to adjust the speed of counting
    }
  }
  updateCounter2();
  
// progress bar
  $(document).ready(function(){
    $(".progress-bar").ProgressBar();
  });


});



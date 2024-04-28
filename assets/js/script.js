$("document").ready(function () {

  // lottery button heid
  $('.barsIconTog').click(function(){
    $('.toggleDM_1').show();
    // $('.lottery_provide_btn').show();
    // $('.lottery_item_box2').hide();
  })
  $('.closeButton').click(function(){
    $('.toggleDM_1').hide();
    // $('.barsIconTog').hide();
    // $('.lottery_nav_provide').hide();
  })

  // Nav Toggle
  $('#toggleNav-icon').click(function(){
    $(this).toggleClass('open');
    $('.sidebar').slideToggle();
  });

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
      type: "area",
      animations: {
        initialAnimation: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Series 1",
        data: [
          {
            x: "02-10-2017 GMT",
            y: 34,
          },
          {
            x: "02-11-2017 GMT",
            y: 43,
          },
          {
            x: "02-12-2017 GMT",
            y: 31,
          },
          {
            x: "02-13-2017 GMT",
            y: 43,
          },
          {
            x: "02-14-2017 GMT",
            y: 33,
          },
          {
            x: "02-15-2017 GMT",
            y: 52,
          },
        ],
      },
    ],
    xaxis: {
      type: "datetime",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  // Circle Chart
  chart.render();

  var options = {
    series: [100, 100, 100],
    chart: {
      height: 200,
      type: "radialBar",
    },
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
    // labels: ["Apples", "Oranges", "Bananas"],
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
});



// var gaugeDiv = document.getElementById("gauge-chart");

var traceA = {
  type: "pie",
  showlegend: false,
  hole: 0.6,
  rotation: 90,
  values: [100 / 4, 100 / 4, 100 / 4, 100 / 4, 100],
  text: ["😡", "☹️", "🙂", "😃", ""],
  direction: "clockwise",
  textinfo: "text",
  textposition: "inside",
  textfont: {size: 60},
  marker: {
    colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "white"]
  },
  labels: ["0-10", "10-50", "200-500", "500-2000", ""],
  hoverinfo: "skip"
};

var degrees = 135, radius = .90;
var radians = degrees * Math.PI / 180;
var x = -1 * radius * Math.cos(radians);
var y = radius * Math.sin(radians);

var degrees2 = 118, radius2 = .92;
var radians2 = degrees2 * Math.PI / 180;
var x2 = -1 * radius2 * Math.cos(radians2);
var y2 = radius2 * Math.sin(radians2);

var layout = {
  shapes:[{
      type: 'line',
      x0: 0.5,
      y0: 0.5,
      x1: x2,
      y1: y2,
      line: {
        color: 'black',
        width: 5
      }
    },
         {
           type: 'line',
           x0: 0.5,
           y0: 0.5,
           x1: x,
           y1: y,
           line: {
             color: 'black',
             width: 5,
             dash: 'dash'
           }
         }],
  title: {font: {size:30},text: 'Average Mood'},
  xaxis: {visible: false, range: [-1, 1]},
  yaxis: {visible: false, range: [-1, 1]}
};

var data = [traceA];

Plotly.newPlot("gauge-chart", data, layout);

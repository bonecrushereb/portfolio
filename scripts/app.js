var projects = [];

function Projects (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
  this.img = opts.img;
}

Projects.prototype.toHtml = function() {

  var template = Handlebars.compile($('#project-template').html());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishedOn = this.publishedOn ? 'published' + this.daysAgo + 'days agao' : '(draft)';

  return template(this);
};

projectData.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(a){
  $('#project').append(a.toHtml());
});

//Creating Skills chart

// function skillsChartGenerator(){
//
//   var ctx = document.getElementById("skillsChart").getContext("2d");
//   var myNewChart = new Chart(ctx).PolarArea(data);
//
//   var data = [
//     {
//         value: 300,
//         color:"#F7464A",
//         highlight: "#FF5A5E",
//         label: "Red"
//     },
//     {
//         value: 50,
//         color: "#46BFBD",
//         highlight: "#5AD3D1",
//         label: "Green"
//     },
//     {
//         value: 100,
//         color: "#FDB45C",
//         highlight: "#FFC870",
//         label: "Yellow"
//     },
//     {
//         value: 40,
//         color: "#949FB1",
//         highlight: "#A8B3C5",
//         label: "Grey"
//     },
//     {
//         value: 120,
//         color: "#4D5360",
//         highlight: "#616774",
//         label: "Dark Grey"
//     }
//
// ];
// }
//
// skillsChartGenerator();

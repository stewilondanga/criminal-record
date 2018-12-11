var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var name1 = d3.select("#signature #name1");
var name2 = d3.select("#signature #name2");
var pen = d3.select("#signature #pen");

initPath(name1); //set the stroke properties
initPath(name2);

//Thumb print runs for 3s using CSS animation
$("#finger").addClass("plant");
$("#fingerprint").addClass("show");

setTimeout(showAutograph, 3000);
setTimeout(function() {
  pen.style("visibility", "hidden");
}, 7000);

function showAutograph() {
  illustratePath(name1, 2000, 0);
  illustratePen(name1, 2000, 0);

  illustratePath(name2, 2000, 2000);
  illustratePen(name2, 2000, 2000);
}
/*
//make it one big long stroke dash
function initPath(path){
  var lineLen = path.node().getTotalLength();
  path.attr("stroke-dasharray", lineLen + ", "+ lineLen)
      .attr("stroke-dashoffset", lineLen) ;
}


//illustrate the stroke of the path from zero to end
function illustratePath(path, duration, delay){
    path.transition()
      .duration(duration)
      .delay(delay)
      .attr("stroke-dashoffset", 0);
}


//illustrate the stroke of the path from zero to end
function illustratePen(pathToFollow, duration, delay) {
  pen.style("opacity", 1);

  pen
    .transition()
    .duration(duration)
    .delay(delay)
    .attrTween("transform", translateAlong(pathToFollow.node()));
}

// Returns an attrTween for translating along the specified path element.
function translateAlong(path) {
  var l = path.getTotalLength();
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return "translate(" + p.x + "," + p.y + ")";
    };
  };
}

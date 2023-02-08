var main = d3.select(".main");

// initialize the scrollama
var scroller1 = scrollama();
var scroller2 = scrollama();
var scroller3 = scrollama();
var scroller4 = scrollama();
var scroller5 = scrollama();
var scroller6 = scrollama();


function handleStepEnter(response) {
  // update graphic based on step
  let parentEl = d3.select(response.element.parentNode.parentNode)

  // Make a list of all the images shown during the scrolling
  let images = parentEl.selectAll(".step").nodes().map(d => d.getAttribute("data-img"))

  // Show the current image			
  parentEl.select(".figure img").attr("src", images[response.index])


  // Little message
  console.log("Step", response.index, "entered the stage. The direction is", response.direction)
}

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var figureHeight = window.innerHeight / 1.2;
  var figureMarginTop = (window.innerHeight - figureHeight) / 1.5;

  main.selectAll(".figure")
	  .style("height", figureHeight + "px")
	  .style("top", figureMarginTop + "px");

  // 2. tell scrollama to update new element dimensions
  scroller1.resize();
  scroller2.resize();
  scroller3.resize();
  scroller4.resize();
  scroller5.resize();
  scroller6.resize();
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller1
	  .setup({
		  step: ".scrolly-1 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)


  scroller2
	  .setup({
		  step: ".scrolly-2 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)


  scroller3
	  .setup({
		  step: ".scrolly-3 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)


  scroller4
	  .setup({
		  step: ".scrolly-4 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)


  scroller5
	  .setup({
		  step: ".scrolly-5 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)


  scroller6
	  .setup({
		  step: ".scrolly-6 .step",
		  offset: 1,
		  debug: false
	  })
	  .onStepEnter(handleStepEnter)

}

// kick things off
init();
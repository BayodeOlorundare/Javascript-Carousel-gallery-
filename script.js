$(document).ready(function(){
	$(".slider .image-slider-container div").not(":eq(0)").hide(); // hide all except the first slide
	$(".slider .image-slider-container div").css({ "position" : "absolute", "top" : "0", "left" : "0" });
	var $GalleryTimer = setInterval( SwitchSlide, 4000);//change this number to adjust interval
	var $CurrentSlide = 0;
	var $TotalSlides = $(".slider .image-slider-container div").length - 1; // find the number of images
	function SwitchSlide() {
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeOut("1000");
    	if ($CurrentSlide < $TotalSlides) { 
			$CurrentSlide = ($CurrentSlide + 1);
		}
		else {
			$CurrentSlide = 0;
		}
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeIn("1000"); //change this number to adjust fade affect
	}
	$(".slider a.next-tip").click(function () {
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeOut("1000"); //change this number to adjust fade affect
		if ($CurrentSlide == $TotalSlides) {
			$CurrentSlide = 0; // start at the beginning
		}
		else {
			$CurrentSlide = ($CurrentSlide + 1); // go forward
		}
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeIn("1000"); //change this number to adjust fade affect
		return false;
    });
	$(".slider a.previous-tip").click(function () {
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeOut("1000"); //change this number to adjust fade affect
		if ($CurrentSlide == 0) {
			$CurrentSlide = $TotalSlides; // start at the end
		}
		else {
			$CurrentSlide = ($CurrentSlide - 1); // go back
		}
		$(".slider .image-slider-container div:eq(" + $CurrentSlide + ")").fadeIn("1000"); //change this number to adjust fade affect
		return false;
    });
	return false;
});

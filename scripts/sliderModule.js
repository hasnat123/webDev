var slider = (function()
{
    var animationSpeed = 1000;
    var currentSlide = 1;
    var pause = 3000;
    var width = 720;

    var $slider = $("#slider");
    var $slides = $slider.find(".slides");
    var $slide = $slides.find(".slide");

    var interval;

    function startSlider()
    {
        interval = setInterval(function()
        {
            $slides.animate({"margin-left": "-=" + width}, animationSpeed, function()
            {
                currentSlide++;
                if (currentSlide == $slide.length)
                {
                    currentSlide = 1;
                    $slides.css("margin-left", 0);
                }
            });
        }, pause);

    }

    function stopSlider()
    {
        clearInterval(interval);
    }

    $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

    startSlider();

})();
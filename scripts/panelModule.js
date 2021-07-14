var panel = (function()
{
    $(".tab-panels .tabs li").on("click", function()
    {
        var $currentPanelBox = $(this).closest(".tab-panels");

        $currentPanelBox.find(".tabs li.active").removeClass("active");
        $(this).addClass("active");

        //figure out panel to show
        var panelToShow = $(this).attr("rel");

        //hide current panel
        $currentPanelBox.find(".panel.active").slideUp(200, showNextPanel);
                    
        //Show next panel
        function showNextPanel()
        {
            $(this).removeClass("active");

            $("#" + panelToShow).slideDown(200, function()
            {
                $(this).addClass("active");
            });    
        }
    });
})();
var stats = (function()
{
    var people = 0;

    //Cache DOM
    var $stats = $("#statsModule");
    var template = $stats.find("#stats-template").html();

    events.on("peopleChanged", setPeople);

    function _render()
    {
        var data =
        {
            people: people
        }

        $stats.html(Mustache.render(template, data));
    }

    function setPeople(newPeople)
    {
        people = newPeople;
        _render();
    }

    function destroy()
    {
        $stats.remove();
        events.off("peopleChnaged", setPeople);
    }
    
    return {
        destroy: destroy
    }
    
})();
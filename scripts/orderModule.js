$(function()
{
    var $orders = $("#orders");
    var $name = $("#name");
    var $food = $("#food");

    $.ajax(
    { 
        type: "GET",
        url: "orders.json",
        
        success: function(orders)
        {
            $.each(orders, function(i, order)
            {
                $orders.append("<li>Name: " + order.name +", food: " + order.food + "</li>");
            });
        },

        error: function()
        {
            alert("Error loading orders");
        }
    });

    $("#add-order").on("click", function()
    {
        var order = 
        {
            "name": "Steph", "food": "omlette"
        };

        $.ajax(
        {
            type: "POST",
            url: "orders.json",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(order),
            processData: false,
            success: function(newOrder)
            {
                alert("success");
                $orders.append("<li>Name: " + newOrder.name +", food: " + newOrder.food + "</li>");
            },
            error: function()
            {
                alert("Error posting order");
            }

        });
    });

});
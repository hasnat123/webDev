/*(function()//function will run continuosly similar to while loop
{
    var people = 
    {
        people: ["Hasnat", "Azula"],

        cacheDom: function()//Storing DOM searches ($ searches) as 'people' object variables
        {
            this.$el = $("#peopleModule");
            this.$button = this.$el.find("button");
            this.$input = this.$el.find("input");
            this.$ul = this.$el.find("ul");
            this.template = this.$el.find("#people-template").html();
        },

        bindEvents: function()
        {
            this.$button.on("click", this.addPerson.bind(this)); //The bind function passes the 'this' value (which is 'people') to the 'addPerson()' function, ensuring the context in the 'addPerson()' function doesn't change to the button being clicked
            this.$ul.delegate("i.del", "click", this.deletePerson.bind(this)); //'delegate' used instead of 'on' function as 'delegate' function looks to see if 'i.del' class is present in 'ul' wheras 'on' function would look for 'i.del' class straight away even if none is present, which would lead to an error
        },

        _render: function() //Taking current state of module and printing it to the 'peopleModule' ul (updating)
        {
            //Need to store 'people' array in and object as 'Mustache._render' takes in an object as parameter
            var data = 
            {
                people: this.people,
            };
            this.$ul.html(Mustache.render(this.template, data));
        },

        addPerson: function()
        {
            this.people.push(this.$input.val());
            this._render();
            this.$input.val("");
        },

        deletePerson: function(event) //'Event' is the 'click' event when clicking the delete button
        {
            var $remove = $("event.target").closest("li"); //Finds 'li' containing delete button clicked and stores it in variable
            var index = this.$ul.find("li").index($remove); //Index of 'li' containing clicked delete button

            this.people.splice(index, 1); //Removed specified 'li' from 'people' array
            this._render();
        },

        init: function()
        {
            this.cacheDom();
            this.bindEvents();
            this._render();
        }
    };

    people.init();

})()*/



//Self revealing module pattern: allows other modules to use this module's selected functions while keeping rest of the variables and functions private
var people = (function() 
{   
    var people = ["Hasnat", "Azula"];

    //Cache DOM
    var $el = $("#peopleModule");
    var $button = $el.find("button");
    var $input = $el.find("input");
    var $ul = $el.find("ul");
    var $template = $el.find("#people-template").html();

    //bind events
    $button.on("click", addPerson);
    $ul.delegate("i.del", "click", deletePerson);

    _render();

    function _render()
    {
        var data =
        {
            people: people
        }

        $ul.html(Mustache.render($template, data));
        events.emit("peopleChanged", people.length);
        //stats.setPeople(people.length);
    }

    function addPerson(value)
    {
        var name = (typeof value == "string") ? value : $input.val(); //Need to make sure value is a string as 'click event' could be passed through function as argument when button is clicked
        people.push(name);
        _render();
        $input.val("");
    }

    function deletePerson(event)
    {
        var index;

        if (typeof event == "number") index = event;
        else
        {
            var $remove = $("event.target").closest("li");
            index = $ul.find("li").index($remove);
        }

        people.splice(index, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();



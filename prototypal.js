var Animal = 
{
    type: "mammal",

    sayName: function()
    {
        alert(this.name);
    }
};

var cat = Object.create(Animal);
cat.sayHeight = function()
{
    alert(this.name + " is a " + this.height + " cat");
};

var chibi = Object.create(cat);
chibi.name = "Chibi";
chibi.height = "short";

chibi.sayName();
chibi.sayHeight();

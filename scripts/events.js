/*ADDING NUMBERS BEING INPUT*/

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add()
{
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var sum = one + two;

    addSum.innerHTML = "Your sum is: " + sum;
}


/*HIDING AND SHOWING PICTURES WHEN CLICKING LINK*/

var spongebob = document.getElementById("SpongeBob");
var gintoki = document.getElementById("Gintoki");
var corey = document.getElementById("Corey");

var spongebobPic = document.getElementById("SpongeBob-pic");
var gintokiPic = document.getElementById("Gintoki-pic");
var coreyPic = document.getElementById("Corey-pic");

spongebob.addEventListener("click", picLink);
gintoki.addEventListener("click", picLink);
corey.addEventListener("click", picLink);

function picLink()
{
    /*This will search for all images and the for loop is used to set the class of each image to 'hide' whenever any link is clicked, so that only one image appears at a time. 
    Problem is that same image can no longer be hidden. Also this effects the other food images on the page so is commented out for learning purposes

    /*allImages = document.querySelectorAll("img");

    for (var i = 0; i < allImages.length; i++) allImages[i].className = "hide";*/

    /*Setting images to 'hide' so only one appears at a time, but means once clicked image can't hidden*/
    spongebobPic.className = "hide";
    gintokiPic.className = "hide";
    coreyPic.className = "hide";

    var picId = this.attributes["data-img"].value; /*accessing speicific 'a' tag being clicked on to get the value of the 'data-img' attribute. square brackets used otherwise the '-' would be bas syntax*/
    var pic = document.getElementById(picId);

    if (pic.className == "hide") pic.className = "";
    else pic.className = "hide";
}

/*UPDATING ITEMS IN A LIST WITH NEW INPUT*/

var checklist = document.getElementById("checklist");

/*Getting items in list*/
var items = checklist.querySelectorAll("li");

/*Getting inputs of items*/
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i<items.length; i++)
{
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem()
{
    this.className = "edit";

    /*Getting input of list items and creating focus box around them*/
    var input = this.querySelector("input");
    input.focus();

    /*Item input will be highlighted when item is clicked from 0 to entire length*/
    input.setSelectionRange(0, input.value.length);
}

function updateItem()
{
    /*Setting value of new input as value of span when clicking elsewhere*/
    this.previousElementSibling.innerHTML = this.value;

    /*Getting out of edit mode for specific list item*/
    this.parentNode.className = "";
}

/*Pressing the 'enter' key will also update an item with new input*/
function itemKeypress(event)
{
    if (event.which == 13) /*The 'which' is what stores the value of the key that was pressed. 13 is the key code for the 'enter' key*/
    {
        updateItem.call(this); /*The 'this' is the current input that had a keypress. It is passed into the 'updateItem()' function*/
    }
}
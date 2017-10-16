//function to kill the dom elements that dont belong
function killIt(toKill) {
    while (toKill.parentNode.nextSibling) {
        toKill.parentNode.nextSibling.remove();
    }
}

function selected(dom) {
    //kill anything that doesnt belong
    killIt(dom);
    dom = dom.value;
    //if there isnt an answers section go to else end of data option menus
    if (object[dom + ''].answers !== undefined) {
        var bodyEle = document.getElementById("here");
        var initQ = document.createElement("h2");
        initQ.appendChild(document.createTextNode(object[dom + ''].value));
        //function to create all of the options
        var divEle = document.createElement("div");
        divEle.appendChild(initQ);
        var ele = document.createElement("select");
        divEle.appendChild(ele);
        var disabledOption = document.createElement('option');
        disabledOption.selected = true;
        disabledOption.disabled = true;
        disabledOption.appendChild(document.createTextNode("--Select One--"));
        ele.appendChild(disabledOption);
        ele.onchange = function () {
            selected(this);
        }

        for (var i = 0; i < object[dom + ''].answers.length; i++) {
            var createOpt = document.createElement("option");
            createOpt.setAttribute("value", object[dom + ''].answers[i]);
            createOpt.appendChild(document.createTextNode(object[dom + ''].answers[i]));
            ele.appendChild(createOpt);
        }
        bodyEle.appendChild(divEle);
    } 
   
    //create the final nodes
    else {
        //create div to place the data in
        var divEle = document.createElement("div");
        //give div an id for styling
        divEle.setAttribute("id","everythingDiv");
        //name of character selected
        var character = document.createElement("h2");
        //add character name
        character.appendChild(document.createTextNode('You chose ' + dom+''));
        //add character to div
        divEle.appendChild(character);
        
        //create discription field
        var desc = document.createElement("p");
        desc.appendChild(document.createTextNode(object[dom+''].value));
        //add into div
        divEle.appendChild(desc);
        
        //create new div for picture
        var divPic = document.createElement("div");
        //give div an id for styling
        divPic.setAttribute("id","picDiv");
        //add the image into the div
        var imgage = document.createElement("img");
        imgage.src = object[dom+''].pics;
        imgage.setAttribute("alt",dom+'');
        imgage.setAttribute("width","500em");
        divPic.appendChild(imgage);
        //append div into everything div
        divEle.appendChild(divPic);
        
        //add everything in
        document.getElementById("here").appendChild(divEle);
    }

}

//set variable to make it easier to attach elements to the dom

var bodyEle = document.getElementById("here");
var initQ = document.createElement("h2");
initQ.appendChild(document.createTextNode(object.starwars.value));

//function to create all of the options
var divEle = document.createElement("div");
divEle.appendChild(initQ);
var ele = document.createElement("select");
divEle.appendChild(ele);
var disabledOption = document.createElement('option');
disabledOption.selected = true;
disabledOption.disabled = true;
disabledOption.appendChild(document.createTextNode("--Select One--"));
ele.appendChild(disabledOption);
ele.setAttribute("onchange", "selected(this);");
for (var i = 0; i < object.starwars.answers.length; i++) {
    var createOpt = document.createElement("option");
    createOpt.setAttribute("value", object.starwars.answers[i]);
    createOpt.appendChild(document.createTextNode(object.starwars.answers[i]));
    ele.appendChild(createOpt);
}
bodyEle.appendChild(divEle);
            
           
        
                
            
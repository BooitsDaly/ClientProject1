//function to kill the dom elements that dont belong
function killIt(toKill) {
    while (toKill.parentNode.nextSibling) {
        
        //stoKill.parentNode.nextSibling.setAttribute("class","fadeout");
        toKill.parentNode.parentNode.removeChild(toKill.parentNode.nextSibling);
    }
}
//function to validate form
function validate(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["email"].value;
    
    //check if there is anything in the value
    if(x=="" || y=="" || z==""){
        alert("Please make sure all inputs are filled in");
        return false;
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
        
        //create disabled option as first option for onchange
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
        
        //create form with validation.. dun dun dun
        var createForm = document.createElement("form");
        createForm.setAttribute("name","myForm");
        createForm.setAttribute("method","post");
        createForm.setAttribute("onsubmit","return validate();");
        
        //create inputs
        var createinputFirst = document.createElement("input");
        var createinputLast = document.createElement("input");
        var createinputEmail = document.createElement("input");
        var createinputButton = document.createElement("input");
        
        //assign type to inputs
        createinputEmail.setAttribute("type","text");
        createinputFirst.setAttribute("type","text");
        createinputLast.setAttribute("type","text");
        
        //assign names
        createinputEmail.setAttribute("name","email");
        createinputFirst.setAttribute("name","fname");
        createinputLast.setAttribute("name","lname");
        
        //create submit button
        createinputButton.setAttribute("type","submit");
        createinputButton.setAttribute("value","Submit");
        
        //append everything
        createForm.appendChild(document.createTextNode("Fill out the form below to get emailed your results!"));
        createForm.appendChild(document.createElement("br"));
        
        createForm.appendChild(document.createTextNode("First Name:    "));
        createForm.appendChild(createinputFirst);
        createForm.appendChild(document.createElement("br"));
        
        createForm.appendChild(document.createTextNode("Last Name:     "));
        createForm.appendChild(createinputLast);
        createForm.appendChild(document.createElement("br"));
        
        createForm.appendChild(document.createTextNode("Email:         "));
        createForm.appendChild(createinputEmail);
        createForm.appendChild(document.createElement("br"));
        
        createForm.appendChild(createinputButton);
        
        document.getElementById("here").appendChild(createForm);
        
        
        
        
    }

}

//set variable to make it easier to attach elements to the dom
//this will set up on the page onload (it is the first select options)
//this will ALWAYS load first, should always be visible
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
ele.onchange = function () {
            selected(this);
        }
for (var i = 0; i < object.starwars.answers.length; i++) {
    var createOpt = document.createElement("option");
    createOpt.setAttribute("value", object.starwars.answers[i]);
    createOpt.appendChild(document.createTextNode(object.starwars.answers[i]));
    ele.appendChild(createOpt);
}
bodyEle.appendChild(divEle);
            
           
        
                
            
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
    if (undefined !== object[dom + ''].value.length) {
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
   
    else {
        console.log("here");
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
            
           
        
                
            
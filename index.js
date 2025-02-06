function init() {

    var div = document.createElement("div");
    div.id = "top_spl";
    div.setAttribute("style", "position:absolute; top:0px; left:0px; width:100vw; background:#ffaaaa; z-index:1000000");
    div.innerHTML = "Automata mód";
    document.body.append(div);
    var counter = document.createElement("div");
    counter.id = "counter_spl";
    counter.setAttribute("style", "position:absolute; top:200px; left:calc(50% - 25vw); width:50vw; z-index:1000000; text-align:center; color:white; font-size:200pt;");
    counter.innerHTML = "";
    document.body.append(counter);
    test();

}

function displayCounter(inp) {
    var counter = document.querySelector("#counter_spl");
    counter.innerHTML = inp;
    if ( inp > 0 ) {
        setTimeout(function() {displayCounter(inp-1);}, 1000);
    }
    else {
        document.querySelector("div[class*='top-bar'] button:not([class*='skip'])").click();
        counter.innerHTML = "";
        setTimeout(test, 500);
    }
    
}

function test() {
    if (document.querySelector("div[class*='answers-histogram']") != null || document.querySelector("div[class*='scoreboard']") != null) {
        console.log('ok');
        displayCounter(3);
    }
    else {
        setTimeout(test, 500);
    }
}

init();
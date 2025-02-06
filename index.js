function init() {

    var div = document.createElement("div");
    div.id = "top_spl";
    div.setAttribute("style", "position:absolute; top:0px; left:0px; width:100vw; background:#ffaaaa; z-index:1000000");
    div.innerHTML = "Automata mód";
    document.body.append(div);

}

function displayCounter() {

}

function test() {
    if (document.querySelector("div[class*='answers-histogram']") != null || document.querySelector("div[class*='scoreboard']") != null) {
        document.querySelector("div[class*='top-bar'] button:not([class*='skip'])").click();
        console.log('ok');
        setTimeout(test, 1500);
    }
    else {
        setTimeout(test, 500);
    }
}

init();
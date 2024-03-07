function assertEquals(text, think, real){
    let html = "- " + text //+ " (" + real + "): "
    if(real == think) html += "<span style='color:green;'> CORRECT! &check;</span><br>"; else html += "<span style='color:red;'> WRONG! <br></span>"; 
    tdiv.innerHTML += html;
}

function assertEquals(text, think, real){
    let html = "- " + text //+ " (" + real + "): "
    if(real == think) html += "<span style='color:green;'> CORRECT! &check;</span><br>"; else html += "<span style='color:red;'> WRONG! <br></span>"; 
    tdiv.innerHTML += html;
}

function getAttribute(selector, attribute){return document.querySelector(selector).getAttribute(attribute);}
function getProperty(selector, property){return window.getComputedStyle(document.querySelector(selector)).getPropertyValue(property);}

let tdiv = document.createElement("div");
tdiv.style = "background-color: white; border: 1px solid lighgrey; padding: 10px; margin: 10px;"
document.getElementsByTagName("body")[0].appendChild(tdiv);

tdiv.innerHTML = "Az oldal:<br>";
assertEquals("Kódolása UTF-8: ", "UTF-8", getAttribute("meta[charset]","charset"));
assertEquals("Nyelve magyar: ", "hu", getAttribute("html","lang"));
assertEquals("Címe \"Ninja\": ", "Ninja", document.querySelector("title").innerHTML);
assertEquals("Háttérszíne \"darkolivegreen\": ","rgb(84, 106, 47)", getProperty("body", "background-color"));

tdiv.innerHTML += "<br> A kép: <br>";
assertEquals("Létezik és egy: ", "1", document.querySelectorAll("body img").length)
assertEquals("Forrása megfelelő: ", "ninja.png", document.querySelector("img").getAttribute("src"));
assertEquals("Középre igazított: ", "1px auto", window.getComputedStyle(document.querySelector("#pic")).getPropertyValue("margin"));
assertEquals("Háttérszíne fehér: ", "rgb(255, 255, 255)", getProperty("#pic", "background-color"));
assertEquals("Vékony fekete kerettel: ", "1px", getProperty("#pic", "border-width"));
assertEquals("Belső margó tíz képpont: ", "10px", getProperty("#pic", "padding"));
assertEquals("Tud halványodni: ", "0.1", getProperty("#pic", "opacity"))
assertEquals("Egy másodperc alatt: ", "1s", getProperty("#pic", "tratransition"))
let button = document.querySelector("button")
let body = document.querySelector("body");
body.style.backgroundColor = "violet"
let color = ["red", "yellow", "black", "white", "green", "orange"]



function btn() {
    change = Math.floor((Math.random() * color.length));
    body.style.backgroundColor = color[change]
    console.log(color[change]);

    // document.getElementById("demo").innerHTML = color[change]

    let x = document.getElementById("text").innerText = color[change]

}
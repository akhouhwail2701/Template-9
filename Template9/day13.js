document.getElementById("befor").onclick = function () {
    document.getElementById("left").style.cssText = `transform: translateX(0%);`;
    document.getElementById("right").style.cssText = `transform: translateX(120%);`;
    document.getElementById("befor").style.backgroundColor = "#22282a";
    document.getElementById("after").style.backgroundColor = "#ff274b";

}
document.getElementById("after").onclick = function () {
    document.getElementById("left").style.cssText = `transform: translateX(-120%);`;
    document.getElementById("right").style.cssText = `transform: translateX(0%);`;
    document.getElementById("after").style.backgroundColor = "#22282a";
    document.getElementById("befor").style.backgroundColor = "#ff274b";
}

document.getElementById("befor2").onclick = function () {
    document.getElementById("befor2").style.backgroundColor = "#22282a";
    document.getElementById("after2").style.backgroundColor = "#ff274b";
    document.getElementById("p2").style.visibility = "hidden";
    document.getElementById("p1").style.visibility = "visible";
    document.getElementById("txt2").style.visibility = "hidden";
    document.getElementById("txt1").style.visibility = "visible";

}
document.getElementById("after2").onclick = function () {
    document.getElementById("after2").style.backgroundColor = "#22282a";
    document.getElementById("befor2").style.backgroundColor = "#ff274b";
    document.getElementById("p1").style.visibility = "hidden";
    document.getElementById("p2").style.visibility = "visible";
    document.getElementById("txt1").style.visibility = "hidden";
    document.getElementById("txt2").style.visibility = "visible";
}

document.getElementById("btn").onclick = function () {
    if (document.getElementById("menu").style.cssText == `transform: translateX(-100%);`) {
        document.getElementById("menu").style.cssText = `transform: translateX(0%)`;
    }
    else {
        document.getElementById("menu").style.cssText = `transform: translateX(-100%);`
    }
}

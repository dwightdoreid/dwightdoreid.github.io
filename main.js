function showHome(){
    hideAll();
    document.getElementById("home").style = "display:block";
}

function showAbout(){
    hideAll();
    document.getElementById("about").style = "display:block";
}

function showProducts(){
    hideAll();
    document.getElementById("products").style = "display:block";
}

function showContact(){
    hideAll();
    document.getElementById("contact").style = "display:block";
}

function hideAll(){  
    document.getElementById("home").style = "display:none";  
    document.getElementById("about").style = "display:none";
    document.getElementById("products").style = "display:none";
    document.getElementById("contact").style = "display:none";
}
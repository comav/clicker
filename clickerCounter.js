function plusOneClick() {
    click = click + 1;
    document.getElementById("output").innerHTML = click;

    document.cookie = "timesClicked=; expires= Fri, 1 Jan 2100 12:00:00 UTC" + click; 

    if (click == 20 || 40 || 60 || 80 || 100) {
        searchImages();
    }
}
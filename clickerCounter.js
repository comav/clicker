function plusOneClick() {
    click = click + 1;
    document.getElementById("output").innerHTML = click;

    if (click == 20) {
        secondBackground();
    }

    if (click == 40) {
        thirdBackground();
    }

    if (click == 60) {
        fourthBackground();
    }

    if (click == 80) {
        fifthBackground();
    }
}
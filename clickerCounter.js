function plusOneClick() {
    click = click + 1;
    document.getElementById("output").innerHTML = click;

    document.cookie = "timesClicked=; expires= Fri, 1 Jan 2100 12:00:00 UTC" + click; 

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

    if (click == 100) {
        overNineThousand();
    }
}
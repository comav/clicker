const favicon = document.getElementById('favicon');
const button = document.getElementById('button');
const text = document.getElementById('text');
const output = document.getElementById('output');

function secondBackground() {
    document.body.style.background = "url(background/bg2.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    button.style.backgroundColor = "#3b4d42";
    button.style.color = "#90a886"
    text.style.color = "#90a886";
    output.style.color = "#90a886";
    favicon.setAttribute('href', 'favicons/icon2.ico');
    if (screenWidth >= 851) {
        document.body.style.backgroundSize = "100%";
    } else {
        document.body.style.backgroundSize = "400%";
    }
};

function thirdBackground() {
    document.body.style.background = "url(background/bg3.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    button.style.backgroundColor = "#17221e";
    button.style.color = "#b3bdbe"
    text.style.color = "#b3bdbe";
    output.style.color = "#b3bdbe";
    favicon.setAttribute('href', 'favicons/icon3.ico');
    if (screenWidth >= 851) {
        document.body.style.backgroundSize = "100%";
    } else {
        document.body.style.backgroundSize = "400%";
    }
};

function fourthBackground() {
    document.body.style.background = "url(background/bg4.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    button.style.backgroundColor = "#545518";
    button.style.color = "#ffffff"
    text.style.color = "#ffffff";
    output.style.color = "#ffffff";
    favicon.setAttribute('href', 'favicons/icon4.ico');
    if (screenWidth >= 851) {
        document.body.style.backgroundSize = "100%";
    } else {
        document.body.style.backgroundSize = "400%";
    }
};

function fifthBackground() {
    document.body.style.background = "url(background/bg5.jpg) no-repeat";
    document.body.style.backgroundSize = "100%";
    button.style.backgroundColor = "#d54e13";
    button.style.color = "#f9d825"
    text.style.color = "#f9d825";
    output.style.color = "#f9d825";
    favicon.setAttribute('href', 'favicons/icon5.ico');
    if (screenWidth >= 851) {
        document.body.style.backgroundSize = "100%";
    } else {
        document.body.style.backgroundSize = "400%";
    }
};

function overNineThousand() {
    favicon.setAttribute('href', 'favicons/icon6.ico');
}
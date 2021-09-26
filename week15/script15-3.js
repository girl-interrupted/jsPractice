function switchTheme() {
    let chosenTheme = document.getElementById('colour-theme').value;

    switch(chosenTheme) {
        case "dark":
            container.style.background = "rgb(36, 6, 6)";
            h1.style.color = "rgb(250, 238, 171)";
            break;
        case "light":
            container.style.background = "rgb(250, 238, 171)";
            h1.style.color = "rgb(36, 6, 6)";
            break;
        case "blue":
            container.style.background = "rgb(30, 30, 70)";
            h1.style.color = "rgb(250, 238, 171)";
            break;
        default:
            container.style.background = "rgb(230, 230, 142)";
            h1.style.color = " rgb(4, 68, 4)";
    }
}
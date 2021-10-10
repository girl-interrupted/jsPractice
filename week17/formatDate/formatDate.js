document.getElementById("rightNow").innerHTML = (formatDate(new Date(new Date - 1)));
document.getElementById("30secAgo").innerHTML = (formatDate(new Date(new Date - 30 * 1000)));
document.getElementById("5minAgo").innerHTML = (formatDate(new Date(new Date - 5 * 60 * 1000)));
document.getElementById("thisTimeYesterday").innerHTML = (formatDate(new Date(new Date - 86400 * 4 * 1000)));

function formatDate(date) {
    let newDate = new Date() - date;
    let newDateInSec = Math.floor(newDate / 1000);
    let newDateInMin = Math.floor(newDate / 60000);

    if (newDateInSec < 1) { 
        return "right now";
    } else if (newDateInSec < 60) {
        return newDateInSec + " seconds ago";
    } else if (newDateInMin < 60) {
        return newDateInMin + " minutes ago";
    }

    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let formattedYear = year.toString().slice(-2);
    let formattedMonth = month < 10 ? "0" + month : month;
    let formattedDate = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    let formattedHours = hours < 10 ? "0" + hour : hour;
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

document.getElementById("formattedResult").innerHTML = `${formattedDate}.${formattedMonth}.${formattedYear} ${formattedHours}:${formattedMinutes}`;
}



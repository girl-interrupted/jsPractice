function addComment() {
    const userComment = document.getElementById("comment").value;

    if (!userComment) {
    document.getElementById("warningEmpty").innerHTML = "You should write a comment before posting it";
    }

    let filteredComment = checkSpam(userComment);
    
    document.getElementById("userInput").innerHTML += `<p class="posted-comment">${filteredComment}</p>`;
    document.getElementById("comment").value = "";
}

function checkSpam(comment) {
    let commentToLowerCase = comment.toLowerCase();
    let checkedCommentForViagra = commentToLowerCase.replace(/viagra/gi, "***");
    let checkedCommentForXxx = checkedCommentForViagra.replace(/xxx/gi, "***");
        return checkedCommentForXxx;
}
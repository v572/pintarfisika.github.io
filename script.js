function addComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var commentContainer = document.getElementById("commentContainer");

    var commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    var nameSpan = document.createElement("span");
    nameSpan.classList.add("comment-author");
    nameSpan.textContent = name + ":";

    var commentP = document.createElement("p");
    commentP.classList.add("comment-text");
    commentP.textContent = comment;

    commentDiv.appendChild(nameSpan);
    commentDiv.appendChild(commentP);
    commentContainer.appendChild(commentDiv);
}

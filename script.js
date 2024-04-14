/* document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const commentContent = document.getElementById("comment-input");
  const commentList = document.getElementById("comments-list");

  submitButton.addEventListener("click", function () {
    const commentText = commentContent.value.trim();
    if (commentText != "") {
      addComment(commentText);
      commentContent.value = "";
    } else {
      alert("Insira um comentário antes de enviar");
    }
  });

  function addComment(commentText) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = commentText;
    commentList.appendChild(commentElement);
  }
});
 */
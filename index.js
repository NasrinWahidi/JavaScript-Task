
var totalCount = 0;
function addComment() {
  var nameInput = document.getElementById("fname");
  var commentInput = document.getElementById("comments");
  var name = nameInput.value.trim();
  var comment = commentInput.value.trim();

  if (name && comment) {
    var commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container", "mb-4");

    var profileImageContainer = document.createElement("div");
    profileImageContainer.classList.add("profile-image-container");
    var profileImage = document.createElement("img");
    profileImage.src = "manIcon.svg";
    profileImage.classList.add("profile-image");
    profileImageContainer.appendChild(profileImage);

    var commentDetails = document.createElement("div");
    commentDetails.classList.add("comment-details");

    var nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = name;

    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = comment;

    var timeElement = document.createElement("div");
    timeElement.classList.add("time");
    var currentDate = new Date();
    timeElement.textContent = currentDate.toLocaleDateString(); // Display the exact system date

    var deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "delete-button"
    );
    deleteButton.textContent = "Remove";
    deleteButton.onclick = function () {
      commentContainer.remove();
      totalCount--;
      updateTotalCount();
    };

    commentDetails.appendChild(nameElement);
    commentDetails.appendChild(commentElement);
    commentDetails.appendChild(timeElement);
    commentDetails.appendChild(deleteButton);

    commentContainer.appendChild(profileImageContainer);
    commentContainer.appendChild(commentDetails);

    var commentList = document.getElementById("comment-list");
    commentList.insertBefore(commentContainer, commentList.firstChild);

    nameInput.value = "";
    commentInput.value = "";

    totalCount++;
    updateTotalCount();
  }
}

function updateTotalCount() {
  var totalCountElement = document.getElementById("total-count");
  totalCountElement.textContent = ((totalCount));
}
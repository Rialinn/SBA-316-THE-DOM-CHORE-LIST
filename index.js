

document.addEventListener("DOMContentLoaded", function () {
    const choreForm = document.getElementById("choreForm");
    const choreInput = document.getElementById("choreInput");
    const choreList = document.getElementById("choreList");
  
    // Work on submit button
    choreForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (choreInput.value.trim() === "") {
        alert("Please enter a Chore!");
        return;
      }
  
      const newChore = document.createElement("li")
      newChore.innerHTML = `<span>${choreInput.value}</span>
      <button class="remove-button">Remove</button>`;
  
      choreList.appendChild(newChore);
      choreInput.value = ""; 
    });
  
    // ====Event Area=====
    choreList.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-button")) {
        removeTask(e.target);
      }
    });
  
    function removeTask(button) {
      const choreItem = button.parentElement;
      choreItem.remove();
    }
  });
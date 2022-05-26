// modal
let modal = document.getElementById("storyModal");
  
// modalTrigger
let btn = document.getElementById("modalTrigger");

// Close modal
let modalClose = document.getElementsByClassName("close")[0];

// open modal on click 
btn.onclick = function() {
  modal.style.display = "block";
}

// close the modal on click
modalClose.onclick = function() {
  modal.style.display = "none";
}

// closes modal when user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
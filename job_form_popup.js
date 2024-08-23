function popup_form() {
    document.querySelector("#popup").style.display = "flex";
  }
  
  // Add event listener to the button to show the popup
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("add_job_button");
    if (button) {
      button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        popup_form();
      });
    }
  });

  function close()
  {
    document.querySelector("#popup").style.display = "none";
  }
  

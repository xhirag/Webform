document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Redirect to success.html after 2 seconds
    setTimeout(function() {
      window.location.href = "success.html";
    }, 2000);
  });
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show");
  });
});

function toggleDropdown() {
  let navbarToggle = document.getElementById("navbarToggle");

  if (navbarToggle.className === "topnav") {
    navbarToggle.className += " responsive";
  } else {
    navbarToggle.className = "topnav";
  }
}

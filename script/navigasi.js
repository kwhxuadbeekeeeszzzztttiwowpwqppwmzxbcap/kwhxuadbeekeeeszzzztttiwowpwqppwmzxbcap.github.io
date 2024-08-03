document.addEventListener("DOMContentLoaded", function() {
  const headerNav = document.createElement("header");
  headerNav.innerHTML = `
    <div class="headermenu">
      <img src="logo-header.png" alt="Logo">
      <a class="barsbut" id="opennavigasi"><i id="buttonsidebari" class="fa fa-bars"></i></a>
    </div>
    <div class="barsdesktop">
      <ul>
        <img src="logo-header.png" alt="Logo">
        <li><a class="menuhalaman" href="home.html">Home</a></li>
        <li><a class="menuhalaman" href="rules.html">Rules</a></li>
        <li><a class="submenu" href="report.html">
          <i class="fa fa-exclamation-circle"></i>
        </a></li>
        <li>
          <div class="submenu search-in">
            <i class="bi bi-search"></i>
            <input type="search" id="searchIn" name="search" placeholder="Search...">
          </div>
        </li>
      </ul>
    </div>
  `;
  document.body.appendChild(headerNav);
  
  const sideBarNav = document.createElement("div");
  sideBarNav.innerHTML = `
    <div id="sidebarnav" class="sidebarnav">
      <div id="menuheader" class="menuheader">
        <a id="closenavigasi" style="float: left; font-size: 20px;">
          <i class="fa fa-times"></i>
        </a>
        <a href="report.html" style="float: right;">
          <i class="fa fa-exclamation-circle"></i>
        </a>
      </div>
      <img src="logo-header.png" alt="Logo">
      <a href="home.html">
        <i class="bi bi-house-door"></i> Home
      </a>
      <div class="search-in">
        <i class="bi bi-search"></i>
        <input type="search" id="searchIn" name="search" placeholder="Search...">
      </div>
    </div>
  `;
  document.body.appendChild(sideBarNav);
  
  const openButton = document.getElementById("opennavigasi");
  const closeButton = document.getElementById("closenavigasi");
  const sidebar = document.getElementById("sidebarnav");
  
  openButton.addEventListener("click", function() {
    openButton.style.right = "110%";
    setTimeout(function() {
      sidebar.style.height = "105%";
    }, 1000);
  });
  
  closeButton.addEventListener("click", function() {
    sidebar.style.height = "0%";
    setTimeout(function() {
      openButton.style.right = "5%";
    }, 1000);
  });
});


// Infinte Scroll
const logo = document.querySelector(".all-item-proyek").cloneNode(true);

document.querySelector(".container-proyek").appendChild(logo);


// List Klick
document.getElementById('showListButton').addEventListener('click', function() {
  var itemList = document.getElementById('itemList');
  if (itemList.style.display === 'block') {
    itemList.style.display = 'none';
  } else {
    itemList.style.display = 'block';
  }
});


// Intro Animations
window.addEventListener('load', () => {
  setTimeout(() => {
    const containerLoading = document.querySelector('.loading-container');
    if (containerLoading) {
      containerLoading.style.height = "0vh";
      setTimeout(function() {
        containerLoading.style.opacity = "0";
      }, 1000);
    }
  }, 3000);
});






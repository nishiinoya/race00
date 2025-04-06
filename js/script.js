function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.menu-container button');
    if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = 'none';
    }
});

function addMathButtons() {
    var mathButtons = document.getElementById('mathButtons');
    if (mathButtons.style.display === "none") {
        mathButtons.style.display = "grid";
    } else {
        mathButtons.style.display = "none";
    }
}

function sideBarOpen() {
    document.getElementById("SideBar").style.display = "block";
}

function sideBarClose() {
    document.getElementById("SideBar").style.display = "none";
}

function addMemoryButtons() {
    var memoryButtons = document.getElementById('memoryButtons');
    if (memoryButtons.style.display === "none") {
        memoryButtons.style.display = "grid";
    } else {
        memoryButtons.style.display = "none";
    }
}
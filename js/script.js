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

function sideBar(sidebarId) {
    let sidebar = document.getElementById(sidebarId);
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

function sideBarClose(id) {
    document.getElementById(id).style.display = "none";
}

function addMemoryButtons() {
    var memoryButtons = document.getElementById('memoryButtons');
    if (memoryButtons.style.display === "none") {
        memoryButtons.style.display = "grid";
    } else {
        memoryButtons.style.display = "none";
    }
}

function resetToRegular() {
    sideBarClose('HistorySidebar');
    sideBarClose('MemorySidebar');
    sideBarClose('ConvertSidebar');
    document.getElementById("memoryButtons").style.display = "none";
    document.getElementById("mathButtons").style.display = "none";
}
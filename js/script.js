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
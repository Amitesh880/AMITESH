function toggleSidePanel() {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.toggle('open');
}

function toggleSubMenu(id) {
    const subMenu = document.getElementById(id);
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}

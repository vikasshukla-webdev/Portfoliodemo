function openContainer(id, position) {
    const container = document.getElementById(id);
    const hero = document.getElementById('hero');

    container.classList.add('active');
    hero.classList.add('hidden');

}

function closeContainer(id) {
    const container = document.getElementById(id);
    const hero = document.getElementById('hero');

    container.classList.remove('active');
    hero.classList.remove('hidden'); 1
}
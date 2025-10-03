function toggleTheme() {
    const light = document.getElementById("light-theme");
    const dark = document.getElementById("dark-theme");
    const logoImg = document.getElementById("logo");

    if (dark.disabled) {
        dark.disabled = false;
        light.disabled = true;
        logoImg.src = './images/omalogodark.png';
    } else {
        dark.disabled = true;
        light.disabled = false;
        logoImg.src = './images/omalogolight.png';
    }
}

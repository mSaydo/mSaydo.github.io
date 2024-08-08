window.Telegram.WebApp.ready();

function setTheme() {
    const theme = window.Telegram.WebApp.themeParams;
    document.body.style.setProperty('--tg-theme-bg-color', theme.bg_color || 'white');
    document.body.style.setProperty('--tg-theme-text-color', theme.text_color || 'black');
    document.body.style.setProperty('--tg-theme-link-color', theme.link_color || '#1b9af5');
}

window.Telegram.WebApp.onEvent('themeChanged', setTheme);
setTheme();

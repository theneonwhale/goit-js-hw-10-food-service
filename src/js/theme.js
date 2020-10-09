const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const STORAGE_CHECKED = 'user-checked';
    
const isDarkTheme = localStorage.getItem(STORAGE_CHECKED) === 'true';

if (isDarkTheme) {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
} else {
    refs.body.classList.add(Theme.LIGHT);
}

refs.checkbox.addEventListener('change', onThemeSwitch);

function onThemeSwitch(evt) {
    const CHECKED = evt.srcElement.checked;

    if (CHECKED) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    };

    localStorage.setItem(STORAGE_CHECKED, CHECKED);
};

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
    refs.body.classList.remove(Theme.LIGHT);
    refs.checkbox.checked = true;
}

refs.checkbox.addEventListener('change', onThemeSwitch);

function onThemeSwitch(evt) {
    refs.body.classList.toggle(Theme.DARK);
    refs.body.classList.toggle(Theme.LIGHT);

    const CHECKED = evt.srcElement.checked;

    localStorage.setItem(STORAGE_CHECKED, CHECKED);
};

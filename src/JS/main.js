//              Principal Functions

//      Theme
const btnsTheme = document.querySelectorAll('.theme');
btnsTheme.forEach(btn => btn.addEventListener('click', changeTheme));
const myPalets = [];
let actualTheme = 'white';

// Class color palet
class PaletColor {
    constructor({
        name = 'white',
        colorText = 'rgb(0, 0, 0)',
        principal = '#185ABD',
        principalDark = '#12499b',
        seundary = '#f3f3f3',
        secundaryDark = '#cac8c8',
        page = '#FFFFFF',
        shadowDark = 'rgba(204, 191, 191, 0.774)',
    } = {}) {
        this.name = name;
        this.colorText = colorText;
        this.principal = principal;
        this.principalDark = principalDark;
        this.seundary = seundary;
        this.secundaryDark = secundaryDark;
        this.page = page;
        this.shadowDark = shadowDark;
    }
}

// Actual Themes
const themeOne = new PaletColor();
const themeTwo = new PaletColor({
    name: 'dark',
    colorText: '#FFFFFF',
    principal: '#000000',
    principalDark: 'rgb(1, 4, 8)',
    seundary: 'rgb(29, 29, 29)',
    secundaryDark: 'rgb(17, 17, 17)',
    page: 'rgb(0, 0, 0)',
    shadowDark: 'rgba(59, 58, 58, 0.774)',
});

myPalets.push(themeOne, themeTwo);

// functions change palet colors
function changeTheme(e) {
    const btn = e.currentTarget;
    if (btn.value == 'white' && actualTheme != btn.value) {
        changeColors(myPalets.find(palet => palet.name == 'white'));
        actualTheme = btn.value;
    } else if (btn.value == 'dark' && actualTheme != btn.value) {
        changeColors(myPalets.find(palet => palet.name == 'dark'));
        actualTheme = btn.value;
    }
}

function changeColors(palet) {
    let stylesCSS = document.documentElement;
    if (palet instanceof PaletColor) {
        stylesCSS.style.setProperty('--color-text', palet.colorText);
        stylesCSS.style.setProperty('--principal-color', palet.principal);
        stylesCSS.style.setProperty('--principal-color-dark', palet.principalDark);
        stylesCSS.style.setProperty('--secundary-color', palet.seundary);
        stylesCSS.style.setProperty('--secundary-color-dark', palet.secundaryDark);
        stylesCSS.style.setProperty('--page-color', palet.page);
        stylesCSS.style.setProperty('--shadow-dark', palet.shadowDark);
    }
}

//      Close all panels with one exepction
const myPanels = [];
class Panel {
    constructor({
        name,
        domPanel,
        toggleClass,
    }) {
        const nameValid = typeof name == 'string';
        const toggleClassValid = typeof name == 'string';
        const domPanelValid = domPanel instanceof HTMLElement;

        if (nameValid && toggleClassValid && domPanelValid) {
            this.name = name;
            this.domPanel = domPanel;
            this.toggleClass = toggleClass;
        }
    }

    openPanel() {
        this.domPanel.classList.add(this.toggleClass);
    }

    closePanel() {
        this.domPanel.classList.remove(this.toggleClass);
    }
}

//  Create panel rename doc


//                  NAV
let nameDocument = 'Documento 1';
const nameDocumentElement = document.querySelector('#name-document');
const globalPageTitle = document.querySelector('#global-page-title');

function iniciar() {
    nameDocumentElement.innerHTML = '';
    nameDocumentElement.innerText = nameDocument;

    globalPageTitle.innerHTML = '';
    globalPageTitle.innerText = nameDocument + ' - Letters';
}

iniciar();

// Cambiar name-document Panel
const btnNameDocument = document.querySelector('.name-document-container');
const optionsDocRename = document.querySelector('.rename-document-options');
const actualNameDoc = document.querySelector('#name-doc');
const btnsRenameDocName = document.querySelectorAll('.btn-rename-doc');
btnsRenameDocName.forEach(btn => btn.addEventListener('click', btnsOptionRenameDoc))
btnNameDocument.addEventListener('click', watchOptionRenameDocument);

document.addEventListener('DOMContentLoaded', () => {
    actualNameDoc.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
            btnsOptionRenameDoc(e);
        }
    });
});


function btnsOptionRenameDoc(e) {
    const myBtn = e.currentTarget;
    const val = myBtn.getAttribute('value');
    if (val == 'cancel') {
        watchOptionRenameDocument();
    } else {
        if (actualNameDoc.value != '') {
            nameDocument = actualNameDoc.value;
            iniciar();
            iniciarRenameDocOptions();
        }
        watchOptionRenameDocument();
    }
}

function watchOptionRenameDocument() {
    optionsDocRename.classList.toggle('doc-name-transition');
}

function iniciarRenameDocOptions() {
    actualNameDoc.value = '';
    actualNameDoc.setAttribute('placeholder', nameDocument);
}

iniciarRenameDocOptions();

// right part NAV
const btnsNavRight = document.querySelectorAll('.btn-right-nav');
btnsNavRight.forEach(btn => btn.addEventListener('click', toggleWatchPanel));

function toggleWatchPanel(e) {
    const btn = e.currentTarget;
    if (btn.value == 'setings') {

    } else if (btn.value == 'profile') {

    }
}

// Header top
const btnsHeaderOptions = document.querySelectorAll('.btn-option-top-header');
const btnsHeaderOptionsItem = document.querySelectorAll('.option-item-container');
btnsHeaderOptions.forEach(btn => btn.addEventListener('click', activeBtnHeader));
btnsHeaderOptionsItem.forEach(btn => btn.addEventListener('mouseover', hoverActiveBtnStyle));
btnsHeaderOptionsItem.forEach(btn => btn.addEventListener('mouseout', hoverInactiveBtnStyle));

function activeBtnHeader(e) {
    const btn = e.currentTarget;
    let activeBtn;
    btnsHeaderOptions.forEach(btn => {
        if (btn.classList.contains('active-btn-header')) {
            activeBtn = btn;
        }
    });
    activeBtn.classList.remove('active-btn-header');

    btn.classList.add('active-btn-header');
}

function hoverActiveBtnStyle(e) {
    const li = e.currentTarget;
    const btn = li.innerHTML;
    if (btn.includes('active-btn-header')) {
        li.classList.add('item-active-btn');
    }
}

function hoverInactiveBtnStyle(e) {
    const li = e.currentTarget;
    const btn = li.innerHTML;
    if (btn.includes('active-btn-header')) {
        li.classList.remove('item-active-btn');
    }
}

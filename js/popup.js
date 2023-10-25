const popupLinks=document.querySelectorAll('.popup-link');
const popupClose=document.querySelectorAll('.popup-close');
const body=document.querySelector('body');
const html=document.querySelector('html');
const timeout=800;
let unlock=true;
for (let i=0;i<popupLinks.length; i++){
    let popupLink=popupLinks[i];
    let idOfCurrentPopup=popupLink.getAttribute('href').replace('#','');
    let currentPopup=document.getElementById(idOfCurrentPopup);
    popupLink.onclick=function (e) {
        popupOpen(currentPopup,unlock);
        e.preventDefault();
        bodyLock()
    }
}
for (let i=0;i<popupClose.length;i++) {
    let elem = popupClose[i];
    let currentPopupClose=elem.closest('.popup')
    elem.onclick = function (e) {
        e.preventDefault();
closePopup(currentPopupClose);
    }
}
function popupOpen(currentPopup) {
    if (unlock && currentPopup){
        currentPopup.classList.add('open');
    }
    currentPopup.onclick=function (e) {
    if (!e.target.closest('.popup-content')){
        closePopup(currentPopup);
    }
    }
}
function closePopup(currentPopupClose) {
currentPopupClose.classList.remove('open');
unlock=false
setTimeout(function () {
unlock=true
},800);
bodyUnLock();
}

function bodyLock() {
const lockPaddingValue=window.innerWidth-document.querySelector('.wrapper').offsetWidth+'px';
console.log(lockPaddingValue);
body.classList.add('lock');
html.classList.remove('lock');
// body.style.paddingRight=lockPaddingValue;
}
function bodyUnLock() {
body.classList.remove('lock');
html.classList.remove('lock');
body.style.paddingRight='0px';
}
let aboutMe = document.querySelector('.aboutMe');
let displayBox = document.querySelector('.displayBox')

aboutMe.addEventListener('click', () => showText());
displayBox.addEventListener('click', () => hideText());

displayBox.style.visibility = "hidden";

function showText()
{
    displayBox.style.visibility = "visible";
    displayBox.style.width = "80vw";
    displayBox.style.height = "80vh";
}

function hideText()
{
    displayBox.style.visibility = "hidden";
}
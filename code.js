
// Middle row images
let aboutMe = document.querySelector('.aboutMe');
let bestProject1 = document.querySelector('.bestProject1');
let bestProject2 = document.querySelector('.bestProject2');

// This is the box with information
let displayBox = document.querySelector('.displayBox');
let displayImg = document.querySelector('.displayImg');
let infoText = document.querySelector('.informationText');
let close = document.querySelector('.close');

// Middle row images clicker events
aboutMe.addEventListener('click', () => showText("aboutMe"));
bestProject1.addEventListener('click', () => showText("bestProject1"));
bestProject2.addEventListener('click', () => showText("bestProject2"));



displayImg.addEventListener('click', () => openProject());
close.addEventListener('click', () => hideText());


displayBox.style.visibility = "hidden";

function showText(project)
{
    let text = returnInfoText(project);
    let img = returnImg(project);
    
    
    displayBox.style.visibility = "visible";
    displayBox.style.width = "75vw";
    displayBox.style.height = "90vh";
    infoText.innerHTML = text;
    displayImg.src = img;
}

function hideText()
{
    displayBox.style.height = "0vh";
    displayBox.style.width = "0vw";

    displayBox.style.visibility = "hidden";
}


function openProject()
{
    switch (displayImg.className) {
        case "aboutMe":
            break;

        case "bestProject1":
            window.open("/textgame/index.html");
            break;
            
        case "bestProject2":
            break;
    
        default:
            break;
    }
}

// returns the right text for the right image
function returnInfoText(project)
{
    let text = "";
    switch (project) {
        case "aboutMe":
            text = `Mitt namn är Christoffer Kronblad, är 19 år och bor i Eslöv.
            Mina intressen styrde in mig på ett av de enda teknikprogrammen med inriktning spelutveckling på LBS skolan i Lund
            och mina år där och kursern är avslutade. Under mina gymnasieår har jag lärt mig väldigt mycket. Att kunna lösa olika
            tekniska problem mer effektivt och smartare med hjälp av programmering till att ha varit med och drivit ett eget UF
            företag (Ung Företagsamhet).
            UF har hjälpt mig att utveckla min försäljnings förmåga och att få en mycket större inblick av hur det fungerar i ett
            företag. Jag anser att detta jobb kommer att vara en bra start för mig och ett steg in i arbetslivet.
            Jag är en glad, lugn och ordningsam person och både gillar och har väldigt lätt att ta till och lära mig saker, speciellt
            inom de tekniska aspekterna. Jag har lätt för att tala med andra personer och är alltid hjälpsam. Jag har under lov och
            helger jobbat i ett företag som heter Hemkodat. Där har jag som utbildare åkt runt i Skåne och introducerat barn och
            ungdomar att lära sig programmering. Utbildningen innefattar att kunna programmera en liten robot till att kunna
            programmera ett eget spel. Jag är redo att lära mig mycket mer genom att komma in i arbetslivet och ser fram emot att
            få kunna jobba hos er. 
            Med detta hoppas jag att jag har väckt ert intresse och jag ser fram emot en intervju där vi kan lära känna varandra
            bättre.`
            
            break;
            
        case "bestProject1":

            text = `Detta projektet var skapat med en interaktiv berättelse med olika slut. 
            Spelaren är i en konversation med en person som behöver hjälp. 
            Hur det slutar är upp till spelarens olika val i spelet. 
            Med fem olika slut och 50+ olika situationer kan det sluta hur som helst. 
            Spelet är uppbyggt som en sms konversation med chatt bubblor och val som spelaren gör under spelets gång.

            Språk:
            HTML, CSS, JavaScript, jQuery, AJAX`
            break;

        case "bestProject2":

            text = `Detta är andra projectet`
            break;
    
        default:
            break;
    }

    return String(text);
}

function returnImg(project)
{
    let img = "";
    switch (project) {
        case "aboutMe":
            img = "pics/profilpic.jpg";
            displayImg.className = "aboutMe"
            break;

        case "bestProject1":
            img = "pics/textgame.png";
            displayImg.className = "bestProject1";
            break;
            
        case "bestProject2":
            img = "pics/place holder.jfif";
            displayImg.className = "bestProject2";
            break;
    
        default:
            displayImg.className = "displayImg";
            break;
    }

    return img;
}
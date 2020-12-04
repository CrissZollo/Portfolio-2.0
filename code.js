// Middle row images
let aboutMe = document.querySelector('.aboutMe');
let bestProject1 = document.querySelector('.minecraft');
let bestProject2 = document.querySelector('.monkeyGame');
let textGame = document.querySelector('.textGame');

// This is the box with information
let displayBox = document.querySelector('.displayBox');
let displayImg = document.querySelector('.displayImg');
let infoText = document.querySelector('.informationText');
let close = document.querySelector('.close');

// Middle row images clicker events
aboutMe.addEventListener('click', () => showText("aboutMe"));
bestProject1.addEventListener('click', () => showText("minecraft"));
bestProject2.addEventListener('click', () => showText("monkeyGame"));
textGame.addEventListener('click', () => showText("textGame"));




displayImg.addEventListener('click', () => openProject());
close.addEventListener('click', () => hideText());


displayBox.style.visibility = "hidden";

function showText(project) {
    let text = returnInfoText(project);
    let img = returnImg(project);


    displayBox.style.visibility = "visible";
    displayBox.style.width = "75vw";
    displayBox.style.height = "90vh";
    infoText.innerHTML = text;
    displayImg.src = img;
}

function hideText() {
    displayBox.style.height = "0vh";
    displayBox.style.width = "0vw";

    displayBox.style.visibility = "hidden";
}


function openProject() {
    switch (displayImg.className) {
        case "aboutMe":
            break;

        case "textGame":
            if (window.location.href != "http://127.0.0.1:5501/index.html") {
                window.open(window.location.href + "/textgame/index.html");
            } else {
                window.open("/textgame/index.html");
            }
            break;

        case "monkeyGame":
            if (window.location.href != "http://127.0.0.1:5501/index.html") {
                window.open(window.location.href + "/Monkey Business/index.html");
            } else {
                window.open("/Monkey Business/index.html");
            }
            break;

        case "minecraft":
            window.open("http://85.24.194.62/");
            break;


        default:
            break;
    }
}

// returns the right text for the right image
function returnInfoText(project) {
    let text = "";
    switch (project) {
        case "aboutMe":
            text = `Mitt namn är Christoffer Kronblad, är 20 år och bor i Eslöv.
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

        case "textGame":

            text = `Detta projektet var skapat med en interaktiv berättelse med olika slut. 
            Spelaren är i en konversation med en person som behöver hjälp. 
            Hur det slutar är upp till spelarens olika val i spelet. 
            Med fem olika slut och 50+ olika situationer kan det sluta hur som helst. 
            Spelet är uppbyggt som en sms konversation med chatt bubblor och val som spelaren gör under spelets gång.

            Språk:
            HTML, CSS, JavaScript, jQuery, AJAX`
            break;

        case "minecraft":

            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur nostrum iure in dolore at ex rem hic? Quasi deserunt quisquam necessitatibus, quos ipsam ratione autem numquam rerum adipisci voluptatum ex vitae delectus similique, magni aut temporibus voluptas! Iusto in veritatis quas. Perferendis, sint animi necessitatibus, nulla corporis officiis eos obcaecati distinctio iure dicta doloremque atque ratione quasi aliquid asperiores cum, pariatur laboriosam deserunt architecto et nostrum. Repellat excepturi iste ipsam quibusdam officiis tenetur, architecto quia omnis et vitae sapiente corrupti cum, repellendus adipisci natus perspiciatis nam sit obcaecati impedit sint. Quia atque quibusdam harum veritatis consequatur animi, reprehenderit dignissimos, ipsa beatae eius deleniti sapiente dolorem repellat aut, modi dolor temporibus soluta. Quam et aut itaque dignissimos dolorem alias modi enim unde deserunt cum fugit aliquam animi, tenetur illum repellendus consectetur perspiciatis. Nihil autem, sint ex quae consequuntur soluta ratione ea, quod vero, facere sequi doloribus. Praesentium vel, veniam aliquid corrupti quaerat a iusto facilis cum porro cupiditate excepturi quam asperiores harum corporis provident quidem, quia mollitia velit repellendus vero. Accusantium numquam quaerat architecto consectetur ut nemo est ipsa repellat consequatur veritatis in, laudantium magni, error voluptates voluptas corporis adipisci laboriosam neque facilis officiis veniam ipsam. Sapiente necessitatibus magni excepturi?"
            break;

        case "monkeyGame":

            text = `We were given the task to create a 2D game on a HTML site. We made a game based off of "Space shooter" but with our own twist. 
            We named it "Monkey Business". This is my second game made in JS and the improvement is significant from the last game I made.
            The goal of the game is destroy the coconuts with bananas and reaching the score of 1000. That'll say, if you destroy 100 bananas at 10 points each, you beat the game.
            Considering the timelimit we had for this assesment, I was not able to make it as challenging, nor go in depth into the game.
            What I'd love to would be to implement different stages, where you would face different bosses, new power-ups and more endurable coconuts per level.`
            break;

        case "placeHolder":
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur nostrum iure in dolore at ex rem hic? Quasi deserunt quisquam necessitatibus, quos ipsam ratione autem numquam rerum adipisci voluptatum ex vitae delectus similique, magni aut temporibus voluptas! Iusto in veritatis quas. Perferendis, sint animi necessitatibus, nulla corporis officiis eos obcaecati distinctio iure dicta doloremque atque ratione quasi aliquid asperiores cum, pariatur laboriosam deserunt architecto et nostrum. Repellat excepturi iste ipsam quibusdam officiis tenetur, architecto quia omnis et vitae sapiente corrupti cum, repellendus adipisci natus perspiciatis nam sit obcaecati impedit sint. Quia atque quibusdam harum veritatis consequatur animi, reprehenderit dignissimos, ipsa beatae eius deleniti sapiente dolorem repellat aut, modi dolor temporibus soluta. Quam et aut itaque dignissimos dolorem alias modi enim unde deserunt cum fugit aliquam animi, tenetur illum repellendus consectetur perspiciatis. Nihil autem, sint ex quae consequuntur soluta ratione ea, quod vero, facere sequi doloribus. Praesentium vel, veniam aliquid corrupti quaerat a iusto facilis cum porro cupiditate excepturi quam asperiores harum corporis provident quidem, quia mollitia velit repellendus vero. Accusantium numquam quaerat architecto consectetur ut nemo est ipsa repellat consequatur veritatis in, laudantium magni, error voluptates voluptas corporis adipisci laboriosam neque facilis officiis veniam ipsam. Sapiente necessitatibus magni excepturi?"
            break;

        default:
            break;
    }

    return String(text);
}

function returnImg(project) {
    let img = "";
    switch (project) {
        case "aboutMe":
            img = "pics/profilpic.jpg";
            displayImg.className = "aboutMe"
            break;

        case "minecraft":
            img = "pics/minecraft.png";
            displayImg.className = "minecraft";
            break;

        case "monkeyGame":
            img = "pics/monkey business.png";
            displayImg.className = "monkeyGame";
            break;

        case "textGame":
            img = "pics/textgame.png";
            break;

        case "placeHolder":
            img = "pics/place holder.jfif";
            break;

        default:
            displayImg.className = "displayImg";
            break;
    }

    return img;
}
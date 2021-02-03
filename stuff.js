/*  För att undvika buggar har jag använt lokala variabler så mycket som möjligt och undvikt att använda globala variabler som "new" och "==".
    Här har vi inte heller använt oss utav "strict" då det inte finns några odeklarerade variabler som kan ställa till det.
    För att undvika förvirring så har jag jobbat med code-refactoring, tagit bort/adderat white space och försökt göra det så lättläsligt som möjligt.
    En bra praxis hade vart att trycka in en try/catch/finally någonstans, men det har jag ej gjort. 
    
    Under debuggingen så har jag korrekturläst koden multipla gånger, bytt namn på funktioner, jämfört min och annan kod samt skrivit om min kod flera gånger 
    för att på så sätt försöka hitta buggar och fel jag inte lagt märke till tidigare. Det finns säkert snabbare sätt att felsöka men jag valde att göra som jag gjorde
    då jag kände att det endast gynnar mig att lägga extra tid på att skriva/skriva om kod och bekanta mig med språket.   */ 

document.addEventListener("DOMContentLoaded", onPageLoad);
function onPageLoad() 
{
    // Här acessar vi vårt HTML-dokument via DOM och manipulerar innehållet. Användaren får välja hur många blogginlägg som visas.
    
    let inputBox = document.querySelector("#input-number")

    inputBox.oninput = function() 
    {
        removeAllSections();
        makeSections(parseInt(inputBox.value));
    };
}
// En for loop som hjälper oss att printa ut användarens önskade antal blogginlägg på index.html. 
function makeSections(count)
{
    for (var i = 0; i < count; i++) 
    {
        var parent = document.querySelector("main");
        var child = document.createElement("section");
        var title = document.createElement("h");
        var para = document.createElement("p");
        // Här väljer vi vad som ska visas i våra blogginlägg (titel och paragraf).  
        title.innerText = "Tjaaaa Bloggäääääääään " + i;
        para.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
        commodi praesentium eius quod suscipit! 
        Tenetur magnam eligendi amet fugiat adipisci impedit.`;

        makeEditable(title);
        makeEditable(para);

        child.append(title);
        child.append(para);
        parent.append(child);

    }
}

function removeAllSections()
{
    var test_sections = document.querySelectorAll("section");
    for (var i = 0; i < test_sections.length; i++)
    {
        test_sections[i].remove();
    }
}

function makeEditable(elem)
{
    elem.onclick = function(e)
    {
        elem.contentEditable = true;
        elem.focus();
    };
    elem.onblur = function(e)
    {
        elem.contentEditable = false;
    };
}
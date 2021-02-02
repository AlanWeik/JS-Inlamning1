document.addEventListener("DOMContentLoaded", onPageLoad);


function onPageLoad()
{
    let inputBox = document.querySelector("#inputnumber");

    inputBox.oninput = function() 
    {
        removeAllSections();
        makeSections(parseInt(inputBox.value));
    };
}

function makeSections(count) 
{
    for (var i = 0; i < count; i++)
{
    var parent = document.querySelector("main");

    var child = document.createElement("section");
    var title = document.createElement("h4");
    var para = document.createElement("p");

    title.innerText = "Title " + i;
    para.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
    commodi praesentium eius quod suscipit! 
    Tenetur magnam eligendi amet fugiat adipisci impedit.`;

}
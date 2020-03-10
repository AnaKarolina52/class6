var myOutput = document.getElementById("btn_1");
myOutput.innerHTML = "This is <br> the first<br> button";


var myButtons = document.getElementsByClassName("btn");
myButtons[1].innerHTML = "This is <br> the second <br> button";

var myTags = document.getElementsByTagName("div");
myTags[3].innerHTML = "This is <br> the Third <br> button";

var changeBtn = document.getElementsById ("btn4");
changeBtn.style.backgroundColor = "hoptpink";

document.getElementsById("output").innerHTML = document.title;
//document.getElementsById("myImage").src = ;

console.dir(document.getElementsById("btn_1").style);

/*---------------------------------------------------------------*/

var btn1 = document.getElementsById("btn_1");
var output = document.getElementsById("output");
btn1.onclick = changeButton();

function changeButton(){
    output.innerHTML = "I WAS CLICKED";
    btn1.style.backgroundColor = "deeppink";
}

var img= document.getElementsById("myImage");
img.onmouserover =  changeImage;
img.onmouserout = changeImage2;

function changeImage(e){
    this.style.border = "5px solid hotpink";
    this.src = "https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip";
}

function changeImage2(e){
    this.style.border = "none";
    this.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg";
}

/*--------------------EVENT LISTENERS------------------------------------------*/

var btn3 =document.getElementsById("btn_3");
btn3.addEventListener("click", function(e){
    this.style.backgroundColor = "blue";
    this.style.color ="white";
    img.style.border = "5px dashed blue";
});
/* ---------------------SELECT MULTIPLE ELEMENTS------------------*/

function changeAllButtons(){
    var mySelection, i;
    mySelection = document.querySelectorAll("div.btn");
    for(i=0;i < mySelection.length; i ++ ){
        mySelection[i].innerHTML = "I changed";
    }
}

/*---------------------------------------Add Element-------------------------*/

document.getElementsById("btn_4").addEventListener("click", addText);

    function addText(){
        var newEl = document.createElement("h2");
        var newContent = document.createTextNode("This is a new heading!");
        //
        newEl.appendChild(newContent);
        output.appendChild(newEl);
    }
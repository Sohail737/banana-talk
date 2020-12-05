var txtInput=document.querySelector("#input-text");
var txtOutput=document.querySelector("#output-text");
var btnClick=document.querySelector("#btn-click")
var url="https://api.funtranslations.com/translate/minion.json"

function constructUrl(text){
    return url + "?" + "text="+text
}
function errorHandler(error){
    console.log("error occured : "+ error);
    
    alert("Something went wrong, please try again later");
}

function clickHandler(){
    let inputText=txtInput.value;

    fetch(constructUrl(inputText))
    .then(res=>res.json())
    .then(json=>{
        let translatedText=json.contents.translated;
        txtOutput.innerText=translatedText;
    }).catch(errorHandler)
}

btnClick.addEventListener("click",clickHandler)
const userInput = document.getElementById("userInput");
const send = document.getElementById("send");
const content = document.getElementById("content");

 const changeColor = (color) => {
    const userValue = userInput.value;
    content.style.backgroundColor = color;
};

send.onclick = () => {
  changeColor();
};

content.onmouseover = () => {
    
changeColor();
};

content.onmouseout = () => {
   content.innerHTML += "<p>Aplikace nefunguje</p>";

}

window.onload = () => {
    content.style.backgroundColor = "pink";
}
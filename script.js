                // FORM
const formHandler = document.getElementById('formHandler');
                // H1 FOR GREETINGS
const greetHandler = document.getElementById('greet');
                // TIME
const today =document.getElementById('time');
                // QUOTE MASHINE
const demo =  document.getElementById("demo");
                // INPUT
const textHandler = document.getElementById('text');
                // INPUT VALUE
const paragraph = document.getElementById('paragraph');


// TO GET THE TIME
function wrapper(){
const date = new Date();
let hour = date.getHours();
const min = date.getMinutes();
today.textContent = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
    
});
console.log(hour);

setInterval(wrapper, 1000)
}
wrapper();


 // QUOTES
var Quotes=[
        "Change the world by being yourself.",
        "Never regret anything that made you smile.",
        "Every moment is a fresh beginning.",
        "There's bravery in being soft.",
        "If you can Dream it, you can Do it.",
        "Don't let your struggle be your Identity.",
        "Don't let someone's mistake make you do mistakes.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "Change your thoughts, and you change your world.",
        "All our dreams can come true if we have the courage to pursue them.",
        "Success is a journey not a destination.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "It always seems impossible until it's done."];

// QUOTES FUNCTION
function randomFunction(){
  demo.innerHTML =  Quotes[Math.floor(Math.random() *  Quotes.length)];
};
setInterval(randomFunction, 4000);

// FOR THE INPUT SUBMIT
const arr = [];
formHandler.addEventListener("submit", function(){
    
   const userValue = textHandler.value;
   arr.push(textHandler.value);
   localStorage.setItem('todo', arr);
   textHandler.value = '';


});

// DELETE VALUE FROM THE INPUT BUTTON AND ICON
let para;
if (localStorage.getItem('todo')){
  para = '<i class="material-icons" id="icon">cancel</i>' + '<span id="text">' + localStorage.getItem('todo') + '</span>'
} else {
  para = ''
}
paragraph.innerHTML = para;
const icon = document.getElementById('icon');

icon.addEventListener('click', function(){
  localStorage.removeItem('todo');
  window.location.reload();
});






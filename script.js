//API link: =>  https://api.quotable.io


const apiURL =  "https://api.quotable.io/random";
const button1 = document.querySelector(".btn1");
const quote = document.querySelector(".quoteClass");
const authorName = document.querySelector("#author");
const shareWhatsapp = document.querySelector(".share");
// API Calling JS Code 

async function gen_quote(URL){
  const response  = await fetch(URL);
  var data = await response.json();
  quote.innerHTML = data.content;
  authorName.innerHTML = data.author; 
}

gen_quote(apiURL);
// console.log(data);     //error:  data is not deefined => So,the data can't access from the outside of the gen_quote(URL) function

button1.addEventListener('click', ()=>{
    gen_quote(apiURL);
})

// %0A: is used for new line, +: is used for spaces, ** used for bold
function share(){
  shareWhatsapp.setAttribute('href', 'whatsapp://send?text=*Quote+of+the+day*-+'+ quote.innerHTML+'%0A*Author*-+'+authorName.innerHTML );

} 
//  ==> var, let , const variable scope 
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  /*
  let oReq = new XMLHttpRequest();
  oReq.open('get', 'https://upadhayay.github.io/db.json', true);
  oReq.send();

  oReq.onload = function(){
    if(this.readyState ==4 && this.status == 200){
      let books = JSON.parse(this.responseText);
      console.log(this.responseText);
      console.log(books);
    
    let output = "";

    for (let book of books){
      output += `
      <div class='publications'>
      <p class='title'>Title:${book.title}</p>
      <p class='year'>Year:${book.year}</p>
      `;
    }

    document.querySelector(".books").innerHTML = output;


    }
  };
*/

function prnt(TXT){
    console.log(TXT);
}

const Books = [{
    "id":1,
    "title": "The Universe and Dr. Einstein",
    "year": 2005,
    "published": true

},
{
    "id":2,
    "title": "Einstein on politics",
    "year": 2013,
    "published": true
},
{
    "id":3,
    "title": "Einstein versus the physical review",
    "year": 2005,
    "published": true
},
{
    "id":4,
    "title": "Einstein on peace",
    "year": 2017,
    "published": true
},
{
    "id":5,
    "title": "Einstein: The life and times",
    "year": 2022,
    "author": "Ronald Clark",
    "published": false
}]

for(let book of Books){

  if (book.published==true){
    prnt(book.title)
    prnt(book.year)

  }
}


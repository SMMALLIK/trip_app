// let User = document.getElementById("User");
// let UserCard = document.querySelector(".User-card");

// User.addEventListener("click", function () {
//   UserCard.classList.toggle("ShowHide");
//     // UserCard.style.display='flex'
//   console.log(UserCard);
// });

// let UserName = document.getElementById("UserName");
// let UserPass = document.getElementById("UserPass");

// function UserData() {
//   if (UserName.value == "" && UserPass.value == "") {
//     alert("Please Fill The Form");
//   } else {
//     alert("Your Response Recorded");
//   }
// }

let Bar = document.getElementById("Bar");
let Ul = document.querySelector("ul");

Bar.addEventListener("click", function(){
  Ul.classList.toggle("UlData");
  console.log(Ul);
  
})

// --------------------------------- User-card" 

let User = document.getElementById("User");
let Submit = document.getElementById("Submit");

let inptName = document.getElementById("inptName");
let inptPass = document.getElementById("inptPass");

User.addEventListener("click", function(){
  let UserCard = document.querySelector(".User-card");
  UserCard.classList.toggle("ShowHide");
  Submit.addEventListener("click", function(){
    if(inptName.value == "" && inptPass.value == ""){
      alert("Plase Fill The Form");
    }else{
      alert(inptName.value + " Your Response Recorded");
      inptName.innerHTML=""
      inptPass.innerHTML=""
    }
  })
})

let BookName = document.getElementById("BookName");
let BookNumber = document.getElementById("BookNumber");
let StartDate = document.getElementById("StartDate");
let EndDate = document.getElementById("EndDate");

function BookForm() {
  if (
    BookName.value == "" &&
    BookNumber.value == "" &&
    StartDate.value == "" &&
    EndDate.value == ""
  ) {
    alert("Please Fill The Form");
  } else {
    alert("Your Response Recorded");
  }
}
let ContactName = document.getElementById("ContactName");
let ContactEmail = document.getElementById("ContactEmail");

function Contact() {
  if (ContactName.value == "" && ContactEmail.value == "") {
    alert("Please Fill The Form");
  } else {
    alert("Your Response Recorded");
  }
}

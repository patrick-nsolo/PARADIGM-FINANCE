//TEAM PAGE button toggle profile
function toggleProfile(id) {
    var profile = document.getElementById(id);
    if (profile.style.display === "none"){
        profile.style.display = "block";
    }else {
        profile.style.display = "none";
    }
}
// Assign the toggleProfile function to the onclick event for each button
document.getElementById("chairman").onclick = function(){toggleProfile("chairman");};
document.getElementById("kayode").onclick = function(){toggleProfile("kayode");};





//PROFILE PAGE SCROLL
var currentProfile = 0;
var profileContainers = document.getElementsByClassName("profile-container");

function showNextProfile(){
  profileContainers[currentProfile].style.animation = "slideOutToLeft 0.5s ease-in-out";
  setTimeout(function(){
    profileContainers[currentProfile].style.display = "none";
    currentProfile = (currentProfile + 1) % profileContainers.length;
    profileContainers[currentProfile].style.display = "block";
    profileContainers[currentProfile].style.animation = "slideInFromRight 0.5s ease-in-out";
  },500);
}

//Show the first profile container
profileContainers[currentProfile].style.display = "block";
//interval to show next profile every 5 secs
var intervalId = setInterval(showNextProfile, 5000);












//LOAN FORM 
function calculatePayment() {
    let loanAmount = document.getElementById("loan-amount").value;
    let interestRate = document.getElementById("interest-rate").value / 100 / 12;
    let loanTerm = document.getElementById("loan-term").value * 12;
    let monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    document.getElementById("monthly-payment").value = monthlyPayment.toFixed(2);
  }
    



















 
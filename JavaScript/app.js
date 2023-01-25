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


















//LOAN FORM 
function calculatePayment() {
    let loanAmount = document.getElementById("loan-amount").value;
    let interestRate = document.getElementById("interest-rate").value / 100 / 12;
    let loanTerm = document.getElementById("loan-term").value * 12;
    let monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    document.getElementById("monthly-payment").value = monthlyPayment.toFixed(2);
  }
    



















 
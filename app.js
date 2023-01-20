//TEAM PAGE 
function myFunction(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block"){
        dropdown.style.display = "none";
    }else {
        dropdown.style.display = "block";
    }

}

//LOAN FORM 
function calculatePayment() {
    let loanAmount = document.getElementById("loan-amount").value;
    let interestRate = document.getElementById("interest-rate").value / 100 / 12;
    let loanTerm = document.getElementById("loan-term").value * 12;
    let monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    document.getElementById("monthly-payment").value = monthlyPayment.toFixed(2);
  }
    
//PROFILE PAGE SCROLL
$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(this).prev(".content").toggle();
    });
});

















 
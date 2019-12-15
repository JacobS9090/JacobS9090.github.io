

//Calculate Tip
function calculateTip() {
  var billCost = document.getElementById("billcost").value;
  var quality = document.getElementById("quality").value;
  var peopleAmount = document.getElementById("peopleamt").value;


  //validate input
  if (billCost === "" || quality == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (peopleAmount === "" || peopleAmount <= 1) {
    peopleAmount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billCost * quality) / peopleAmount;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculatet").onclick = function() {
  calculateTip();

};

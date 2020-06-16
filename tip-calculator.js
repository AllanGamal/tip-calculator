// split total = (bill * tip / split
// bill total = bill * (tip / 100 + 1)

addEventListener("keypress", function (event) {
  let tip = document.querySelector("#tip").value / 100 + 1;
  let split = document.querySelector("#split").value * 1;
  let bill = document.querySelector("#bill").value * 1;
  if (split === 0) {
    split = 1;
  }

  let splitTotal = (bill * tip) / split;
  let billTotal = bill * tip;

  if (event.keyCode === 13) {
    document.querySelector("#split-total").innerHTML = splitTotal.toFixed(2);
    document.querySelector("#bill-total").innerHTML = billTotal.toFixed(2);
    console.log(splitTotal);
  }
});
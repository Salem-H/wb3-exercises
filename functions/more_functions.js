function displayMailingLabel(name, address, city, state, zip){
   console.log(name);
   console.log(address);
   console.log(city);
   console.log(state);
   console.log(zip);
}

displayMailingLabel("Salem", "1036 Westmoreland", "Atlanta", "GA", "30043")

function addNumbers(num1, num2){
  const add = num1 + num2;
//   console.log("num1 + num2 = sum")
  console.log(`${num1} + ${num2} = ${add}`)
}

addNumbers(5,10);
addNumbers(25,10);

function displayReceipt(totalDue, amountPaid){
    let changeDue = totalDue - amountPaid;
    let owed = totalDue - amountPaid;
    console.log(`${totalDue} - ${amountPaid} = ${changeDue}`)
    if(amountPaid < totalDue){
        console.log(`You need to pay ${owed} more`)
    }
}

displayReceipt(46,50);
displayReceipt(46,46);
displayReceipt(46,45);
displayReceipt(46,40);

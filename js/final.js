let row = 1;
let employees = [];
let totalAmount = 0;
let myForm = document.getElementById("inputForm");

myForm.addEventListener("submit", function (submitEvent) {
  submitEvent.preventDefault();
  //let inputs = myForm.elements;
  let fullName = getElementById("name");
  let age = getElementById("age");
  // allow the typeof salary to accept float/decimals
  let salary = parseFloat(getElementById("salary"));
  let zip = getElementById("zip");
  let city = getElementById("city");
  let street = getElementById("street");
  let country = getElementById("country");
  let pobox = getElementById("pobox");

  
  let employee = {
    fullName: fullName,
    age: age,
    salary: salary,
    zip: zip,
    city: city,
    street: street,
    country: country,
    pobox: pobox
  };

  console.log(employee);
  console.log(employees);

  addEmployeesToArray(employee);
  let totalAmount = calculateTotalSalary();
  displayTotalSalary(totalAmount);
  displayDetails(employee);

  if (
    !fullName ||
    !age ||
    !salary ||
    !zip ||
    !city ||
    !street ||
    !country ||
    !pobox
  ) {
    alert("Please fill in all the boxes");
    return;
  }
});

function getElementById(id) {
  return document.getElementById(id).value;
}

function addEmployeesToArray(employee) {
  employees.push(employee);
}

function displayDetails(employee) {
  let display = document.getElementById("display");

  let newRow = display.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);
  let cell7 = newRow.insertCell(6);
  let cell8 = newRow.insertCell(7);

  cell1.innerHTML = employee.fullName;
  cell2.innerHTML = employee.age;
  cell3.innerHTML = employee.salary;
  cell4.innerHTML = employee.zip;
  cell5.innerHTML = employee.city;
  cell6.innerHTML = employee.street;
  cell7.innerHTML = employee.country;
  cell8.innerHTML = employee.pobox;

}

function displayTotalSalary(totalAmount) {
  let totalAmountOfElement = document.getElementById("totalAmount");
  totalAmountOfElement.innerHTML = totalAmount;
}

function calculateTotalSalary() {
  let total = 0;
  employees.forEach(employee => {
    total += employee.salary;
  });
  return total;
}

// function totalSalary() {
//   let total = 0;
//   employees.forEach((employee) => {
//     total += employee.salary;
//   });
//   return total;
// }

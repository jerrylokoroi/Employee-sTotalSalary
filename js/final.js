// let row = 1;
let employees = [];
let totalAmount = 0;
let myForm = document.getElementById("inputForm");

myForm.addEventListener("submit", function (j) {
  j.preventDefault();
  let Name = getElementById("name");
  let age = getElementById("age");
  // allow the typeof salary to accept float/decimals
  let salary = parseFloat(getElementById("salary"));
  let zip = getElementById("zip");
  let city = getElementById("city");
  let street = getElementById("street");
  let country = getElementById("country");
  let pobox = getElementById("pobox");
  let employee = {
    Name: name,
    Age: age,
    Salary: salary,
    Zip: zip,
    City: city,
    street: street,
    Country: country
  };
  addEmployeesToArray(employee);
  console.log(employee);
  console.log(employees);

  if (
    !name ||
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

  let totalAmount = totalSalary();
  displayTotalSalary(totalAmount);
  totalSalary();
});

function getElementById(id) {
  return document.getElementById(id).value;
}

function addEmployeesToArray(employee) {
  employees.push(employee);
}

function displayDetails() {
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

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = salary;
  cell4.innerHTML = zip;
  cell5.innerHTML = city;
  cell6.innerHTML = street;
  cell7.innerHTML = country;
  cell8.innerHTML = pobox;

  totalSalary();
  displayTotalSalary(totalAmount);
}

function displayTotalSalary(totalAmount) {
  let totalAmountOfElement = document.getElementById("totalAmount");
  totalAmountOfElement.innerHTML = totalAmount;
}

function totalSalary() {
  let total = 0;
  employees.forEach((employee) => {
    total += employees.salary;
  });
  return total;
}

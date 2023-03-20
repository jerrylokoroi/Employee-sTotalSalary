
const row = 1;
const employees = [];

const addButton = document.getElementById("btn-add");
addButton.addEventListener("click", displayDetails);


function displayDetails(Id) {


     let firstName = getElementById("firstName");
     let lastName = getElementById("lastName");
     let age = getElementById("age");
     let salary = getElementById("salary");
     let zip = getElementById("zip");
     let city = getElementById("city");
     let street = getElementById("street");
     let country = getElementById("country");
     let pobox = getElementById("pobox");

     

     
     const display = document.getElementById("display");

     const newRow = display.insertRow(row);

     let cell1 = newRow.insertCell(0);
     let cell2 = newRow.insertCell(1);
     let cell3 = newRow.insertCell(2);
     let cell4 = newRow.insertCell(3);
     let cell5 = newRow.insertCell(4);
     let cell6 = newRow.insertCell(5);
     let cell7 = newRow.insertCell(6);
     let cell8 = newRow.insertCell(7);
     let cell9 = newRow.insertCell(8);

     cell1.innerHTML = firstName;
     cell2.innerHTML = lastName;
     cell3.innerHTML = age;
     cell4.innerHTML = salary;
     cell5.innerHTML = zip;
     cell6.innerHTML = city;
     cell7.innerHTML = street;
     cell8.innerHTML = country;
     cell9.innerHTML = pobox;

     totalSalary()

     row++;

     if (!fname || !lname || !age || !salary || !zip || !city || !street || !country || !pobox) {
          alert("Please fill in all the boxes");
          return;
     }


}

function getElementById(id){
     return document.getElementById(id).value;
}

// function displayDetails() {



//      var fname = document.getElementById("firstName").value;
//      var lname = document.getElementById("lastName").value;
//      var age = document.getElementById("age").value;
//      var salary = document.getElementById("salary").value;
//      var zip = document.getElementById("zip").value;
//      var city = document.getElementById("city").value;
//      var street = document.getElementById("street").value;
//      var country = document.getElementById("country").value;
//      var pobox = document.getElementById("pobox").value;

//      // let employee = {fname, lname, age, salary, zip, city, street, country};
//      // console.log(employee);

//      // employees.push(employee);
//      // console.log(employees);

//      let employee = {
//           First:firstName,
//           LastName:lastName,
//           Salary:salary
//      };
//      console.log(employee);

//      employees.push(employee);
//      console.log(employees);

//      if (!fname || !lname || !age || !salary || !zip || !city || !street || !country || !pobox) {
//           alert("Please fill in all the boxes");
//           return;
//      }

//      var display = document.getElementById("display");

//      var newRow = display.insertRow(row);

//      var cell1 = newRow.insertCell(0);
//      var cell2 = newRow.insertCell(1);
//      var cell3 = newRow.insertCell(2);
//      var cell4 = newRow.insertCell(3);
//      var cell5 = newRow.insertCell(4);
//      var cell6 = newRow.insertCell(5);
//      var cell7 = newRow.insertCell(6);
//      var cell8 = newRow.insertCell(7);
//      var cell9 = newRow.insertCell(8);

//      cell1.innerHTML = fname;
//      cell2.innerHTML = lname;
//      cell3.innerHTML = age;
//      cell4.innerHTML = salary;
//      cell5.innerHTML = zip;
//      cell6.innerHTML = city;
//      cell7.innerHTML = street;
//      cell8.innerHTML = country;
//      cell9.innerHTML = pobox;

//      totalSalary()

     
// }


function totalSalary(){
     let table = document.getElementById("display");
     let salary = 0
     for(let i = 1; i<table.rows.length; i++){
          salary+=Number(table.rows[i].cells[3].innerText)
     }
     const totalInput = document.getElementById("totalSalary")
     totalInput.value=salary
}








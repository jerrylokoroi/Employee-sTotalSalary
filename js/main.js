
var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails() {

     var fname = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var age = document.getElementById("age").value;
     var salary = document.getElementById("salary").value;
     var zip = document.getElementById("zip").value;
     var city = document.getElementById("city").value;
     var street = document.getElementById("street").value;
     var country = document.getElementById("country").value;
     var pobox = document.getElementById("pobox").value;

     let employee = {fname, lname, age, salary, zip, city, street, country};
     console.log(employee);

     if (!fname || !lname || !age || !salary || !zip || !city || !street || !country || !pobox) {
          alert("Please fill in all the boxes");
          return;
     }

     var display = document.getElementById("display");

     var newRow = display.insertRow(row);

     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);
     var cell5 = newRow.insertCell(4);
     var cell6 = newRow.insertCell(5);
     var cell7 = newRow.insertCell(6);
     var cell8 = newRow.insertCell(7);
     var cell9 = newRow.insertCell(8);

     cell1.innerHTML = fname;
     cell2.innerHTML = lname;
     cell3.innerHTML = age;
     cell4.innerHTML = salary;
     cell5.innerHTML = zip;
     cell6.innerHTML = city;
     cell7.innerHTML = street;
     cell8.innerHTML = country;
     cell9.innerHTML = pobox;

     totalSalary()

     row++;
}


function totalSalary(){
     var table = document.getElementById("display");
     var salary = 0
     for(var i = 1; i<table.rows.length; i++){
          salary+=Number(table.rows[i].cells[3].innerText)
     }
     const totalInput = document.getElementById("totalSalary")
     totalInput.value=salary
}








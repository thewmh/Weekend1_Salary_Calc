console.log('JS');

let empArr = [];
let empSal = 0;

class Employee {
    constructor( fName, lName, id, title, annual ) {
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.title = title;
        this.annual = annual;
    }
}

$('document').ready(onReady);

function onReady() {
    console.log('JQ');
    $('#addNewEmp').on('click', addEmployee);
    $('#newEmp').on('click', '.deleteEmp', deleteEmp);
    $('#thDeleteText').toggleClass('showDeleteText', true);
}

// add employee function

function addEmployee() {
    event.preventDefault();
    console.log('New employee added.');
    let addEmpFN_In = $('#addEmpFN').val();
    let addEmpLN_In = $('#addEmpLN').val();
    let addEmpID_In = $('#addEmpID').val();
    let addEmpTitle_In = $('#addEmpTitle').val();
    let addEmpAnnSal_In = $('#addEmpAnnSal').val();
    let newEmployee = new Employee(addEmpFN_In, addEmpLN_In, addEmpID_In, addEmpTitle_In, addEmpAnnSal_In);
    empArr.push( newEmployee );
    console.log(empArr);
    appendEmployeeList();
    resetInputs();
    sumSal();
}

// reset input fields

function resetInputs() {
    $('#addEmpFN').val('');
    $('#addEmpLN').val('');
    $('#addEmpID').val('');
    $('#addEmpTitle').val('');
    $('#addEmpAnnSal').val('');
}

// appending

function appendEmployeeList() {
    let element = $('#newEmp');
    element.empty();
    for( let employee of empArr ) {
        console.log(employee);
        element.append(`<tr><td>${employee.fName}</td><td>${employee.lName}</td><td id="empIDTable">${employee.id}</td><td>${employee.title}</td><td>${employee.annual}</td><td><button class="deleteEmp">Delete</button></td></tr>`);
    }
    if ( empArr.length > 0 ) {
        $('#thDeleteText').toggleClass('showDeleteText', false);
    }
    if ( empArr.length <= 0 ) {
        $('#thDeleteText').toggleClass('showDeleteText', true);
    }
}

// adding salaries

function sumSal() {
    console.log('Calculating the monthly total cost of employee database.');
    $('#totalMonth').removeClass();
    let empSal = $('#totalMonth');
    let allEmpSalInt = 0;
        empSal.empty();
        empSal.append('Total Monthly: $', allEmpSalInt.toFixed(2));
    for( let employee of empArr ) {
        allEmpSalInt += parseFloat(employee.annual/12);
        if (allEmpSalInt >= 20000 ) {
            $('#totalMonth').toggleClass('over20k', true);
        }
        if (allEmpSalInt < 20000 ) {
            $('#totalMonth').toggleClass('over20k', false);
        } 
        empSal.empty();
        empSal.append('Total Monthly: $', allEmpSalInt.toFixed(2));
    }
}


// deleting employee

function deleteEmp() {
    for( let emp in empArr) {
        console.log('Deleting', empArr[emp].fName, empArr[emp].lName +','+ ' Employee ID:', empArr[emp].id, 'from the employee database.');
        if(empArr[emp].id == $(this).closest('tr').find('#empIDTable').text()){
            console.log('Thank you for working with us', empArr[emp].fName);
            empArr.splice(emp, 1);
        } else {
            console.log('false');
        }
    }
    appendEmployeeList();
    sumSal();
}

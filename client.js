console.log('JS');

let empArr = [];

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
}

// add employee function

function addEmployee() {
    event.preventDefault();
    console.log('add employee button clicked!');
    let addEmpFN_In = $('#addEmpFN').val();
    let addEmpLN_In = $('#addEmpLN').val();
    let addEmpID_In = $('#addEmpID').val();
    let addEmpTitle_In = $('#addEmpTitle').val();
    let addEmpAnnSal_In = $('#addEmpAnnSal').val();
    let newEmployee = new Employee(addEmpFN_In, addEmpLN_In, addEmpID_In, addEmpTitle_In, addEmpAnnSal_In);
    empArr.push( newEmployee );
    console.log(empArr);
    appendEmployeeList();
    sumSal();
}

// appending

function appendEmployeeList() {
    let element = $('#newEmp');
    element.empty();
    for( let employee of empArr ) {
        console.log(employee);
        element.append(`<tr><td>${employee.fName}</td><td>${employee.lName}</td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.annual}</td></tr>`);
    }
}

// adding salaries

function sumSal() {
    console.log('adding all of the salaries');
    let empSal = $('#totalMonth');
    let allEmpSalInt = 0;
    for( let employee of empArr ) {
        allEmpSalInt += parseInt(`${employee.annual}`);
        empSal.empty();
        empSal.append(allEmpSalInt/12);
    }
}


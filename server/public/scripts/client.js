console.log('In console');

$(document).ready(start);

function start(){
  console.log('In DOM');
  $('#inputSubmit').on('click', submitEmployee);
  $('#inputSubmit').on('click', computeSalary);
  $('table').on('click', '.delete', removeEmployee);
} // end DOM start

var employees =[];

class Employee{
  constructor(firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  } // end Employee object constructor
} // end Employee Class

function computeSalary(){
  var totalSalary = 0;
  for (var i = 0; i < employees.length; i++) {
    totalSalary += parseInt(employees[i].annualSalary);
    console.log(totalSalary);
    $('footer').children('h3').text('$' + Math.round(totalSalary/12));
  } // end for loop
} // end computeSalary

function submitEmployee(){
  var employee = new Employee($('#inputFirstName').val(),$('#inputLastName').val(),$('#inputIdNumber').val(),$('#inputJobTitle').val(),$('#inputAnnualSalary').val());
    console.log(employee);
  employees.push(employee);
    console.log(employees);
  var $row = $('<tr>');
    $row.append('<td>' + employee.firstName + '</td>');
    $row.append('<td>' + employee.lastName + '</td>');
    $row.append('<td>' + employee.idNumber + '</td>');
    $row.append('<td>' + employee.jobTitle + '</td>');
    $row.append('<td>' + '$' + employee.annualSalary + '</td>');
    $row.append('<td><button class ="delete">Delete</button></td>');
    $('#employeeInfo').append($row);
    $('input').val('');
} // end submitEmployee function

function removeEmployee(){
  $(this).closest('tr').remove();
} // end removeEmployee function

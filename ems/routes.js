/*
============================================
; Title:  Routes.js
; Author: April Auger
; Date:   29 September 2019
; Description: Routes used for the EMS application.
;===========================================
*/

// Required modules
var express = require('express');
var Employee = require('./models/employee');
var router = express.Router();
var sanitize = require('mongo-sanitize');

// Get request for the index page
router.get('/', function(request, response){
	response.render('index', {
		title: "Employee Management System (EMS)",
		message: "The EMS web application will allow you to add, edit, and remove employee records."
	});
});

// Get request for the employee listing page
router.get('/list', function(request, response){
	// Get all employees
	Employee.find({}, function(error, data) {
		if(error) throw error;

		response.render('list', {
			emp: data,
			title: "Employee Records"
		});
	});
});

// Get request for the new employee creation page
router.get('/new', function(request, response){
	response.render('new', {
		title: "Create Employee Record",
		message: "Please complete the following fields.",
		error: ""
	});
});

// Post request for the new employee creation page
router.post('/process', function(request, response) {
	// Check that all required fields have been completed
	let requiredFields = "";
	if (!request.body.firstName) { requiredFields += '<li>First name</li>'; }
	if (!request.body.lastName) { requiredFields += '<li>Last name</li>';	}
	if (!request.body.dateOfBirth) { requiredFields += '<li>Date of birth</li>'; }
	if (!request.body.address) { requiredFields += '<li>Address</li>'; }
	if (!request.body.city) { requiredFields += '<li>City</li>'; }
	if (!request.body.state) { requiredFields += '<li>State</li>'; }
	if (!request.body.zip) { requiredFields += '<li>Zip</li>'; }
	if (!request.body.phone) { requiredFields += '<li>Phone</li>'; }
	if (!request.body.department) {	requiredFields += '<li>Department</li>'; }
	if (!request.body.position) { requiredFields += '<li>Position</li>'; }
	if (!request.body.hireDate) { requiredFields += '<li>Hire Date</li>'; }

	// If required fields have not been completed, stop and return an error message.
	if(requiredFields != "") {
		response.render('new', {
			title: "Employee record saved",
			message: "",
			error: "<b>Entries not completed:</b>" + "<ul>" + requiredFields + "</ul>"
		});
		return;
	// Insert the new employee record into the database
	} else {
		try {
			// Create an instance of the model EmployeeModelSchema
			var newEmployee = new Employee({
				employeeFirstName: request.body.firstName,
				employeeLastName: request.body.lastName,
				employeeDateOfBirth: request.body.dateOfBirth,
				employeeAddress: request.body.address,
				employeeCity: request.body.city,
				employeeState: request.body.state,
				employeeZip: request.body.zip,
				employeePhone: request.body.phone,
				employeeDepartment: request.body.department,
				employeePosition: request.body.position,
				employeeHireDate: request.body.hireDate,
				employeeUpdatedDate: Date.now(),
				employeeCreatedDate: Date.now()
			});

			var result = newEmployee.save();

			response.render('confirmation', {
				title: "Employee record saved",
				message: "The employee record has been saved.",
			});
		} catch (error) {
			response.status(500).send(error);
		}
	}
});


// Get request for the confirmation page
router.get('/confirmation', function(request, response){
	response.render('confirmation', {
		title: "Confirmation Page",
		message: ""
	});
});

// Post request for the confirmation page
router.post('/confirmation', function(request, response){
	response.render('confirmation', {
		title: "Confirmation Page",
		message: ""
	});
});

// Get request for the employee view page
router.get('/view/:employeeId', function(request, response){
	var id = sanitize(request.params.employeeId);
	Employee.findById(id, function(error, data) {
		if(error) throw error;

		response.render('view', {
			emp: data,
			title: "Employee Record"
		});
	});
});

// Get request for the employee edit page
router.get('/edit/:employeeId', function(request, response){
	var id = sanitize(request.params.employeeId);
	Employee.findById(id, function(error, data) {
		if(error) throw error;
		response.render('edit', {
			emp: data,
			title: "Edit Employee Record"
		});
	});
});

// Post request to update employee record
router.post('/edit/:employeeId', function(request, response) {
	var id = sanitize(request.params.employeeId);
	var doc = {
		employeeFirstName: request.body.firstName,
		employeeLastName: request.body.lastName,
		employeeDateOfBirth: request.body.dateOfBirth,
		employeeAddress: request.body.address,
		employeeCity: request.body.city,
		employeeState: request.body.state,
		employeeZip: request.body.zip,
		employeePhone: request.body.phone,
		employeeDepartment: request.body.department,
		employeePosition: request.body.position,
		employeeHireDate: request.body.hireDate,
		employeeUpdatedDate: Date.now()
	};

	// Update one document in the database
	Employee.findOneAndUpdate({_id: id}, doc, function(error, foundObject) {
		if(error) {
			response.json(error);
			response.render('confirmation', {
				title: "Error",
				message: "There was an error and the employee record was not in the database."
			});
		} else if(!foundObject) {
			response.render('confirmation', {
				title: "Not Found",
				message: "The employee record was not in the database."
			});
		} else {
			response.render('confirmation', {
				title: "Employee record saved",
				message: "The employee record has been saved."
			});
		}
	});
});

// Get request for the about page
router.get('/about', function(request, response){
	response.render('about', {
		title: "About",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	});
});

// Get request for the contact page
router.get('/contact', function(request, response){
	response.render('contact', {
		title: "Contact",
		message: "If you have questions, please complete and send our contact form."
	});
});

// Make the module available for other modules to require
module.exports = router;
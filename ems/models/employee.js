// Required module
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

// Create the Employee Schema
var EmployeeSchema = new Schema({
	employeeFirstName: { type: String, required: true },
	employeeLastName: { type: String, required: true },
	// employeeDateOfBirth: { type: Date, required: true },
	employeeAddress: { type: String, required: true },
	employeeCity: { type: String, required: true },
	employeeState: {
		type: String, default: "CA",
		uppercase: true,
		minlength: 2,
		maxlength: 2,
	},
	employeeZip: { type: Number, required: true },
	employeePhone: { type: String, required: true },
	employeeDepartment: { type: String, required: true },
	employeePosition: { type: String, required: true },
	employeeHireDate: { type: Date, required: true },
	employeeUpdatedDate: { type: Date, default: Date.now(), required: true },
	employeeCreatedDate: { type: Date, default: Date.now(), required: true }
}, {
	collection: "employees"
});

// Methods that returns the full name
EmployeeSchema.methods.fullName = function(){
	return this.employeeFirstName + " " + this.employeeLastName;
};

// Attach the EmployeeSchema to an actual Model
var Employee = mongoose.model('Employee', EmployeeSchema);

// Make the model available for other modules to require
module.exports = Employee;
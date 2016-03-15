var Customer = function(firstName, lastName, phoneNumber, email) {
	this.firstName = firstName || "";
	this.lastName = lastName || "";
	this.phoneNumber = phoneNumber || "";
	this.email = email || "";

};

Customer.prototype.getFirstName = function() {
	return this.firstName;
}
Customer.prototype.getLastName = function() {
	return this.lastName;
}
Customer.prototype.getPhoneNumber = function() {
	return this.phoneNumber;
}
Customer.prototype.getEmail = function() {
	return this.email;
}

// do setters, equals+hashcode

Customer.prototype.toString = function() {
	return "Customer: " + this.getFirstName() + " " + this.getLastName()
			+ " : " + this.getPhoneNumber() + "/" + this.getEmail();
}
function validatePassword(password) {
  errors = 0;
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    errors++;
  }
  if (password.search(/[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/) > 0) {
    console.log("Password must consist only of letters and digits");
    errors++;
  }
  if (password.search(/[0-9]/) < 2) {
    console.log("Password must have at least 2 digits");
    errors++;
  }
  if (errors === 0) {
    console.log("Password is valid");
  }
}

validatePassword("MyPass123");

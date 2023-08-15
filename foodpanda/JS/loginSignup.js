//function to store data
function store(){
  var name = document.getElementById('signup_name');
  var email = document.getElementById('signup_email');
  var password = document.getElementById('signup_password');
  var address=document.getElementById('signup_address')

  console.log(name, " ", email, " ", password, " ", address);

  if(name.value.length == 0){
      alert('Please fill in name');

  }else if(email.value.length == 0){
      alert('Please fill in email');

  }else if(password.value.length == 0){
      alert('Please fill in password');

  }else if(address.value.length == 0){
    alert('Please fill in address');


  }else if(name.value.length == 0 &&  email.value.length == 0 && password.value.length == 0 && address.value.length == 0){
      alert('Please fill in name and email and password');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);
      localStorage.setItem('address', address.value);
      alert('Your account has been created');
  }
}

//function to check if credentials are correct or not
function check(){
  var storedEmail = localStorage.getItem('email');
  var storedPassword = localStorage.getItem('password');

  var userEmail = document.getElementById('login_email');
  var userPassword = document.getElementById('login_password');

  if(userEmail.value == storedEmail && userPassword.value == storedPassword){
    console.log("Account logged in");
  } else {
      alert("Email or password is wrong")
  }
}

//end

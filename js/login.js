// Add Click event handler With The submit Button
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-password');
    const password = passField.value;
    if(email === 'shaifshajed@gmail.com' && password === 'tonoy'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid User');
    }
})
const App = {};
App.getElementById = id => document.getElementById(id);
App.validation = function() {
    const optionValue = this.getElementById('option').value;
    const inputValue = this.getElementById('input').value;
    let isValid = false;
    if (optionValue === 'Email') {
        isValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(inputValue);
    } else if (optionValue === 'Postal') {
        isValid = /^[0-9]{4}$/.test(inputValue);
    } else if (optionValue === 'Phone') {
        isValid = /^(\+88|88)?[0-9]{11}$/.test(inputValue);
    };
    this.getElementById('input').className = `form-control ${isValid ? 'is-valid' : 'is-invalid'}`;
}
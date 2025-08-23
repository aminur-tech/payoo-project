document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault()

    const phoneNumber = 12345678910;
    const pinNumber = 1234;

    const phoneNumberValue = parseInt(document.getElementById('phone-number').value);
    const pinNumberValue =  parseInt(document.getElementById('pin-number').value);

    // console.log(phoneNumberValue,pinNumberValue)

    // const phoneNumberValueConvert = parseInt(phoneNumberValue);  
    // const phonePinValueConvert = parseInt(pinNumberValue);      
    // console.log(phoneNumberValueConvert, phonePinValueConvert)

    if (phoneNumber === phoneNumberValue && pinNumber === pinNumberValue ) {
        window.location.href ='home.html'
    } else {
        alert('Invalid credentials')
    }
})


// add money
const validPin = 1234;

// Add Money
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const amount = parseInt(document.getElementById('add-amount').value);
    const bankAccountNumber = document.getElementById('bank-account-number').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    
   
    if (bankAccountNumber.length < 11) {
        alert('Please provide a valid account number');
        return;
    }
    if (pinNumber !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }

    const totalAvailableBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
});


// Cash Out
document.getElementById('add-cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = parseInt(document.getElementById('cashOut-pin').value);
    const amount = parseInt(document.getElementById('cashOut-amount').value);
    const agentNumber = document.getElementById('cashOut-agent-number').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (agentNumber.length < 11) {
        alert('Please provide a valid agent number');
        return;
    }
    if (pinNumber !== validPin) {
        alert('Please provide valid pin number');
        return;
    }
    if (amount > availableBalance) {
        alert('Insufficient balance!');
        return;
    }

    const totalAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
});


// transfer
document.getElementById('add-transfer-btn').addEventListener('click',function(event){
    event.preventDefault()
    const pinNumber = parseInt(document.getElementById('transfer-pin').value);
    const amount = parseInt (document.getElementById('transfer-amount').value);
    const userAccountNumber = document.getElementById('user-account-number').value;


    const availableBalance = parseInt ( document.getElementById('available-balance').innerText)
    
    
    if(userAccountNumber.length < 11){
        alert('please provide valid account number')
        return;
    }
    if(pinNumber !== validPin){
        alert('please provide valid pin number')
        return;
    }
     if (amount > availableBalance) {
        alert('Insufficient balance!');
        return;
    }

    const totalAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
     alert('Transfer successful!');
})


// bonus
document.getElementById('add-bonus-btn').addEventListener('click', function(event){
    event.preventDefault();

    const coupon = document.getElementById('bonus-coupon').value.trim();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(coupon === ""){
        alert('Please enter a coupon code!');
        return;
    }

    // Example: fixed bonus for valid coupon
    let bonusAmount = 0;
    if(coupon === "100"){
        bonusAmount = 100;
    } else if(coupon === "500"){
        bonusAmount = 500;
    } else {
        alert('Invalid coupon code!');
        return;
    }

    const totalAvailableBalance = availableBalance + bonusAmount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;

    alert(`Congratulations! You got $${bonusAmount} bonus.`);
    document.getElementById('bonus-coupon').value = ""; // clear input
});


// pay
document.getElementById('add-pay-btn').addEventListener('click',function(event){
    event.preventDefault()
    const pinNumber = parseInt(document.getElementById('bill-pin').value);
    const amount = parseInt (document.getElementById('bill-amount').value);
    const billerAccountNumber = document.getElementById('biller-account-number').value;
    const bank = document.getElementById('bank-name');

    const availableBalance = parseInt ( document.getElementById('available-balance').innerText)
    

    if(billerAccountNumber.length < 11){
        alert('please provide valid account number')
        return;
    }
    if(pinNumber !== validPin){
        alert('please provide valid pin number')
        return;
    }

    const totalAvailableBalance =  availableBalance - amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
    alert('Bill pay successful!');
})

// 





//toggling
function hideAllSections() {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashOut-section').style.display = 'none';
    document.getElementById('transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
}

document.getElementById('money-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('add-money-section').style.display = 'block';
});

document.getElementById('cashout-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('cashOut-section').style.display = 'block';
});

document.getElementById('transfer-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('transfer-section').style.display = 'block';
});
document.getElementById('bonus-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('bonus-section').style.display = 'block';
});
document.getElementById('pay-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('pay-section').style.display = 'block';
});
document.getElementById('transaction-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('transaction-section').style.display = 'block';
});







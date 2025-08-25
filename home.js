
// add money
const validPin = 1234;
const transactionData = [];

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

    // transaction data
    const data = {
        name : 'Add money',
        date : new Date().toLocaleString()
    }
    transactionData.push(data)

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

     // transaction data
    const data = {
        name : 'Cash Out',
        date : new Date().toLocaleString()
    }
    transactionData.push(data);
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

      // transaction data
    const data = {
        name : 'Transfer Money',
        date : new Date().toLocaleString()
    }
    transactionData.push(data)
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

     // transaction data
    const data = {
        name : 'Bonus',
        date : new Date().toLocaleString()
    }
    transactionData.push(data)
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

     // transaction data
    const data = {
        name : 'Pay Bill',
        date : new Date().toLocaleString()
    }
    transactionData.push(data)
})


// transaction 
document.getElementById('transaction-card').addEventListener('click', function(){
// console.log(transactionData)
const transactionSection = document.getElementById('transaction-section')
transactionSection.innerHTML = "";
for(const data of transactionData){
    const div = document.createElement('div')
    div.innerHTML = `
            <div class="flex justify-between items-center  bg-white rounded-xl p-3">
                <div class="flex items-center">
                    <img src="./assets/wallet1.png" alt="" class="rounded-full bg-[#f4f5f7] p-3">
                    <div class="ml-3">
                        <h2>${data.name}</h2>
                        <p>${data.date}</p>
                    </div>
                </div>
                   <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
    `;
    transactionSection.appendChild(div);
}
})




// Active card
function setActiveCard(cardId) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874F20D]','border-gray-400','text-[#0874F2]');
    }
    document.getElementById(cardId).classList.add('border-[#0874f2]', 'bg-[#0874F20D]','text-[#0874F2]');
}

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
    setActiveCard('money-card');
});


document.getElementById('cashout-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('cashOut-section').style.display = 'block';
    setActiveCard('cashout-card');
});

document.getElementById('transfer-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('transfer-section').style.display = 'block';
    setActiveCard('transfer-card');
});
document.getElementById('bonus-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('bonus-section').style.display = 'block';
    setActiveCard('bonus-card');
});
document.getElementById('pay-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('pay-section').style.display = 'block';
    setActiveCard('pay-card');
});
document.getElementById('transaction-card').addEventListener('click', function(){
    hideAllSections();
    document.getElementById('transaction-section').style.display = 'block';
    setActiveCard('transaction-card');
});







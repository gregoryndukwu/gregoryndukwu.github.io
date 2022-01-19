var rudyTimer = (() => {
    return () => {
        timer = null;
        if (timer === null) {
            timer = setInterval(rudy, 200);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function rudy() { 
    document.getElementById("output").innerHTML += "Rudy!";
}

function stopRudy() { 
    clearInterval(timer);   
}

function clearRudy(){
    document.getElementById("output").innerHTML = "";
}


window.onload = () => {
    //associating button click event
    

    text = document.getElementById("text");
    btnNewAccount = document.getElementById("btnNewAccount");
    inputAccount = document.getElementById("accountName");
    depositInformation = document.getElementById("deposit");
   
    btnNewAccount.onclick = accountHandler;
    
};

// Module for account creation- second question
var text, inputAccount, depositInformation, btnNewAccount;
var accountInfoList = [];

var createAccount = (accountName, deposit) => {
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': () => {
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};

var accountHandler = () => {
    let newAccount = createAccount(
        inputAccount.value,
        depositInformation.value
    );

    text.value =    text.value + 
                        (accountInfoList.length === 0 ? "": "\n") +
                        newAccount.toString();

    accountInfoList.push(newAccount);
    console.log("Account Info List:", accountInfoList);
};
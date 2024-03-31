#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 2323;
console.log("Welcome!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a withdraw method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.WithdrawMethod === "Fast Cash") {
            let fastAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 5000, 10000, 20000, 30000]
                }
            ]);
            if (fastAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastAns.fastCash;
                console.log(`${fastAns.fastCash} withdraw successfully`);
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.WithdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to withdraw"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
    }
    if (operationAns.operation === "Check Balance")
        console.log(`Your balance is ${myBalance}`);
}
else {
    console.log("Incorrect pin");
}

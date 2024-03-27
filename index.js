#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2468;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code "
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select operation",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient amount!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
        ;
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "amountSelector",
                type: "list",
                message: "Please select amount",
                choices: ["1000", "2500", "5000", "7500", "10000", "12000"]
            }
        ]);
        if (selectAmount.amountSelector > myBalance) {
            console.log("Insufficient amount!");
        }
        else {
            myBalance -= selectAmount.amountSelector;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
        ;
    }
}
else {
    console.log("Invalid pin code");
}
;

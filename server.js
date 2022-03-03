const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password: 'bob44', 
        database: 'employees_db'
    }, 
    console.log(`Connected to the employees database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

function startPrompt() {
    inquirer.prompt([
        {
            type: 'list', 
            name: 'choice',
            message: 'Which action would you like to take?', 
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        }
    ]).then((userAnswers) => {
        switch(userAnswers.choice) {
            case 'View All Departments': 
                console.log(userAnswers.choice);
                break;
            case 'View All Roles': 
                console.log(userAnswers.choice);
                break;
            case 'View All Employees': 
                console.log(userAnswers.choice);
                break;
            case 'Add a Department': 
                console.log(userAnswers.choice);
                break;
            case 'Add a Role':
                console.log(userAnswers.choice);
                break;
            case 'Add an Employee':
                console.log(userAnswers.choice);
                break;
            case 'Update an Employee Role':
                console.log(userAnswers.choice);
                break;
        }
    })
}

startPrompt();
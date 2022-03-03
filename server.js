const express = require('express');
const res = require('express/lib/response');
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
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit the Application'],
            loop: false
        }
    ]).then((userAnswers) => {
        switch(userAnswers.choice) {
            case 'View All Departments': 
                db.query('SELECT * FROM department', (err, rows) => {
                    if(err) { 
                        res.status(500).json( {error: err.message} );
                        return;
                    }
                    console.table(rows);
                    startPrompt();
                });
                break;
            case 'View All Roles': 
                db.query('SELECT * FROM role', (err, rows) => {
                    if(err) { 
                        res.status(500).json( {error: err.message} );
                        return;
                    }
                    console.table(rows);
                    startPrompt();
                });
                break;
            case 'View All Employees': 
                db.query('SELECT * FROM employee', (err, rows) => {
                    if(err) { 
                        res.status(500).json( {error: err.message} );
                        return;
                    }
                    console.table(rows);
                    startPrompt();
                });
                break;
            case 'Add a Department': 
                
                break;
            case 'Add a Role':
                
                break;
            case 'Add an Employee':
                
                break;
            case 'Update an Employee Role':
                
                break;
            default:
                console.log('Thanks for using our application! Ctrl+c to stop.');
                break;
        }
    })
}

startPrompt();
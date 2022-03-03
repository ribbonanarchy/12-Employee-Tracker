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
                inquirer.prompt([{
                    type: 'input', 
                    name: 'newDepartment',
                    message: "What is the name of the department you'd like to add?"
                }]).then(department => {
                    db.query(`INSERT INTO department (name) VALUES ('${department.newDepartment}')`, (err, result) => {
                        if (err) throw err;
                        console.log(`Department of ${department.newDepartment} added.`);
                    });
                    db.query('SELECT * FROM department', (err, rows) => {
                        if(err) { 
                            res.status(500).json( {error: err.message} );
                            return;
                        }
                        console.table(rows); 
                        startPrompt();
                    });
                });
                break;
            case 'Add a Role':
                inquirer.prompt([
                    {
                        type: 'input', 
                        name: 'newTitle',
                        message: "What is the name of the role you'd like to add?"
                    }, 
                    {
                        type: 'input', 
                        name: 'newSalary', 
                        message: 'What is the salary for this role?'
                    }, 
                    {
                        type: 'input', 
                        name: 'newRoleDept', 
                        message: 'To what department does this role belong?'
                    }
                ]).then(role => {
                    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${role.newTitle}', '${role.newSalary}', '${role.newRoleDept}')`, (err, result) => {
                        if (err) throw err;
                        console.log(`Role of ${role.newTitle} added.`);
                    });
                    db.query('SELECT * FROM role', (err, rows) => {
                        if(err) { 
                            res.status(500).json( {error: err.message} );
                            return;
                        }
                        console.table(rows); 
                        startPrompt();
                    });
                });
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
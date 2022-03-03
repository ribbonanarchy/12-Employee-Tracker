# Employee Tracker

Title: Employee Tracker    
Developer: Robyn Arnecke    

---

## Summary 

This application uses Node Inquirer and MySQL to allow the user to view and update an employee database. Tables in the database include departments, roles, and employees. The user is presented with a list of action options to either view or update the tables. If the user chooses to update any of the tables, they are prompted to enter information for a new entry and then they are shown the newly updated table. 

Here is a video to demonstrate the functionality of the application from start to finish: https://watch.screencastify.com/v/keYna4PH1nI6yVCumWSe

--- 

## Development

I started development by writing the schema.sql to reflect the given organization of tables. Next I got the server up and running, and started writing the Inquirer prompt to ask the user which action they would like to take. At this point I needed to write a seeds.sql to populate the database with some information so that I could correctly test the viewing functionality. Once I knew the questions were prompting correctly, I worked out the functionality of each potential user choice. 

---

## Installation

To install all the dependencies after downloading the files, run `npm i` in the command line. 

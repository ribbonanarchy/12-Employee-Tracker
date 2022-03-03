INSERT INTO department (name)
VALUES  ("Mathematics"), 
        ("Computer Science"), 
        ("Chemistry");

INSERT INTO role (department_id, title, salary)
VALUES  (1, "Professor", 60000),
        (1, "Calculator", 20000),
        (2, "Manager", 100000),  
        (2, "Engineer", 70000), 
        (3, "Lab Analyst", 50000),
        (3, "Research Assistant", 45000);

INSERT INTO employee (role_id, manager_id, first_name, last_name)
VALUES  (1, NULL, "Bob", "Odenkirk"), 
        (2, 1, "Kirk", "Odenbob"), 
        (3, NULL, "Stacy", "Fritz"), 
        (4, 3, "Tom", "Tomato"), 
        (5, NULL, "Patrick", "Benson"), 
        (6, 5, "Ben", "Patrickson");

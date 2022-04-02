/*
  Write an SQL query to report the IDs of all the employees with missing information. The information of an employee is missing if:

  The employee's name is missing, or
  The employee's salary is missing.
  Return the result table ordered by employee_id in ascending order.
  
  Solution by TribalK
*/
# Write your MySQL query statement below
SELECT e.employee_id FROM Employees e LEFT JOIN Salaries s ON e.employee_id = s.employee_id WHERE e.employee_id NOT IN (SELECT employee_id FROM Salaries) UNION SELECT s.employee_id FROM Salaries s LEFT JOIN Employees e ON s.employee_id = e.employee_id WHERE s.employee_id NOT IN (SELECT employee_id FROM Employees) ORDER BY employee_id;

# Adventure works database based queries 
Source : [W3resource question](https://www.w3resource.com/sql-exercises/adventureworks/adventureworks-exercises.php)

### 1. Employees Sorted by Job Title

```sql
SELECT * FROM HumanResources.Employee ORDER BY JobTitle;

```
### 2. From the following table write a query in SQL to retrieve all rows and columns from the employee table using table aliasing in the Adventureworks database. Sort the output in ascending order on lastname.

```sql
select * from person.person order by lastname;

```
### 3. From the following table write a query in SQL to return all rows and a subset of the columns (FirstName, LastName, businessentityid) from the person table in the AdventureWorks database. The third column heading is renamed to Employee_id. Arranged the output in ascending order by lastname.

```sql
select firstname, lastname, businessentityid as employee_id from person.person order by lastname;
```
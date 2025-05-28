# Leetcode SQL Queries

Source : https://leetcode.com/problemset/database/

## Queries 

1. query to create leetcode database
```sql
create database leetcode;
```

### Basic Queries 
1. Write a solution to find the ids of products that are both low fat and recyclable. 1757
```sql  
--create user define data type
create type category as enum('Y', 'N');
--create table based on question
create table products (product_id int primary key, low_fats category, recyclable category);
--Insert values to the table 
insert into products values (0,'Y','N'), (1, 'Y', 'Y'), (2, 'N', 'Y'), (3, 'Y', 'Y'), (4, 'N', 'N');
--Query to retrive the data based on question
SELECT product_id FROM products where low_fats = 'Y' and recyclable = 'Y';
```

2. Find the names of the customer that are not referred by the customer with id = 2. 584
```sql
--create table based on question
create table customer (id int primary key, name varchar(64), referee_id int);
--Insert values to the table 
insert into customer (id, name, referee_id) values (1, 'Will', null), (2, 'Jane', null), (3, 'Alex', 2), (4, 'Bill', null), (5, 'Zack', 1), (6,'Mark', 2);
--Query to retrive the data based on question
SELECT name FROM customerWHERE referee_id != 2 OR referee_id IS NULL;
```

3. Write a solution to find the name, population, and area of the big countries.595
```sql
--create table based on question
create table worldbigcountry (name varchar(64) primary key , continent varchar(64), area int, population int, gdp bigint);
--Insert values to the table 
insert into worldbigcountry values ( 'Afghanistan','Asia',652230,25500100,20343000000), ('Albania', 'Europe',28748,2831741,1296000000), ('Albania', 'Africa',2381741,37100000,188681000000),('Andorra' ,'Europe',468 ,78115,3712000000), ( 'Angola', 'Africa',1246700,20609294,100990000000);
--Query to retrive the data based on question
SELECT name , population, area FROM world WHERE area >= 3000000 OR population >= 25000000;
```
4. Write a solution to find all the authors that viewed at least one of their own articles.1148
```sql
--create table based on question
create table authorview (article_id int, author_id int, view_id int, view_date date);
--Insert values to the table 
insert into authorview values(1, 3, 5, '2019-08-01'),(1,3,6,'2019-08-02'),(2,7,7,'2019-08-01'),(2,7,6,'2019-08-02'),(4,7,1,'2019-07-22'),(3,4,4,'2019-07-21'), (3,4,4,'2019-07-21');
--Query to retrive the data based on question
SELECT DISTINCT author_id as "id" FROM views WHERE author_id = viewer_id ORDER BY author_id asc;
```

5. Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15. 1683
```sql
--create table based on question
create table tweetdetails (tweet_id int primary key, content varchar(100));
--Insert values to the table 
insert into tweetdetails values (1, 'Let us Code'), (2, 'More than fifteen chars are here!');
--Query to retrive the data based on question
SELECT tweet_id FROM tweetdetails WHERE length(content) > 15;
```

6. Write a solution to find the second highest distinct salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).176
```sql
--create table based on question
create table secondhighestsalary (id int, salary int);
--Insert values to the table 
insert into secondhighestsalary values(1,100),(2,200), (3,300);
--Query to retrive the data based on question
SELECT DISTINCT salary from secondhighestsalary order by salary desc limit 1 offset 1;
```
7. Write a solution to rearrange the Products table so that each row has (product_id, store, price). If a product is not available in a store, do not include a row with that product_id and store combination in the result table.1795
```sql
--create table based on question
create table products1795 (product_id int primary key, store1 int, store2 int, store3 int);
--Insert values to the table 
insert into  products1795 values (0, 95, 100,105) , (1, 70,null, 80);
--Query to retrive the data based on question
--Query to retrive the data based on question
(select product_id , 'store1' as store, store1 as price from products1795 where store1 is not null) union (select product_id, 'store2' as store, store2 as price from products1795 where store2 is not null) union (select product_id, 'store3' as store , store3 as price from products1795 where store3 is not null);
```

8. Write a solution to calculate the number of bank accounts for each salary category.1907
```sql
--create table based on question
create table accounts1907 (account_id int unique, income int);
--Insert values to the table 
insert into accounts1907 values (3,108939),(2,12747),(8,87709),(6,91796);
--Query to retrive the data based on question
--Query to retrive the data based on question
(select 'Low Salary' as category, sum(case when income < 20000 then 1 else 0 end) from accounts1907) union (select 'Average Salary' as category , sum (case when income >= 20000 and income <=50000 then 1 else 0 end) from accounts1907) union (select 'High Salary' as category, sum (case when income > 50000 then 1 else 0 end) from accounts1907);
```

9. Find the IDs of the employees whose salary is strictly less than $30000 and whose manager left the company. When a manager leaves the company, their information is deleted from the Employees table, but the reports still have their manager_id set to the manager that left
```sql
--create table based on question
create table employee1978 (employee_id int primary key, name varchar(64), manager_id int, salary int);
--Insert values to the table 
insert into employee1978 values (3,'Mila',9,60301),(12,'Antonella',NULL,31000),(13,'Emery',NULL,67084),(1,'Kalel',11,21241),(9,'Mikaela',NULL,50937),(11,'Joziah',6,28485);
--Query to retrive the data based on question
select employee_id from employees where manager_id not in (select employee_id from employee1978) and salary < 30000 order by employee_id;
```

### Joins
1. Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null 1378
```SQL
--create table based on question
create table employees (id int primary key , name varchar(64));
--Insert values to the table 
insert into employees values (1, 'Alice'), (7, 'Bob'), (11, 'Meir'),(90, 'Winston'), (3, 'Janothon');
--create table based on question
create table employeeuni (id int , unique_id int , primary key (id, unique_id));
--Insert values to the table 
insert into employeeuni values (3,1), (11, 2), (90, 3);
--Query to retrive the data based on question
select unique_id , name from employeeuniqueid left join employeeuni using (id);
```

2. Write a solution to report the product_name, year, and price for each sale_id in the Sales table. 1068
```sql
--create table based on question
create table productdetail (product_id int, product_name varchar(64));
alter table productdetail add constraint pk_product primary key(product_id);
--create table based on question
create table sales (sales_id int primary key, product_id int , year int, quantity int, price int, foreign key(product_id) references productdetail(product_id));
--Insert values to the table 
insert into productdetail values (100 , 'Nokia'),(200, 'Apple'), (300, 'Samsung');
--Insert values to the table 
insert into sales values (1, 100, 2008, 10 , 5000),(2, 100, 2009, 12, 5000), (7, 200, 2011, 15, 9000);
--Query to retrive the data based on question
select product_name , year, price from productdetail inner join sales using(product_id);
```

3. Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits
```sql
--create table based on question
create table visitdetails (visit_id int unique, customer_id int);
--create table based on question
create table transactions (trans_id int unique, visit_id int, amount int);
--Insert values to the table 
insert into visitdetails values (1, 23), (2, 9), (4, 30), (5, 54), (6, 96), (7, 54), (8, 54);
--Insert values to the table 
insert into transactions values (2,5,310), (3,5,300), (9,5,200), (12,1,910),(13,2,970);
--Query to retrive the data based on question
SELECT customer_id, count(visit_id) as count_no_trans FROM visitdetails full outer join Transactions using (visit_id) where trans_id is null group by customer_id;
```

4. Write a solution to find all dates' id with higher temperatures compared to its previous dates (yesterday).197
```sql
--create table based on question
create table weather (id int unique, recorddate date, temperature int);
--Insert values to the table 
insert into wheather values(1, '2015-01-01',10), (2,'2015-01-02',25), (3, '2015-01-03', 20), (4, '2015-01-04' , 30);
--Query to retrive the data based on question
SELECT w.id as "Id" FROM weather w join weather r on w.recorddate- r.recorddate = 1 where w.temperature > r.temperature;
```

5. There is a factory website that has several machines each running the same number of processes. Write a solution to find the average time each machine takes to complete a process. 1661
```sql
--create user define data type
 create type activity as enum('start' , 'end');
 --Insert values to the table 
 insert into activities values (0, 0, 'start', 0.712), (0, 0, 'end', 1.520),(0, 1, 'start', 3.140),(0, 1, 'end', 4.120),(1, 0, 'start', 0.550),(1, 0, 'end', 1.550),(1, 1, 'start', 0.430),(1, 1, 'end', 1.420),(2, 0, 'start', 4.100),(2, 0, 'end', 4.512), (2, 1, 'start', 2.500),(2, 1, 'end', 5.000);
 --Query to retrive the data based on question
SELECT a.machine_id, cast(avg(b.timestamp - a.timestamp) as decimal(5,3)) as processing_time from activities a inner join activities b using (machine_id) where a.activity_type = 'start' and b.activity_type = 'end' group by a.machine_id;
```

6. Write a solution to report the name and bonus amount of each employee with a bonus less than 1000. 577
```sql
--create table based on question
create table employee (empId int unique, name varchar(30) , supervisor int, salary int);
--create table based on question
create table bonus (empid int unique , bonus int);
--Insert values to the table 
insert into employee values (3, 'Brad' , null, 4000), (1 , 'John', 3, 1000), (2, 'Dan', 3, 2000) , (4, 'Thomas' , 3, 4000);
--Insert values to the table 
insert into bonus values (2, 500), (4, 2000);
--Query to retrive the data based on question
SELECT name , bonus FROM Employee full outer join Bonus using(empid) where bonus < 1000 or bonus < 1000 is unknown;
```

7. Write a solution to find the number of times each student attended each exam.
```sql
--Query to retrive the data based on question
SELECT s.student_id, s.student_name, sb.subject_name, count(e.subject_name) as attended_exams from students s cross join subjects sb left join Examinations e on s.student_id = e.student_id AND sb.subject_name = e.subject_name group by s.student_id, s.student_name, sb.subject_name order by s.student_id, sb.subject_name;
```
8. Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead. 175
```sql
--create table based on question
create table person (personid int primary key, lastname varchar(64), firstname varchar(64));
--create table based on question
create table address (addressid int primary key, personid int, city varchar(64), state varchar(64) , foreign key(personid) references person(personid));
--Insert values to the table 
insert into person values (1 , 'Wang' , 'Allen'), (2, 'Alice', 'Bob');
--Insert values to the table 
insert into address values (1, 2, 'New York City' , 'New york');
--Query to retrive the data based on question
select firstname , lastname , city, state from person left join address using (personid);
--Query to retrive the data based on question
SELECT firstName AS "firstName", lastName as "lastName", city, state FROM person left JOIN address using(personid);
```

9. Write a solution to find the employees who earn more than their managers.
```sql
--Query to retrive the data based on question
SELECT e.name AS "Employee" FROM employee e JOIN employee m ON e.managerid = m.id WHERE e.salary > m.salary;
``` 

10. Write a solution to find managers with at least five direct reports.
```sql
--create table based on question
 create table employeereport (id int primary key , name varchar(64), department varchar(64), managerid int);
 --Insert values to the table 
 insert into employeereport values (101, 'John', 'A', NULL), (102, 'Dan', 'A', 101), (103, 'James', 'A', 101), (104, 'Amy', 'A', 101), (105, 'Anne', 'A', 101), (106, 'Ron', 'B', 101);
 --Query to retrive the data based on question
  select e.name from employeereport e inner join (select managerid,count(managerid) from employeereport group by managerid) as manager on e.id = manager.managerid where count >=5;
```

11. The confirmation rate of a user is the number of 'confirmed' messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is 0. Round the confirmation rate to two decimal places.
```sql
--create table based on question
create table signups (user_id int unique, timestamp timestamp);
--create user define data type
create type enum as enum('timeout', 'confirmed');
--create table based on question
create table conformation (user_id int primary key, timestamp timestamp, action enum);
--Insert values to the table 
insert into signups values (3, '2020-03-21 10:16:13'), (7, '2020-01-04 13:57:59'), (2, '2020-07-29 23:09:44'), (6, '2020-12-09 10:39:37');  
--Insert values to the table 
insert into conformation values (3, '2021-01-06 03:30:46', 'timeout'), (3, '2021-07-14 14:00:00', 'timeout'), (7, '2021-06-12 11:57:29', 'confirmed'), (7, '2021-06-13 12:58:28', 'confirmed'), (7, '2021-06-14 13:59:27', 'confirmed'), (2, '2021-01-22 00:00:00', 'confirmed'), (2, '2021-02-28 23:59:59', 'timeout');
--Query to retrive the data based on question
select s.user_id, round(avg(case when action = 'confirmed' then 1 else 0 end),2) as confirmation_rate from signups s left join confirmations c on s.user_id = c.user_id group by s.user_id;
```

12. Write a solution to find all customers who never order anything.183
```sql
--create table based on question
create table customer183(id int primary key, name varchar(64));
--create table based on question
create table order183(id int primary key, customer_id int, foreign key(customer_id) references customer183(id));
--Insert values to the table 
insert into customer183 VALUES (1, 'Joe'), (2, 'Henry'), (3, 'Sam'), (4, 'Max');
--Query to retrive the data based on question
select name from customer183 full outer join order183 on customer183.id = order183.customer_id where order183.id is null;
```

13. Write a solution to find employees who have the highest salary in each of the departments.184
```sql
--create table based on question
create table employee184 (id int primary key, name varchar(64), salary int , departmentid int);
--create table based on question
create table department184 (id int, name varchar(64));
alter table department184 add constraint pk_dept primary key(id);
alter table employee184 add constraint fk_employee foreign key(departmentid) references department184(id);
--Insert values to the table 
insert into department184 values (1,'IT') ,(2, 'Sales');
--Insert values to the table 
insert into employee184 VALUES (1, 'Joe', 70000, 1), (2, 'Jim', 90000, 1), (3, 'Henry', 80000, 2), (4, 'Sam', 60000, 2), (5, 'Max', 90000, 1);
--Query to retrive the data based on question
with highsalary as (select d.name as department ,e.name as name, e.salary, rank() over (partition by d.name order by salary desc) as row from employee184 e inner join department184 d on e.departmentid = d.id ) select department, name, salary from highsalary where row = 1;
```

14. A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.185
```sql
--create table based on question
create table department185 (id int, name varchar(64));
alter table department185 add constraint pk_dept1 primary key(id);
--create table based on question
create table employee185 (id int primary key, name varchar(64), salary int , departmentid int, foreign key (departmentid) references department185(id));
--Insert values to the table 
insert into department185 values (1,'IT') ,(2, 'Sales');
--Insert values to the table 
insert into employee185 values (1, 'Joe', 85000, 1), (2, 'Henry', 80000, 2), (3, 'Sam', 60000, 2), (4, 'Max', 90000, 1), (5, 'Janet', 69000, 1), (6, 'Randy', 85000, 1), (7, 'Will', 70000, 1);
--Query to retrive the data based on question
with maxsalary as (select d.name as department, e.name as name , e.salary, dense_rank() over (partition by d.name order by salary desc) as row from department185 d inner join employee185 e on d.id = e.departmentid) select department , name, salary from maxsalary where row <= 3;
```

15. Find all numbers that appear at least three times consecutively. 180
```sql
--create table based on question
create table logs (id serial primary key, num varchar(2));
--Insert values to the table 
insert into logs values (1, '1'), (2, '1'), (3, '1'), (4, '2'), (5, '1'), (6, '2'), (7, '2');
--Query to retrive the data based on question
select distinct l1.num as "ConsecutiveNums" from logs l1 ,logs l2, logs l3 where l1.num = l2.num and l2.num = l3.num and l1.id =l2.id - 1 and l2.id = l3.id - 1;
```

16. Write a solution to find the names of all the salespersons who did not have any orders related to the company with the name "RED". 607
```sql
--create table based on question
create table company607 (com_id int primary key, name varchar(64) , city varchar(64));
--create table based on question
create table salesperson607 (order_id int primary key, order_date date, com_id int, sales_id int, amount int);
--create table based on question
create table orders607 (order_id int primary key, order_date date, com_id int, sales_id int, amount int, foreign key (com_id) references orders607(com_id), foreign key (sales_id) references salesperson607(sales_id));
--Insert values to the table 
insert into company607 VALUES (1, 'RED', 'Boston'), (2, 'ORANGE', 'New York'), (3, 'YELLOW', 'Boston'), (4, 'GREEN', 'Austin');
--Insert values to the table 
 insert into salesperson607 VALUES (1, 'John', 100000, 6, '2006-04-01'), (2, 'Amy', 12000, 5, '2010-05-01'), (3, 'Mark', 65000, 12, '2008-12-25'), (4, 'Pam', 25000, 25, '2005-01-01'), (5, 'Alex', 5000, 10, '2007-02-03');
 --Insert values to the table 
insert into orders607 VALUES (1, '2014-01-01', 3, 4, 10000), (2, '2014-02-01', 4, 5, 5000), (3, '2014-03-01', 1, 1, 50000), (4, '2014-04-01', 1, 4, 25000);
--Query to retrive the data based on question
 select name from salesperson607 where sales_id not in  (select s.sales_id from salesperson607 s  join orders607 o using (sales_id)  join company607 c using (com_id) where c.name = 'RED');
```
--Query to retrive the data based on question
17. Write a solution to select the product id, year, quantity, and price for the first year of every product sold. If any product is bought multiple times in its first year, return all sales separately.1070
```sql
--create table based on question
create table product1070 (product_id int primary key, product_name varchar(64));
--create table based on question
create table sales1070 (sales_id int , product_id int, year int , quantity int, price int ,primary key (sales_id, year),foreign key(product_id) references product1070(product_id));
--Insert values to the table 
insert into product1070 VALUES (100, 'Nokia'), (200, 'Apple'), (300, 'Samsung');
--Insert values to the table 
insert into sales1070 VALUES (1, 100, 2008, 10, 5000), (2, 100, 2009, 12, 5000), (7, 200, 2011, 15, 9000);
--Query to retrive the data based on question
with first as (select product_id , min(year) from sales1070 group by product_id) select s.product_id, s.year as first_year, s.quantity, s.price from sales1070 s inner join first f on f.product_id = s.product_id and f.min = s.year ;
```
18. Write a solution to report the products that were only sold in the first quarter of 2019. That is, between 2019-01-01 and 2019-03-31 inclusive.
```sql
--create table based on question
create table product1084 (product_id int primary key, product_name varchar(64), unit_price int);
--create table based on question
 create table sales1084 (seller_id int, product_id int , buyer_id int, sale_date date, quantity int, price int , foreign key(product_id) references product1084(product_id));
 --Insert values to the table 
  insert into product1084  VALUES (1, 'S8', 1000), (2, 'G4', 800), (3, 'iPhone', 1400);
  --Insert values to the table 
  insert into sales VALUES (1, 1, 1, '2019-01-21', 2, 2000), (1, 2, 2, '2019-02-17', 1, 800), (2, 2, 3, '2019-06-02', 1, 800), (3, 3, 4, '2019-05-13', 2, 2800);
  --Query to retrive the data based on question
  select product_id, product_name from product1084 where product_id not in ( select product_id from product1084 inner join sales1084 using (product_id) where sale_date not between '2019-01-01' and '2019-03-31');
  --another method
  --Query to retrive the data based on question
  select p.product_id, p.product_name from product p join sales s using(product_id) group by p.product_id, p.product_name having min(s.sale_date) >= '2019-01-01' and max(s.sale_date) <= '2019-03-31';
```
19. Return the result table ordered by travelled_distance in descending order, if two or more users traveled the same distance, order them by their name in ascending order
```sql
--create table based on question
create table users1407 (id int unique, name varchar(64));
--create table based on question
create table rides1407 (id int unique, user_id int, distance int);
--Insert values to the table 
insert into users1407 VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Alex'), (4, 'Donald'), (7, 'Lee'), (13, 'Jonathan'), (19, 'Elvis');
--Insert values to the table 
insert into rides1407 VALUES (1, 1, 120), (2, 2, 317), (3, 3, 222), (4, 7, 100), (5, 13, 312), (6, 19, 50), (7, 7, 120), (8, 19, 400), (9, 7, 230);
--Query to retrive the data based on question
select u.name, sum(coalesce(distance,0)) as travelled_distance from users1407 u left join rides1407 r on r.user_id = u.id group by u.id, u.name order by travelled_distance desc, name;
```

20. Write a solution to report the IDs of all the employees with missing information. 1965
```sql
--create table based on question
 create table employees1965 (employee_id int unique, name varchar(64));
 --create table based on question
 create table salaries1965 (employee_id int unique, salary int);
 --Insert values to the table 
 insert into salaries1965 values (5,76071),(1,22517),(4,63539);
 --Insert values to the table 
insert into employees1965 values (2,'Crew'),(4,'Haven'),(5,'Kristian');
--Query to retrive the data based on question
select employee_id from employees1965 full outer join salaries1965 using (employee_id) where name is null or salary is null
```

21. Write a solution to report the ids and the names of all managers, the number of employees who report directly to them, and the average age of the reports rounded to the nearest integer. 1731
```sql
--create table based on question
create table employee1731 (employee_id int, name varchar(64),reports_to int, age int);
--Insert values to the table 
insert into employee1731 values (9,'Hercy',NULL,43),(6,'Alice',9,41),(4,'Bob',9,36),(2,'Winston',NULL,37);
--Query to retrive the data based on question
 select a.employee_id, a.name , count(b.employee_id) as reports_count, round(avg(a.age)) as average_age from employee1731 a inner join employee1731 b on a.employee_id = b.reports_to group by a.employee_id, a.name; 
```

22. Write a solution to find for each user, the join date and the number of orders they made as a buyer in 2019.
```sql
--create table based on question
create table users1158 (user_id int primary key, join_date date, favorite_brand varchar(64));
--create table based on question
create table item1158 (item_id int primary key , item_brand varchar(64));
--create table based on question
create table order1158 (order_id int primary key, order_date date, item_id int , buyer_id int , seller_id int, foreign key(item_id) references item1158(item_id), foreign key(seller_id) references users1158(user_id), foreign key(buyer_id) references users1158(user_id));
--Insert values to the table 
insert into users1158 values (1,'2018-01-01','Lenovo'),(2,'2018-02-09','Samsung'),(3,'2018-01-19','LG'),(4,'2018-05-21','HP');
--Insert values to the table 
insert into items values (1,'Samsung'),(2,'Lenovo'),(3,'LG'),(4,'HP');
--Insert values to the table 
insert into order1158 values (1,'2019-08-01',4,1,2),(2,'2018-08-02',2,1,3),(3,'2019-08-03',3,2,3),(4,'2018-08-04',1,4,2),(5,'2018-08-04',1,3,4),(6,'2019-08-05',2,2,4);
--Query to retrive the data based on question
select user_id, join_date, coalesce(count(order_id),0) from users1158 u left outer join order1158 o on u.user_id = o.buyer_id and order_date between '2019-01-01' and '2019-12-31' group by user_id ;
```

23. A subscription service wants to analyze user behavior patterns. The company offers a 7-day free trial, after which users can subscribe to a paid plan or cancel. 3497
```sql
--create table based on question
create table useractivity3467 (user_id int , activity_date date, activity_type varchar(64) , activity_duration int, unique(user_id, activity_date, activity_type));
--Insert values to the table 
 insert into useractivity3467 values (1,'2023-01-01','free_trial',45),(1,'2023-01-02','free_trial',30),(1,'2023-01-05','free_trial',60),(1,'2023-01-10','paid',75),(1,'2023-01-12','paid',90),(1,'2023-01-15','paid',65),(2,'2023-02-01','free_trial',55),(2,'2023-02-03','free_trial',25),(2,'2023-02-07','free_trial',50),(2,'2023-02-10','cancelled',0),(3,'2023-03-05','free_trial',70),(3,'2023-03-06','free_trial',60),(3,'2023-03-08','free_trial',80),(3,'2023-03-12','paid',50),(3,'2023-03-15','paid',55),(3,'2023-03-20','paid',85),(4,'2023-04-01','free_trial',40),(4,'2023-04-03','free_trial',35),(4,'2023-04-05','paid',45),(4,'2023-04-07','cancelled',0);
 --Query to retrive the data based on question
 select a.user_id, round( trial_avg_duration,2), round(paid_avg_duration,2) from (select user_id, avg(activity_duration) as trial_avg_duration from useractivity3467 where activity_type = 'free_trial' group by user_id) as a inner join (select user_id, avg(activity_duration ) as paid_avg_duration from useractivity3467 where activity_type = 'paid' group by user_id) as b using (user_id);
```

24. Amazon wants to implement the Customers who bought this also bought... feature based on co-purchase patterns.3521
```sql
--create table based on question
 create table productinfo(product_id int primary key , category varchar(64), price int);
 --create table based on question
 create table productpurchases1 (user_id int, product_id int, quantity int, unique(user_id, product_id));
 --Insert values to the table 
 insert into productinfo values (101,'Electronics',100),(102,'Books',20),(103,'Clothing',35),(104,'Kitchen',50),(105,'Sports',75);
 --Insert values to the table 
 insert into productpurchases values (1,101,2),(1,102,1),(1,103,3),(2,101,1),(2,102,5),(2,104,1),(3,101,2),(3,103,1),(3,105,4),(4,101,1),(4,102,1),(4,103,2),(4,104,3),(5,102,2),(5,104,1);
 --Query to retrive the data based on question
select a.product_id as product1_id , b.product_id as product2_id,pi.category as product1_category, pi1.category as product2_category, count( distinct a.user_id) as customer_count from productpurchases a inner join productpurchases b on a.product_id < b.product_id and a.user_id = b.user_id inner join productinfo pi on a.product_id = pi.product_id inner join productinfo pi1 on pi1.product_id = b.product_id  group by 1, 2,3,4 having count(a.user_id) >= 3 order by customer_count desc, 1,2;
```

25. Amazon wants to understand shopping patterns across product categories.3554
```sql
--create table based on question
create table productinfo3554 (product_id int unique, category varchar(64) , price int);
--create table based on question
create table productpurchases3554 (user_id int, product_id int, quantity int, unique(user_id, product_id));
--Insert values to the table 
 insert into productInfo3554 values (101,'Electronics',100),(102,'Books',20),(103,'Books',35),(201,'Clothing',45),(202,'Clothing',60),(301,'Sports',75),(401,'Kitchen',50);
 --Insert values to the table 
 insert into productpurchase3554 values (1,101,2),(1,102,1),(1,201,3),(1,301,1),(2,101,1),(2,102,2),(2,103,1),(2,201,5),(3,101,2),(3,103,1),(3,301,4),(3,401,2),(4,101,1),(4,201,3),(4,301,1),(4,401,2),(5,102,2),(5,103,1),(5,201,2),(5,202,3);
 --Query to retrive the data based on question
 with cte as (select * from productpurchases3554 inner join productinfo3554 using (product_id)), cte2 as (select a.category as category1 , b.category as category2, count(distinct a.user_id) as customer_count from cte a inner join cte b on a.category < b.category and a.user_id = b.user_id group by 1,2 having count(distinct a.user_id) > 2) select * from cte2 order by 3 desc, 1, 2;
```

26. Write a solution to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.
```sql
--create table based on question
create table stadium (id int , visited_date date unique, people int);
 --Insert values to the table 
 insert into stadium values (1, '2017-01-01', 10), (2, '2017-01-02', 109), (3, '2017-01-03', 150), (4, '2017-01-04', 99), (5, '2017-01-05', 145), (6, '2017-01-06', 1455), (7, '2017-01-07', 199), (8, '2017-01-09', 188);
 --Query to retrive the data based on question
with cte as(select a.id as id1, b.id as id2, c.id as id3 from stadium a join stadium b on a.id = b.id - 1 join stadium c on b.id = c.id - 1 where a.people >=100 and b.people >= 100 and c.people >= 100), cte1 as((select id1 from cte) union (select id2 from cte) union (select id3 from cte)) select * from stadium where id in (select * from cte1) order by visited_date;
```

### Aggregate functions

1. Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".
```sql
--create table based on question
create table cinema (id int primary key, movie varchar(64), description varchar(64) , rating float);
--Insert values to the table 
 insert into cinema values (1, 'War', 'great 3D', 8.9), (2, 'Science', 'fiction', 8.5), (3, 'irish', 'boring', 6.2), (4, 'Ice song', 'Fantacy', 8.6), (5, 'House card', 'Interesting', 9.1);
 --Query to retrive the data based on question
 select * from cinema where id % 2 = 1 and description != 'boring' order by rating desc;
```
2. Write a solution to find the average selling price for each product. average_price should be rounded to 2 decimal places. If a product does not have any sold units, its average selling price is assumed to be 0.

```sql 
--Insert values to the table 
INSERT INTO prices (product_id, start_date, end_date, price) VALUES (1, '2019-02-17', '2019-02-28', 5), (1, '2019-03-01', '2019-03-22', 20), (2, '2019-02-01', '2019-02-20', 15), (2, '2019-02-21', '2019-03-31', 30);
--Insert values to the table 
INSERT INTO unitssolds (product_id, purchase_date, units) VALUES (1, '2019-02-25', 100), (1, '2019-03-01', 15), (2, '2019-02-10', 200), (2, '2019-03-22', 30);
--Query to retrive the data based on question
 with total(productid, totalvalue, units) as (select p.productid, units * price, units from prices p left join unitsolds u on p.productid = u.productid and u.purchasedate between p.startdate and p.enddate) select productid, coalesce(round(sum(totalvalue)/cast(sum(units) as decimal(5, 2)),2),0) as average_price from total group by productid;
```

3. Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.
```sql
--create table based on question
 create table projectemployee (employee_id int primary key, name varchar(64) , emperience_year int not null);
 --create table based on question
 create table project (project_id int , employee_id int, primary key(project_id, employee_id), foreign key(project_id) references projectemployee(employee_id));
 --Insert values to the table 
 insert into projectemployee VALUES (1, 'Khaled', 3), (2, 'Ali', 2), (3, 'John', 1), (4, 'Doe', 2);
 --Insert values to the table 
  insert into project VALUES (1, 1), (1, 2), (1, 3), (2, 1), (2, 4);
  --Query to retrive the data based on question
 select project_id, round(avg(experience_year) ,2)from project inner join projectemployee using (employee_id) group by project_id; 
```
4. Write a solution to find the percentage of the users registered in each contest rounded to two decimals.
```sql
--create table based on question
create table users (user_id int primary key, user_name varchar(64));
--create table based on question
 create table register (constest_id int primary key, user_id int, foreign key(user_id)  references users(user_id));
 --Insert values to the table 
 insert into users values(6, 'Alice'),(2,'Bob'),(7,'Alex');
 --Insert values to the table 
 insert into register VALUES (215, 6), (209, 2), (208, 2), (210, 6), (208, 6), (209, 7), (209, 6), (215, 7), (208, 7), (210, 2), (207, 2), (210, 7);
 --Query to retrive the data based on question
 with totaluser (total) as (select count(*) from users) select constest_id, round(count(constest_id)/(select total::decimal(5,2) from totaluser) * 100,2) as percentage from register group by constest_id order by percentage desc, constest_id;
```

5. Write a solution to find each query_name, the quality and poor_query_percentage.
```sql
--create table based on question
create table queries (query_name varchar(64), result varchar(64), position int, rating int);
--Insert values to the table 
insert into queries VALUES ('Dog', 'Golden Retriever', 1, 5), ('Dog', 'German Shepherd', 2, 5), ('Dog', 'Mule', 200, 1), ('Cat', 'Shirazi', 5, 2), ('Cat', 'Siamese', 3, 3), ('Cat', 'Sphynx', 7, 4);
--Query to retrive the data based on question
select query_name, round(avg(rating*1.0/position),2) as quality, round(avg(case when rating < 3 then 1 else 0 end)*100.0,2) as poor_query_percentage from queries qu group by query_name;
```

6. Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.
```sql
--create user define data type
create type status as enum ('approved','declined');
--create table based on question
create table transaction1193 (id int primary key, country varchar(64), state status, amount int, trans_date date);
--Insert values to the table 
insert into transaction1193 values (121, 'US', 'approved', 1000, '2018-12-18'), (122, 'US', 'declined', 2000, '2018-12-19'), (123, 'US', 'approved', 2000, '2019-01-01'), (124, 'DE', 'approved', 2000, '2019-01-07');
--Query to retrive the data based on question
select TO_CHAR(trans_date, 'YYYY-MM') AS month, country , count(id) as trans_count, count(case when state = 'approved' then id else null end) as approved_count, sum(amount) as trans_total_amount,sum(case when state = 'approved' then amount else 0 end) as approved_total_amount from transaction1193 group by month, country;
```

7. Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places. 1174
```sql
--create table based on question
 create table delivery (delivery_id int unique, customer_id int, order_date date, cusotmer_pref_delivery_date date);
 --Insert values to the table 
  insert into delivery values VALUES (1, 1, '2019-08-01', '2019-08-02'), (2, 2, '2019-08-02', '2019-08-02'), (3, 1, '2019-08-11', '2019-08-12'), (4, 3, '2019-08-24', '2019-08-24'), (5, 3, '2019-08-21', '2019-08-22'), (6, 2, '2019-08-11', '2019-08-13'), (7, 4, '2019-08-09', '2019-08-09');
  --Query to retrive the data based on question
  with firstorder as (select * , row_number() over (partition by customer_id order by order_date) as orders from delivery) select round(avg(case when order_date = cusotmer_pref_delivery_date then 1 else 0 end) * 100,2) as immediate_percentage from firstorder where orders = 1;
```
8. Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.
```sql
--create table based on question
create table activity550 (player_id int, device_id int, event_date date, games_played int , primary key (player_id, event_date));
--Insert values to the table 
insert into activity550 VALUES (1, 2, '2016-03-01', 5), (1, 2, '2016-03-02', 6), (2, 3, '2017-06-25', 1), (3, 1, '2016-03-02', 0), (3, 4, '2018-07-03', 5);
--Query to retrive the data based on question
--Query to retrive the data based on question
 with firstevent as (select * , row_number() over (partition by player_id order by event_date) as rownum from activity550), player as (select count(distinct a.player_id) from firstevent a inner join firstevent b using (player_id) where a.event_date + interval '1day' = b.event_date and a.rownum in (1,2)) select round((select * from player)*1.0/count(distinct player_id) ,2)as fraction from activity550; 
-- Another method
--Query to retrive the data based on question
--Query to retrive the data based on question
 SELECT round(COUNT(p.player_id)::numeric/(SELECT COUNT(DISTINCT a.player_id) FROM activity550 a),2) fraction FROM activity550 p WHERE (p.player_id, p.event_date - 1) IN  (SELECT player_id, MIN(event_date) first_login FROM activity550 GROUP BY player_id);
```

9. Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL .182
```sql
--create table based on question
create table personemail (id int primary key, email varchar (64));
--Insert values to the table 
insert into personemail values (1, 'a@b.com'), (2, 'c@d.com'), (3, 'a@b.com');
--Query to retrive the data based on question
select email from personemail group by email having count(id) > 1;
```

10. Write a solution to find the customer_number for the customer who has placed the largest number of orders.569
```sql 
--create table based on question
create table orders586 (order_number int primary key , customer_number int);
--Insert values to the table 
insert into Orders586 VALUES (1, 1), (2, 2), (3, 3), (4, 3);
--Query to retrive the data based on question
select customer_number from (select customer_number , count(order_number) as count from orders586 group by customer_number order by count desc limit 1);
```

11. Write a solution to find all the classes that have at least five students.
```sql
--create table based on question
 create table courses (student varchar(2) , class varchar(64) , primary key (student, class));
 --Insert values to the table 
 insert into courses VALUES ('A', 'Math'), ('B', 'English'), ('C', 'Math'), ('D', 'Biology'), ('E', 'Math'), ('F', 'Computer'), ('G', 'Math'), ('H', 'Math'), ('I', 'Math');
 --Query to retrive the data based on question
select class from (select class , count(student) from courses group by class having count(student) >= 5 );
```

12. Write a solution to find the people who have the most friends and the most friends number.602
```sql 
--create table based on question
 create table RequestAccepted (requester_id int, accepter_id int, accept_date date, primary key (requester_id, accepter_id));
 --Insert values to the table 
 insert into  RequestAccepted VALUES (1, 2, '2016/06/03'), (1, 3, '2016/06/08'), (2, 3, '2016/06/08'), (3, 4, '2016/06/09');
 --Query to retrive the data based on question
 with cte(id) as (select requester_id from requestaccepted union all select accepter_id from requestaccepted) select id, count(id) over (partition by id) as num from cte order by num desc limit 1;
```

13. A single number is a number that appeared only once in the MyNumbers table.
```sql
--create table based on question
create table mynumbers (num int);
--Insert values to the table 
insert into mynumbers values (8),(8),(3),(3),(1),(4),(5),(6);
--Query to retrive the data based on question
select max(num) as num from (select num, count(num) from mynumbers group by num having count(num) = 1 );
```
14. Write a solution to report the customer ids from the Customer table that bought all the products in the Product table. 
```sql
--create table based on question
 create table customers1045 (customer_id int not null, product_key int);
 --create table based on question
  create table product1045 (product_key int primary key);
  alter table customers1045 add constraint fk_product foreign key (product_key) references product1045(product_key);
  --Insert values to the table 
  insert into customers1045 VALUES (1, 5), (2, 6), (3, 5), (3, 6), (1, 6);
  --Insert values to the table 
  insert into product1045 values (5),(6);
  --Query to retrive the data based on question
  select customer_id from customers1045 group by customer_id having count(distinct product_key) = (select count(*) from product1045);
```
15. write the solution to find total common actor and director movie. 1050
```sql
--create table based on question
create table actordirector1050 (actor_id int , director_id int, timestamp int primary key);
--Insert values to the table 
insert into actordirector1050 values (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 2, 3), (1, 2, 4), (2, 1, 5), (2, 1, 6);
--Query to retrive the data based on question
select actor_id, director_id from (select actor_id , director_id , count(timestamp) from actordirector1050 group by actor_id, director_id having count(timestamp) >= 3);
```
16. Write a solution to find the daily active user count for a period of 30 days ending 2019-07-27 inclusively. A user was active on someday if they made at least one activity on that day.
```sql
--create user define data type
create type activitytype as enum('open_session', 'end_session', 'scroll_down', 'send_message');
--create table based on question
create table activity1141 (user_id int, session_id int , activity_date date, activity_type activitytype);
--Insert values to the table 
insert into activity1141 VALUES (1,1,'2019-07-20','open_session'),(1,1,'2019-07-20','scroll_down'),(1,1,'2019-07-20','end_session'),(2,4,'2019-07-20','open_session'),(2,4,'2019-07-21','send_message'),(2,4,'2019-07-21','end_session'),(3,2,'2019-07-21','open_session'),(3,2,'2019-07-21','send_message'),(3,2,'2019-07-21','end_session'),(4,3,'2019-06-25','open_session'),(4,3,'2019-06-25','end_session');
--Query to retrive the data based on question
select activity_date as day , count(distinct user_id) as active_users from activity1141 where activity_date between '2019-07-27'::date - interval '29days' and '2019-07-27' group by 1;
```

17. Reformat the table such that there is a department id column and a revenue column for each month.
```sql
--create table based on question
create table department1179 (id int , revenue int , month varchar(64) , primary key (id, month));
--Insert values to the table 
 insert into department1179  VALUES (1,8000,'Jan'),(2,9000,'Jan'),(3,10000,'Feb'),(1,7000,'Feb'),(1,6000,'Mar');
 --Query to retrive the data based on question
 select id, max(case when month = 'Jan' then revenue else null end) as "Jan_Revenue",max(case when month = 'feb' then revenue else null end) as "Feb_Revenue",max(case when month = 'Mar' then revenue else null end) as "Mar_Revenue",max(case when month = 'Apr' then revenue else null end) as "Apr_Revenue",max(case when month = 'May' then revenue else null end) as "May_Revenue",max(case when month = 'Jun' then revenue else null end) as "Jun_Revenue",max(case when month = 'Jul' then revenue else null end) as "Jul_Revenue",max(case when month = 'Aug' then revenue else null end) as "Aug_Revenue",max(case when month = 'Sep' then revenue else null end) as "Sep_Revenue",max(case when month = 'Oct' then revenue else null end) as "Oct_Revenue",max(case when month = 'Nov' then revenue else null end) as "Nov_Revenue",max(case when month = 'Dec' then revenue else null end) as "Dec_Revenue" from department1179 group by id;
```

18. Write a solution to get the names of products that have at least 100 units ordered in February 2020 and their amount.
```sql
--create table based on question
create table products1327 (product_id int primary key, product_name varchar(64) , product_category varchar(64));
--create table based on question
create table order1327 (product_id int , order_date date, unit int, foreign key(product_id) references products1327(product_id));
--Insert values to the table 
--Insert values to the table 
 insert into products1327 values (1,'Leetcode Solutions','Book'),(2,'Jewels of Stringology','Book'),(3,'HP','Laptop'),(4,'Lenovo','Laptop'),(5,'Leetcode Kit','T-shirt');insert into order1327 VALUES (1,'2020-02-05',60),(1,'2020-02-10',70),(2,'2020-01-18',30),(2,'2020-02-11',80),(3,'2020-02-17',2),(3,'2020-02-24',3),(4,'2020-03-01',20),(4,'2020-03-04',30),(4,'2020-03-04',60),(5,'2020-02-25',50),(5,'2020-02-27',50),(5,'2020-03-01',50);
 --Query to retrive the data based on question
 select product_name , sum(unit) as unit from products1327 p inner join order1327 o using(product_id) where order_date between '2020-02-01' and '2020-02-29' group by product_name having sum(unit) >= 100;
```

19. Write a solution to report the name and balance of users with a balance higher than 10000. The balance of an account is equal to the sum of the amounts of all transactions involving that account.
```sql
--create table based on question
 create table user1587 (account int primary key, name varchar(64));
 --create table based on question
 create table transactions1587(trans_id int primary key, account int, amount int, transacted_on date);
 --Insert values to the table 
insert into user1587 VALUES (900001, 'Alice'), (900002, 'Bob'), (900003, 'Charlie');
--Insert values to the table 
insert into transactions1587 VALUES (1, 900001, 7000, '2020-08-01'), (2, 900001, 7000, '2020-09-01'), (3, 900001, -3000, '2020-09-02'), (4, 900002, 1000, '2020-09-12'), (5, 900003, 6000, '2020-08-07'), (6, 900003, 6000, '2020-09-07'), (7, 900003, -4000, '2020-09-11');
--Query to retrive the data based on question
select name , sum(amount) as balance from user1587 inner join transactions1587 using(account) group by name, account having sum(amount) >10000;
```

20. For each date_id and make_name, find the number of distinct lead_id's and distinct partner_id's
```sql
--create table based on question
 create table dailysales (date_id date, make_name varchar(64), lead_id int , partner_id int);
 --Insert values to the table 
  insert into  dailysales VALUES ('2020-12-8', 'toyota', 0, 1), ('2020-12-8', 'toyota', 1, 0), ('2020-12-8', 'toyota', 1, 2), ('2020-12-7', 'toyota', 0, 2), ('2020-12-7', 'toyota', 0, 1), ('2020-12-8', 'honda', 1, 2), ('2020-12-8', 'honda', 2, 1), ('2020-12-7', 'honda', 0, 1), ('2020-12-7', 'honda', 1, 2), ('2020-12-7', 'honda', 2, 1);
  --Query to retrive the data based on question
  select date_id, make_name , count(distinct lead_id) as unique_leads, count(distinct partner_id) as unique_partners from dailysales group by date_id, make_name;
```

21. Write a solution that will, for each user, return the number of followers. 1729
```sql
--create table based on question
create table followers1729 (user_id int, follower_id int, primary key( user_id, follower_id));
--Insert values to the table 
insert into  followers1729 VALUES (0, 1), (1, 0), (2, 0), (2, 1);
--Query to retrive the data based on question
select user_id ,count(follower_id) from followers1729 group by user_id order by user_id;
```
22.Write a solution to calculate the bonus of each employee. The bonus of an employee is 100% of their salary if the ID of the employee is an odd number and the employee's name does not start with the character 'M'. The bonus of an employee is 0 otherwise.1873
```sql 
--create table based on question
create table followers1729 (user_id int, follower_id int, primary key( user_id, follower_id));
--Insert values to the table 
insert into  employee1873 VALUES (2, 'Meir', 3000), (3, 'Michael', 3800), (7, 'Addilyn', 7400), (8, 'Juan', 6100), (9, 'Kannon', 7700);
--Query to retrive the data based on question
select employee_id, coalesce(bonus, 0) as bonus from employees full outer join (select employee_id, salary as bonus from employees where employee_id % 2 = 1 and name not like 'M%') using (employee_id) order by employee_id;
```
23. Write a solution to calculate the total time in minutes spent by each employee on each day at the office. Note that within one day, an employee can enter and leave more than once. The time spent in the office for a single entry is out_time - in_time. 1741
```sql
--create table based on question
create table employee1741(emp_id int , event_day date, in_time int, out_time int, primary key (emp_id, event_day , in_time));
--Insert values to the table 
insert into  employee1741 VALUES (1, '2020-11-28', 4, 32), (1, '2020-11-28', 55, 200), (1, '2020-12-03', 1, 42), (2, '2020-11-28', 3, 33), (2, '2020-12-09', 47, 74);
--Query to retrive the data based on question
select event_day , emp_id, sum(out_time - in_time) from employee1741 group by event_day, emp_id;
```
24. Write a solution to calculate the number of unique subjects each teacher teaches in the university. 2356
```sql
--create table based on question
create table teacher2356 (teacher_id int, subject_id int, dept_id int, primary key(subject_id, dept_id));
--Insert values to the table 
insert into  teacher2356 VALUES (1, 2, 3), (1, 2, 4), (1, 3, 3), (2, 1, 1), (2, 2, 1), (2, 3, 1), (2, 4, 1);
--Query to retrive the data based on question
select teacher_id, count(distinct subject_id) as cnt from teacher2356 group by teacher_id;
```

25. Write a solution to report all the employees with their primary department. For employees who belong to one department, report their only department. 1789
```sql
--create table based on question
 create table employee1789 (employee_id int, department_id int, primary_flag varchar(1));
  alter table  employee1789 add constraint pk_emp1789 primary key (employee_id, department_id);
  --Insert values to the table 
  insert into  employee1789 VALUES (1, 1, 'N'), (2, 1, 'Y'), (2, 2, 'N'), (3, 3, 'N'), (4, 2, 'N'), (4, 3, 'Y'), (4, 4, 'N');
  --Query to retrive the data based on question
select employee_id, department_id from employee1789 where primary_flag = 'Y' or employee_id in (select employee_id from employee1789 group by employee_id having count(employee_id) = 1);
```

26. Write a solution to report the latest login for all users in the year 2020. Do not include the users who did not login in 2020. 1890
```sql
--create table based on question
create table logins1890 ( user_id int, time_stamp timestamp,primary key(user_id, time_stamp));
logins1890 VALUES (6,'2020-06-30 15:06:07'),(6,'2021-04-21 14:06:06'),(6,'2019-03-07 00:18:15'),(8,'2020-02-01 05:10:53'),(8,'2020-12-30 00:46:50'),(2,'2020-01-16 02:49:50'),(2,'2019-08-25 07:59:08'),(14,'2019-07-14 09:00:00'),(14,'2021-01-06 11:59:59');
--Query to retrive the data based on question
select user_id , max(time_stamp) from logins1890 where extract(year from time_stamp) = 2020 group by user_id;
```
27. Write a solution to find the sum of amounts for odd and even transactions for each day. If there are no odd or even transactions for a specific date, display as 0.
```sql
--create table based on question
create table transactions3220 (transaction_id int unique, amount int, transaction_date date);
--Insert values to the table 
insert into  transactions3220  VALUES (1,150,'2024-07-01'),(2,200,'2024-07-01'),(3,75,'2024-07-01'),(4,300,'2024-07-02'),(5,50,'2024-07-02'),(6,120,'2024-07-03');
--Query to retrive the data based on question
select transaction_date, sum(case when amount%2 = 1 then amount else 0 end) as odd_sum, sum (case when amount%2 = 0 then amount else 0 end) as even_sum from transactions3220 group by transaction_date order by 1;
```
28. Write a solution to report the Capital gain/loss for each stock.
```sql
--create user define data type
create type operation as enum ('Sell', 'Buy');
--create table based on question
create table stocks1393 (stock_name varchar(64), operation operation , operation_day int, price int, primary key (stock_name, operation_day));
--Insert values to the table 
insert into  stocks1393 values ('Leetcode','Buy',1,1000),('Corona Masks','Buy',2,10),('Leetcode','Sell',5,9000),('Handbags','Buy',17,30000),('Corona Masks','Sell',3,1010),('Corona Masks','Buy',4,1000),('Corona Masks','Sell',5,500),('Corona Masks','Buy',6,1000),('Handbags','Sell',29,7000),('Corona Masks','Sell',10,10000);
--Query to retrive the data based on question
 select stock_name , sum(price) filter (where operation = 'Sell') - sum(price) filter (where operation = 'Buy') as capital_gain_loss from stocks1393 group by stock_name;
```

29. Write a solution to report the sum of all total investment values in 2016 tiv_2016
```sql
--create table based on question
 create table insurance585 (pid int primary key, tiv_2015 float, tiv_2016 float, lat float, lon float);
 --Insert values to the table 
 insert into  insurance585 values (1,10,5,10,10),(2,20,20,20,20),(3,10,30,20,20),(4,10,40,40,40);
 --Query to retrive the data based on question
select round(sum(tiv_2016)::numeric,2) as tiv_2016 from insurance where tiv_2015 in (select tiv_2015 from insurance group by tiv_2015 having count(*) > 1) and (lat,lon) in (select lat,lon from insurance group by lat, lon  having count(*) = 1);
```
30. Find the name of the user who has rated the greatest number of movies. In case of a tie, return the lexicographically smaller user name. 1347
```sql
--create table based on question
create table movies1347 (movie_id int primary key , title varchar(255));
--create table based on question
create table users1347 (user_id int primary key, name varchar(255));
--create table based on question
create table movierating1347 (movie_id int, user_id int, rating int, created_at date, primary key (movie_id, user_id));
 --Insert values to the table 
 insert into movies1347  values (1,'Avengers'),(2,'Frozen 2'),(3,'Joker')
 --Insert values to the table 
 insert into users1347 values (1,'Daniel'),(2,'Monica'),(3,'Maria'),(4,'James');
 --Insert values to the table 
 insert into  movierating1347 values (1,1,3,'2020-01-12'),(1,2,4,'2020-02-11'),(1,3,2,'2020-02-12'),(1,4,1,'2020-01-01'),(2,1,5,'2020-02-17'),(2,2,2,'2020-02-01'),(2,3,2,'2020-03-01'),(3,1,3,'2020-02-22'),(3,2,4,'2020-02-25');
 --Query to retrive the data based on question
 with cte1 as ( select name as results, count(movie_id) from movierating1347 inner join users1347 using (user_id) group by name order by 2 desc,name limit 1), cte2 as ( select title as results , avg(rating) from movierating1347 inner join movies1347 using(movie_id) where to_char(created_at,'YYYY-MM') = '2020-02' group by title order by 2 desc,title limit 1) (select results from cte1) union all (select results from cte2);
```
31. Write a solution to find the cancellation rate of requests with unbanned users (both client and driver must not be banned) each day between "2013-10-01" and "2013-10-03" with at least one completed trip. Round Cancellation Rate to two decimal points.262
```sql
--create user define data type
 create type trip_status as enum ('completed','cancelled_by_driver','cancelled_by_client')
--create user define data type
create type user_role as enum('client', 'driver', 'partner');
--create user define data type
create type ban as enum('Yes' , 'No');
--create table based on question
 create table users262 (user_id int primary key, banned ban , role user_role);
--create table based on question
create table trips262 (id int primary key, client_id int, driver_id int, city_id int, status trip_status, request_at date);
--Insert values to the table 
insert into users262  VALUES (1, 'No', 'client'), (2, 'Yes', 'client'), (3, 'No', 'client'), (4, 'No', 'client'), (10, 'No', 'driver'), (11, 'No', 'driver'), (12, 'No', 'driver'), (13, 'No', 'driver');
--Insert values to the table 
insert into trips262 VALUES (1,1,10,1,'completed','2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(8,2,12,12,'completed','2013-10-03'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');
--Query to retrive the data based on question
select request_at as Day, round(avg(case when status = 'completed' then 0 else 1 end), 2) as "Cancellation Rate"from Trips262 where client_id not in (select user_id from Users262 where banned = 'Yes' and role = 'client') and driver_id not in (select user_id from Users262 where banned = 'Yes' and role = 'driver') and request_at between '2013-10-01' and '2013-10-03' group by request_at;
```

### window function
1. Write a solution to find the rank of the scores.178
```sql
--create table based on question
create table scores(id int primary key, scores decimal(5,2));
--Insert values to the table 
insert into scores values(1, 3.50), (2, 3.65), (3, 4.00), (4, 3.85), (5, 4.00), (6, 3.65);
--Query to retrive the data based on question
 select scores, dense_rank() over (order by scores desc) as rank from scores;
```

2. Write a solution to find the first login date for each player.511
```sql
--create table based on question
 create table activity511 (player_id int, device_id int, event_date date, game_played int , primary key(player_id, event_date));
 --Insert values to the table 
 insert into  activity511 VALUES (1, 2, '2016-03-01', 5), (1, 2, '2016-05-02', 6), (2, 3, '2017-06-25', 1), (3, 1, '2016-03-02', 0), (3, 4, '2018-07-03', 5);
 --Query to retrive the data based on question
 with logindate as (select *, row_number() over (partition by player_id order by event_date) as row from activity511) select player_id, event_date as first_login from logindate where row = 1;
```

3. Write a solution to find the prices of all products on 2019-08-16. Assume the price of all products before any change is 10.
```sql
--create table based on question
create table products1164 (product_id int, new_price int, change_date date, primary key(product_id, change_date));
--Insert values to the table 
 insert into products1164 values (1,20,'2019-08-14'),(2,50,'2019-08-14'),(1,30,'2019-08-15'),(1,35,'2019-08-16'),(2,65,'2019-08-17'),(3,20,'2019-08-18');
 --Query to retrive the data based on question
 with cte as (select product_id, new_price as price from (select *, rank() over (partition by product_id order by change_date desc) from products1164 where change_date <= '2019-08-16') where rank = 1) select distinct product_id, coalesce(price, 10) from products1164 left join cte using (product_id);
```
4. Compute the moving average of how much the customer paid in a seven days window (i.e., current day + 6 days before). average_amount should be rounded to two decimal places.
```sql
--create table based on question
 create table customer1321 (customer_id int, name varchar(64), visited_on date, amount int, primary key (customer_id, visited_on));
 --Insert values to the table 
  insert into customer1321 values (1,'Jhon','2019-01-01',100),(2,'Daniel','2019-01-02',110),(3,'Jade','2019-01-03',120),(4,'Khaled','2019-01-04',130),(5,'Winston','2019-01-05',110),(6,'Elvis','2019-01-06',140),(7,'Anna','2019-01-07',150),(8,'Maria','2019-01-08',80),(9,'Jaze','2019-01-09',110),(1,'Jhon','2019-01-10',130),(3,'Jade','2019-01-10',150);
  --Query to retrive the data based on question
  SELECT visited_on, sum(current_day_sum) OVER (rows between 6 preceding and current row) amount,ROUND(SUM(current_day_sum) OVER (rows between 6 preceding and current row) / 7.0, 2) average_amount FROM ( SELECT visited_on, SUM(amount) AS current_day_sum FROM Customer1321 GROUP BY visited_on ORDER BY visited_on) stb OFFSET 6;
```

5. Write a solution to find the person_name of the last person that can fit on the bus without exceeding the weight limit. The test cases are generated such that the first person does not exceed the weight limit.
```sql
--create table based on question
 create table queue1204 (person_id int unique, person_name varchar(64) , weight int , turn int);
 --Insert values to the table 
 insert into  queue1204 values (5,'Alice',250,1),(4,'Bob',175,5),(3,'Alex',350,2),(6,'John Cena',400,3),(1,'Winston',500,6),(2,'Marie',200,4);
 --Query to retrive the data based on question
 select person_name from (select person_name , sum(weight) over (order by turn) as total from queue1204 order by turn desc)where total <= 1000 limit 1;
```
6. Write a solution to find the students who have shown improvement
```sql
--create table based on question
create table scores3421 (student_id int, subject varchar(64), score int, exam_date date, primary key (student_id, subject, exam_date));
--Insert values to the table 
insert into scores3421 values (101,'Math',70,'2023-01-15'),(101,'Math',85,'2023-02-15'),(101,'Physics',65,'2023-01-15'),(101,'Physics',60,'2023-02-15'),(102,'Math',80,'2023-01-15'),(102,'Math',85,'2023-02-15'),(103,'Math',90,'2023-01-15'),(104,'Physics',75,'2023-01-15'),(104,'Physics',85,'2023-02-15');
--Query to retrive the data based on question
 with t1 as (select distinct student_id, s.subject,first_value(score) over(partition by student_id, s.subject order by exam_date) as "first_score",first_value(score) over(partition by student_id, s.subject order by exam_date desc) as "latest_score" from Scores3421 as s) select student_id, t1.subject,first_score, latest_score from t1 where first_score < latest_score order by 1, 2;
```
7. Write a solution to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.
```sql
--create table based on question
create table seat626 (id int, student varchar(64));
 alter table seat626 add constraint pk_seat primary key (id);
 --Insert values to the table 
 insert into seat626 values (1,'Abbot'),(2,'Doris'),(3,'Emerson'),(4,'Green'),(5,'Jeames');
 --Query to retrive the data based on question
 select id, case when id = (select max(id) from seat626) and id%2 = 1 then student when id%2 = 1 then lead(student) over () else lag(student) over () end from seat626;
```

### case clause problems
1. Report for every three line segments whether they can form a triangle. 610
```sql 
--create table based on question
create table triangle(x int,y int,z int, primary key(x,y, z));
--Insert values to the table 
insert into triangle VALUES (13, 15, 30), (10, 20, 15);
--Query to retrive the data based on question
select * , case when (x+y > z and y+z > x and x+z > y) then 'YES' else 'NO' end as triangle from triangle;
```
2. Biologists are studying basic patterns in DNA sequences. Write a solution to identify sample_id 
```sql
--create table based on question
create table samples3475 (sample_id int unique, dna_sequence varchar(64), species varchar(64));
--Insert values to the table 
insert into  samples3475 values (1,'ATGCTAGCTAGCTAA','Human'),(2,'GGGTCAATCATC','Human'),(3,'ATATATCGTAGCTA','Human'),(4,'ATGGGGTCATCATAA','Mouse'),(5,'TCAGTCAGTCAG','Mouse'),(6,'ATATCGCGCTAG','Zebrafish'),(7,'CGTATGCGTCGTA','Zebrafish');
--Query to retrive the data based on question
select *, (case when dna_sequence like 'ATG%' then 1 else 0 end) as has_start, (case when dna_sequence like '%TAA' or dna_sequence like '%TAG' or dna_sequence like '%TGA' then 1 else 0 end) as has_stop,  (case when dna_sequence like '%ATAT%' then 1 else 0 end) as has_atat ,  (case when dna_sequence like '%GGG%' then 1 else 0 end) as has_ggg from samples3475;
```

3. Write a solution to find the most popular product category for each season. 
```sql
--create table based on question
create table sales3564 (sales_id int unique, product_id int, sales_date date, quantity int, price decimal);
--create table based on question
create table product3564 (product_id int unique, product_name varchar(64), category varchar(64));
--Insert values to the table 
insert into product3564 values (1,'Warm Jacket','Apparel'),(2,'Designer Jeans','Apparel'),(3,'Cutting Board','Kitchen'),(4,'Smart Speaker','Tech'),(5,'Yoga Mat','Fitness');
--Insert values to the table 
insert into sales3564 values (1,1,'2023-01-15',5,10.00),(2,2,'2023-01-20',4,15.00),(3,3,'2023-03-10',3,18.00),(4,4,'2023-04-05',1,20.00),(5,1,'2023-05-20',2,10.00),(6,2,'2023-06-12',4,15.00),(7,5,'2023-06-15',5,12.00),(8,3,'2023-07-24',2,18.00),(9,4,'2023-08-01',5,20.00),(10,5,'2023-09-03',3,12.00),(11,1,'2023-09-25',6,10.00),(12,2,'2023-11-10',4,15.00),(13,3,'2023-12-05',6,18.00),(14,4,'2023-12-22',3,20.00),(15,5,'2024-02-14',2,12.00);
--Query to retrive the data based on question 
with cte as (select case when extract(month from sales_date) in (1, 2, 12) then 'Winter' when extract(month from sales_date) in (3,4,5) then 'Spring' when extract(month from sales_date) in (6, 7, 8) then 'Summer' else 'Fall' end as season, category, sum(quantity) as total_quantity , sum(quantity * price) as total_revenue from sales3564 inner join product3564 using (product_id) group by season, category) , cte2 as (select * , row_number() over (partition by season order by total_quantity desc) as row from cte )select season, category ,total_quantity, total_revenue from cte2 where row = 1;
```
4. Write a solution to report the type of each node in the tree. 608
```sql
--create table based on question
create table tree608 (id int unique, p_id int);
--Insert values to the table 
insert into tree608 values (1,NULL),(2,1),(3,1),(4,2),(5,2);
--Query to retrive the data based on question
 select id, case when p_id is null then 'Root' when id not in (select p_id from tree608 where p_id is not null) then 'Leaf' else 'Inner' end as type from tree608;
```

### Data manipulation language query
1. Write a solution to swap all 'f' and 'm' values (i.e., change all 'f' values to 'm' and vice versa) with a single update statement and no intermediate temporary tables. 627
```sql 
--create user define data type
 create type gender as enum ('m', 'f');
 --create table based on question
 create table salary (id int primary key, name varchar(64), sex gender, salary int);
 --Insert values to the table 
insert into (id int primary key, name varchar(64), sex gender, salary int);
update salary set sex = case when sex = 'f' then 'm'::gender when sex = 'm' then 'f'::gender end;
```

2. Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.
```sql
--create table based on question
create table persons196 (id int primary key , email varchar(100));
--Insert values to the table 
insert into  persons196 values (1,'john@example.com'),(2,'bob@example.com'),(3,'john@example.com');
--Query to retrive the data based on question
delete from persons196 where id not in (select min(id) from persons196 group by email);
--Query to retrive the data based on question
select * from persons196;
```

### string funtion
1. Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.1667
```sql
--create table based on question
create table users1667 (user_id int primary key, name varchar(64));
--Insert values to the table 
insert into users1667 values (1, 'aLice'), (2, 'bOB');
--Query to retrive the data based on question
select user_id,  upper(substring(name, 0,2))||''||lower(substring(name, 2,length(name))) as name from users1667;
```

2. Write a solution to find for each date the number of different products sold and their names.1484
```sql
--create table based on question
 create table activity1484 (sell_date date, product varchar(64));
 --Insert values to the table 
 insert into activity1484 VALUES ('2020-05-30', 'Headphone'), ('2020-06-01', 'Pencil'), ('2020-06-02', 'Mask'), ('2020-05-30', 'Basketball'), ('2020-06-01', 'Bible'), ('2020-06-02', 'Mask'), ('2020-05-30', 'T-Shirt');
 --Query to retrive the data based on question
  select sell_date, count(distinct product) , string_agg(distinct product,','order by product) from activity1484 group by sell_date order by sell_date; 
```

3. Write a solution to find the patient_id, patient_name, and conditions of the patients who have Type I Diabetes. Type I Diabetes always starts with DIAB1 prefix.
```sql
--create table based on question
create table patients1527 (patient_id int primary key, patient_name varchar(64) , conditions varchar(64));
--Insert values to the table 
insert into patients1527 VALUES (1, 'Daniel', 'YFEV COUGH'), (2, 'Alice', ''), (3, 'Bob', 'DIAB100 MYOP'), (4, 'George', 'ACNE DIAB100'), (5, 'Alain', 'DIAB201');
--Query to retrive the data based on question
 select * from patients1527 where conditions like 'DIAB1%' or conditions like '% DIAB1%';
```

4. Write a solution to find all products whose description contains a valid serial number pattern.3465
```sql
--create table based on question
create table products3465 (product_id int unique, product_name varchar(64), description varchar(255));
--Insert values to the table 
insert into products3465 (1,'Widget A','This is a sample product with SN1234-5678'),(2,'Widget B','A product with serial SN9876-1234 in the description'),(3,'Widget C','Product SN1234-56789 is available now'),(4,'Widget D','No serial number here'),(5,'Widget E','Check out SN4321-8765 in this description');
--Query to retrive the data based on question
 select * from products3465 where regexp_like(description,'( |^)SN[0-9]{4}-[0-9]{4}( |$)');
```

5. Write a solution to find the users who have valid emails.1517
```sql
--create table based on question
 create table users1517 (user_id int, name varchar(64), mail varchar(100));
 --Insert values to the table 
  insert into  users1517 values (1,'Winston','winston@leetcode.com'),(2,'Jonathan','jonathanisgreat'),(3,'Annabelle','bella-@leetcode.com'),(4,'Sally','sally.come@leetcode.com'),(5,'Marwan','quarz#2020@leetcode.com'),(6,'David','david69@gmail.com'),(7,'Shapiro','.shapo@leetcode.com');
  --Query to retrive the data based on question
  select * from users1517 where mail ~ '^[a-zA-Z]+[a-zA-Z0-9_.-]*@leetcode\.com$' 
```

6. Write a solution to find all the valid email addresses. 3436
```sql
--create table based on question
create table users3436 (user_id int unique, email varchar(100));
--Insert values to the table 
insert into  users3436 values (1,'alice@example.com'),(2,'bob_at_example.com'),(3,'charlie@example.net'),(4,'david@domain.com'),(5,'eve@invalid');
--Query to retrive the data based on question
 select * from users3436 where email ~ '^[a-zA-Z0-9_]+@[a-z]+\.com$';
```

7. Write a solution to transform the text in the content_text column.3374
```sql
--create table based on question
 create table user_content (content_id int unique, content_text varchar(255));
 --Insert values to the table 
 insert into  user_content values (1,'hello world of SQL'),(2,'the QUICK-brown fox'),(3,'modern-day DATA science'),(4,'web-based FRONT-end development');
 --Query to retrive the data based on question
 select content_id, content_text as original_text , initcap(content_text) as converted_text from user_content;
```

8. Write a solution to find invalid IP addresses. 3451
```sql
--create table based on question
create table logs3451 (log_id int unique, ip varchar(15), status_code int);
 --Insert values to the table
insert into logs3451 VALUES (1,1,10,1,'completed','2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(8,2,12,12,'completed','2013-10-03'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');
 --Query to retrive the data based on question
 select ip, count(log_id) as invalid_ip from logs3451 where ip !~ '^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])' group by ip order by 2 desc, 1 desc;
```

### Function based query 
1. Write a solution to find the nth highest distinct salary from the Employee table. If there are less than n distinct salaries, return null.
```sql
CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
    if (N < 1) then
    --Query to retrive the data based on question
    return query (select null:: int as salary);
    else
  RETURN QUERY (
    --Query to retrive the data based on question
    select distinct e.salary from employee as e order by 1 desc limit 1 offset N -1
  );
  END IF;
END;
$$ LANGUAGE plpgsql;
```
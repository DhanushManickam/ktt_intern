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
create type category as enum('Y', 'N');
create table products (product_id int primary key, low_fats category, recyclable category);
insert into products values (0,'Y','N'), (1, 'Y', 'Y'), (2, 'N', 'Y'), (3, 'Y', 'Y'), (4, 'N', 'N');
SELECT product_id FROM products where low_fats = 'Y' and recyclable = 'Y';
```

2. Find the names of the customer that are not referred by the customer with id = 2. 584
```sql
create table customer (id int primary key, name varchar(64), referee_id int);
insert into customer (id, name, referee_id) values (1, 'Will', null), (2, 'Jane', null), (3, 'Alex', 2), (4, 'Bill', null), (5, 'Zack', 1), (6,'Mark', 2);
SELECT name FROM customerWHERE referee_id != 2 OR referee_id IS NULL;
```

3. Write a solution to find the name, population, and area of the big countries.595
```sql
create table worldbigcountry (name varchar(64) primary key , continent varchar(64), area int, population int, gdp bigint);
insert into worldbigcountry values ( 'Afghanistan','Asia',652230,25500100,20343000000), ('Albania', 'Europe',28748,2831741,1296000000), ('Albania', 'Africa',2381741,37100000,188681000000),('Andorra' ,'Europe',468 ,78115,3712000000), ( 'Angola', 'Africa',1246700,20609294,100990000000);
SELECT name , population, area FROM world WHERE area >= 3000000 OR population >= 25000000;
```
4. Write a solution to find all the authors that viewed at least one of their own articles.1148
```sql
create table authorview (article_id int, author_id int, view_id int, view_date date);
insert into authorview values(1, 3, 5, '2019-08-01'),(1,3,6,'2019-08-02'),(2,7,7,'2019-08-01'),(2,7,6,'2019-08-02'),(4,7,1,'2019-07-22'),(3,4,4,'2019-07-21'), (3,4,4,'2019-07-21');
SELECT DISTINCT author_id as "id" FROM views WHERE author_id = viewer_id ORDER BY author_id asc;
```

5. Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15. 1683
```sql
create table tweetdetails (tweet_id int primary key, content varchar(100));
insert into tweetdetails values (1, 'Let us Code'), (2, 'More than fifteen chars are here!');
SELECT tweet_id FROM tweetdetails WHERE length(content) > 15;
```

6. Write a solution to find the second highest distinct salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).176
```sql
create table secondhighestsalary (id int, salary int);
insert into secondhighestsalary values(1,100),(2,200), (3,300);
SELECT DISTINCT salary from secondhighestsalary order by salary desc limit 1 offset 1;
```

### Joins
1. Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null 1378
```SQL
create table employees (id int primary key , name varchar(64));
insert into employees values (1, 'Alice'), (7, 'Bob'), (11, 'Meir'),(90, 'Winston'), (3, 'Janothon');
create table employeeuni (id int , unique_id int , primary key (id, unique_id));
insert into employeeuni values (3,1), (11, 2), (90, 3);
select unique_id , name from employeeuniqueid left join employeeuni using (id);
```

2. Write a solution to report the product_name, year, and price for each sale_id in the Sales table. 1068
```sql
create table productdetail (product_id int, product_name varchar(64));
alter table productdetail add constraint pk_product primary key(product_id);
create table sales (sales_id int primary key, product_id int , year int, quantity int, price int, foreign key(product_id) references productdetail(product_id));
insert into productdetail values (100 , 'Nokia'),(200, 'Apple'), (300, 'Samsung');
insert into sales values (1, 100, 2008, 10 , 5000),(2, 100, 2009, 12, 5000), (7, 200, 2011, 15, 9000);
select product_name , year, price from productdetail inner join sales using(product_id);
```

3. Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits
```sql
create table visitdetails (visit_id int unique, customer_id int);
create table transactions (trans_id int unique, visit_id int, amount int);
insert into visitdetails values (1, 23), (2, 9), (4, 30), (5, 54), (6, 96), (7, 54), (8, 54);
insert into transactions values (2,5,310), (3,5,300), (9,5,200), (12,1,910),(13,2,970);
SELECT customer_id, count(visit_id) as count_no_trans FROM visitdetails full outer join Transactions using (visit_id) where trans_id is null group by customer_id;
```

4. Write a solution to find all dates' id with higher temperatures compared to its previous dates (yesterday).197
```sql
create table weather (id int unique, recorddate date, temperature int);
insert into wheather values(1, '2015-01-01',10), (2,'2015-01-02',25), (3, '2015-01-03', 20), (4, '2015-01-04' , 30);
SELECT w.id as "Id" FROM weather w join weather r on w.recorddate- r.recorddate = 1 where w.temperature > r.temperature;
```

5. There is a factory website that has several machines each running the same number of processes. Write a solution to find the average time each machine takes to complete a process. 1661
```sql
 create type activity as enum('start' , 'end');
 insert into activities values (0, 0, 'start', 0.712), (0, 0, 'end', 1.520),(0, 1, 'start', 3.140),(0, 1, 'end', 4.120),(1, 0, 'start', 0.550),(1, 0, 'end', 1.550),(1, 1, 'start', 0.430),(1, 1, 'end', 1.420),(2, 0, 'start', 4.100),(2, 0, 'end', 4.512), (2, 1, 'start', 2.500),(2, 1, 'end', 5.000);
SELECT a.machine_id, cast(avg(b.timestamp - a.timestamp) as decimal(5,3)) as processing_time from activities a inner join activities b using (machine_id) where a.activity_type = 'start' and b.activity_type = 'end' group by a.machine_id;
```

6. Write a solution to report the name and bonus amount of each employee with a bonus less than 1000. 577
```sql
create table employee (empId int unique, name varchar(30) , supervisor int, salary int);
create table bonus (empid int unique , bonus int);
insert into employee values (3, 'Brad' , null, 4000), (1 , 'John', 3, 1000), (2, 'Dan', 3, 2000) , (4, 'Thomas' , 3, 4000);
insert into bonus values (2, 500), (4, 2000);
SELECT name , bonus FROM Employee full outer join Bonus using(empid) where bonus < 1000 or bonus < 1000 is unknown;
```

7. Write a solution to find the number of times each student attended each exam.
```sql
SELECT s.student_id, s.student_name, sb.subject_name, count(e.subject_name) as attended_exams from students s cross join subjects sb left join Examinations e on s.student_id = e.student_id AND sb.subject_name = e.subject_name group by s.student_id, s.student_name, sb.subject_name order by s.student_id, sb.subject_name;
```
8. Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead. 175
```sql
create table person (personid int primary key, lastname varchar(64), firstname varchar(64));
create table address (addressid int primary key, personid int, city varchar(64), state varchar(64) , foreign key(personid) references person(personid));
insert into person values (1 , 'Wang' , 'Allen'), (2, 'Alice', 'Bob');
insert into address values (1, 2, 'New York City' , 'New york');
select firstname , lastname , city, state from person left join address using (personid);
SELECT firstName AS "firstName", lastName as "lastName", city, state FROM person left JOIN address using(personid);
```

9. Write a solution to find the employees who earn more than their managers.
```sql
SELECT e.name AS "Employee" FROM employee e JOIN employee m ON e.managerid = m.id WHERE e.salary > m.salary;
``` 

10. Write a solution to find managers with at least five direct reports.
```sql
 create table employeereport (id int primary key , name varchar(64), department varchar(64), managerid int);
 insert into employeereport values (101, 'John', 'A', NULL), (102, 'Dan', 'A', 101), (103, 'James', 'A', 101), (104, 'Amy', 'A', 101), (105, 'Anne', 'A', 101), (106, 'Ron', 'B', 101);
  select e.name from employeereport e inner join (select managerid,count(managerid) from employeereport group by managerid) as manager on e.id = manager.managerid where count >=5;
```

11. The confirmation rate of a user is the number of 'confirmed' messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is 0. Round the confirmation rate to two decimal places.
```sql
create table signups (user_id int unique, timestamp timestamp);
create type enum as enum('timeout', 'confirmed');
create table conformation (user_id int primary key, timestamp timestamp, action enum);
insert into signups values (3, '2020-03-21 10:16:13'), (7, '2020-01-04 13:57:59'), (2, '2020-07-29 23:09:44'), (6, '2020-12-09 10:39:37');  
insert into conformation values (3, '2021-01-06 03:30:46', 'timeout'), (3, '2021-07-14 14:00:00', 'timeout'), (7, '2021-06-12 11:57:29', 'confirmed'), (7, '2021-06-13 12:58:28', 'confirmed'), (7, '2021-06-14 13:59:27', 'confirmed'), (2, '2021-01-22 00:00:00', 'confirmed'), (2, '2021-02-28 23:59:59', 'timeout');
select s.user_id, round(avg(case when action = 'confirmed' then 1 else 0 end),2) as confirmation_rate from signups s left join confirmations c on s.user_id = c.user_id group by s.user_id;
```

12. Write a solution to find all customers who never order anything.183
```sql
create table customer183(id int primary key, name varchar(64));
create table order183(id int primary key, customer_id int, foreign key(customer_id) references customer183(id));
insert into customer183 VALUES (1, 'Joe'), (2, 'Henry'), (3, 'Sam'), (4, 'Max');
select name from customer183 full outer join order183 on customer183.id = order183.customer_id where order183.id is null;
```

13. Write a solution to find employees who have the highest salary in each of the departments.184
```sql
create table employee184 (id int primary key, name varchar(64), salary int , departmentid int);
create table department184 (id int, name varchar(64));
alter table department184 add constraint pk_dept primary key(id);
alter table employee184 add constraint fk_employee foreign key(departmentid) references department184(id);
insert into department184 values (1,'IT') ,(2, 'Sales');
insert into employee184 VALUES (1, 'Joe', 70000, 1), (2, 'Jim', 90000, 1), (3, 'Henry', 80000, 2), (4, 'Sam', 60000, 2), (5, 'Max', 90000, 1);
with highsalary as (select d.name as department ,e.name as name, e.salary, rank() over (partition by d.name order by salary desc) as row from employee184 e inner join department184 d on e.departmentid = d.id ) select department, name, salary from highsalary where row = 1;
```

14. A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.185
```sql
create table department185 (id int, name varchar(64));
alter table department185 add constraint pk_dept1 primary key(id);
create table employee185 (id int primary key, name varchar(64), salary int , departmentid int, foreign key (departmentid) references department185(id));
insert into department185 values (1,'IT') ,(2, 'Sales');
insert into employee185 values (1, 'Joe', 85000, 1), (2, 'Henry', 80000, 2), (3, 'Sam', 60000, 2), (4, 'Max', 90000, 1), (5, 'Janet', 69000, 1), (6, 'Randy', 85000, 1), (7, 'Will', 70000, 1);
with maxsalary as (select d.name as department, e.name as name , e.salary, dense_rank() over (partition by d.name order by salary desc) as row from department185 d inner join employee185 e on d.id = e.departmentid) select department , name, salary from maxsalary where row <= 3;
```

15. Find all numbers that appear at least three times consecutively. 180
```sql
create table logs (id serial primary key, num varchar(2));
insert into logs values (1, '1'), (2, '1'), (3, '1'), (4, '2'), (5, '1'), (6, '2'), (7, '2');
select distinct l1.num as "ConsecutiveNums" from logs l1 ,logs l2, logs l3 where l1.num = l2.num and l2.num = l3.num and l1.id =l2.id - 1 and l2.id = l3.id - 1;
```

16. Write a solution to find the names of all the salespersons who did not have any orders related to the company with the name "RED".
```sql
create table company607 (com_id int primary key, name varchar(64) , city varchar(64));
create table orders607 (order_id int primary key, order_date date, com_id int, sales_id int, amount int);
create table orders607 (order_id int primary key, order_date date, com_id int, sales_id int, amount int, foreign key (com_id) references orders607(com_id), foreign key (sales_id) references salesperson607(sales_id));
```

### Aggregate functions

1. Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".
```sql
create table cinema (id int primary key, movie varchar(64), description varchar(64) , rating float);
 insert into cinema values (1, 'War', 'great 3D', 8.9), (2, 'Science', 'fiction', 8.5), (3, 'irish', 'boring', 6.2), (4, 'Ice song', 'Fantacy', 8.6), (5, 'House card', 'Interesting', 9.1);
 select * from cinema where id % 2 = 1 and description != 'boring' order by rating desc;
```
2. Write a solution to find the average selling price for each product. average_price should be rounded to 2 decimal places. If a product does not have any sold units, its average selling price is assumed to be 0.

```sql 
INSERT INTO prices (product_id, start_date, end_date, price) VALUES (1, '2019-02-17', '2019-02-28', 5), (1, '2019-03-01', '2019-03-22', 20), (2, '2019-02-01', '2019-02-20', 15), (2, '2019-02-21', '2019-03-31', 30);
INSERT INTO unitssolds (product_id, purchase_date, units) VALUES (1, '2019-02-25', 100), (1, '2019-03-01', 15), (2, '2019-02-10', 200), (2, '2019-03-22', 30);
 with total(productid, totalvalue, units) as (select p.productid, units * price, units from prices p left join unitsolds u on p.productid = u.productid and u.purchasedate between p.startdate and p.enddate) select productid, coalesce(round(sum(totalvalue)/cast(sum(units) as decimal(5, 2)),2),0) as average_price from total group by productid;
```

3. Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.
```sql
 create table projectemployee (employee_id int primary key, name varchar(64) , emperience_year int not null);
 create table project (project_id int , employee_id int, primary key(project_id, employee_id), foreign key(project_id) references projectemployee(employee_id));
 insert into projectemployee VALUES (1, 'Khaled', 3), (2, 'Ali', 2), (3, 'John', 1), (4, 'Doe', 2);
  insert into project VALUES (1, 1), (1, 2), (1, 3), (2, 1), (2, 4);
 select project_id, round(avg(experience_year) ,2)from project inner join projectemployee using (employee_id) group by project_id; 
```
4. Write a solution to find the percentage of the users registered in each contest rounded to two decimals.
```sql
create table users (user_id int primary key, user_name varchar(64));
 create table register (constest_id int primary key, user_id int, foreign key(user_id)  references users(user_id));
 insert into users values(6, 'Alice'),(2,'Bob'),(7,'Alex');
 insert into register VALUES (215, 6), (209, 2), (208, 2), (210, 6), (208, 6), (209, 7), (209, 6), (215, 7), (208, 7), (210, 2), (207, 2), (210, 7);
 with totaluser (total) as (select count(*) from users) select constest_id, round(count(constest_id)/(select total::decimal(5,2) from totaluser) * 100,2) as percentage from register group by constest_id order by percentage desc, constest_id;
```

5. Write a solution to find each query_name, the quality and poor_query_percentage.
```sql
create table queries (query_name varchar(64), result varchar(64), position int, rating int);
insert into queries VALUES ('Dog', 'Golden Retriever', 1, 5), ('Dog', 'German Shepherd', 2, 5), ('Dog', 'Mule', 200, 1), ('Cat', 'Shirazi', 5, 2), ('Cat', 'Siamese', 3, 3), ('Cat', 'Sphynx', 7, 4);
select query_name, round(avg(rating*1.0/position),2) as quality, round(avg(case when rating < 3 then 1 else 0 end)*100.0,2) as poor_query_percentage from queries qu group by query_name;
```

6. Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.
```sql
create type status as enum ('approved','declined');
create table transaction1193 (id int primary key, country varchar(64), state status, amount int, trans_date date);
insert into transaction1193 values (121, 'US', 'approved', 1000, '2018-12-18'), (122, 'US', 'declined', 2000, '2018-12-19'), (123, 'US', 'approved', 2000, '2019-01-01'), (124, 'DE', 'approved', 2000, '2019-01-07');
select TO_CHAR(trans_date, 'YYYY-MM') AS month, country , count(id) as trans_count, count(case when state = 'approved' then id else null end) as approved_count, sum(amount) as trans_total_amount,sum(case when state = 'approved' then amount else 0 end) as approved_total_amount from transaction1193 group by month, country;
```

7. Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places. 1174
```sql
 create table delivery (delivery_id int unique, customer_id int, order_date date, cusotmer_pref_delivery_date date);
  insert into delivery values VALUES (1, 1, '2019-08-01', '2019-08-02'), (2, 2, '2019-08-02', '2019-08-02'), (3, 1, '2019-08-11', '2019-08-12'), (4, 3, '2019-08-24', '2019-08-24'), (5, 3, '2019-08-21', '2019-08-22'), (6, 2, '2019-08-11', '2019-08-13'), (7, 4, '2019-08-09', '2019-08-09');
  with firstorder as (select * , row_number() over (partition by customer_id order by order_date) as orders from delivery) select round(avg(case when order_date = cusotmer_pref_delivery_date then 1 else 0 end) * 100,2) as immediate_percentage from firstorder where orders = 1;
```
8. Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.
```sql
create table activity550 (player_id int, device_id int, event_date date, games_played int , primary key (player_id, event_date));
insert into activity550 VALUES (1, 2, '2016-03-01', 5), (1, 2, '2016-03-02', 6), (2, 3, '2017-06-25', 1), (3, 1, '2016-03-02', 0), (3, 4, '2018-07-03', 5);
 with firstevent as (select * , row_number() over (partition by player_id order by event_date) as rownum from activity550), player as (select count(distinct a.player_id) from firstevent a inner join firstevent b using (player_id) where a.event_date + interval '1day' = b.event_date and a.rownum in (1,2)) select round((select * from player)*1.0/count(distinct player_id) ,2)as fraction from activity550; 
-- Another method
 SELECT round(COUNT(p.player_id)::numeric/(SELECT COUNT(DISTINCT a.player_id) FROM activity550 a),2) fraction FROM activity550 p WHERE (p.player_id, p.event_date - 1) IN  (SELECT player_id, MIN(event_date) first_login FROM activity550 GROUP BY player_id);
```

9. Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL .182
```sql
create table personemail (id int primary key, email varchar (64));
insert into personemail values (1, 'a@b.com'), (2, 'c@d.com'), (3, 'a@b.com');
select email from personemail group by email having count(id) > 1;
```

10. Write a solution to find the customer_number for the customer who has placed the largest number of orders.569
```sql 
create table orders586 (order_number int primary key , customer_number int);
insert into Orders586 VALUES (1, 1), (2, 2), (3, 3), (4, 3);
select customer_number from (select customer_number , count(order_number) as count from orders586 group by customer_number order by count desc limit 1);
```

11. Write a solution to find all the classes that have at least five students.
```sql
 create table courses (student varchar(2) , class varchar(64) , primary key (student, class));
 insert into courses VALUES ('A', 'Math'), ('B', 'English'), ('C', 'Math'), ('D', 'Biology'), ('E', 'Math'), ('F', 'Computer'), ('G', 'Math'), ('H', 'Math'), ('I', 'Math');
select class from (select class , count(student) from courses group by class having count(student) >= 5 );
```

12. Write a solution to find the people who have the most friends and the most friends number.602
```sql 
 create table RequestAccepted (requester_id int, accepter_id int, accept_date date, primary key (requester_id, accepter_id));
 insert into  RequestAccepted VALUES (1, 2, '2016/06/03'), (1, 3, '2016/06/08'), (2, 3, '2016/06/08'), (3, 4, '2016/06/09');

```

### window function
1. Write a solution to find the rank of the scores.178
```sql
create table scores(id int primary key, scores decimal(5,2));
insert into scores values(1, 3.50), (2, 3.65), (3, 4.00), (4, 3.85), (5, 4.00), (6, 3.65);
 select scores, dense_rank() over (order by scores desc) as rank from scores;
```

2. Write a solution to find the first login date for each player.
```sql
 create table activity511 (player_id int, device_id int, event_date date, game_played int , primary key(player_id, event_date));
 insert into  activity511 VALUES (1, 2, '2016-03-01', 5), (1, 2, '2016-05-02', 6), (2, 3, '2017-06-25', 1), (3, 1, '2016-03-02', 0), (3, 4, '2018-07-03', 5);
 with logindate as (select *, row_number() over (partition by player_id order by event_date) as row from activity511) select player_id, event_date as first_login from logindate where row = 1;
```

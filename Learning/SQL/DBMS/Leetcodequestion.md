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

### Aggregate functions

1. Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".
```sql
create table cinema (id int primary key, movie varchar(64), description varchar(64) , rating float);
 insert into cinema values (1, 'War', 'great 3D', 8.9), (2, 'Science', 'fiction', 8.5), (3, 'irish', 'boring', 6.2), (4, 'Ice song', 'Fantacy', 8.6), (5, 'House card', 'Interesting', 9.1);
 select * from cinema where id % 2 = 1 and description != 'boring' order by rating desc;
```


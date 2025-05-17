# Adventure works database based queries 
Source : [W3resource question](https://www.w3resource.com/sql-exercises/adventureworks/adventureworks-exercises.php)

### Queries 


1. From the following table write a query in SQL to retrieve all rows and columns from the employee table in the Adventureworks database. Sort the result set in ascending order on jobtitle.
```sql
 select * from humanresources.employee order by jobtitle;
 ```

2. From the following table write a query in SQL to retrieve all rows and columns from the employee table using table aliasing in the Adventureworks database. Sort the output in ascending order on lastname.
```sql
 select * from person.person order by lastname;
 ```

3. From the following table write a query in SQL to return all rows and a subset of the columns (FirstName, LastName, businessentityid) from the person table in the AdventureWorks database. The third column heading is renamed to Employee_id. Arranged the output in ascending order by lastname.
```sql
 select firstname, lastname, businessentityid as employee_id from person.person order by lastname;
 ```

4. From the following table write a query in SQL to return only the rows for product that have a sellstartdate that is not NULL and a productline of 'T'. Return productid, productnumber, and name. Arranged the output in ascending order on name.
```sql
 select productid, productnumber, name from Production.product where sellstartdate is not null and productline = 'T' order by name;
 ```

5. From the following table write a query in SQL to return all rows from the salesorderheader table in Adventureworks database and calculate the percentage of tax on the subtotal have decided. Return salesorderid, customerid, orderdate, subtotal, percentage of tax column. Arranged the result set in ascending order on subtotal.
```sql
 select salesorderid, customerid, orderdate, subtotal, (taxamt * 100)/subtotal as percentage from sales.salesorderheader order by subtotal;
 ```

6. From the following table write a query in SQL to create a list of unique jobtitles in the employee table in Adventureworks database. Return jobtitle column and arranged the resultset in ascending order.
```sql
 select Distinct jobtitle from humanresources.employee order by jobtitle;
 ```

7. From the following table write a query in SQL to calculate the total freight paid by each customer. Return customerid and total freight. Sort the output in ascending order on customerid.
```sql
 select customerid , sum(freight) from sales.salesorderheader group by customerid order by customerid;
 ```

8. From the following table write a query in SQL to find the average and the sum of the subtotal for every customer. Return customerid, average and sum of the subtotal. Grouped the result on customerid and salespersonid. Sort the result on customerid column in descending order.
```sql
 select customerid, salespersonid, avg(subtotal) as avg_subtotal , sum(subtotal) as total_subtotal from sales.salesorderheader group by customerid, salespersonid order by customerid desc;
 ```

9. From the following table write a query in SQL to retrieve total quantity of each productid which are in shelf of 'A' or 'C' or 'H'. Filter the results for sum quantity is more than 500. Return productid and sum of the quantity. Sort the results according to the productid in ascending order.
```sql
 select productid, sum(quantity) as totalquantity from production.productinventory where shelf in ('A', 'C', 'H') group by productid having sum(quantity) > 500 order by productid;
 ```

10. From the following table write a query in SQL to find the total quentity for a group of locationid multiplied by 10.
```sql
 select sum(quantity) as total_quantity from production.productinventory group by locationid * 10;
 ```

11. From the following tables write a query in SQL to find the persons whose last name starts with letter 'L'. Return BusinessEntityID, FirstName, LastName, and PhoneNumber. Sort the result on lastname and firstname.
```sql
 select BusinessEntityID, FirstName, LastName, PhoneNumber from person.personPhone natural join person.person where lastname like 'L%' order  by lastname, firstname;
 ```

12. From the following table write a query in SQL to find the sum of subtotal column. Group the sum on distinct salespersonid and customerid. Rolls up the results into subtotal and running total. Return salespersonid, customerid and sum of subtotal column i.e. sum_subtotal.
```sql
 select salespersonid, customerid, sum(subtotal) as sum_subtotal from sales.salesorderheader group by rollup(salespersonid, customerid);
 ```

13. From the following table write a query in SQL to find the sum of the quantity of all combination of group of distinct locationid and shelf column. Return locationid, shelf and sum of quantity as TotalQuantity.
```sql
 select locationid, shelf , sum(quantity) as Totalquantity from production.productinventory group by cube(locationid, shelf);
 ```

14. From the following table write a query in SQL to find the sum of the quantity with subtotal for each locationid. Group the results for all combination of distinct locationid and shelf column. Rolls up the results into subtotal and running total. Return locationid, shelf and sum of quantity as TotalQuantity.
```sql
SELECT locationId, shelf , SUM(quantity) FROM production.productinventory GROUP BY GROUPING SETS ( ROLLUP(locationid, shelf), CUBE(locationid, shelf));
```
15. From the following table write a query in SQL to find the total quantity for each locationid and calculate the grand-total for all locations. Return locationid and total quantity. Group the results on locationid.

```sql
 SELECT locationid, SUM(quantity) as Total_quantity FROM production.productinventory GROUP BY ROLLUP(locationid);
```
16. From the following table write a query in SQL to retrieve the number of employees for each City. Return city and number of employees. Sort the result in ascending order on city.
```sql
 SELECT city, count(businessentityid) AS No_of_employee FROM Person.BusinessEntityAddress ea JOIN person.address a on ea.addressid = a.addressid GROUP BY city ORDER BY city;
```
 17.From the following table write a query in SQL to retrieve the total sales for each year. Return the year part of order date and total due amount. Sort the result in ascending order on year part of order date.
```sql
 SELECT EXTRACT(year FROM orderdate), SUM(totaldue) AS total_due_amount FROM sales.salesorderheader GROUP BY EXTRACT(year FROM orderdate)  order by EXTRACT(year FROM orderdate);
```

18. From the following table write a query in SQL to retrieve the total sales for each year. Filter the result set for those orders where order year is on or before 2016. Return the year part of orderdate and total due amount. Sort the result in ascending order on year part of order date
```sql
SELECT EXTRACT(year FROM orderdate), SUM(totaldue) AS total_due_amount FROM sales.salesorderheader GROUP BY EXTRACT(year FROM orderdate) HAVING EXTRACT(year FROM orderdate) <='2016'  order by EXTRACT(year FROM orderdate);
```

19. From the following table write a query in SQL to find the contacts who are designated as a manager in various departments. Returns ContactTypeID, name. Sort the result set in descending order.
```sql
SELECT contacttypeid, name FROM person.contacttype WHERE LOWER(name) LIKE '%manager' ORDER BY contacttypeid DESC;
```

20. From the following tables write a query in SQL to make a list of contacts who are designated as 'Purchasing Manager'. Return BusinessEntityID, LastName, and FirstName columns. Sort the result set in ascending order of LastName, and FirstName.
```sql
SELECT p.businessentityid, lastname, firstname FROM person.businessentitycontact b INNER JOIN person.person p on p.businessentityid = b.personid INNER JOIN person.contacttype c on c.contacttypeid = b.contacttypeid WHERE c.name= 'Purchasing Manager' order by lastname, firstname;
```

21. From the following tables write a query in SQL to retrieve the salesperson for each PostalCode who belongs to a territory and SalesYTD is not zero. Return row numbers of each group of PostalCode, last name, salesytd, postalcode column. Sort the salesytd of each postalcode group in descending order. Shorts the postalcode in ascending order.
```sql
 SELECT ROW_NUMBER() OVER(PARTITION BY a.postalcode ORDER BY s.salesytd) , p.lastname , s.salesytd, a.postalcode FROM sales.salesperson s inner join person.person p on p.businessentityid = s.businessentityid inner join person.businessentityaddress ba on p.businessentityid = ba.businessentityid inner join person.address a on a.addressid = ba.addressid where s.territoryid is not null and s.salesytd != 0 order by a.postalcode;
```

22. From the following table write a query in SQL to count the number of contacts for combination of each type and name. Filter the output for those who have 100 or more contacts. Return ContactTypeID and ContactTypeName and BusinessEntityContact. Sort the result set in descending order on number of contacts.
```sql
SELECT c.contacttypeid, c.name, count(be.businessentityid) as contacts FROM person.businessentitycontact be inner join person.contacttype c on c.contacttypeid = be.contacttypeid group by c.contacttypeid, c.name having count(be.businessentityid) >= 100 order by contacts desc;
```

23. From the following table write a query in SQL to retrieve the RateChangeDate, full name (first name, middle name and last name) and weekly salary (40 hours in a week) of employees. In the output the RateChangeDate should appears in date format. Sort the output in ascending order on NameInFull.
```sql
 SELECT ratechangedate::date, lastname||' '||firstname||' '||middlename as fullname, rate*40 as week_salary FROM humanresources.Employeepayhistory e inner join person.person p on p.businessentityid = e.businessentityid order by fullname;
```

24. From the following tables write a query in SQL to calculate and display the latest weekly salary of each employee. Return RateChangeDate, full name (first name, middle name and last name) and weekly salary (40 hours in a week) of employees Sort the output in ascending order on NameInFull.
```sql
 SELECT ratechangedate::date, lastname||' '||firstname||' '||middlename as fullname, rate*40 as week_salary FROM humanresources.Employeepayhistory e inner join person.person p on p.businessentityid = e.businessentityid where ratechangedate = (select max(ratechangedate)  FROM humanresources.Employeepayhistory eh where eh.businessentityid = e.businessentityid) order by fullname;
```

25. From the following table write a query in SQL to find the sum, average, count, minimum, and maximum order quentity for those orders whose id are 43659 and 43664. Return SalesOrderID, ProductID, OrderQty, sum, average, count, max, and min order quantity.
```sql
SELECT salesorderid, productid, orderqty, sum(orderqty) over win as total, avg(orderqty) over win as Average_qty, count(salesorderid) over win as no_of_order , max(orderqty) over win as max_order, min(orderqty) over win as min_order from sales.salesorderdetail where salesorderid in('43659', '43664') window win as (partition by salesorderid);
```

26. From the following table write a query in SQL to find the sum, average, and number of order quantity for those orders whose ids are 43659 and 43664 and product id starting with '71'. Return SalesOrderID, OrderNumber,ProductID, OrderQty, sum, average, and number of order quantity
```sql
SELECT salesorderid, productid, orderqty, sum(orderqty) over win as total, avg(orderqty) over win as Average_qty, count(salesorderid) over win as no_of_order , max(orderqty) over win as max_order, min(orderqty) over win as min_order from sales.salesorderdetail where salesorderid in('43659', '43664') and productid::varchar like '71%' window win as (partition by salesorderid) order by productid;
```

27. From the following table write a query in SQL to retrieve the total cost of each salesorderID that exceeds 100000. Return SalesOrderID, total cost
```sql
SELECT salesorderid, sum(orderqty * unitprice) as cost from sales.salesorderdetail group by salesorderid having sum(orderqty * unitprice) > 100000;
```

28. From the following table write a query in SQL to retrieve products whose names start with 'Lock Washer'. Return product ID, and name and order the result set in ascending order on product ID column.
```sql
SELECT productid, name FROM production.product WHERE name like 'Lock Washer%' order by productid;
```

29. Write a query in SQL to fetch rows from product table and order the result set on an unspecified column listprice. Return product ID, name, and color of the product.
```sql
SELECT productid , name , color FROM production.product order by listprice;
```

30. From the following table write a query in SQL to retrieve records of employees. Order the output on year (default ascending order) of hiredate. Return BusinessEntityID, JobTitle, and HireDate.
```sql
SELECT businessentityid, jobtitle, hiredate from humanresources.employee order by extract(year from hiredate);
```

31. From the following table write a query in SQL to retrieve those persons whose last name begins with letter 'R'. Return lastname, and firstname and display the result in ascending order on firstname and descending order on lastname columns.
```sql
SELECT lastname, firstname FROM person.person WHERE lastname like 'R%' ORDER BY firstname, lastname DESC;
```

32. From the following table write a query in SQL to ordered the BusinessEntityID column descendingly when SalariedFlag set to 'true' and BusinessEntityID in ascending order when SalariedFlag set to 'false'. Return BusinessEntityID, SalariedFlag columns.
```sql
SELECT businessentityid, SalariedFlag FROM humanresources.employee ORDER BY case when salariedflag = 't' then businessentityid end desc, case when salariedflag = 'f' then businessentityid end;
```

33. From the following table write a query in SQL to set the result in order by the column TerritoryName when the column CountryRegionName is equal to 'United States' and by CountryRegionName for all other rows.
```sql
SELECT businessentityid, lastname, territoryname,countryregionname FROM sales.vsalesperson WHERE territoryname is Not null ORDER BY CASE countryregionname when 'United States' then territoryname else countryregionname end;
```

34. From the following table write a query in SQL to find those persons who lives in a territory and the value of salesytd except 0. Return first name, last name,row number as 'Row Number', 'Rank', 'Dense Rank' and NTILE as 'Quartile', salesytd and postalcode. Order the output on postalcode column.


35. From the following table write a query in SQL to skip the first 10 rows from the sorted result set and return all remaining rows.
```sql
 SELECT departmentid, name, groupname FROM humanresources.department offset 10;
```

36. From the following table write a query in SQL to skip the first 5 rows and return the next 5 rows from the sorted result set.
```sql
 SELECT departmentid, name, groupname FROM humanresources.department  limit 5 offset 5;
```

37. From the following table write a query in SQL to list all the products that are Red or Blue in color. Return name, color and listprice.Sorts this result by the column listprice.
```sql
SELECT name, color, listprice FROM production.product where color in ('Red' , 'Blue') order by listprice;
```

38. Create a SQL query from the SalesOrderDetail table to retrieve the product name and any associated sales orders. Additionally, it returns any sales orders that don't have any items mentioned in the Product table as well as any products that have sales orders other than those that are listed there. Return product name, salesorderid. Sort the result set on product name column.
```sql
 SELECT name , salesorderid FROM production.product p FULL OUTER JOIN sales.salesorderdetail s ON p.productid = s.productid order by name;
```

39. From the following table write a SQL query to retrieve the product name and salesorderid. Both ordered and unordered products are included in the result set.
```sql
SELECT name , salesorderid FROM production.product p LEFT OUTER JOIN sales.salesorderdetail s ON p.productid = s.productid ORDER BY name;
```

40. From the following tables write a SQL query to get all product names and sales order IDs. Order the result set on product name column.
```sql
adventureworks=# SELECT name , salesorderid FROM production.product p INNER JOIN sales.salesorderdetail s ON p.productid = s.productid ORDER BY name;
```

41. From the following tables write a SQL query to retrieve the territory name and BusinessEntityID. The result set includes all salespeople, regardless of whether or not they are assigned a territory
```sql
SELECT Name as territory , businessentityid FROM sales.salesterritory t FULL OUTER JOIN sales.salesperson s ON t.territoryid = s.territoryid ;
```

42. Write a query in SQL to find the employee's full name (firstname and lastname) and city from the following tables. Order the result set on lastname then by firstname.
```sql
 SELECT lastname||' '||firstname as fullname, city FROM person.person p INNER JOIN humanresources.employee e ON p.businessentityid = e.businessentityid INNER JOIN person.businessentityaddress b ON b.businessentityid = p.businessentityid INNER JOIN person.address a ON a.addressid = b.addressid order by lastname, firstname;
```

43. Write a SQL query to return the businessentityid,firstname and lastname columns of all persons in the person table (derived table) with persontype is 'IN' and the last name is 'Adams'. Sort the result set in ascending order on firstname. A SELECT statement after the FROM clause is a derived table.
```sql
 SELECT businessentityid, firstname, lastname FROM (select businessentityid, firstname, lastname FROM person.person where persontype = 'IN' and lastname = 'Adams') order by firstname;
```

44. Create a SQL query to retrieve individuals from the following table with a businessentityid inside 1500, a lastname starting with 'Al', and a firstname starting with 'M'.
```sql
 SELECT businessentityid, firstname , lastname FROM person.person where firstname like 'M%' and lastname like 'Al%' and businessentityid < 1500;
```

45. Write a SQL query to find the productid, name, and colour of the items 'Blade', 'Crown Race' and 'AWC Logo Cap' using a derived table with multiple values.
```sql
SELECT productid, p.name , color FROM production.product p Inner join (values ('Blade'),('Crown Race'),('AWC Logo Cap')) as b(name) on p.name = b.name ;
```

46. Create a SQL query to display the total number of sales orders each sales representative receives annually. Sort the result set by SalesPersonID and then by the date component of the orderdate in ascending order. Return the year component of the OrderDate, SalesPersonID, and SalesOrderID.
```sql
SELECT salespersonid, count(salesorderid) as total_sales, EXTRACT(year FROM orderdate) as year FROM sales.salesorderheader GROUP BY salespersonid, year order by salespersonid, year;
```

47. From the following table write a query in SQL to find the average number of sales orders for all the years of the sales representatives.
```sql
WITH count_sales (salespersonid, totalsales) as (select salespersonid, count(salesorderid) from sales.salesorderheader where salespersonid is not null group by salespersonid) select avg(totalsales) from count_sales;
```

48. Write a SQL query on the following table to retrieve records with the characters green_ in the LargePhotoFileName field. The following table's columns must all be returned.
```sql
adventureworks=# SELECT * FROM production.productphoto where largephotofilename like '%green\_%' escape'\';
```

49. Write a SQL query to retrieve the mailing address for any company that is outside the United States (US) and in a city whose name starts with Pa. Return Addressline1, Addressline2, city, postalcode, countryregioncode columns.
```sql
 SELECT Addressline1, Addressline2, city, postalcode, countryregioncode FROM person.stateprovince s INNER JOIN person.address a using(stateprovinceid) where countryregioncode != 'US' and city like 'Pa%';
```
50. From the following table write a query in SQL to fetch first twenty rows. Return jobtitle, hiredate. Order the result set on hiredate column in descending order.
```sql
SELECT jobtitle, hiredate FROM HumanResources.Employee ORDER BY hiredate DESC LIMIT 20;
```

51. From the following tables write a SQL query to retrieve the orders with orderqtys greater than 5 or unitpricediscount less than 1000, and totaldues greater than 100. Return all the columns from the tables.
```sql
SELECT * FROM sales.salesorderheader h INNER JOIN sales.salesorderdetail d using(salesorderid) WHERE (orderqty > 5 or unitpricediscount < 1000) and totaldue > 100;
```

52. From the following table write a query in SQL that searches for the word 'red' in the name column. Return name, and color columns from the table.
```sql
SELECT name , color FROM production.product WHERE name like '%Red%';
SELECT name , color FROM production.product WHERE to_tsvector(name) @@ to_tsquery('red');
```

53. From the following table write a query in SQL to find all the products with a price of $80.99 that contain the word Mountain. Return name, and listprice columns from the table.
```sql
SELECT name,listprice FROM production.product where listprice = 80.99 and to_tsvector(name) @@ to_tsquery('Mountain');
```
>[!NOTE]
>to_tsvector(name) @@ to_tsquery('Mountain') work same like like but it is faster compare to that based on text search 

54. From the following table write a query in SQL to retrieve all the products that contain either the phrase Mountain or Road. Return name, and color columns.
```sql
 SELECT name, color FROM production.product where to_tsvector(name) @@ to_tsquery('mountain | road');
```

55. From the following table write a query in SQL to search for name which contains both the word 'Mountain' and the word 'Black'. Return Name and color.
```sql
SELECT name, color FROM production.product where to_tsvector(name) @@ to_tsquery('mountain & black');
```

56. From the following table write a query in SQL to return all the product names with at least one word starting with the prefix chain in the Name column.
```sql
 SELECT name, color FROM production.product where to_tsvector(name) @@ to_tsquery('"chain*"');
```

57. From the following table write a query in SQL to return all category descriptions containing strings with prefixes of either chain or full.
```sql
SELECT name, color FROM production.product where to_tsvector(name) @@ to_tsquery('"chain*" | "full*"');
```

58. From the following table write a SQL query to output an employee's name and email address, separated by a new line character.
```sql
SELECT firstname||' '||lastname||CHR(10)||emailaddress FROM person.person p inner join person.Emailaddress using(businessentityid) where p.businessentityid = 1;
```

59. From the following table write a SQL query to locate the position of the string "yellow" where it appears in the product name.
```sql
 SELECT name, strpos(name, 'Yellow') as position FROM Production.product where strpos(name,'Yellow') > 0;
```

60. From the following table write a query in SQL to concatenate the name, color, and productnumber columns.
```sql
 SELECT concat( name,' color:-',color,' Product Number:',productnumber) as result , color FROM production.product;
```
>[!note]
>The below query will not dispaly the null value in any attribute of entire row
```sql
 SELECT name||' color:-'||color||' Product Number:'||productnumber as result , color FROM production.product;
```

61. Write a SQL query that concatenate the columns name, productnumber, colour, and a new line character from the following table, each separated by a specified character.
```sql
SELECT concat(name,',',productnumber,',',color,',',CHR(10)) from Production.product;
```

62. From the following table write a query in SQL to return the five leftmost characters of each product name.
```sql
SELECT LEFT(name, 5) FROM production.product;
```

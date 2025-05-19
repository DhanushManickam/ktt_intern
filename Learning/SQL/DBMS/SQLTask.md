# TASKs

1. Basic Join query to retriving sales person name
```sql
select s.businessentityid, p.firstname, p.lastname from person.person p inner join sales.salesperson s using(businessentityid);
```

2. Retriving query to get the records of sales person middle name is null
```sql
SELECT p.businessentityid, s.businessentityid, p.firstname, p.middlename, p.lastname from person.person p inner join sales.salesperson s using(businessentityid) where middlename is null;
```

3. Retriving query to get the records of person salary details history
```sql
 SELECT p.businessentityid, s.businessentityid, p.firstname, p.middlename, p.lastname, e.rate from person.person p inner join sales.salesperson s using(businessentityid) inner join humanresources.employeepayhistory e using(businessentityid) where middlename is null;
```

4. Inserting new records for the employee pay history table to update new rate of salary
```sql
insert into humanresources.employeepayhistory values (274, now(), 50.123, 2);
insert into humanresources.employeepayhistory values (277, now(), 40.123, 2);
```

5. Retriving record of the sales person whose middle name is null and latest updated salary
```sql
SELECT p.businessentityid, s.businessentityid, p.firstname, p.middlename, p.lastname, cast(e.rate as decimal(5, 2)) as rate, e.ratechangedate from person.person p inner join sales.salesperson s using(businessentityid) inner join (select *, rank() over (partition by (businessentityid) order by ratechangedate desc) as rows from humanresources.employeepayhistory where businessentityid in (277, 282, 274) order by rows) e using(businessentityid) where middlename is null and e.rows = 1 order by e.ratechangedate desc;
```

6. Retriving records of salesperson who name is not in regular a to z character using regexp_replace method
```sql
 SELECT p.businessentityid, s.businessentityid, regexp_replace(p.firstname,'[^a-zA-Z]', '', 'g'), p.middlename, p.lastname, cast(e.rate as decimal(5, 2)) as rate, e.ratechangedate from person.person p inner join sales.salesperson s using(businessentityid) inner join (select *, rank() over (partition by (businessentityid) order by ratechangedate desc) as rows from humanresources.employeepayhistory where businessentityid in (277, 282, 274) order by rows) e using(businessentityid) where middlename is null and e.rows = 1 order by e.ratechangedate desc;
```

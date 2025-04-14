-- Active: 1744351194127@@127.0.0.1@5432@postgres@public
create table trucks(
    id int PRIMARY key,
    brand VARCHAR NOT NULL,
    model varchar,
    licplate varchar(10) UNIQUE,
    driverid int,
    FOREIGN key (driverid) REFERENCES drivers(driverid)
);

create table drivers(
    driverid int PRIMARY key, 
    name VARCHAR(15) Not NULL,
    exp int,
    email VARCHAR(30),
    age int CHECK(age > 18)
);

-- INSERT INTO drivers (driverid, name, exp, email, age) VALUES
-- (1, 'Ravi', 5, 'ravi@example.com', 29),
-- (2, 'Kumar', 8, 'kumar@example.com', 35),
-- (3, 'Arun', 3, 'arun@example.com', 26),
-- (4, 'Sathish', 10, 'sathish@example.com', 40),
-- (5, 'Vijay', 2, 'vijay@example.com', 24);

SELECT * FROM drivers;

-- INSERT INTO trucks (id, brand, model, licplate, driverid) VALUES
-- (101, 'Volvo', 'FH16', 'TN01AB1234', 1),
-- (102, 'Ashok Leyland', 'Boss', 'TN02CD5678', 2),
-- (103, 'Volvo', 'Prima', 'TN03EF9012', 3),
-- (104, 'BharatBenz', '1217C', 'TN04GH3456', 4),
-- (105, 'Eicher', 'Pro 3015', 'TN05IJ7890', 5);

INSERT INTO trucks (id, brand, model, licplate, driverid) VALUES
(106, 'Volvo', 'FH16', 'TN01AB1244', NULL);
INSERT INTO trucks (id, brand, model, licplate, driverid) VALUES
(107, 'Volvo', 'FH16', 'TN01AB1644', NULL);
INSERT INTO trucks (id, brand, model, licplate, driverid) VALUES
(108, 'Volvo', 'FH16', 'TN01AB1256', NULL);

SELECT * FROM trucks;

SELECT drivers.name, trucks.id, trucks.brand FROM drivers INNER JOIN trucks on drivers.driverid = trucks.driverid;
SELECT drivers.name, trucks.id, trucks.brand FROM drivers LEFT JOIN trucks on drivers.driverid = trucks.driverid;
SELECT drivers.name, trucks.id, trucks.brand FROM drivers RIGHT JOIN trucks on drivers.driverid = trucks.driverid;
SELECT drivers.name, trucks.id, trucks.brand FROM drivers FULL OUTER JOIN trucks on drivers.driverid = trucks.driverid;

SELECT 
    d1.name AS driver,
    d2.name AS compared_to,
    d1.exp AS driver_exp,
    d2.exp AS compared_exp
FROM drivers d1 JOIN drivers d2 ON d1.exp > d2.exp;

SELECT drivers.name, trucks.brand from drivers CROSS JOIN trucks;


INSERT INTO drivers (driverid, name, exp, email, age) VALUES
(006, 'Siva das', 23, 'sivadas@gmail.com', 50);

-- scalar subquery
SELECT name, age FROM drivers WHERE age > (SELECT avg(age) FROM drivers);

SELECT * FROM trucks where driverid IN (SELECT driverid FROM drivers where exp > 5);

SELECT * FROM (
    SELECT * FROM drivers WHERE age < 30
) AS young_drivers JOIN trucks ON young_drivers.driverid = trucks.driverid;

-- SELECT concat('Dhanush', ' ', 'Manickam') As result;

-- SELECT upper('value') as result;

-- SELECT Lower('value') as result;

-- SELECT round(123.21234, 2) as result;

-- SELECT FLOOR (2.6) as result;

-- select CEIL (2.6) as result;

-- SELECT current_date as today;

-- Select current_time as time;

-- SELECT EXTRACT(YEAR FROM DATE '2025-04-14') AS year_value;

SELECT * FROM drivers where name = 'Vijay';

create INDEX index_derivername ON drivers(name);

SELECT * FROM drivers where name = 'Vijay';

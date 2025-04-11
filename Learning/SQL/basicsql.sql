-- Active: 1744351194127@@127.0.0.1@5432@postgres@public
CREATE TABLE Truck (
    truckid int PRIMARY KEY, 
    brand VARCHAR(30), 
    model CHAR(30),
    capacity Int, 
    mfd DATE,
    wheels SMALLINT, 
    cost FLOAT,
    descriptions TEXT
);



INSERT INTO Truck (truckid, brand,model, capacity, mfd, wheels, cost, descriptions) VALUES 
(1, 'Volvo', 'Volvo FE',25,'2025-04-11', 10, 1000000, 'This truck is good for daily goods transportation');


-- INSERT INTO Truck (truckid, brand, "model", capacity, mfd, wheels, cost, descriptions) 
-- VALUES 
--   (2, 'Volvo', 'Volvo FE', 25, '2025-04-11', 10, 1000000, 'This truck is good for daily goods transportation'),
--   (3, 'Volvo', 'Volvo FE', 25, '2025-04-11', 10, 1000000, 'This truck is good for daily goods transportation'),
--   (4, 'Volvo', 'Volvo FE', 25, '2025-04-11', 10, 1000000, 'This truck is good for daily goods transportation'),
--   (5, 'Volvo', 'Volvo FE', 25, '2025-04-11', 10, 1000000, 'This truck is good for daily goods transportation');


-- UPDATE Truck set mfd = '2025-03-12' where truckid = 2;

SELECT * FROM Truck;

ALTER TABLE Truck ADD licplate varchar (10);

UPDATE Truck  SET licplate = 'TN 34 2232' WHERE truckid = 1;

select count(*) from truck;

SELECT sum(cost) FROM truck;

SELECT mfd, count(*) FROM truck GROUP BY mfd;


CREATE TABLE Books (
  book_id INT PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  genre VARCHAR(50),
  published_date DATE,
  price DECIMAL(6,2),
  stock INT,
  language VARCHAR(30),
  rating DECIMAL(3,1),
  is_available BOOLEAN
);

-- INSERT INTO Books (book_id, title, author, genre, published_date, price, stock, language, rating, is_available) VALUES
-- (1, 'The Silent Patient', 'Alex Michaelides', 'Thriller', '2019-02-05', 12.99, 5, 'English', 4.1, TRUE),
-- (2, 'Atomic Habits', 'James Clear', 'Self-help', '2018-10-16', 16.00, 8, 'English', 4.8, TRUE),
-- (3, 'Ponniyin Selvan', 'Kalki Krishnamurthy', 'Historical Fiction', '1950-01-01', 9.50, 12, 'Tamil', 4.9, TRUE),
-- (4, 'Ikigai', 'Francesc Miralles', 'Philosophy', '2016-09-01', 10.25, 4, 'English', 4.3, TRUE),
-- (5, 'Sapiens', 'Yuval Noah Harari', 'History', '2014-09-04', 18.75, 3, 'English', 4.6, FALSE),
-- (6, 'The Alchemist', 'Paulo Coelho', 'Fiction', '1988-04-15', 7.99, 10, 'English', 4.2, TRUE),
-- (7, 'Zero to One', 'Peter Thiel', 'Business', '2014-09-16', 14.30, 6, 'English', 4.0, TRUE),
-- (8, 'Wings of Fire', 'A.P.J Abdul Kalam', 'Autobiography', '1999-01-01', 6.45, 15, 'English', 4.7, TRUE),
-- (9, 'Think Like a Monk', 'Jay Shetty', 'Motivational', '2020-09-08', 11.99, 9, 'English', 4.4, TRUE),
-- (10, 'Life of Pi', 'Yann Martel', 'Adventure', '2001-09-11', 13.99, 2, 'English', 4.5, FALSE);

SELECT genre, count(*) FROM books GROUP BY genre;

SELECT max(stock) FROM books GROUP BY language;

SELECT avg(rating) FROM books;

SELECT * FROM books WHERE rating > 4.5;

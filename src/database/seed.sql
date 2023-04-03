PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO
users
VALUES
(1, 'test@gmail.com', '123', 'abcd1'),
(2, 'test1@gmail.com', '123', 'abcd2'),
(3, 'test2@gmail.com', '123', 'abcd3'),
(4, 'test3@gmail.com', '123', 'abcd4'),
(5, 'test4@gmail.com', '123', 'abcd5');

INSERT INTO
users_profiles
VALUES
(1, 1, 1,'Georgia',100),
(2, 2, 2,'Karol',100),
(3, 3, 3,'Konstantina',100),
(4, 4, 4,'Natalia',100),
(5, 5, 5,'Niete',100);

  
INSERT INTO
habit_categories
VALUES
(1, 'Get Organised'),
(2, 'Get Prepared'),
(3, 'Get Healthy'),
(4, 'Get Reflective');

INSERT INTO
tasks
VALUES
(1, 'Check tomorrows timetable', 1, 1),
(2, 'Pack correct books',1,1),
(3, 'Pack the school equipment I need',1,1),
(4, 'Lay out school uniform for tomorrow',2,1),
(5, 'Stop using technology for an hour before bed',2,1),
(6, 'Go to bed at a time that allows at least 8 hours of rest',2,1),
(7, 'Drink at least 2 glasses of water', 3, 1),
(8, 'Complete a 30 minute walk',3,1),
(9, 'Eat at least 2 fruit or veg',3,1),
(10, 'Talk to an adult in your house about what you learned today',4,1), 
(11, 'Write down something you did that was difficult but you stuck at it',4,1), 
(12, 'Write down something you want to work on tomorrow',4,1),
(13, 'Complete a 10 minute walk',3,1),
(14, 'Complete a 20 minute walk',3,1);

INSERT INTO current_tasks VALUES (1, 1, 1, '2023-03-24'),
(2, 1, 2, '2023-03-24'),
(3, 1, 3, '2023-03-24'),
(4, 1, 4, '2023-03-24'),
(5, 1, 5, '2023-03-24'),
(6, 1, 6, '2023-03-24'),
(7, 1, 7, '2023-03-24'),
(8, 1, 8, '2023-03-24'),
(9, 1, 9, '2023-03-24'),
(10, 1, 10, '2023-03-24'),
(11, 1, 11, '2023-03-24'),
(12, 1, 12, '2023-03-24');

INSERT INTO 
avatars
VALUES
(1, 'Avatar 1','/avatars/Avatar-1.png',0),
(2, 'Avatar 2','/avatars/Avatar-2.png',0),
(3, 'Avatar 3','/avatars/Avatar-3.png',20),
(4, 'Avatar 4','/avatars/Avatar-4.png',30),
(5, 'Avatar 5','/avatars/Avatar-5.png',40),
(6, 'Avatar 6','/avatars/Avatar-6.png',50),
(7, 'Avatar 7','/avatars/Avatar-7.png',60),
(8, 'Avatar 8','/avatars/Avatar-8.png',70),
(9, 'Avatar 9','/avatars/Avatar-9.png',80),
(10, 'Avatar 10','/avatars/Avatar-10.png',90),
(11, 'Avatar 11','/avatars/Avatar-11.png',100),
(12, 'Avatar 12','/avatars/Avatar-12.png',110),
(13, 'Avatar 13','/avatars/Avatar-13.png',120),
(14, 'Avatar 14','/avatars/Avatar-14.png',130);

INSERT INTO 
user_avatars
VALUES
(1, 1, 1),
(2, 1, 2);

INSERT INTO 
history_tasks
VALUES
(1, 1, 3, 1, '2023-03-24'),
(2, 1, 1, 0, '2023-03-24');


COMMIT;
PRAGMA foreign_keys = ON;



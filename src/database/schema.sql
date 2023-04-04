
BEGIN;


CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  password TEXT,
  code TEXT
);

CREATE TABLE IF NOT EXISTS users_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  user_avatar INTEGER REFERENCES user_avatars(id),
  user_name TEXT, 
  user_points INTEGER
);

CREATE TABLE IF NOT EXISTS avatars (
    id INTEGER PRIMARY KEY, 
    name TEXT,
    img_src TEXT,
    price INTEGER  
);

CREATE TABLE IF NOT EXISTS user_avatars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  avatar_id INTEGER REFERENCES avatars(id)
);

CREATE TABLE IF NOT EXISTS habit_categories (
    id INTEGER PRIMARY KEY, 
    name TEXT  
);


CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name TEXT,
    category_id INTEGER REFERENCES habit_categories(id),
    points INTEGER
);

CREATE TABLE IF NOT EXISTS current_tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    task_id INTEGER REFERENCES tasks(id),
    date_task_added DATE
);

CREATE TABLE IF NOT EXISTS history_tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    task_id INTEGER REFERENCES tasks(id),
    status BOOLEAN default false,
    date DATE 
);


COMMIT;



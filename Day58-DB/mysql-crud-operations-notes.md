# MySQL CRUD Operations

CRUD is the set of core operations used to manage persistent data:

| Operation | SQL command | Purpose |
| --- | --- | --- |
| Create | `INSERT` | Add new rows |
| Read | `SELECT` | Retrieve rows |
| Update | `UPDATE` | Change existing rows |
| Delete | `DELETE` | Remove rows |

Before performing CRUD, you define a table with `CREATE TABLE`. This definition is called the **schema**: it specifies the columns, their allowed formats, and the rules data must follow.

## Table format and constraints

Examples below use this table:

```sql
CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  age TINYINT UNSIGNED,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

### Reading the `id` column

```sql
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY
```

This one line contains the column name, its data type, and three constraints/attributes:

| Part | Meaning |
| --- | --- |
| `id` | The column name. It identifies each user record. |
| `INT` | A whole-number data type. It does not store decimals or text. A signed `INT` ranges from about -2.1 billion to +2.1 billion. |
| `UNSIGNED` | Disallows negative values. It changes an `INT` range to `0` through about `4.29 billion`, which makes sense for an ID. |
| `AUTO_INCREMENT` | MySQL assigns the next numeric value when a row is inserted without an `id`. The number is normally increased each time; gaps can still occur after deletes or failed inserts. |
| `PRIMARY KEY` | Makes this column the table's unique row identifier. It cannot be `NULL`, cannot repeat, and MySQL indexes it automatically. |

When inserting a user, do not manually provide the ID in the normal case:

```sql
INSERT INTO users (name, email, age)
VALUES ('Jay', 'jay@example.com', 22);
```

MySQL could store this row as `id = 1`. The next automatically generated ID could be `2`.

> `AUTO_INCREMENT` must be on an indexed integer column. A primary key is the usual and recommended choice. Every table should normally have a stable primary key.

### Other columns explained

| Definition | Type/constraint | What it enforces |
| --- | --- | --- |
| `name VARCHAR(100) NOT NULL` | Variable-length text, maximum 100 characters | A name is required; `NULL` cannot be stored. |
| `email VARCHAR(255) NOT NULL UNIQUE` | Variable-length text, maximum 255 characters | An email is required and cannot be duplicated. `UNIQUE` creates a unique index. |
| `age TINYINT UNSIGNED` | Small non-negative integer (`0`–`255`) | Age is optional because it has no `NOT NULL`; omitted values become `NULL`. |
| `created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP` | Date and time | A timestamp is required. If omitted during insert, MySQL uses the current time. |

### Essential constraints

Constraints are database-level rules. They protect data even if a bug exists in application code.

```sql
CREATE TABLE products (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  sku VARCHAR(50) NOT NULL UNIQUE,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT UNSIGNED NOT NULL DEFAULT 0,
  category_id INT UNSIGNED,
  CONSTRAINT chk_price_non_negative CHECK (price >= 0),
  CONSTRAINT fk_product_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

| Constraint / keyword | Purpose |
| --- | --- |
| `NOT NULL` | Requires a value. `NULL` means absent or unknown, not an empty string and not zero. |
| `DEFAULT value` | Supplies a value when an `INSERT` omits that column. |
| `UNIQUE` | Prevents duplicate non-`NULL` values in a column or column combination. |
| `PRIMARY KEY` | The unique, non-null identifier for each row. |
| `FOREIGN KEY` | Requires a value to refer to a valid row in another table, maintaining **referential integrity**. |
| `CHECK` | Requires an expression to be true, for example `price >= 0`. |

### Choosing common MySQL data types

| Data needed | Suitable type | Notes |
| --- | --- | --- |
| IDs/counts | `INT UNSIGNED` or `BIGINT UNSIGNED` | Use `BIGINT` when the table may exceed the `INT` range. |
| Short text | `VARCHAR(n)` | `n` is the maximum character length. |
| Large/free-form text | `TEXT` | For descriptions, articles, and comments. |
| Money | `DECIMAL(10, 2)` | Exact decimal values; avoid `FLOAT`/`DOUBLE` for currency because of rounding behaviour. |
| True/false | `BOOLEAN` / `TINYINT(1)` | MySQL treats `BOOLEAN` as an alias for `TINYINT(1)`; commonly use `0` and `1`. |
| Calendar date | `DATE` | Stores `YYYY-MM-DD`, with no time. |
| Date and time | `DATETIME` or `TIMESTAMP` | Use according to your time-zone and range requirements; be consistent. |

### Inspecting the real table definition

```sql
DESCRIBE users;
SHOW CREATE TABLE users;
```

`DESCRIBE` gives a quick column summary. `SHOW CREATE TABLE` returns the complete SQL definition, including keys and constraints.

## Create: `INSERT`

`INSERT INTO` creates one or more rows. List columns explicitly: it makes the query clearer and prevents problems if the schema later changes.

```sql
INSERT INTO users (name, email, age)
VALUES ('Jay', 'jay@example.com', 22);
```

The `id` is omitted because MySQL generates it through `AUTO_INCREMENT`. `created_at` uses its default value.

Insert multiple rows:

```sql
INSERT INTO users (name, email, age)
VALUES
  ('Asha', 'asha@example.com', 24),
  ('Ravi', 'ravi@example.com', 20);
```

### Handling duplicate unique values

Since `email` is `UNIQUE`, inserting an already-used email normally produces an error. Use `ON DUPLICATE KEY UPDATE` only when updating the existing row is the intended behaviour.

```sql
INSERT INTO users (name, email, age)
VALUES ('Jay Kumar', 'jay@example.com', 23)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  age = VALUES(age);
```

## Read: `SELECT`

`SELECT` retrieves data. Avoid `SELECT *` in production code when possible; select the columns the application actually needs.

```sql
SELECT id, name, email
FROM users;
```

### Filtering with `WHERE`

```sql
SELECT id, name, age
FROM users
WHERE age >= 21;
```

Common comparison operators are `=`, `!=` (or `<>`), `>`, `<`, `>=`, and `<=`.

```sql
SELECT id, name
FROM users
WHERE name LIKE 'Ja%';
```

`LIKE 'Ja%'` matches values starting with `Ja`. `%` represents zero or more characters.

### Sorting and limiting

```sql
SELECT id, name, created_at
FROM users
ORDER BY created_at DESC
LIMIT 10 OFFSET 0;
```

- `ORDER BY` sorts results.
- `DESC` means descending; `ASC` means ascending.
- `LIMIT` restricts the number of returned rows.
- `OFFSET` skips rows and is commonly used for pagination.

### Aggregate queries

```sql
SELECT COUNT(*) AS user_count, AVG(age) AS average_age
FROM users
WHERE age IS NOT NULL;
```

`COUNT`, `AVG`, `SUM`, `MIN`, and `MAX` aggregate many rows into a result. Use `IS NULL` or `IS NOT NULL` to test missing values; `= NULL` does not work.

## Update: `UPDATE`

`UPDATE` modifies existing rows. A `WHERE` clause identifies the target rows.

```sql
UPDATE users
SET name = 'Jay Kumar', age = 23
WHERE id = 1;
```

Update based on another condition:

```sql
UPDATE users
SET age = age + 1
WHERE email = 'jay@example.com';
```

> **Critical:** An `UPDATE` without `WHERE` changes every row in the table.

Before an update, run the same condition using `SELECT`:

```sql
SELECT id, name, age
FROM users
WHERE email = 'jay@example.com';
```

## Delete: `DELETE`

`DELETE` removes rows that match a condition.

```sql
DELETE FROM users
WHERE id = 3;
```

> **Critical:** `DELETE FROM users;` removes all rows while keeping the table and its schema.

To remove all rows and reset `AUTO_INCREMENT`, MySQL also provides:

```sql
TRUNCATE TABLE users;
```

`TRUNCATE` is a DDL operation, behaves differently from `DELETE`, and should be used carefully. To remove the table definition itself, use `DROP TABLE users;`—this is more destructive.

## Transactions

A transaction groups related operations into one all-or-nothing unit. This is important when partial updates would create invalid data.

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;
```

If a problem is found before `COMMIT`, undo the changes:

```sql
ROLLBACK;
```

Transactions require a transactional storage engine such as InnoDB. In real applications, also check affected-row counts and enforce constraints such as `NOT NULL`, `UNIQUE`, and foreign keys.

## Practical checklist

- Use parameterized queries/prepared statements in application code; never build SQL by concatenating user input.
- Use `WHERE` for targeted `UPDATE` and `DELETE` statements.
- Inspect target rows with `SELECT` before changing or deleting them.
- Add indexes to columns frequently used in filters and joins, after considering query patterns.
- Use transactions for operations that must succeed or fail together.

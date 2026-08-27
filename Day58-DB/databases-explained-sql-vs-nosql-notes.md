# Databases Explained: SQL vs. NoSQL

## Why databases are needed

Applications need a way to store data permanently. Data held only in program memory (such as variables) disappears when the application or server restarts.

A database keeps information available for later use. Common examples include user accounts, products, posts, comments, orders, and payments.

## SQL databases

SQL means **Structured Query Language**. SQL databases are structured and relational.

- Data is stored in **tables**.
- A table represents one type of data, such as `users`, `products`, or `orders`.
- **Rows** are individual records; **columns** are the properties of each record.
- A **schema** defines the table's structure before data is stored.
- Tables can be connected through relationships.

Example `users` table:

| id | name | email |
| --- | --- | --- |
| 1 | Jay | jay@example.com |
| 2 | Sam | sam@example.com |

### Schema

A schema sets the expected columns and data types:

```sql
id    INTEGER
name  TEXT
email TEXT
```

This makes data more consistent and predictable.

### Relationships

SQL is especially good when different pieces of data are connected. For example, one user can place many orders, and each order belongs to one user.

This is commonly represented with a foreign key:

```text
users.id -> orders.user_id
```

### Examples

- PostgreSQL (Postgres)
- MySQL
- SQLite
- Oracle

### Strengths

- Strong data consistency
- Excellent support for relationships
- Powerful queries using SQL
- Great for structured systems such as ecommerce, bookings, payments, and user management

## NoSQL databases

NoSQL means **Not Only SQL**. These databases do not always store data in traditional tables with a fixed schema.

- Data can have a flexible or dynamic structure.
- Different records can contain different fields.
- They are useful when an application's requirements and data shape change frequently.
- Many NoSQL systems are designed to scale efficiently for large workloads.

Example of document-style data:

```json
{
  "name": "Jay",
  "email": "jay@example.com",
  "skills": ["HTML", "CSS", "SQL"]
}
```

Another record can have additional fields without changing every existing record:

```json
{
  "name": "Sam",
  "email": "sam@example.com",
  "github": "sam-dev",
  "isPremium": true
}
```

### Examples

- MongoDB
- Redis
- DynamoDB

### Strengths

- Flexible data structure
- Suitable for rapidly evolving applications
- Useful for large volumes of varied or semi-structured data

## SQL vs. NoSQL

| Feature | SQL | NoSQL |
| --- | --- | --- |
| Data structure | Tables | Documents, key-value pairs, graphs, and more |
| Schema | Defined upfront | Flexible/dynamic |
| Relationships | Strong built-in support | Often managed differently or in app code |
| Consistency | Strong and reliable | Varies by database and design |
| Good fit | Structured, connected data | Fast-changing or varied data |
| Examples | Postgres, MySQL, SQLite | MongoDB, Redis, DynamoDB |

## Key takeaway

NoSQL is a useful flexible option, but SQL databases remain highly important. Postgres is particularly popular with developers because it is reliable and powerful.

Choose SQL when your data has clear relationships, accuracy is important, and the structure is known. Choose NoSQL when flexibility and changing data shapes are the main priority.

Neither is always better: the right choice depends on the application's needs.

## Next module

The next module covers SQL in depth, including:

- CRUD: Create, Read, Update, and Delete
- Creating and querying tables
- Building relationships between tables

These concepts form a key foundation for backend and full-stack web development.

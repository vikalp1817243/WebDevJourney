# SQL Joins: Beginner Guide

A **JOIN** combines rows from two or more tables using a related column. It lets a database return connected data without duplicating it in every table.

## Example tables

### `customers`

| customer_id | name |
| --- | --- |
| 1 | Asha |
| 2 | Ravi |
| 3 | Meera |
| 4 | Zoya |

### `orders`

| order_id | customer_id | product |
| --- | --- | --- |
| 101 | 1 | Keyboard |
| 102 | 1 | Mouse |
| 103 | 2 | Monitor |
| 104 | 5 | USB Cable |

`customers.customer_id` is the **primary key**: it uniquely identifies a customer.

`orders.customer_id` is normally a **foreign key**: it refers to the customer who made the order. Here, order `104` has no matching customer, so it helps demonstrate an unmatched row. In a properly enforced foreign-key relationship, that row would usually be rejected.

## Join syntax

```sql
SELECT columns
FROM first_table
JOIN second_table
  ON first_table.related_column = second_table.related_column;
```

The `ON` clause is the **join condition**. It defines which rows are related.

Table aliases shorten queries:

```sql
SELECT c.name, o.product
FROM customers AS c
JOIN orders AS o
  ON c.customer_id = o.customer_id;
```

## 1. `INNER JOIN`

An `INNER JOIN` returns only rows that match in **both** tables.

```sql
SELECT c.name, o.order_id, o.product
FROM customers AS c
INNER JOIN orders AS o
  ON c.customer_id = o.customer_id;
```

Result:

| name | order_id | product |
| --- | --- | --- |
| Asha | 101 | Keyboard |
| Asha | 102 | Mouse |
| Ravi | 103 | Monitor |

Visual idea:

```text
customers  ∩  orders
only the matching part of both tables
```

Meera and Zoya have no orders, so they are excluded. Order `104` has no matching customer, so it is excluded too. `JOIN` by itself means `INNER JOIN` in MySQL.

## 2. `LEFT JOIN` (or `LEFT OUTER JOIN`)

A `LEFT JOIN` returns **every row from the left table**, plus matching rows from the right table. When there is no match, right-table columns contain `NULL`.

```sql
SELECT c.name, o.order_id, o.product
FROM customers AS c
LEFT JOIN orders AS o
  ON c.customer_id = o.customer_id;
```

Result:

| name | order_id | product |
| --- | --- | --- |
| Asha | 101 | Keyboard |
| Asha | 102 | Mouse |
| Ravi | 103 | Monitor |
| Meera | NULL | NULL |
| Zoya | NULL | NULL |

Visual idea:

```text
[ all customers ] + [ matching orders ]
```

Use this when the main thing you need is the complete left table—for example, list all customers whether or not they have ordered.

### Finding rows with no match

```sql
SELECT c.customer_id, c.name
FROM customers AS c
LEFT JOIN orders AS o
  ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

This returns customers with no orders: Meera and Zoya. This pattern is called an **anti-join**.

## 3. `RIGHT JOIN` (or `RIGHT OUTER JOIN`)

A `RIGHT JOIN` returns every row from the right table and matching rows from the left table.

```sql
SELECT c.name, o.order_id, o.product
FROM customers AS c
RIGHT JOIN orders AS o
  ON c.customer_id = o.customer_id;
```

Result:

| name | order_id | product |
| --- | --- | --- |
| Asha | 101 | Keyboard |
| Asha | 102 | Mouse |
| Ravi | 103 | Monitor |
| NULL | 104 | USB Cable |

Visual idea:

```text
[ matching customers ] + [ all orders ]
```

You can usually write the same query as a `LEFT JOIN` by swapping the table order. Because it is often easier to read, many developers mainly use `LEFT JOIN`.

## 4. `CROSS JOIN`

A `CROSS JOIN` returns every possible pairing of a row from the first table with a row from the second table. This is a **Cartesian product**.

```sql
SELECT c.name, p.product_name
FROM customers AS c
CROSS JOIN products AS p;
```

If there are 4 customers and 3 products, the result has `4 × 3 = 12` rows.

```text
customer 1 -> product 1, product 2, product 3
customer 2 -> product 1, product 2, product 3
...
```

Use it deliberately, for example to generate every customer/month reporting combination. It can create many rows very quickly.

## 5. Self join

A **self join** joins a table to itself. It is useful for hierarchical or related records in the same table, such as employees and their managers.

### `employees`

| id | name | manager_id |
| --- | --- | --- |
| 1 | Neha | NULL |
| 2 | Arjun | 1 |
| 3 | Priya | 1 |

```sql
SELECT employee.name AS employee, manager.name AS manager
FROM employees AS employee
LEFT JOIN employees AS manager
  ON employee.manager_id = manager.id;
```

Result:

| employee | manager |
| --- | --- |
| Neha | NULL |
| Arjun | Neha |
| Priya | Neha |

Aliases are required here because the same table has two roles.

## About `FULL OUTER JOIN` in MySQL

A full outer join would return every row from both tables, matching related rows where possible and filling missing columns with `NULL`.

MySQL does **not** support `FULL OUTER JOIN` directly. You can simulate it with a `LEFT JOIN`, a `RIGHT JOIN`, and `UNION`:

```sql
SELECT c.name, o.order_id, o.product
FROM customers AS c
LEFT JOIN orders AS o
  ON c.customer_id = o.customer_id

UNION

SELECT c.name, o.order_id, o.product
FROM customers AS c
RIGHT JOIN orders AS o
  ON c.customer_id = o.customer_id;
```

`UNION` combines result sets and removes duplicate matching rows. Use `UNION ALL` only if duplicate rows are wanted.

## Important technical terms

| Term | Meaning |
| --- | --- |
| Primary key | Unique identifier for a table row |
| Foreign key | Column that refers to a primary key in another table |
| Join condition | The `ON` expression that establishes a match |
| `NULL` | Missing or unknown value; it is not an empty string or zero |
| One-to-many | One customer can have many orders |
| Alias | A temporary shorter table or column name, such as `customers AS c` |
| Cardinality | How many related rows can exist, such as one-to-one or one-to-many |

## Common mistakes

- Using `WHERE` on a right-table column after a `LEFT JOIN` can remove the `NULL` rows and accidentally behave like an inner join.
- Forgetting the `ON` condition can create a huge, unintended Cartesian product.
- Joining on columns that are not keys may duplicate results when values are repeated.
- Prefer clearly named aliases and specify the desired columns instead of `SELECT *`.

Example: keep all customers while showing only orders for keyboards:

```sql
SELECT c.name, o.product
FROM customers AS c
LEFT JOIN orders AS o
  ON c.customer_id = o.customer_id
  AND o.product = 'Keyboard';
```

The product condition belongs in `ON` because unmatched customers should remain in the result.

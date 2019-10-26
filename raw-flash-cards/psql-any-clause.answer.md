Both are used to filter the returned rows of a query based on a condition placed against a subquery.

- `ANY` returns all rows where at least one row in the subquery passes the given condition

```
SELECT * 
FROM tb1 
WHERE age < ANY (
  SELECT age FROM tb2
)
```

- `ALL` returns all rows where at every row in the subquery passes the given condition

```
SELECT * 
FROM tb1 
WHERE age >= ALL (
  SELECT age FROM tb2
)
```
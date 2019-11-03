The `EXISTS` clause is used with subqueries. If the subquery does not return and rows then the primary query will also return zero rows.

The table in the subquery can be the same or different from those used in the primary query.

```
SELECT * 
FROM tb1 
WHERE EXISTS (SELECT 1 FROM tb2 WHERE age < 10)
```

[postgresql-exists/postgresqltutorial](http://www.postgresqltutorial.com/postgresql-exists/)
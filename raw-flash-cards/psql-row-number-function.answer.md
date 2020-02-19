The function `row_number()` assigns each row a sequentially increasing integer

```
SELECT 
	*,  
  row_number() OVER (ORDER BY column_name)
FROM test
```

- The clause `OVER` is required
- `OVER` accepts the clauses `ORDER BY` and / or `PARTITION BY` followed by the desired column-name

[postgresql-row_number/postgresqltutorial.com](https://www.postgresqltutorial.com/postgresql-row_number/)
The function `rank()` assigns each rank based on the column name provided 

```
SELECT 
	*,  
  row_number() OVER (ORDER BY column_name)
FROM test
```

- The clause `OVER` is required
- `OVER` accepts the clauses `ORDER BY` and / or `PARTITION BY` followed by the desired column-name
- Rows with equal values will receive the same ranking


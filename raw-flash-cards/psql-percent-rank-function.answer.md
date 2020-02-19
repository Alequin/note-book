The function `percent_rank()` find the percentage (value between 0 and 1) each value in the given column using the columns smallest value as 0% and highest value as 100%

```
SELECT 
	*,  
  percent_rank() OVER (ORDER BY column_name)
FROM test
FROM test
```

- The clause `OVER` is required
- `OVER` accepts the clauses `ORDER BY` and / or `PARTITION BY` followed by the desired column-name

[postgresql-percent_rank-function/postgresqltutorial.com](https://www.postgresqltutorial.com/postgresql-percent_rank-function/)
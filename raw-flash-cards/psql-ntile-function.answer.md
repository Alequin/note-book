The function `ntile(<bucketCount>)` divides a set of values over the desired number of buckets

```
SELECT 
	*,  
  ntile(10) OVER (ORDER BY column_name)
FROM test
```

- The clause `OVER` is required
- `OVER` accepts the clauses `ORDER BY` and / or `PARTITION BY` followed by the desired column-name


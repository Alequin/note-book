`PARTITION BY` applies row numbers within specific windows. 

In the following example row numbers are partitioned by event_year

```
SELECT 
	*,  
  row_number() OVER (PARTITION BY event_year ORDER BY event_year) AS row
FROM test
```

This means each unique event year will be a window, with its own sequentially increasing row number (ORDER BY is optional)

[postgresql-row_number/postgresqltutorial.com](https://www.postgresqltutorial.com/postgresql-row_number/)
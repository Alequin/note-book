`PARTITION BY` applies ranks within specific windows. 

In the following example partitioning is done by age partitioned by event_year

```
SELECT 
	*,  
  rank() OVER (PARTITION BY event_year ORDER BY age) AS rank
FROM test
```

This means rows with the same event_year will ranked separate from all other rows and ranking will be done in age order (with equal ages receiving the same rank). 
`PARTITION BY` applies the function within specific windows. 

---

In example 1 row numbers are partitioned by event_year

```
example 1

SELECT 
	*,  
  row_number() OVER (PARTITION BY event_year ORDER BY event_year) AS row
FROM test
```

This means each unique event year will be a window, with its own sequentially increasing row number (ORDER BY is optional)

---

In example 2 rank is partitioned by age and ordered by by event_year

```
example 2

SELECT 
	*,  
  rank() OVER (PARTITION BY event_year ORDER BY age) AS rank
FROM test
```

This means rows with the same event_year will ranked separate from all other rows and ranking will be done in age order (with equal ages receiving the same rank). 

---


In example 3 partitioning is done by both age and event_year

```
example 3

SELECT 
	*,  
  rank() OVER (PARTITION BY age,event_year) AS rank
FROM test
```

This means rows with the same event_year will ranked separate from all other rows and ranking will be done in age order (with equal ages receiving the same rank). 

---
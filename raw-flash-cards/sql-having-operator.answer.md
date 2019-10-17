The operator `HAVING` is uesd to apply conditions to a query while grouping data.

```
SELECT count(*) 
FROM person 
GROUP BY age 
HAVING age<=30
```

```
SELECT count(*) person_count, age 
FROM person 
GROUP BY age 
HAVING person_count>=3
```
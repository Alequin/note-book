A CTE (common table expression) creates a temporary value which can be queried using the given alias

```
WITH adults AS (
    SELECT * FROM people WHERE age >= 18
)
SELECT * FROM adults WHERE name LIKE 'J%'
```

Any previous temporary queries defined in a CTE can be used by any following definitions 

```
WITH adults AS (
    SELECT * FROM people WHERE age >= 18
),
adults2 AS (
 	 SELECT * FROM adults WHERE event_year >= 2005
)
SELECT * FROM adults2 WHERE name LIKE 'J%'
```
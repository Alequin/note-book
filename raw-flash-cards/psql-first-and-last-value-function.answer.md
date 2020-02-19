The function `first_value(<columnName>)` identifies the first value

```
SELECT 
	*,  
  first_value(age) OVER (ORDER BY event_year)
FROM test
```

The function `last_value(<columnName>)` identifies the last value 

```
SELECT 
	*,  
  last_value(age) OVER (ORDER BY event_year)
FROM test
```

Changing the column order within the `OVER` clause changes the result

```
SELECT 
	*,  
  last_value(age) OVER (ORDER BY event_year DESC)
FROM test
```

Changing the column order outside the `OVER` clause will not change the result

```
SELECT 
	*,  
  last_value(age) OVER (ORDER BY event_year)
FROM test
ORDER BY age
```

- The clause `OVER` is required
- `OVER` accepts the clauses `ORDER BY` and / or `PARTITION BY` followed by the desired column-name


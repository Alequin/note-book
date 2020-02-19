To control the frame of reference when working with window functions you can use the clauses...

- `UNBOUNDED PRECEDING`
- `UNBOUNDED FOLLOWING`
- `CURRENT ROW`

In example 1 sum(age) would normally take all columns into account but we can force it to only the preceding rows into account to get a sum after each row

```
example 1

SELECT 
	*,  
  sum(age) OVER (ORDER BY age ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
FROM test
```

In example 2 the same is done but for following rows rather than preceding

```
example 2

SELECT 
	*,  
  sum(age) OVER (ORDER BY age ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)
FROM test
```

In example 3 all values are take into account (which is the default but is shown here as an example)

```
example 3

SELECT 
	*,  
  sum(age) OVER (ORDER BY age ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
FROM test
```


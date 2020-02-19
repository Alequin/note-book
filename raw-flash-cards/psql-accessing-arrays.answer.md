In PSQL the first index in an array is '1' as shown in example 1

```
example 1

SELECT names[1] AS first_element 
FROM
(
  SELECT 
      ARRAY [ 'sam', 'jane', 'jill', 'bob' ] AS names
) AS tb
```

Example 2 would return null 

```
example 2

SELECT names[0] AS first_element 
FROM
(
  SELECT 
      ARRAY [ 'sam', 'jane', 'jill', 'bob' ] AS names
) AS tb
```
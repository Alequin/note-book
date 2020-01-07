The following syntax is used to cast to different data types
`<value>::<typeToCastTo>`

```
SELECT
  '100'::INTEGER,
  '01-OCT-2015'::DATE;
```

```
SELECT 
  (score::float / 100) AS percentage
FROM scores
```
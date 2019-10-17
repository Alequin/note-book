```
SELECT *
FROM table_1
UNION
SELECT *
FROM table_2;
```

```
SELECT name, age
FROM table_1
UNION ALL
SELECT name, age
FROM table_2
ORDER BY age DESC;
```
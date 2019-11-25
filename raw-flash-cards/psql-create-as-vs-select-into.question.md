In PSQL which method of creating a table from query results is prefered and why?

- Method 1

```
SELECT * INTO new_table_name 
FROM old_table_name otb 
WHERE otb.name='Sally';
```

- Method 2

```
CREATE TABLE new_table_name 
AS 
  SELECT * FROM old_table_name otb 
  WHERE otb.name='Sally';
```
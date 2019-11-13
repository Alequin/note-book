- To create a temporary table

```
SELECT * INTO TEMP temp_table_name FROM table_name;
```

Temporary tables 

- Are only visible to the session which created it 
- Are removed when the current session ends.
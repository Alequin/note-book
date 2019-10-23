The `EXCEPT` operator returns all the rows in the left table that are not included in the right table

```
SELECT name, age
FROM person
EXCEPT
   SELECT name, age
   FROM person
   INNER JOIN pets ON person.name=pets.owner
```
# Answer 

By using the string concatenation operator `||`

This requires at least one of the values to be a string

```
SELECT first_name || last_name AS full_name FROM people;
```

```
SELECT first_name || " - " ||  age AS person_with_age FROM people;
```
The subclause `CUBE` is used to define all variations of grouping sets. The following examples will produce the same result.

```
SELECT gender, country, eye_colour
FROM person 
GROUP BY CUBE(gender, country, eye_colour);
```

```
SELECT gender, country, eye_colour
FROM person 
GROUP BY 
	GROUPING SETS (
      (gender, country, eye_colour),
      (gender, country),
      (gender, eye_colour),
      (country, eye_colour),
      (gender),
      (country),
      (eye_colour),
      ()
);
```



[postgresql-grouping-sets](http://www.postgresqltutorial.com/postgresql-grouping-sets/)
[postgresql-cube](http://www.postgresqltutorial.com/postgresql-cube/)
[When to use GROUPING SETS, CUBE and ROLLUP](https://stackoverflow.com/questions/25274879/when-to-use-grouping-sets-cube-and-rollup)
[group-by-grouping-sets](https://docs.snowflake.net/manuals/sql-reference/constructs/group-by-grouping-sets.html)
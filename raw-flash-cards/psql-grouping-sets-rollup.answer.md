The subclause `ROLLUP` is used to define subset of grouping set variations based on the order of the columns provided. The following examples will produce the same result.

```
SELECT gender, country, eye_colour
FROM person 
GROUP BY ROLLUP(gender, country, eye_colour);
```

```
SELECT gender, country, eye_colour
FROM person 
GROUP BY 
	GROUPING SETS (
      (gender, country, eye_colour),
      (gender, country),
      (gender),
      ()
);
```

[postgresql-grouping-sets](http://www.postgresqltutorial.com/postgresql-grouping-sets/)
[postgresql-rollup](http://www.postgresqltutorial.com/postgresql-rollup/)
[When to use GROUPING SETS, CUBE and ROLLUP](https://stackoverflow.com/questions/25274879/when-to-use-grouping-sets-cube-and-rollup)
[group-by-grouping-sets](https://docs.snowflake.net/manuals/sql-reference/constructs/group-by-grouping-sets.html)
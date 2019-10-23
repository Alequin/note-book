# Grouping sets

`GROUPING SETS` is used to include multiple grouping conditions in a single query. The same result could be achieved by combining multiple queries with `UNION ALL` however this would be inefficent. `GROUPING SETS` computes the result with a single pass over the data and so is more performant than individual queries.

```
SELECT gender, country
FROM person 
GROUP BY 
	GROUPING SETS (
      (gender, country),
      (gender),
      (country),
      ()
);
```

`GROUPING SETS` also supports composite columns, allowing for grouping based on the values in multiple columns. 

```
SELECT gender, country
FROM person 
GROUP BY 
	GROUPING SETS ((gender, country));
```

## CUBE

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

## ROLLUP

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

# References

[sql-grouping-sets-operator/waitingforcode](https://www.waitingforcode.com/sql/sql-grouping-sets-operator/read)
[postgresql-grouping-sets/postgresqltutorial](http://www.postgresqltutorial.com/postgresql-grouping-sets/)
[When to use GROUPING SETS, CUBE and ROLLUP/stackoverflow](https://stackoverflow.com/questions/25274879/when-to-use-grouping-sets-cube-and-rollup)
[group-by-grouping-sets/snowflake](https://docs.snowflake.net/manuals/sql-reference/constructs/group-by-grouping-sets.html)
[postgresql-cube/postgresqltutorial](http://www.postgresqltutorial.com/postgresql-cube/)
[postgresql-rollup/postgresqltutorial](http://www.postgresqltutorial.com/postgresql-rollup/)

|\-/|Tags|\-/|-psql,postgres,database,grouping-sets,cube,rollup-|\-/|Tags|\-/|
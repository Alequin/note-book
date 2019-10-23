`GROUPING SETS` is used to include multiple grouping conditions in a single query.
It is a performance tool as this method is more efficient than individual queries.

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

[postgresql-grouping-sets](http://www.postgresqltutorial.com/postgresql-grouping-sets/)
[postgresql-rollup](http://www.postgresqltutorial.com/postgresql-rollup/)
[When to use GROUPING SETS, CUBE and ROLLUP](https://stackoverflow.com/questions/25274879/when-to-use-grouping-sets-cube-and-rollup)
[group-by-grouping-sets](https://docs.snowflake.net/manuals/sql-reference/constructs/group-by-grouping-sets.html)
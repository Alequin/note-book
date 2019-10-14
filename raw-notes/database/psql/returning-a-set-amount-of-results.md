# Returning a Set Amount of Results

In psql the two ways to return a specific number of results

`limit` and `fetch`

## Use of Limit

`SELECT * FROM table ORDER BY id LIMIT 100`
`SELECT * FROM table ORDER BY id LIMIT 100 OFFSET 50`

## Use of Fetch

`SELECT * FROM table ORDER BY id FETCH NEXT 100 ROWS ONLY`
`SELECT * FROM table ORDER BY id OFFSET 50 FETCH NEXT 100 ROWS ONLY`

## What is the difference

There is no performance difference between the two. The only difference is syntactic.

# References

[postgresql-fetch (http://www.postgresqltutorial.com)](http://www.postgresqltutorial.com/postgresql-fetch/)
[sql-fetch (www.postgresql.org)](https://www.postgresql.org/docs/10/sql-fetch.html)
[LIMIT / FETCH (docs.snowflake.net)](https://docs.snowflake.net/manuals/sql-reference/constructs/limit.html)

|\-/|Tags|\-/|-psql,postgres,database,pagination,limit,fetch,offset-|\-/|Tags|\-/|
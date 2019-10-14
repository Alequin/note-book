# The LIKE operator

This operator performs queries using patterns to match against a range of results

`%` - matches any sequence of characters
`_` - matches any single character

`SELECT * FROM table WHERE text LIKE '_search_'`
`SELECT * FROM table WHERE text LIKE 'text-%'`

## ILIKE

`ILIKE` can be used in the same way as `LIKE` only it match is case insensitive.

|\-/|Tags|\-/|-psql,postgres,database,like,pattern,match-|\-/|Tags|\-/|

# References

[postgresql-like (http://www.postgresqltutorial.com/postgresql-like/)](http://www.postgresqltutorial.com/postgresql-like/)
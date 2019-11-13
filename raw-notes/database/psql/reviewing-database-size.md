# Database size

## Table size

- The size of a table

```
select pg_size_pretty (pg_relation_size('table_name'));
```

- The size of a table including indexes and additional objects

```
SELECT
    pg_size_pretty (
        pg_total_relation_size ('table_name')
    );
```

- All tables sizes

```
SELECT
    relname AS "relation",
    pg_size_pretty (
        pg_total_relation_size (C.oid)
    ) AS "total_size"
FROM
    pg_class C
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE
    nspname NOT IN (
        'pg_catalog',
        'information_schema'
    )
AND C.relkind <> 'i'
AND nspname !~ '^pg_toast'
ORDER BY
    pg_total_relation_size (C.oid) DESC
```

## Database size

- The size of a database

```
SELECT
    pg_size_pretty (
        pg_database_size ('database_name')
    );
```

- The size of all databases on a server

```
SELECT
    pg_database.datname,
    pg_size_pretty(pg_database_size(pg_database.datname)) AS size
    FROM pg_database;
```

## Other size functions

- The size of Indexes associated with a table 

```
SELECT pg_size_pretty (pg_indexes_size('table_name'));
```

- Values size 

```
SELECT pg_column_size(5::smallint);
```

# References

[How to Get Table, Database, Indexes, Tablespace, and Value Size in PostgreSQL/postgresqltutorial](http://www.postgresqltutorial.com/postgresql-database-indexes-table-size/)

|\-/|Tags|\-/|-psql,postgres,database,-|\-/|Tags|\-/|
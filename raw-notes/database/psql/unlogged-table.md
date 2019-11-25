# UNLOGGED table

An `UNLOGGED` table is a PSQL feature which aims to improve write performance by not writting to the `WAL` (write-ahead log). The performance boost is however at the cost of potentially loosing data if there is a crash and being unable to use replica servers. 

## Key details about UNLOGGED TABLES

- Not crash safe
- UNLOGGED tables persist after the session ends
- Contents are not propagated to replica servers
- Improved write performance
  - The specific gain will vary and benchmarking should be done with your setup


## Common reasons to use an UNLOGGED table

- large data sets (e.g. computation) which will be only used few times
- dynamic data with expiration date e.g. user sessions
- volatile data which can be easily regenerated

## Examples

- **Create an unlogged table**

```
CREATE UNLOGGED TABLE table_name(
  ...
);
```

- **Make an existing table UNLOGGED**

```
ALTER TABLE table_name SET UNLOGGED
```

- **Make an existing table LOGGED**

```
ALTER TABLE table_name SET LOGGED
```

- **Find all UNLOGGED tables**


```
SELECT relname FROM pg_class WHERE relpersistence = 'u';
```

# References

- [Faster INSERTs: How to increase PostgreSQL write performance / blog.nukomeet.com](https://blog.nukomeet.com/faster-inserts-how-to-increase-postgresql-write-performance-24d76bd56f75)
- [Faster Performance with Unlogged Tables in PostgreSQL / https://www.compose.com/articles/faster-performance-with-unlogged-tables-in-postgresql/](https://www.compose.com/articles/faster-performance-with-unlogged-tables-in-postgresql/)

|\-/|Tags|\-/|-psql,postgres,database,unlogged,performance,wal-|\-/|Tags|\-/|
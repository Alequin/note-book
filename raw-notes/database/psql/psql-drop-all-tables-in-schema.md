# Dropping all tables in a schema

- Build a number of drop table queries based on the table `pg_tables` and then execute them.
 
```
DO $$ DECLARE tablename RECORD;
    
BEGIN

  FOR tablename IN (
    SELECT pg_tables.tablename
    FROM pg_tables 
    WHERE schemaname = 'public' -- Update the schema if needed
  ) LOOP
    EXECUTE 'drop table if exists "' || tablename || '" cascade;';
  END LOOP;

END $$;
```

- Drop the schema that contains the tables of interest

```
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public IS 'standard public schema';
```

|\-/|Tags|\-/|-psql,postgres,database,table,tables,drop,delete,schema-|\-/|Tags|\-/|

# References

[StackOverflow: How can I drop all the tables in a PostgreSQL database?](https://stackoverflow.com/questions/3327312/how-can-i-drop-all-the-tables-in-a-postgresql-database)
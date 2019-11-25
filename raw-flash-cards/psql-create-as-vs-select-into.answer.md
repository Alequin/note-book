Method 2 is preferred

- `SELECT INTO` for table creation is deprecated
- The SQL standard does not use `SELECT INTO` to create tables
- `CREATE TABLE AS` offers a superset of the functionality provided by `SELECT INTO`
- `CREATE TABLE AS` preserves columns nullable constraints.

Full answer  => https://dba.stackexchange.com/questions/156105/create-table-as-vs-select-into
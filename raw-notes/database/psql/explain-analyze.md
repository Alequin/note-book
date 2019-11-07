# Explain / Analyze

- `EXPLAIN` is used in PSQL to view the execution plan to be used when for the given command

```
EXPLAIN SELECT * FROM my_table
EXPLAIN DELETE FROM my_table
EXPLAIN UPDATE my_table WHERE foo='bar'
```

- `EXPLAIN ANALYZE` returns the execution plan but also performs the command and provided details on actual performance

```
EXPLAIN ANALYZE SELECT * FROM my_table
EXPLAIN ANALYZE DELETE FROM my_table
EXPLAIN ANALYZE UPDATE my_table WHERE foo='bar'
```

## Reading an execution plan

**Example 1 Query**

```
EXPLAIN ANALYZE SELECT * FROM my_table WHERE age < 23
```

**Example 1 Execution Plan**

```
Seq Scan on my_table (cost=0.00..25.88 rows=423 width=36) (actual time=0.010..0.011 rows=1 loops=1)
```

- `Seq Scan on my_table`: This identifys the action to be taken and the table it intends to work against
- `(cost=0.00..25.88 rows=423 width=36)`
  - `cost=0.00..25.88`: The estimated cost (arbitrary units which conventionally mean disk page fetches) to run the action. 
    - The first value (0.00 in this example) indicates cost required to start the action
    - The second value (25.88 in this example) indicates cost to perform the action
  - `rows=423`: The estimated number of rows to be output
  - `width=36`: The estimated size in bytes of a single row
- `(actual time=0.010..0.011 rows=1 loops=1)`
  - `time=0.010..0.011`: The time (in milliseconds) to execute the command
  - `rows=1`: The number of rows returned by the command
  - `loops=1`: The number of times the action repeated (if greater then 1 actual time and rows are an average of every execution)

---

**Example 2 Query**

```
EXPLAIN SELECT * FROM tenk1 WHERE unique1 < 100 AND unique2 > 9000;
```


**Example 2 Execution Plan**

```
Bitmap Heap Scan on tenk1  (cost=25.08..60.21 rows=10 width=244)
   Recheck Cond: ((unique1 < 100) AND (unique2 > 9000))
   ->  BitmapAnd  (cost=25.08..25.08 rows=10 width=0)
         ->  Bitmap Index Scan on tenk1_unique1  (cost=0.00..5.04 rows=101 width=0)
               Index Cond: (unique1 < 100)
         ->  Bitmap Index Scan on tenk1_unique2  (cost=0.00..19.78 rows=999 width=0)
               Index Cond: (unique2 > 9000)
```

In this example multiple actions are required. The first actions to execute are those most deeply nested (there is no order guarantee for those on the same level). 

With nested execution plans the cost is cumulative for all sub actions. The costs for `Bitmap Index Scan on tenk1_unique1` and `Bitmap Index Scan on tenk1_unique2` represent the cost for that action only as these have no nested actions. However, the cost for `Bitmap Heap Scan on tenk1` includes the cost for the sub actions.  

## Considerations with execution plans

- Costs do not include network transmission costs or I/O conversion costs 
- The measurement overhead added by EXPLAIN ANALYZE can be significant
- `EXPLAIN ANALYZE` will result in side effect when used with update and delete (don't accidentally delete an entire table)

# References

[Reading a Postgres EXPLAIN ANALYZE Query Plan/thoughtbot](https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan)
[EXPLAIN/postgresql](https://www.postgresql.org/docs/9.3/sql-explain.html)
[Using EXPLAIN/postgresql](https://www.postgresql.org/docs/9.4/using-explain.html)

|\-/|Tags|\-/|-psql,postgres,database,query-plan,explain,explain-analyze-|\-/|Tags|\-/|
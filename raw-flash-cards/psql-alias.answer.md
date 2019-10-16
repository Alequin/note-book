No, the following two examples are just as valid

```
select tb.id as member_id from (
 select member_id as id from member
) as tb
```

```
select tb.id member_id from (
 select member_id id from member
) tb
```
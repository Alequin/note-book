
When a topic is created its name is validated by the function `Topic.validate`. The name must only contain chars which match the regex [a-zA-Z0-9._-](https://github.com/apache/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/common/internals/Topic.java#L29)

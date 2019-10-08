# Question

1. In Javascript Which operation is faster

  - String concatination

  ```
    const x = "good"
    const y = "morning"
    const result = x + " " + y
  ```

  - String interpolation 

  ```
    const x = "good"
    const y = "morning"
    const result = `${x} ${y}`
  ```

2. Which is the preferred method

# Answer

1. String concatenation is more performant than interpolation by a small margin
1. As the efficiency gain of concatenation is only minor in most cases using interpolation to improve readability would be prefered
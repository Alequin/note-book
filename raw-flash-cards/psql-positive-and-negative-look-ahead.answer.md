A Lookahead allows is a regex pattern which allows you to define which characters are allowed and not allowed to follow others.

- Positive Lookahead /r(?=e)/g
- Negative Lookahead /r(?!e)/g

_Warning not all regex engine allow are regex within the Lookahead_


In the following examples the bold characters match the given regex

--- 

Regex - /r(?!e)/g
read **r**oom **r**adio real **r**ope

Any "r" characters which are not followed by "e" are matched

--- 

Regex - /r(?=e)/g
read **r**oom **r**adio real **r**ope

Any "r" characters which are followed by "e" are matched

---

Regex - /r(?!e|o)/g
read room **r**adio real rope

Any "r" characters which are followed by "e" or "o" are not matched

---

Regex - /r(?!.*r)/g
read room radio real **r**ope

Any "r" characters which are not followed by another "r" character in any position are matched (useful for finding the last instance of a char)

---




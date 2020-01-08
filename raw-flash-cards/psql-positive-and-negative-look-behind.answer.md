A ()) allows is a regex pattern which allows you to define which characters are allowed and not allowed to follow others.

- Positive Lookbehind /(?<=\s)r/g
- Negative Lookbehind /(?<!\s)r/g

_Warning not all regex engine allow are regex within the Lookbehind_

In the following examples the bold characters match the given regex

--- 

Regex - /(?<=\s)r/g
read **r**oom **r**adio **r**eal **r**ope

Any "r" characters which are preceded by a space are matched

--- 

Regex - /(?<!\s)r/g
**r**ead room radio real rope

Any "r" characters which are not preceded by a space are not matched

---





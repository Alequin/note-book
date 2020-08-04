It is important when functions have similar signatures.

In the following example the second definition of the function `hello` will never be called as signature of the first matches all patters.

Even if the correct pattern was given to match the second definition it would still fall into the first.

```
defmodule ElixirPlay do

  def hello (input) do
    "Any input: #{input}"
  end

  def hello ([input]) do
    input
  end
end

```

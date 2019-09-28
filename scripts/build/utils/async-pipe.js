const asyncPipe = (...allFunctions) => {
  const functionCaller = async (args, functions) => {
    if (functions.length <= 0) return
    const [func, ...remainingFunctions] = functions
    const nextArgs = await func(args)
    functionCaller(nextArgs, remainingFunctions)
  }

  return initialArgs => functionCaller(initialArgs, allFunctions)
}

module.exports = asyncPipe

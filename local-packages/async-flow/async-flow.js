const asyncFlow = (...allFunctions) => {
  const functionCaller = async (args, functions) => {
    if (functions.length <= 0) return args
    const [func, ...remainingFunctions] = functions
    const nextArgs = await func(args)
    return functionCaller(nextArgs, remainingFunctions)
  }

  return (...initialArgs) => functionCaller(initialArgs, allFunctions)
}

module.exports = asyncFlow

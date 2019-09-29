const asyncFlow = (...allFunctions) => {
  const functionCaller = async (functions, args) => {
    if (functions.length <= 0) return args
    const [func, ...remainingFunctions] = functions
    const nextArgs = await func(args)
    return functionCaller(remainingFunctions, nextArgs)
  }

  return (...initialArgs) => functionCaller(allFunctions, ...initialArgs)
}

module.exports = asyncFlow

No. The function `getBoundingClientRect`, when used in the render method, is unperformant and can cause issues.

If you need to use it make you should attempt to improve performance with `useMemo` or `useCallback`.
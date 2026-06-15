# 13. Helpful Patterns & Tips

- Prefer pure functions (no side effects) when possible.
- Use `const` by default, switch to `let` when reassigning.
- Avoid deep mutation — prefer `...` spread for shallow copies.
- When filtering/mapping combine operations only when readable.
- Use `try/catch` around `await` calls when errors are possible.

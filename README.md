# test-deno-vanilla-extract-vite

# Reproducing `Error: Failed to recover `TsconfigCache` type from napi value`

Intermittent build error (~53% of attempts) occurring in `rolldown@1.0.3`'s NAPI binding.

## How to reproduce

```sh
sh ./repro.sh
```

## Note

This error only reproduces when running with **Deno** as the runtime. The same project built with **Node.js v26.1.0** (pnpm) does not exhibit this issue — 0 failures across 5 consecutive builds with identical dependency versions.

**Environment:**
1. Deno 2.8.3 (aarch64-apple-darwin)
2. macOS 26.5.1 (25F80)

## Stack trace

```
Error: Failed to recover `TsconfigCache` type from napi value
    at transformSync (rolldown/dist/shared/resolve-tsconfig-CcfxWrib.mjs:94:58)
    at transformWithOxc (vite/dist/node/chunks/node.js:3327:17)
    at compileRouteFile (@react-router/dev/dist/vite.js:3073:21)
```

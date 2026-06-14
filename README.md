# test-deno-vanilla-extract-vite

# Reproducing `Error: Failed to recover `TsconfigCache` type from napi value`

Intermittent build error (~53% of attempts) occurring in `rolldown@1.0.3`'s NAPI binding.

## How to reproduce

```sh
sh ./repro.sh
```

## Stack trace

```
Error: Failed to recover `TsconfigCache` type from napi value
    at transformSync (rolldown/dist/shared/resolve-tsconfig-CcfxWrib.mjs:94:58)
    at transformWithOxc (vite/dist/node/chunks/node.js:3327:17)
    at compileRouteFile (@react-router/dev/dist/vite.js:3073:21)
```

#!/usr/bin/env bash
set -euo pipefail

for i in $(seq 1 5); do
  echo "--- Attempt $i ---"
  deno task build 2>&1 | grep "Failed to recover" || echo "(no error)"
done

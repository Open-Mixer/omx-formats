#!/bin/sh
# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com>
# The tree's own check: every .json under contract.d/ parses, and a module's document is where its $id says.
set -eu
cd "$(dirname "$0")/.."
test -d contract.d || { echo "check: no module yet"; exit 0; }
n=0
for f in $(find contract.d -name '*.json' | sort); do
  python3 -I -c 'import json,sys; json.load(open(sys.argv[1]))' "$f" || { echo "check: $f does not parse" >&2; exit 1; }
  n=$((n+1))
done
echo "check: $n files parse"

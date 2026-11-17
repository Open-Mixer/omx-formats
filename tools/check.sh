#!/bin/sh
# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com>
# The tree's check. Every .json under contract.d/ parses (shell and python3 only). With OMX_CONTRACT set to the
# omx-contract command (bin/omx-contract.mjs of a checkout of the release this tree is built with, or the installed
# omx-contract), it also: validates the modules; proves the committed renders are the render of the modules; and proves
# them the render omx-contract's own classic data/formats/ made before the move (move 12 of omx-contract#81):
#   - include/omxcontract/omx_formats.h and share/omx-formats/omx_formats.py are byte for byte what omx-contract
#     rendered from data/formats/ (the files were copied from its last render, the check holds the modules to them);
#   - ts/formats.js and ts/formats.d.ts are the tail of omx-contract's ts render: the format values it ends with;
#   - test/golden/terms.digest is the digest of every term of the classic 82 items (tools/terms-digest.mjs), which the
#     modules' terms must equal: 297 CLAP terms and 452 LV2 terms, none dropped, none changed.
set -eu
cd "$(dirname "$0")/.."
test -d contract.d || { echo "check: no module yet"; exit 0; }
n=0
for f in $(find contract.d -name '*.json' | sort); do
  python3 -I -c 'import json,sys; json.load(open(sys.argv[1]))' "$f" || { echo "check: $f does not parse" >&2; exit 1; }
  n=$((n+1))
done
echo "check: $n files parse"
[ -n "${OMX_CONTRACT:-}" ] || { echo "check: OMX_CONTRACT is not set: the renders are not checked" >&2; exit 0; }
oc() { node "$OMX_CONTRACT" "$@"; }
out=$(mktemp -d); trap 'rm -rf "$out"' EXIT
oc validate --contract-dir contract.d
oc render --target c --contract-dir contract.d --out "$out/c"
oc render --target py --contract-dir contract.d --out "$out/py"
oc render --target ts --contract-dir contract.d --out "$out/ts"
oc render --target json --contract-dir contract.d --out "$out/json"
cmp "$out/c/omxcontract/omx_formats.h" include/omxcontract/omx_formats.h
cmp "$out/py/omx_contract.py" share/omx-formats/omx_formats.py
for e in js d.ts; do
  f=$out/ts/omx-contract.$e
  # the tail is the format values: from the doc comment of CLAP_IDS to the end
  ln=$(grep -n '^ \* The CLAP identifiers (extension' "$f" | head -1 | cut -d: -f1)
  tail -n +$((ln - 1)) "$f" | cmp - ts/formats.$e
done
test "$(node tools/terms-digest.mjs "$out/json/omx-contract.json")" = "$(cat test/golden/terms.digest)"
echo "check: the renders are byte for byte omx-contract's, and the 749 terms are the classic terms"

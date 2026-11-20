#!/bin/sh
# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas
# The tree's check. Every .json under contract.d/ parses (shell and python3 only). With OMX_CONTRACT set to the
# omx-contract command (bin/omx-contract.mjs of a checkout of the release this tree is built with: the pin of ci.yml,
# the last omx-contract that reads these modules), it also validates the modules and holds their terms to
# test/golden/terms.digest, the digest of every term of the classic 82 items (tools/terms-digest.mjs over the json
# render): 297 CLAP terms and 452 LV2 terms, none dropped, none changed.
# The comparison of the committed renders (omx_formats.h, omx_formats.py, ts/formats.*) with omx-contract's renders of
# them is gone: omx-contract no longer renders the format terms (the sorting pass, V27b), each format's owner renders
# its own domain, and the committed renders stay here as they were until the archive.
set -eu
cd "$(dirname "$0")/.."
test -d contract.d || { echo "check: no module yet"; exit 0; }
n=0
for f in $(find contract.d -name '*.json' | sort); do
  python3 -I -c 'import json,sys; json.load(open(sys.argv[1]))' "$f" || { echo "check: $f does not parse" >&2; exit 1; }
  n=$((n+1))
done
echo "check: $n files parse"
for f in $(find contract.d -name '*.json' | sort); do
  python3 -I -c 'import json,sys; o=json.load(open(sys.argv[1]))["info"]["x-owner"]; sys.exit(0 if o=="omx-formats" else "x-owner is "+repr(o)+", not omx-formats")' "$f" || { echo "check: $f" >&2; exit 1; }
done
echo "check: every module is owned by omx-formats"
[ -n "${OMX_CONTRACT:-}" ] || { echo "check: OMX_CONTRACT is not set: the modules are not validated and their terms not digested" >&2; exit 0; }
oc() { node "$OMX_CONTRACT" "$@"; }
out=$(mktemp -d); trap 'rm -rf "$out"' EXIT
oc validate --contract-dir contract.d
oc render --target json --contract-dir contract.d --out "$out/json"
test "$(node tools/terms-digest.mjs "$out/json/omx-contract.json")" = "$(cat test/golden/terms.digest)"
echo "check: the modules validate, and the 749 terms are the classic terms"

// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com>
// The digest of the terms items of a resolved json render (`omx-contract render --target json`), the file each item
// came from left out: `<count> <sha256>` of the items by name. The same digest of omx-contract's classic data/formats/
// is held in test/golden/terms.digest, so a term dropped, added or changed anywhere is a different line.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const items = JSON.parse(readFileSync(process.argv[2], 'utf8')).items;
const terms = Object.entries(items)
  .filter(([, v]) => v && v.kind === 'terms')
  .map(([name, { rel, ...item }]) => [name, item])
  .sort(([a], [b]) => (a < b ? -1 : 1));
console.log(`${terms.length} ${createHash('sha256').update(JSON.stringify(terms)).digest('hex')}`);

<!-- SPDX-License-Identifier: GPL-3.0-or-later -->
<!-- Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com> -->
# omx-formats

The plugin-format vocabulary of OpenMixer: the identifiers, numbers and terms of the plugin formats OpenMixer hosts
(CLAP, LV2, and any format added later), each mapped under its own name with its status for us. It is one domain
module per format, shared terms in a common module, every module a self-describing OpenAPI-3.1-style document with
its own version, shipped with its catalogs. The loader, the validator and the renderers are
[omx-contract](https://github.com/Open-Mixer/omx-contract)'s; this package holds the data only.

## Layout

```
contract.d/formats/common/    terms every format shares (units, parameter and port terms)
contract.d/formats/clap/      the CLAP terms
contract.d/formats/lv2/       the LV2 terms
contract.d/formats/<module>/catalogs/<lang>.json   the module's translations
```

The modules carry the 82 terms items omx-contract's `data/formats/` held (297 CLAP terms, 452 LV2 terms), moved
unchanged: `test/golden/terms.digest` is the digest of the classic items and `make check` holds the modules to it. No
term has a translation today (no catalog of omx-contract keys a format item), so there is no catalog to move; a module's
translations go in `contract.d/formats/<module>/catalogs/<lang>.json`, which omx-contract's reader takes with the module
(owner `omx-formats`).

The renders, committed and held to the modules by `make check`: `include/omxcontract/omx_formats.h` (the C header),
`share/omx-formats/omx_formats.py` (the Python module) and `ts/formats.js` with `ts/formats.d.ts` (the TypeScript
values). They are byte for byte what omx-contract rendered from its own `data/formats/` before the move.

A new format is a new module; no other module's version or consumers change. A consumer reads the modules it
speaks. Modules refer to each other by `$id`, never by file path.

## Install

Fedora 44:

```
sudo dnf install https://www.openmixer.org/rpm/openmixer-release.noarch.rpm
sudo dnf install omx-formats
```

Debian bookworm and trixie (also Raspberry Pi OS and Zynthian):

```
cd /tmp && curl -fsSLO https://www.openmixer.org/deb/openmixer-release.deb && sudo apt install ./openmixer-release.deb
sudo apt update && sudo apt install omx-formats
```

## Work on it

`make check` parses every module; with `OMX_CONTRACT` set to the omx-contract command it validates them and holds the renders and the terms to omx-contract's own. `make install DESTDIR=...` installs `contract.d/`. A
pull request runs the fast checks only; the packages build on `workflow_dispatch` and on a `v*` tag.

Licence: GPL-3.0-or-later.

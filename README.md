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

`make check` parses every module and checks its place. `make install DESTDIR=...` installs `contract.d/`. A
pull request runs the fast checks only; the packages build on `workflow_dispatch` and on a `v*` tag.

Licence: GPL-3.0-or-later.

# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas
#
# Installs contract.d/ (the format modules) under CONTRACTDIR, the directory omx-contract's readers read, and the committed
# renders of the modules: the C header under INCLUDEDIR/omxcontract, the Python module under FORMATSDIR. No node runs
# here: a package build installs files only. `make check` is the shell check of the tree; with OMX_CONTRACT set (the omx-contract command) it also holds the renders to the modules and to omx-contract's own.

PREFIX ?= /usr/local
DATADIR ?= $(PREFIX)/share
CONTRACTDIR ?= $(DATADIR)/omx-contract/contract.d
INCLUDEDIR ?= $(PREFIX)/include
FORMATSDIR ?= $(DATADIR)/omx-formats

.PHONY: all check install

all:

check:
	@sh tools/check.sh

install:
	install -d $(DESTDIR)$(CONTRACTDIR)
	cp -a contract.d/. $(DESTDIR)$(CONTRACTDIR)/
	install -d $(DESTDIR)$(INCLUDEDIR)/omxcontract $(DESTDIR)$(FORMATSDIR)
	install -m 0644 include/omxcontract/omx_formats.h $(DESTDIR)$(INCLUDEDIR)/omxcontract/
	install -m 0644 share/omx-formats/omx_formats.py $(DESTDIR)$(FORMATSDIR)/

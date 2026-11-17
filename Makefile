# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com>
#
# Installs contract.d/ (the format modules) under CONTRACTDIR, the directory omx-contract's readers read. No node runs
# here: a package build installs files only. `make check` is the shell and coreutils check of the tree.

PREFIX ?= /usr/local
DATADIR ?= $(PREFIX)/share
CONTRACTDIR ?= $(DATADIR)/omx-contract/contract.d

.PHONY: all check install

all:

check:
	@sh tools/check.sh

install:
	install -d $(DESTDIR)$(CONTRACTDIR)
	if [ -d contract.d ]; then cp -a contract.d/. $(DESTDIR)$(CONTRACTDIR)/; fi

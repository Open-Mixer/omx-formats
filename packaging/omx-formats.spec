# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas <linuxnow@gmail.com>
Name: omx-formats
Version: 0.1.0
Release: 1%{?dist}
License: GPL-3.0-or-later
Summary: The plugin-format vocabulary of OpenMixer, one module per format
URL: https://github.com/Open-Mixer/omx-formats
BuildArch: noarch

Source0: %{url}/archive/v%{version}/%{name}-%{version}.tar.gz

BuildRequires: make

# the modules install into omx-contract's contract directory and are read by its command; a floor, never a ceiling
Requires: omx-contract-data

%description
The identifiers, numbers and terms of the plugin formats OpenMixer hosts, each
mapped under its own name with its status for us: one self-describing module
per format (CLAP, LV2) and a common module of the terms they share, each with
its own version and its catalogs. They install into the contract directory
omx-contract's readers read.

%prep
%autosetup

%build

%install
make install DESTDIR=%{buildroot} PREFIX=%{_prefix} DATADIR=%{_datadir} INCLUDEDIR=%{_includedir}

%check
make check

%files
%license LICENSE
%doc README.md
%{_datadir}/omx-contract/contract.d/formats/
%{_includedir}/omxcontract/omx_formats.h
%{_datadir}/omx-formats/

%changelog
* Tue Nov 17 2026 Pau Aliagas <linuxnow@gmail.com> - 0.1.0-1
- The modules formats/common, formats/clap and formats/lv2 (the 82 terms items, 297 CLAP and 452 LV2 terms, moved from
  omx-contract's data/formats/), and their renders: the C header and the Python module.
- First release: the package.

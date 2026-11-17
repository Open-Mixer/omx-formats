# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pau Aliagas
Name: omx-formats
Version: 0.1.0
Release: 1%{?dist}
License: GPL-3.0-or-later
Summary: The plugin-format vocabulary of OpenMixer, one module per format
URL: https://github.com/Open-Mixer/omx-formats
BuildArch: noarch

Source0: %{url}/archive/v%{version}/%{name}-%{version}.tar.gz

BuildRequires: make
BuildRequires: python3

# the modules install into omx-contract's contract directory and are read by its command. The floor is the omx-contract
# release that removes data/formats (omx-contract#90), expected 3.21.0: before it, omx-contract-data ships these same
# files and the two packages would collide. NO 0.1.0 tag and no install until that release exists. A floor, never a ceiling.
Requires: omx-contract-data >= 3.21.0

%description
The identifiers, numbers and terms of the plugin formats OpenMixer hosts, each
mapped under its own name with its status for us: one self-describing module
per format (CLAP, LV2) and a common module of the terms they share, each with
its own version and its catalogs. They install into the contract directory
omx-contract's readers read.

%package devel
Summary: The C header of the plugin-format vocabulary of OpenMixer
Requires: %{name} = %{version}-%{release}

%description devel
The C header omxcontract/omx_formats.h: the CLAP identifiers and numbers and the
LV2 namespaces, rendered from the modules of omx-formats.

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
%{_datadir}/omx-formats/

%files devel
%{_includedir}/omxcontract/omx_formats.h

%changelog
* Tue Nov 17 2026 Pau Aliagas <linuxnow@gmail.com> - 0.1.0-1
- Not released: tagged and installable only with the omx-contract release that removes data/formats (omx-contract#90).
- The modules formats/common, formats/clap and formats/lv2 (the 82 terms items, 297 CLAP and 452 LV2 terms, moved from
  omx-contract's data/formats/), and their renders: the C header and the Python module.
- First release: the package.

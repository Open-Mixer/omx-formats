/**
 * The CLAP identifiers (extension ids, factory ids, plugin features, window APIs) by the header's own identifier.
 * @see data/formats/
 */
export declare const CLAP_IDS: {
  readonly CLAP_PORT_AMBISONIC: "ambisonic";
  readonly CLAP_EXT_AMBISONIC_COMPAT: "clap.ambisonic.draft/3";
  readonly CLAP_EXT_AMBISONIC: "clap.ambisonic/3";
  readonly CLAP_EXT_AUDIO_PORTS_ACTIVATION: "clap.audio-ports-activation/2";
  readonly CLAP_EXT_AUDIO_PORTS_ACTIVATION_COMPAT: "clap.audio-ports-activation/draft-2";
  readonly CLAP_EXT_AUDIO_PORTS_CONFIG: "clap.audio-ports-config";
  readonly CLAP_EXT_AUDIO_PORTS_CONFIG_INFO: "clap.audio-ports-config-info/1";
  readonly CLAP_EXT_AUDIO_PORTS_CONFIG_INFO_COMPAT: "clap.audio-ports-config-info/draft-0";
  readonly CLAP_EXT_AUDIO_PORTS: "clap.audio-ports";
  readonly CLAP_PORT_MONO: "mono";
  readonly CLAP_PORT_STEREO: "stereo";
  readonly CLAP_EXT_CONFIGURABLE_AUDIO_PORTS_COMPAT: "clap.configurable-audio-ports.draft1";
  readonly CLAP_EXT_CONFIGURABLE_AUDIO_PORTS: "clap.configurable-audio-ports/1";
  readonly CLAP_EXT_CONTEXT_MENU_COMPAT: "clap.context-menu.draft/0";
  readonly CLAP_EXT_CONTEXT_MENU: "clap.context-menu/1";
  readonly CLAP_EXT_BACKGROUND_ACTIVATION: "clap.background-activation/1";
  readonly CLAP_EXT_BACKGROUND_PROGRESS: "clap.background-progress/1";
  readonly CLAP_EXT_BACKGROUND_STATE_CONTEXT: "clap.background-state-context/1";
  readonly CLAP_EXT_EXTENSIBLE_AUDIO_PORTS: "clap.extensible-audio-ports/1";
  readonly CLAP_EXT_FLUSH_EVENTS: "clap.flush-events/1";
  readonly CLAP_EXT_GAIN_ADJUSTMENT_METERING: "clap.gain-adjustment-metering/0";
  readonly CLAP_EXT_MINI_CURVE_DISPLAY: "clap.mini-curve-display/3";
  readonly CLAP_EXT_OCTAVE_NUMBER: "clap.octave-number/1";
  readonly CLAP_EXT_PARAM_HOVERED: "clap.param-hovered/1";
  readonly CLAP_EXT_PARAMS_ORIGIN: "clap.params-origin/1";
  readonly CLAP_EXT_PROJECT_LOCATION: "clap.project-location/2";
  readonly CLAP_EXT_RESOURCE_DIRECTORY: "clap.resource-directory/1";
  readonly CLAP_EXT_SCRATCH_MEMORY: "clap.scratch-memory/1";
  readonly CLAP_EXT_TRANSPORT_CONTROL: "clap.transport-control/2";
  readonly CLAP_EXT_TRIGGERS: "clap.triggers/1";
  readonly CLAP_EXT_TUNING: "clap.tuning/2";
  readonly CLAP_EXT_UNDO: "clap.undo/4";
  readonly CLAP_EXT_UNDO_CONTEXT: "clap.undo_context/4";
  readonly CLAP_EXT_UNDO_DELTA: "clap.undo_delta/4";
  readonly CLAP_WINDOW_API_WEBVIEW: "webview";
  readonly CLAP_EXT_WEBVIEW: "clap.webview/3";
  readonly CLAP_EXT_EVENT_REGISTRY: "clap.event-registry";
  readonly CLAP_WINDOW_API_COCOA: "cocoa";
  readonly CLAP_EXT_GUI: "clap.gui";
  readonly CLAP_WINDOW_API_UIKIT: "uikit";
  readonly CLAP_WINDOW_API_WAYLAND: "wayland";
  readonly CLAP_WINDOW_API_WIN32: "win32";
  readonly CLAP_WINDOW_API_X11: "x11";
  readonly CLAP_EXT_LATENCY: "clap.latency";
  readonly CLAP_EXT_LOG: "clap.log";
  readonly CLAP_EXT_NOTE_NAME: "clap.note-name";
  readonly CLAP_EXT_NOTE_PORTS: "clap.note-ports";
  readonly CLAP_EXT_PARAM_INDICATION_COMPAT: "clap.param-indication.draft/4";
  readonly CLAP_EXT_PARAM_INDICATION: "clap.param-indication/4";
  readonly CLAP_EXT_PARAMS: "clap.params";
  readonly CLAP_EXT_POSIX_FD_SUPPORT: "clap.posix-fd-support";
  readonly CLAP_EXT_PRESET_LOAD_COMPAT: "clap.preset-load.draft/2";
  readonly CLAP_EXT_PRESET_LOAD: "clap.preset-load/2";
  readonly CLAP_EXT_REMOTE_CONTROLS_COMPAT: "clap.remote-controls.draft/2";
  readonly CLAP_EXT_REMOTE_CONTROLS: "clap.remote-controls/2";
  readonly CLAP_EXT_RENDER: "clap.render";
  readonly CLAP_EXT_STATE_CONTEXT: "clap.state-context/2";
  readonly CLAP_EXT_STATE: "clap.state";
  readonly CLAP_PORT_SURROUND: "surround";
  readonly CLAP_EXT_SURROUND_COMPAT: "clap.surround.draft/4";
  readonly CLAP_EXT_SURROUND: "clap.surround/4";
  readonly CLAP_EXT_TAIL: "clap.tail";
  readonly CLAP_EXT_THREAD_CHECK: "clap.thread-check";
  readonly CLAP_EXT_THREAD_POOL: "clap.thread-pool";
  readonly CLAP_EXT_TIMER_SUPPORT: "clap.timer-support";
  readonly CLAP_EXT_TRACK_INFO_COMPAT: "clap.track-info.draft/1";
  readonly CLAP_EXT_TRACK_INFO: "clap.track-info/1";
  readonly CLAP_EXT_VOICE_INFO: "clap.voice-info";
  readonly CLAP_PLUGIN_INVALIDATION_FACTORY_ID: "clap.plugin-invalidation-factory/1";
  readonly CLAP_PLUGIN_STATE_CONVERTER_FACTORY_ID: "clap.plugin-state-converter-factory/1";
  readonly CLAP_PLUGIN_FACTORY_ID: "clap.plugin-factory";
  readonly CLAP_PRESET_DISCOVERY_FACTORY_ID: "clap.preset-discovery-factory/2";
  readonly CLAP_PRESET_DISCOVERY_FACTORY_ID_COMPAT: "clap.preset-discovery-factory/draft-2";
  readonly CLAP_PLUGIN_FEATURE_AMBISONIC: "ambisonic";
  readonly CLAP_PLUGIN_FEATURE_ANALYZER: "analyzer";
  readonly CLAP_PLUGIN_FEATURE_AUDIO_EFFECT: "audio-effect";
  readonly CLAP_PLUGIN_FEATURE_CHORUS: "chorus";
  readonly CLAP_PLUGIN_FEATURE_COMPRESSOR: "compressor";
  readonly CLAP_PLUGIN_FEATURE_DEESSER: "de-esser";
  readonly CLAP_PLUGIN_FEATURE_DELAY: "delay";
  readonly CLAP_PLUGIN_FEATURE_DISTORTION: "distortion";
  readonly CLAP_PLUGIN_FEATURE_DRUM: "drum";
  readonly CLAP_PLUGIN_FEATURE_DRUM_MACHINE: "drum-machine";
  readonly CLAP_PLUGIN_FEATURE_EQUALIZER: "equalizer";
  readonly CLAP_PLUGIN_FEATURE_EXPANDER: "expander";
  readonly CLAP_PLUGIN_FEATURE_FILTER: "filter";
  readonly CLAP_PLUGIN_FEATURE_FLANGER: "flanger";
  readonly CLAP_PLUGIN_FEATURE_FREQUENCY_SHIFTER: "frequency-shifter";
  readonly CLAP_PLUGIN_FEATURE_GATE: "gate";
  readonly CLAP_PLUGIN_FEATURE_GLITCH: "glitch";
  readonly CLAP_PLUGIN_FEATURE_GRANULAR: "granular";
  readonly CLAP_PLUGIN_FEATURE_INSTRUMENT: "instrument";
  readonly CLAP_PLUGIN_FEATURE_LIMITER: "limiter";
  readonly CLAP_PLUGIN_FEATURE_MASTERING: "mastering";
  readonly CLAP_PLUGIN_FEATURE_MIXING: "mixing";
  readonly CLAP_PLUGIN_FEATURE_MONO: "mono";
  readonly CLAP_PLUGIN_FEATURE_MULTI_EFFECTS: "multi-effects";
  readonly CLAP_PLUGIN_FEATURE_NOTE_DETECTOR: "note-detector";
  readonly CLAP_PLUGIN_FEATURE_NOTE_EFFECT: "note-effect";
  readonly CLAP_PLUGIN_FEATURE_PHASE_VOCODER: "phase-vocoder";
  readonly CLAP_PLUGIN_FEATURE_PHASER: "phaser";
  readonly CLAP_PLUGIN_FEATURE_PITCH_CORRECTION: "pitch-correction";
  readonly CLAP_PLUGIN_FEATURE_PITCH_SHIFTER: "pitch-shifter";
  readonly CLAP_PLUGIN_FEATURE_RESTORATION: "restoration";
  readonly CLAP_PLUGIN_FEATURE_REVERB: "reverb";
  readonly CLAP_PLUGIN_FEATURE_SAMPLER: "sampler";
  readonly CLAP_PLUGIN_FEATURE_STEREO: "stereo";
  readonly CLAP_PLUGIN_FEATURE_SURROUND: "surround";
  readonly CLAP_PLUGIN_FEATURE_SYNTHESIZER: "synthesizer";
  readonly CLAP_PLUGIN_FEATURE_TRANSIENT_SHAPER: "transient-shaper";
  readonly CLAP_PLUGIN_FEATURE_TREMOLO: "tremolo";
  readonly CLAP_PLUGIN_FEATURE_UTILITY: "utility";
};

/**
 * The numbers the CLAP headers declare, by the header's own identifier.
 * @see data/formats/
 */
export declare const CLAP_NUMBERS: {
  readonly CLAP_REMOTE_CONTROLS_COUNT: 8;
};

/**
 * The URI of each LV2 specification, by its name in upper snake case.
 * @see data/formats/
 */
export declare const LV2_SPECIFICATIONS: {
  readonly ATOM: "http://lv2plug.in/ns/ext/atom";
  readonly BUF_SIZE: "http://lv2plug.in/ns/ext/buf-size";
  readonly CORE: "http://lv2plug.in/ns/lv2core";
  readonly DATA_ACCESS: "http://lv2plug.in/ns/ext/data-access";
  readonly DYNMANIFEST: "http://lv2plug.in/ns/ext/dynmanifest";
  readonly EVENT: "http://lv2plug.in/ns/ext/event";
  readonly INSTANCE_ACCESS: "http://lv2plug.in/ns/ext/instance-access";
  readonly LOG: "http://lv2plug.in/ns/ext/log";
  readonly MIDI: "http://lv2plug.in/ns/ext/midi";
  readonly MORPH: "http://lv2plug.in/ns/ext/morph";
  readonly OPTIONS: "http://lv2plug.in/ns/ext/options";
  readonly PARAMETERS: "http://lv2plug.in/ns/ext/parameters";
  readonly PATCH: "http://lv2plug.in/ns/ext/patch";
  readonly PORT_GROUPS: "http://lv2plug.in/ns/ext/port-groups";
  readonly PORT_PROPS: "http://lv2plug.in/ns/ext/port-props";
  readonly PRESETS: "http://lv2plug.in/ns/ext/presets";
  readonly RESIZE_PORT: "http://lv2plug.in/ns/ext/resize-port";
  readonly STATE: "http://lv2plug.in/ns/ext/state";
  readonly TIME: "http://lv2plug.in/ns/ext/time";
  readonly UI: "http://lv2plug.in/ns/extensions/ui";
  readonly UNITS: "http://lv2plug.in/ns/extensions/units";
  readonly URI_MAP: "http://lv2plug.in/ns/ext/uri-map";
  readonly URID: "http://lv2plug.in/ns/ext/urid";
  readonly WORKER: "http://lv2plug.in/ns/ext/worker";
};

/**
 * The namespace each LV2 specification's terms are written after: its URI and a #.
 * @see data/formats/
 */
export declare const LV2_NAMESPACES: {
  readonly ATOM: "http://lv2plug.in/ns/ext/atom#";
  readonly BUF_SIZE: "http://lv2plug.in/ns/ext/buf-size#";
  readonly CORE: "http://lv2plug.in/ns/lv2core#";
  readonly DATA_ACCESS: "http://lv2plug.in/ns/ext/data-access#";
  readonly DYNMANIFEST: "http://lv2plug.in/ns/ext/dynmanifest#";
  readonly EVENT: "http://lv2plug.in/ns/ext/event#";
  readonly INSTANCE_ACCESS: "http://lv2plug.in/ns/ext/instance-access#";
  readonly LOG: "http://lv2plug.in/ns/ext/log#";
  readonly MIDI: "http://lv2plug.in/ns/ext/midi#";
  readonly MORPH: "http://lv2plug.in/ns/ext/morph#";
  readonly OPTIONS: "http://lv2plug.in/ns/ext/options#";
  readonly PARAMETERS: "http://lv2plug.in/ns/ext/parameters#";
  readonly PATCH: "http://lv2plug.in/ns/ext/patch#";
  readonly PORT_GROUPS: "http://lv2plug.in/ns/ext/port-groups#";
  readonly PORT_PROPS: "http://lv2plug.in/ns/ext/port-props#";
  readonly PRESETS: "http://lv2plug.in/ns/ext/presets#";
  readonly RESIZE_PORT: "http://lv2plug.in/ns/ext/resize-port#";
  readonly STATE: "http://lv2plug.in/ns/ext/state#";
  readonly TIME: "http://lv2plug.in/ns/ext/time#";
  readonly UI: "http://lv2plug.in/ns/extensions/ui#";
  readonly UNITS: "http://lv2plug.in/ns/extensions/units#";
  readonly URI_MAP: "http://lv2plug.in/ns/ext/uri-map#";
  readonly URID: "http://lv2plug.in/ns/ext/urid#";
  readonly WORKER: "http://lv2plug.in/ns/ext/worker#";
};

# IonicSwitch

## Features

It switch .html and .tc file like Xcode's header and source code swith fieatures.

Recoomend shortcuts.

Switch to HTML ... Just run  shortcut command + control + ↑
Switch to TypeScript file ... Just run shortcut command + control + ↓

\!\[feature X\]\(images/feature-x.png\)

- VS code.
- Ionic.

## Extension Settings

1. Shift + command + P

2. type *Open Keyboard Shortcuts File*

3. Add it.

```
    { "key": "cmd+ctrl+up", "command": "extension.ionSwitchHTML", "when": "editorTextFocus" },
    { "key": "cmd+ctrl+down", "command": "extension.ionSwitchTS", "when": "editorTextFocus" },
```

## Known Issues

Nothing yet. Report my github's Issue.

## Release Notes

### 0.0.1

First release.

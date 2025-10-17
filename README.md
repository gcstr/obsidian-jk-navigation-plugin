# Obsidian jk Navigation Plugin

Add vim-style jk navigation to Obsidian's command palette and suggestion menus using `Ctrl+J` and `Ctrl+K`.

## Features

- Navigate down with `Ctrl+J`
- Navigate up with `Ctrl+K`
- Works with:
  - Command Palette
  - Quick Switcher
  - Any other suggestion menus in Obsidian

## Installation

### From Community Plugins (when available)

1. Open Settings in Obsidian
2. Go to Community Plugins and browse for "JK Navigation"
3. Click Install, then Enable

### Manual Installation

1. Download `main.js` and `manifest.json` from the [latest release](https://github.com/gcstr/obsidian-jk-navigation-plugin/releases)
2. Create a folder named `jk-navigation` in your vault's `.obsidian/plugins/` directory
3. Copy `main.js` and `manifest.json` into that folder
4. Reload Obsidian
5. Enable the plugin in Settings → Community Plugins

## Usage

1. Open the command palette with `Ctrl+P` (or `Cmd+P` on Mac)
2. Use `Ctrl+J` to move down through suggestions
3. Use `Ctrl+K` to move up through suggestions
4. Press `Enter` to select

This also works with:
- Quick Switcher (`Ctrl+O`)
- File search
- Tag search
- Any other modal with suggestion lists

## Development

```bash
# Clone the repository
git clone https://github.com/gcstr/obsidian-jk-navigation-plugin.git

# Install dependencies
npm install

# Build the plugin
npm run build

# Development mode (auto-rebuild on changes)
npm run dev
```

## Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/gcstr/obsidian-jk-navigation-plugin/issues).

## License

MIT

[![Marketplace](https://vsmarketplacebadge.apphb.com/version/akamud.vscode-theme-onedark.svg)](https://marketplace.visualstudio.com/items/akamud.vscode-theme-onedark)

[![Installs](https://vsmarketplacebadge.apphb.com/installs/akamud.vscode-theme-onedark.svg)](https://marketplace.visualstudio.com/items/akamud.vscode-theme-onedark)

---

This is a vsCode extension for javascript projects, that opens any files that **require or import**, your current file.

It takes a second, but then lets you quickly open any **_incoming links_**.

![what-links-here](https://user-images.githubusercontent.com/399657/78697674-2acf1800-78cf-11ea-8d7d-17f7b71b7f0a.gif)

### How it works

This extension grabs all javascript files in your current workspaces, and uses [Acorn](https://github.com/acornjs/acorn) to lex them, and find their imports.

If it imports the current file, it is added to our results list, in the quickOpen dropdown.

Typescript/JSX/coffeescript is in unknown status.

### Thank you

- [acorn-umd](https://github.com/megawac/acorn-umd) by Graeme Yeates
- [find-all-imports](https://github.com/oaprograms/vscode-extension-find-all-imports) by Ognjen

this is my first vscode extension, please go easy on me!

MIT

<!--
copy into plugins dir:
```
cp -r /Users/spencer/priv/dotfiles/mountain ~/.vscode/extensions
```
reload
-->

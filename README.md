<div align="center">
  <div><b>what-links-here</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>vsCode extension to open 'incoming' required files</div>
  <div align="center">
    <sub>
      by
      <a href="https://github.com/spencermountain">Spencer Kelly</a> and
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

[![Marketplace](https://vsmarketplacebadge.apphb.com/version/spencermountain.what-links-here.svg)](https://marketplace.visualstudio.com/items/spencermountain.what-links-here)

[![Installs](https://vsmarketplacebadge.apphb.com/installs/spencermountain.what-links-here.svg)](https://marketplace.visualstudio.com/items/spencermountain.what-links-here)

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

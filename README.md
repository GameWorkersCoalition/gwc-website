# GWC Website

Edit [`data.json`](./data.json) to add new member organizations. You can do this right from Github if you have write access to the repository. (Double-check that the site works afterwards! If you run into problems make sure you haven't left any stray commas or quotation marks in the JSON file.)

Want to add a new language?

- Copy `index.html` from one of the existing languages to a new folder
- Update the text on the new page.
- Make sure to change the `lang` attribute in `<html>` at the top and the `description` `<meta>` tag too.
- Change the language selector in all HTML files to have an entry for the new language.
- Update [`404.html`](./404.html) to add the language to the `nonEnglishLangs` list.

Want to edit and test the site locally?

You'll probably want to run a simple HTML server -- just opening local HTML files directly often causes surprising issues. If you have Python installed, run `python -m http.server 8000` in the terminal from the root of the repo and then go to `http://localhost:8000`. If you have Node installed, you can run `npx serve .` instead and go to the `localhost` URL it prints.

Want to change the styling? Make sure to change it across all HTML files -- or switch to a framework or templating engine like [Astro](https://astro.build/). This is a "simple as possible" setup, and duplication is one of the tradeoffs.

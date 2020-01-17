# Personal Website

Project of my [personal website](11808s8.github.io).<br>
Using github pages to deploy! :D

## Development 
### Requirements
* npm
    (to build and deploy)
* [gulp](https://github.com/gulpjs/gulp): ^4
    * gulp-plugins:
        * gulp-concat: ^2.6.1
        * gulp-inject-partials: ^1.0.5
        * gulp-minify-css: ^1.2.4
### Workflow
run `$ npm install` at your first run, then, after changes, run `$ gulp` inside the directory `./src/` and you're done.

### Project Structure

.html files use partials, emulating a templating engine, but using [gulp-inject-partials](https://github.com/meeroslav/gulp-inject-partials). <br>Partials start with an underscore and are located into the `./src/html/partial` folder. <br>Favor reusable code instead of hardcoding entire pages.
<br>
gulpfile.js follows the latest [task creating syntax](https://gulpjs.com/docs/en/getting-started/creating-tasks).
<br>
Css files are minified and concatenated for production purposes.
<br>
Any questions send to adrianogsss@gmail.com  :D

## License
[MIT License](https://github.com/11808s8/11808s8.github.io/blob/master/LICENSE)

Copyright (c) 2020 Adriano Gomes da Silva
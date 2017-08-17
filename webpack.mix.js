let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .scripts([
        'node_modules/locawebstyle/source/assets/javascripts/libs/jquery-2.1.0.min.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/_hopscotch.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/_jquery.cookie.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/holder.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/html5shiv.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/mediaqueries-ie.js',
        'node_modules/locawebstyle/dist/javascripts/templates.js',
        'resources/assets/legacy/_template.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/jquery.mask.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/moment.min.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/pikaday.js',
        'node_modules/locawebstyle/source/assets/javascripts/libs/pikaday.jquery.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_initializer.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_breakpoint-check.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_sidebars.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_sidebar-toggle.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_collapse.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_modal.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_alert.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_dismiss.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_popover.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_dropdown.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_tabs.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_templates.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_general.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_progress-bar.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_form.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_guided-tour.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_topbar-curtain.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_btn-group.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_datepicker.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_char-counter.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_browser-detect.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_browser-unsupported-bar.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_track-events.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_steps.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_tabs-button.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_switch-button.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_toggle-text.js',
        'node_modules/locawebstyle/source/assets/javascripts/locastyle/_checkbox-toggle.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
    ], 'public/js/vendor.js');

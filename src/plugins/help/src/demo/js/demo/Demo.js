/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*eslint no-console:0 */

define(
  'tinymce.plugins.help.demo.Demo',
  [
    'tinymce.core.EditorManager',
    'tinymce.core.PluginManager',
    'tinymce.plugins.help.Plugin',
    'tinymce.themes.modern.Theme'
  ],
  function (EditorManager, PluginManager, HelpPlugin, ModernTheme) {
    return function () {
      HelpPlugin();
      ModernTheme();

      PluginManager.urls.help = '../../../dist/help';

      EditorManager.init({
        selector: "textarea.tinymce",
        theme: "modern",
        skin_url: "../../../../../skins/lightgray/dist/lightgray",
        plugins: "help",
        toolbar: "help",
        height: 600
      });
    };
  }
);
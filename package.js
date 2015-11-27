Package.describe({
  name: 'react-intl',
  version: '1.0.0',
  summary: 'Just a wrapper for react-intl.',
  git: 'https://github.com/wojtkowiak/meteor-react-intl',
  documentation: 'README.md'
});

Npm.depends({
  'react-intl': '2.0.0-pr-3',
  'externalify': '0.1.0',
  'intl': '1.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('react-runtime', 'client');

  api.use('cosmos:browserify@0.9.2', 'client');

  api.addFiles([
    'react-intl.browserify.js',
    'react-intl.browserify.options.json'
  ], 'client');

  api.export('ReactIntl', 'client');
});

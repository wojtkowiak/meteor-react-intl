Package.describe({
  name: 'omega:react-intl',
  version: '0.0.1',
  summary: 'Just a wrapper for react-intl.',
  git: 'https://github.com/wojtkowiak/meteor-react-intl',
  documentation: 'README.md'
});

Npm.depends({
  'react-intl': '1.2.0',
  'externalify': '0.1.0',
  'intl': '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(['cosmos:browserify@0.5.1'], 'client');

  api.addFiles(['react-intl.browserify.js', 'react-intl.browserify.options.json'], 'client');

  api.export('ReactIntl', 'client');
});

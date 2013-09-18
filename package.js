Package.describe({
  summary: "tiny validator (for v4 JSON Schema)"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];
  api.add_files('lib/tv4/tv4.js', both);
});

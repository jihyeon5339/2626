const fs = require('fs');
const https = require('https');
const vm = require('vm');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        return get(res.headers.location).then(resolve, reject);
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

(async () => {
  let html = fs.readFileSync('C:/Users/Admin/Desktop/smart_korea_companion.html', 'utf8');
  html = html.replace(/^\uFEFF/, '');
  html = html.replace(
    'const Map = (props) => <LucideIcon name="Map" {...props} />;',
    'const MapIcon = (props) => <LucideIcon name="Map" {...props} />;'
  );
  html = html.replace(/<Map(\s)/g, '<MapIcon$1');
  html = html.replace(
    'https://unpkg.com/lucide@latest',
    'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js'
  );
  html = html.replace(
    'https://unpkg.com/react@18/umd/react.development.js',
    'https://unpkg.com/react@18.3.1/umd/react.production.min.js'
  );
  html = html.replace(
    'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js'
  );

  const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
  if (!match) {
    throw new Error('Babel script block not found');
  }

  const babelCode = await get('https://unpkg.com/@babel/standalone@7.26.9/babel.min.js');
  const context = vm.createContext({});
  vm.runInContext(babelCode, context);
  const compiled = context.Babel.transform(match[1], { presets: ['react', 'env'] }).code;

  fs.writeFileSync('C:/Users/Admin/Desktop/smart_korea_companion.app.js', compiled, 'utf8');

  const replacement = [
    '<script src="smart_korea_companion.app.js"></script>',
    '  <script>',
    "    window.addEventListener('error', function (e) {",
    "      var root = document.getElementById('root');",
    "      if (root && !root.innerHTML.trim()) {",
    "        root.innerHTML = '<div style=\"padding:24px;font-family:sans-serif;color:#b91c1c;\"><h2>App failed to load</h2><p>' + (e.message || 'Unknown error') + '</p></div>';",
    '      }',
    '    });',
    '  </script>'
  ].join('\n  ');

  const newHtml = html
    .replace(/<!-- Babel CDN for compiling JSX on the fly -->\s*<script src="https:\/\/unpkg.com\/@babel\/standalone\/babel.min.js"><\/script>\s*/g, '')
    .replace(/<script type="text\/babel">[\s\S]*?<\/script>/, replacement);

  fs.writeFileSync('C:/Users/Admin/Desktop/smart_korea_companion.html', newHtml, 'utf8');
  console.log('Built smart_korea_companion.app.js and updated HTML');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

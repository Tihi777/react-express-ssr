const { ChunkExtractor } = require('@loadable/server');
const { renderToString } = require('react-dom/server');
const { resolve } = require('path');
const { App } = require('../../components/App/App.js');

export const renderPage = () => (req, res) => {
  const statsFile = resolve(__dirname, '../../../dist/loadable-stats.json');

  const extractor = new ChunkExtractor({ statsFile })

  const jsx = extractor.collectChunks(<App />)

  const reactHtml = renderToString(jsx)

  res.status(200).send(getHtml(reactHtml, extractor));
}

const getHtml = (reactHtml, chunkExtractor) => {
  const scriptTags = chunkExtractor.getScriptTags();
  const linkTags = chunkExtractor.getLinkTags();
  const styleTags = chunkExtractor.getStyleTags();

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            ${linkTags}
            ${styleTags}
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            ${scriptTags}
        </body>
        </html>
    `;
}



import {configureStore} from "../../store/configureStore";
import {Provider as ReduxProvider} from 'react-redux';
import {getInitialState} from "../../store/initialState";
import Pages from '../../pages.js';

const { ChunkExtractor } = require('@loadable/server');
const { renderToString } = require('react-dom/server');

const { StaticRouter } = require('react-router-dom');
const { resolve } = require('path');

const { App } = require('../../components/App/App.js');

export const renderPage = () => async (req, res) => {
  const statsFile = resolve(__dirname, '../../../dist/loadable-stats.json');
  const location = req.url
  const context = {};
  const { store } = configureStore(getInitialState(location), location);
  const extractor = new ChunkExtractor({ statsFile })

  const jsx = extractor.collectChunks(
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );

  if (Pages[req.url] && typeof Pages[req.url].fetchData === "function") {
    await Pages[req.url].fetchData(store.dispatch);
  }

  const reactHtml = renderToString(jsx)
  const reduxState = store.getState();

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(200).send(getHtml(reactHtml, extractor, reduxState));
}

const getHtml = (reactHtml, chunkExtractor, reduxState = {}) => {
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
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${scriptTags}
        </body>
        </html>
    `;
}



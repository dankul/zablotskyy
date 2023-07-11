import "./styles/index.scss";

import "./js/main.js";
import "./js/caries.js";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

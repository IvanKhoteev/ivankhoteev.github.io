import './index.html';

function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./javascripts/', true, /\.js$/i));
importAll(require.context('./stylesheets/', true, /\.s[ac]ss$/i));
importAll(require.context('./images/', true, /\.(png|svg|jpg|jpeg|gif)$/i));



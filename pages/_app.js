import 'bootstrap/dist/css/bootstrap.css'; // Add this line at the top
import '../styles/globals.css'; // Your global CSS comes after Bootstrap

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import '../styles/reset.css';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.element.isRequired,
};

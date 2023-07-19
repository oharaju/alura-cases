import { ThemeProvider, FontLoader } from '@gympass/yoga';
import '@/styles/reset.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FontLoader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

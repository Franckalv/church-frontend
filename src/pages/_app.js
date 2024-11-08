import Layout from "../components/Layout";
import globals from "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      <Component {...pageProps} />
    </Layout>
  );
}

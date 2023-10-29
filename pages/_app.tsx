import "@/styles/main.css";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

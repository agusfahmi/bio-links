import styled from 'styled-components'
import ReactDOM from 'react-dom';
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LY8HM9EH75"
          strategy="afterInteractive"
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LY8HM9EH75');
          `}
        </Script>
      </body>
    </html>
  );
}


export default function Layout({ children }) {
    return (
        <Main >
            {children}
        </Main>
    )
}

const Main = styled.main`
  min-height: 100vh;
  background: url('/bg.png') no-repeat;
  background-size: 100%;
  background-position: -50vh 10%;
  background-attachment: fixed;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 250%;
    background-position: -50vh 30vh;
   }
`;

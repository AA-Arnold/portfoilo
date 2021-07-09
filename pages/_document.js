import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
class MyDocument extends Document {
    render() {
        return (
            <Html lang='eg'>
                <Head>
                    <link rel="canonical" href='https://aaatechie.com' />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta property="og:url" content="https://aaatechie.com" />
                    <meta property="og:title" content="Arnold Amasoh" />
                    <meta property="og:description" content="A software developer 👨‍💻 with Bsc in Computer Science who specializes in creating and designing intuitive user experience and interfaces for web or mobile" />
                    <meta property="og:image" content="https://avatars.githubusercontent.com/u/53374970?v=4?s=400" />

                    <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/53374970?v=4?s=400" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Arnold Amasoh" />
                    <meta name="twitter:description" content="A software developer 👨‍💻 with Bsc in Computer Science who specializes in creating and designing intuitive user experience and interfaces for web or mobile" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                        window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                        gtag('config', '${GA_TRACKING_ID}', {
                                        page_path: window.location.pathname,
                                        });
                                    `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
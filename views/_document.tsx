import React from 'react';
import { Document, Head, Main } from '@react-ssr/nestjs-express';

export default class extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <title>Maxime F. | Fullstack Lead & Developer</title>
                    <meta
                        name="title"
                        content="Maxime F. | Fullstack Lead & Developer"
                    />
                    <meta
                        name="description"
                        content="Fullstack developer linked to backend and frontend Web & Mobile. Optimist, curious and dynamic for a whole stack of things."
                    />
                    <meta
                        name="keywords"
                        content="fullstack, developer, lead, programmer, programming, dart, flutter, typescript, javascript, php"
                    />
                    <meta
                        name="robots"
                        content="index, follow"
                    />
                    <meta
                        http-equiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta
                        name="language"
                        content="English"
                    />
                    <meta
                        name="revisit-after"
                        content="7 days"
                    />
                    <meta
                        name="author"
                        content="contact@mcssym.me"
                    />
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                    <link
                        rel="shortcut icon"
                        href="/favicon.ico"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="assets/styles/global.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="assets/styles/gradient.css"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="/site.webmanifest"
                    />
                </Head>
                <body>
                    <Main />
                </body>
            </html>
        );
    }
}
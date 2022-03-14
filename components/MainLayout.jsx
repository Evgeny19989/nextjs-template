import Head from "next/head";
import Header from "./Header";
import * as React from "react";
import Script from "next/script";

export function MainLayout({
                               children,
                               title,
                               keys,
                               description,
                               og_title,
                               og_description,
                           }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title"
                      content={og_title}/>
                <meta property="og:description" content={og_description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:type" content="website"/>
                <meta name="keywords" content={keys}/>
                <meta name="description" content={description}/>
                <meta name="twitter:card" content="summary_large_image"/>
   {/*             <meta name="twitter:image" itemProp={'image'} content={'/card.png'}/>
                <meta property="og:image" content={'/card.png'}/>*/}
             {/*   <link rel="apple-touch-icon-precomposed" href="/cropped-logo-1-180x180.png"/>
                <link rel="icon" href="/cropped-logo-1-192x192.png" sizes="192x192"/>
                <link rel="icon" href="/cropped-logo-1-32x32.png" sizes="32x32"/>*/}
            </Head>
           {/* <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
                    data-cbid="11480dfd-9f0d-43fd-bbdd-26c8ca8b9ba2" data-blockingmode="auto"/>*/}
            <Header/>
            <div className='content'>
                <main>{children}</main>
            </div>
        </>
    )
}
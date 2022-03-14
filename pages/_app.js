import '../styles/main.scss'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {CacheProvider} from "@emotion/react";
import Head from 'next/head'
import theme from "../mui/theme";
import createEmotionCache from "../mui/createEmotionCache";
import PropTypes from "prop-types";

import 'swiper/css';
import 'swiper/css/navigation';
import {Provider} from "react-redux";
import store from "../store/store";
import {createWrapper} from "next-redux-wrapper";
import {useEffect} from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    useEffect(() => {
        if(document){
            let comment = document.createComment("<!-- This site was created by  https://www.nlpc.de -->\n" +
                "<!-- Email: dev@nlpc.de -->");
            document.insertBefore(comment, document.firstChild);
        }
    },[])

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </CacheProvider>
    );
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
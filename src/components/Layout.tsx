import React from "react";
import {GlobalStyle} from "./GlobalStyles";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default Layout;
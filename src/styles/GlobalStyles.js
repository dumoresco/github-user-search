import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0 ;
        padding: 0 ;
        box-sizing: border-box;
    }

    :root{
        --Dark-Blue: #141C2F;
        --Light-Blue: #1F2A48;
        --Button: #0078FD;
        --white: #FFFFFF;
    }

    body{
        height: 100vh ;
        font-family:'Inter', sans-serif ;
        background-color: var(--Dark-Blue) ;
        color:  var(--white);
    }

    input{
        font-family:'Inter', sans-serif ;
        border: none ;
        outline: none ;

        ::placeholder{
            color: var(--white) ;
        }
    }
    button{
        font-family:'Inter', sans-serif ;
        border: none ;
        cursor: pointer;
    }

    li{
        list-style-type: none ;
    }

`;

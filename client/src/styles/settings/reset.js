

import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background: #a73737;
        background: -webkit-linear-gradient(to left, #7a2828, #a73737);
        background: linear-gradient(to left, #7a2828, #a73737);
    }
`

export default Reset
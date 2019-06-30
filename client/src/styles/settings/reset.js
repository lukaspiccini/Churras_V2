

import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box
    }

    ol, ul {
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
`

export default Reset
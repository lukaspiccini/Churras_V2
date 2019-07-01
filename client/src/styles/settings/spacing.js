import { createGlobalStyle } from 'styled-components'

const Spacing = createGlobalStyle`
    :root {
        --spacing-very-small: 10px;
        --spacing-small: 1rem;
        --spacing-medium: 2rem;
        --spacing-big: 4rem;
        --spacing-very-big: 5rem;
    }
`

export default Spacing
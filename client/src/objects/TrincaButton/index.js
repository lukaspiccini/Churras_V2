import styled, {css} from 'styled-components'

const Button = styled.button`
    padding: 10px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    ${props => 
        props.primary &&
        css`
            background: #28a745;
        `};

    ${props => 
        props.edit &&
        css`
            background: #007bff;
        `};

    ${props => 
        props.cancel &&
        css`
            background: #dc3545;
        `};
    }
`

export default Button
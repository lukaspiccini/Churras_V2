import styled from 'styled-components'

const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;

    &[type=number]::-webkit-inner-spin-button,
    [type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none; 
        margin: 0;
    }

    &[type=number] {
        width: 150px;
        text-align: right;
    }
`

export default Input
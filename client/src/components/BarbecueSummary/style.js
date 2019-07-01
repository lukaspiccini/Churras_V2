import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: white;
    border: 2px solid black;
    width: 400px;
    padding: 32px;
`
export const Title = styled.h1`
    font-size: var(--size-medium);
    text-align: center;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`

export const Item = styled.div`
    margin-top: var(--spacing-very-small);
    margin-bottom: var(--spacing-very-small);
`

export const ButtonItem = styled.div`
    margin-top: var(--spacing-very-small);
    margin-bottom: var(--spacing-very-small);
    text-align: right;
`

export const Footer = styled.div`
    width: 80%;
    height: 100px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
`

export const BottomBox = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
`

export const BottomItem = styled.div`
    margin-top: var(--spacing-very-small);
    margin-bottom: var(--spacing-very-small);
    margin-left: var(--spacing-medium)
`
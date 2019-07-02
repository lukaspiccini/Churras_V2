import styled from 'styled-components'

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`

export const Wrapper = styled.div`
    position: absolute;
    width: 500px;
    // height: 500px;
    padding: 32px;
    background-color: white;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%,-50%);
`

export const ModalTitle = styled.h1`
    font-size: var(--size-medium);
    text-align: center;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spacing-very-small);
    margin-bottom: var(--spacing-very-small);
`

export const Observation = styled.textarea`
    width: 300px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 5px;
`

export const Footer = styled.div`
    width: 80%;
    height: 100px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
`
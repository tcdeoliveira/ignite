import styled from "styled-components";
import {darken, transparentize} from 'polished';
export const Container = styled.form`
    display: block;
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0ch.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        &::placeholder{
            color: var()(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }
    button[type=submit]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        transition: filter 0.2s;
        cursor: pointer;
        &:hover{
            filter: brightness(.9);
        }
    }
`
export const TransactionsTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
`

interface ITransactionsTypeButton {
    activeColor: 'green' | 'red'
}

const transactionsTypeButtonActiveColors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const TransactionsTypeButton = styled.button<ITransactionsTypeButton>`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid #d7d7d7;
    box-sizing:border-box;
    transition: border, background 0.3s;
    cursor: pointer;
    &.isActive{
        border-color: ${(props) => transparentize(0.8 ,transactionsTypeButtonActiveColors[props.activeColor])};
        background-color:${(props) => props.activeColor ? transparentize(0.9 ,transactionsTypeButtonActiveColors[props.activeColor]) : 'transparent'};
    }
    &:hover{
        border-color: ${(props) => transparentize(0.8 ,transactionsTypeButtonActiveColors[props.activeColor])};
    }
    img{
        height: 20px;
        width: 20px;
    }
    span{
        display: inline-block;
        font-size: 1rem;
        margin-left: 1rem;
        color: var(--text-title);
    }
`;
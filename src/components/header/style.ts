import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    height: 212px;
    max-height: 212px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2rem 1rem ;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    button{
        height: 3rem;
        font-size: 1rem;
        color: #fff;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        border: 0;
        padding: 0 2rem;
        text-align: right;
        background: var(--blue-light);
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: fiter 0.2s;
        cursor: pointer;
        &:hover{
            filter: brightness(0.9);
        }
    }
`
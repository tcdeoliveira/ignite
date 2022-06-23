import styled from "styled-components";

export const Container = styled.header`
    width: 1120px;
    height: 136px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -72px;
`
export const Card = styled.div`
    width: 352px;
    height: 136px;
    border-radius: 5px;
    background: var(--shape);
    //top - tg -bt -lf
    padding: 25px 20.6px  18px 32px;
    box-sizing: border-box;
    &:last-of-type{
        background: #33CC95;
        color: var(--shape);
    }
`
export const CardHeader = styled.div`
    width: 100%;
    height: 26.67;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5{
        font-size: 16px;
        line-height: 24px;
        font-family: 'Poppins';
    }
`
export const CardContent = styled.div`
    width: 100%;
    height: 54.4px;
    h6{
        font-family: 'Poppins';
        font-size: 36px;
        line-height: 54px;
        font-weight: 500;
        margin-top: 14.1px;
    }
`

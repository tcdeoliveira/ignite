import styled from "styled-components";

export const Container = styled.div`
    width: 1120px;
    margin: 0 auto;
    table{
        margin-top: 60px;
        width: 100%;
        border-spacing: 0 0.5rem;
        thead{
            tr{
                th{
                    color: var(--text-body);
                    font-family: "Poppins";
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    text-align: left;
                    box-sizing: border-box;
                    padding: 1rem 2rem;
                }
            }
        }
        tbody{
            tr{
                height: 64px;
                width: 100%;
                background: var(--shape);
                td{
                    color: var(--text-body);
                    font-family: "Poppins";
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    text-align: left;
                    box-sizing: border-box;
                    padding: 1rem 2rem;
                    &:first-child{
                        color: var(--text-title);
                    }
                    &.entrada{
                        color: var(--green);
                    }
                    &.saida{
                        color: var(--red);
                    }
                }
            }
        }
    }
`
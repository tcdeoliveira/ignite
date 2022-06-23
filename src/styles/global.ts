import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red:#e52e4d;
        --blue:#5429cc;
        --green:#33CC95;
        --blue-light: #6933ff;
        --text-title:#363f5f;
        --text-body:#969cb3;
        --background:#f0f2f5;
        --shape:#ffffff;
    }    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1080px){
            font-size: 93.75%;
        }
        @media (max-width:1080px){
            font-size: 87 .5%;
        }
    }
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        position: fixed;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-container{
        width: 100%;
        max-width: 576px;
        height: 588px;
        padding: 3rem;
        box-sizing:border-box;
        background: #F0F2F5;
        border-radius: 5px;
        outline: none;
        position: relative;
    }
    .react-modal-close{
        background: transparent;
        border: 0;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
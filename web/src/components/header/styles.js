import styled from "styled-components";

export const Container = styled.div`

    widht:100%;
    height:70px;
    background : #000000;

    border-bottom: 6px solid #FFD700;`
    

    export const Menu = styled.div`
        widht:50%;
        height: 70px;
        display: flex;
        align-items: center;

        a{

            color:#FFF;
            font-weight: bold;
            text-decoration: none;
            margin: 0 10px;
        }
    .divisor::after{
        content: "|";
        margin: 0 10px;
        color: #FFF
    }

    a:hover{
      color:#FFD700;
    }
    `

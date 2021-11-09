import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        `

export const Form = styled.div`
        width: 50%;
       
`

export const Icons = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        

        img{
           widht: 50px;
           heigth: 50px;
           cursor:pointer;
           margin: 10px;
        }
         
        button{
            border: none;
            background: none;
        }
        
        
        .off{
             opacity: 0.4;
         }  
        
        
        `
        export const Input = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0;

        input{
            font-size: 16px;
            padding 15px;
            border: 1px solid #FFD700
        }
    

        `
        export const TextArea = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0;

        input{
            font-size: 16px;
            padding 15px;
            border: 1px solid #FFD700
        }
    

        `
import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 150px;
    
    box-shadow: -4px 5px 35px 4px rgba(242,15,15,1);

    border-radius: 10px ;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    margin: 25px;
    `
    export const TopCard = styled.div`
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;


        img{
             width: 70px;
             height: 70px;
        }




         `

    export const bottomCard = styled.div`
         widht:100%;
         display: flex;
         justify-content: space-around;
    

        strong{
            color: #FFD700;
        }

        span{
            color:#000000;
        }
    `
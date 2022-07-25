import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 2rem;
`

export const Left = styled.div`
    text-transform: uppercase;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    gap: 2rem;
    color: white;
    span{
        :first-child{
            color: var(--orange);
            font-weight: bold;

        }
        :nth-child(2), :nth-child(3){
            font-size: 3rem;
            font-weight: bold;
        }
        :nth-child(4){
            text-transform: none;
            text-align: justify;
            letter-spacing: 2px;
            line-height: 40px;
        }
    }
   
`

export const Right = styled.div`
    flex: 1;
    position: relative;
    #personImage{
        position: absolute;
        width: 17rem;
        height: 20rem;
        object-fit: cover;
        right: 8rem;
        top: 2rem;
    }
    div{
        :nth-child(1){
            position: absolute;
            width: 17rem;
            height: 20rem;
            border: 2px solid var(--orange);
            background-color: transparent;
            right: 9rem;
            top: 0.9rem;
        }
         :nth-child(2){
            position: absolute;
            width: 17rem;
            height: 19rem;
            top: 4rem;
            background: var(--planCard);
            right: 7rem;
        }
        :nth-child(4){
            display: flex;
            gap: 1rem;
            position: absolute;
            bottom: 1rem;
            left: 3rem;
            img{
                cursor: pointer;
                width: 1.5rem;
            }
        }
    }
    
   
`
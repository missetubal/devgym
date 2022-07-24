import styled from "styled-components";

export const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    gap: 2rem;
`

export const Left = styled.div`
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-auto-rows: 1fr;

    img{
        object-fit: cover;
        
        :nth-child(1){
            width: 12rem;
            grid-row: 1/3;
            height: 28rem;
        }
        :nth-child(2){
            width: auto;
            height: 16rem;
            grid-column: 2/4;
        }
        :nth-child(3){
            width: 14rem;
            grid-column: 2/3;
            grid-row: 2;
        }
        :nth-child(4){
            width: 10rem;
            grid-row: 2;
            grid-column: 3/4;
            height: 11.2rem;
        }
    } 
`

export const Right = styled.div`
    flex: 1 1;
    text-transform: uppercase;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    #regular{
        font-weight : bold;
         color: var(--orange);
    }
    
`

export const Title = styled.div`
    color: white;
    font-size: 3rem;
    font-weight: bold;
`

export const Details = styled.div`
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 30px;

        div{
            font-size: 1rem;
            gap: 1rem;
            display: flex;
            align-items: center;

            img{
                width: 2rem;
                height: 2rem;
            }
        }
`

export const Partners = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 20px;

    img{
        width: 2.5rem;
    }
`

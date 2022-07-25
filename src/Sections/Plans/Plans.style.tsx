import styled from "styled-components";

export const Container = styled.div`
    margin-top: -4rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;

`

export const Header = styled.div`
    display: flex;
    gap: 2rem;
    text-transform: uppercase;
    color: white;
    font-size: 3.5rem;
    justify-content: center;
    font-style: italic;
    font-weight: bold;
    
`

export const PlansCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`


export const Plan = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--caloryCard);
    color: white;
    gap: 2rem;
    padding: 1.5rem;
    width: 15rem;

    svg{
        fill: var(--orange);
        width: 2rem;
        height: 2rem;
    }
    :nth-child(2){
        background: var(--planCard);
        transform: scale(1.1);
        svg{
            fill: white;
        }
        button{
            color: var(--orange);
        }
    }
    span{
        :nth-child(2){
            font-size: 1rem;
            font-weight: bold;
        }
        :nth-child(3){
            font-size: 3rem;
            font-weight: bold;
        }
        :first-child{
            font-size: 0.8rem;
        }
    }
    button{
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    
`
export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div{
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 1rem;
        }
    }
`
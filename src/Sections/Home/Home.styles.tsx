import styled from "styled-components";
import { Button } from "../../styles/general.styles";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    #home-blur{
        width: 22rem;
        height: 30rem;
        left: 0;
    }
`

export const Left = styled.div`
    padding: 2rem;
    padding-top: 1.5rem;
    flex: 3;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`

export const Right = styled.div`
    flex: 1;
    position: relative;
    background-color: var(--orange);
`

export const Join = styled(Button)`
    position: absolute;
    right: 3rem;
    top: 2rem;
    color: black;   
`

export const Person = styled.img`
    position: absolute;
    top: 10rem;
    right: 8rem;
    width: 23rem;
`
export const BackgroundImage = styled.img`
    position: absolute;
    top: 4rem;
    right: 20rem;
    z-index: -1;
    width: 15rem;
`
export const BigTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: bold;
    text-overflow: inherit;
    color: white;
`

export const Subtitle = styled.span`
    font-size: 1rem;
    font-weight: 200;
    text-transform: none;
    letter-spacing: 1px;
    width: 80%;
`
export const TheBestAd = styled.div`
    margin-top: 4rem;
    background-color: #363d42;
    border-radius: 4rem;
    padding: 20px 13px;
    width: fit-content;
    text-transform: uppercase;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

`
export const AdDiv = styled.div`
    position: absolute;
    background-color: var(--orange);
    width: 4.5rem;
    height: 80%;
    left: 8px;
    border-radius: 3rem;
    z-index: 1;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const FigureSpan = styled.span`
    :nth-child(1){
        color: white;
        font-size: 2rem;
    }
    :nth-child(2){
        color: var(--gray);
        text-transform: uppercase;
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    gap: 1rem;
    font-weight: normal;
    
`
export const ButtonStart = styled(Button)`
    :nth-child(1){
        background-color: var(--orange);
        width: 8rem;
        color: white;
    }
    :nth-child(2){
        background-color: transparent;
        width: 8rem;
        color: white;
        border: 2px solid var(--orange);
    }

`

export const HeartRage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--darkGrey);
    width: fit-content;
    padding: 1rem;
    align-items: start;
    border-radius: 5px;
    position: absolute;
    right: 4rem;
    top: 7rem;
`

export const HeartImage = styled.img`
    width: 2rem;
`

export const HeartSpan = styled.span`
    :nth-child(2){
        color: var(--gray);
    }
    :nth-child(3){
        color: white;
        font-size: 1.5rem;
    }
`

export const CaloriesDiv = styled.div`
    display: flex;
    gap: 2rem;
    background-color: var(--caloryCard);
    border-radius: 5px;
    padding: 1rem;
    width: fit-content;
    position: absolute;
    top: 32rem;
    right: 28rem;
`

export const CaloriesImage = styled.img`
    width: 3rem;
`
export const CaloriesContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const CaloriesSpan = styled.span`
    :nth-child(1){
        color: var(--gray);
    }
    :nth-child(2){
        color: white;
        font-size: 1.5rem;
    }
`
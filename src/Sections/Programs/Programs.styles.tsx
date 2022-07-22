import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
`

export const Header = styled.div`
    display: flex;
    gap: 5rem;
    font-weight: bold;
    font-size: 3rem;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-style: italic;
`
export const ProgramCategories = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    
`
export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gray;
    padding: 2rem;
    gap: 1rem;
    color: white;
    justify-content: space-between; 

    :hover{
        background-color: var(--orange);
        cursor: pointer;
    }
    
`

export const CategoriesSpan = styled.span`
    :nth-child(1){
        width: 2rem;
        fill: white;
    }
    :nth-child(2){
        font-size: 1rem;
        font-weight: bold;
    }
    :nth-child(3){
        font-size: 0.9rem;
        line-height: 25px;
    }
`

export const JoinNow = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const Image = styled.img`
    width: 1rem;
`


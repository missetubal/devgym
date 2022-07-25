import styled from "styled-components";

export const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    gap: 10rem;
`

export const Left = styled.div`
    text-transform: uppercase;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    position: relative;

    hr{
        position: absolute;
        width: 10.5rem;
        border: 2px solid var(--orange);
        border-radius: 20%;
        margin-top: -20px;
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailForm = styled.form`
    display: flex;
    gap: 3rem;
    padding: 1rem 2rem;
    background-color: grey;

    input{
        background-color: transparent;
        border: none;
        color: var(--lightgrayz);
        outline: none;

        ::placeholder{
            color: var(--lightgrayz);
        }
    }
    button{
        background-color: var(--orange);
        color: white;
    }
`
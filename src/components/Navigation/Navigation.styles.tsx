import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.img`
    width: 10rem;
    height: 3rem;
`

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    color: white;
    align-items: center;
`

export const Pages = styled.li`
    cursor: pointer;
    :hover{
        color: var(--orange);
    }
`
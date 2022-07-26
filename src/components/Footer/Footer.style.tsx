import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    hr{
        border: 1px solid var(--lightgray);
    }
    #blurOne{
        bottom: 0;
        right: 15%;
        width: 26rem;
        height: 12rem;
        filter: blur(200px);
        background-color: red;
    }
    #blurTwo{
        bottom: 0;
        left: 15%;
        width: 26rem;
        height: 12rem;
        filter: blur(200px);
        background-color: rgb(255, 115, 0);
    }
`
    

export const FooterContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    height: 20rem;
`


export const SocialMedia = styled.div`
    display: flex;
    gap: 4rem;
    img{
        width: 2rem;
        height: 2rem;
    }
`
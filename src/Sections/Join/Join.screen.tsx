import React from 'react';
import { Button, Div, Span, TransparentSpan } from '../../styles/general.styles';
import { Container, EmailForm, Left, Right } from './Join.styles';
import emailjs from '@emailjs/browser'


const Join: React.FC = () => {
    const form = React.useRef<any | null>();

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (form.current !== null) {
            emailjs.sendForm('service_b6xm1th', 'template_neznogl', (form.current as HTMLFormElement), 'y3X_kezc87Nju68_C')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <Container id='join-us'>
            <Left>
                <hr />
                <Div>
                    <TransparentSpan>Ready to </TransparentSpan>
                    <Span>Level up</Span>
                </Div>
                <Div>
                    <Span>your body </Span>
                    <TransparentSpan>With us?</TransparentSpan>
                </Div>
            </Left>
            <Right>
                <EmailForm ref={form} onSubmit={sendEmail}>
                    <input type='email' name='user' placeholder='Enter your email' />
                    <Button>Join now</Button>
                </EmailForm>
            </Right>
        </Container>
    )
}

export default Join;
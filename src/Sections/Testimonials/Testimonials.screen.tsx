import React, { useState } from 'react';
import { Div, Span, TransparentSpan } from '../../styles/general.styles';
import { Container, Left, Right } from './Testimonials.style';
import { testimonialsData } from '../../data/TestimonialsData';
import {motion} from 'framer-motion'

//assets
import ArrowRight from '../../assets/rightArrow.png'
import ArrowLeft from '../../assets/leftArrow.png'

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0)
    const transition = {type: 'spring', duration: 3}
    return (
        <Container id='testimonials'>
            <Left>
                <Span>testimonials</Span>
                <TransparentSpan>what they</TransparentSpan>
                <Span>say about us</Span>
                <Span as={motion.span}
                    key={index}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x:-100}}
                    transition={transition}
                >
                    {testimonialsData[index].review}
                </Span>
                <Span>
                    <Span>
                        {testimonialsData[index].name} {" "}
                    </Span>
                    - {testimonialsData[index].status}
                </Span>
            </Left>
            <Right>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    transition={{...transition, duration:2}}
                    whileInView={{opacity: 1, x:0}}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    transition={{...transition, duration:2}}
                    whileInView={{opacity: 1, x:0}}
                ></motion.div>
                <motion.img 
                    src={testimonialsData[index].image} 
                    alt='' id='personImage' 
                    key={index}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x:-100}}
                    transition={transition}
                />
                <Div>
                    <img
                        onClick={()=> {
                            index===0
                            ? setIndex(testimonialsData.length-1)
                            : setIndex((prev)=>prev-1)
                        }}
                        src={ArrowLeft} alt='' 
                    />
                    <img 
                        src={ArrowRight} alt='' 
                        onClick={()=>{
                            index === testimonialsData.length-1 
                            ? setIndex(0)
                            : setIndex((next)=> next+1)
                        }}
                    />
                </Div>
            </Right>
        </Container>
    )
}

export default Testimonials;
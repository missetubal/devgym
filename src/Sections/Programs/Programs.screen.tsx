import React from 'react';
import { Span, TransparentSpan } from '../../styles/general.styles';
import { Categories, CategoriesSpan, Container, Header, JoinNow, Image, ProgramCategories } from './Programs.styles';
import { programsData } from '../../data/ProgramsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs: React.FC = () => {
  return (
    <Container id='programs'>
      <Header>
        <TransparentSpan>Explore our</TransparentSpan>
        <Span>Programs</Span>
        <TransparentSpan>to shape you</TransparentSpan>
      </Header>
      <ProgramCategories>
        {programsData.map((program) => (
          <Categories key={program.heading}>
            {program.image}
            <CategoriesSpan>{program.heading}</CategoriesSpan>
            <CategoriesSpan>{program.details}</CategoriesSpan>
            <JoinNow>
              <Span>Join Now</Span>
              <Image src={RightArrow} />
            </JoinNow>
          </Categories>
        ))}
      </ProgramCategories>
    </Container>
  )
}

export default Programs;
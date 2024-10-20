import React from 'react';
import styled from 'styled-components';
import FeaturedSection from './FeaturedSection';
import TrendingSection from './TrendingSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HomeContainer: React.FC = () => {
  return (
    <Container>
      <FeaturedSection />
      <TrendingSection />
    </Container>
  );
};

export default HomeContainer;

import React from 'react';
import styled from 'styled-components';
import { Colors } from '@app/types/theme/colors.types';
import { HomeContainer } from '@modules/home';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
`;

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <HomeContainer />
    </PageWrapper>
  );
};

export default HomePage;

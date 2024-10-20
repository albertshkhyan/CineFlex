import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './modules/menu/components/Sidebar';
import useSidebarCollapse from '@app/hooks/useSidebarCollapse';
import { Colors } from '@app/types/theme/colors.types';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${Colors.black};
`;

const MainContent = styled.main<{ isCollapsed: boolean }>`
  flex-grow: 1;
  padding-left: ${({ isCollapsed }) => (isCollapsed ? '198px' : '312px')};
  transition: padding-left 0.3s;
  overflow-y: auto;
`;

const AppLayout: React.FC = () => {
  const { isCollapsed } = useSidebarCollapse();

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent isCollapsed={isCollapsed}>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default AppLayout;

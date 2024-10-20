import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfileSection from './ProfileSection';
import MenuButton from './MenuButton';
import AdditionalOptions from './AdditionalOptions';
import HomeIcon from '@assets/icons/home.icon.png';
import SearchIcon from '@assets/icons/search.icon.png';
import TvShowsIcon from '@assets/icons/tv_shows.icon.png';
import MoviesIcon from '@assets/icons/movies.icon.png';
import GenresIcon from '@assets/icons/genres.icons.png';
import WatchLaterIcon from '@assets/icons/watch_later.icon.png';
import profilePic from '@assets/images/profile_pic.jpeg';
import useSidebarCollapse from '@app/hooks/useSidebarCollapse';
import { Colors } from '@app/types/theme/colors.types';
import { useLocation } from 'react-router-dom';

const Container = styled(motion.nav)<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ isCollapsed }) => (isCollapsed ? '157px' : '312px')};
  background: transparent;
  padding: ${({ isCollapsed }) => (isCollapsed ? '20px 5px' : '20px 15px')};
  position: fixed;
  z-index: 100;
  transition:
    width 0.3s,
    padding 0.3s;
`;

const MenuItems = styled.div<{ isCollapsed: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
`;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isCollapsed, handleMouseEnter, handleMouseLeave } =
    useSidebarCollapse();

  console.log('location.pathname: ', location.pathname);
  console.log(
    "location.pathname === '/home' || location.pathname === '/': ",
    location.pathname === '/home' || location.pathname === '/'
  );

  return (
    <Container
      isCollapsed={isCollapsed}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProfileSection
        isCollapsed={isCollapsed}
        userName="Daniel"
        profileImageUrl={profilePic}
      />
      <MenuItems isCollapsed={isCollapsed}>
        <MenuButton
          label="Search"
          icon={SearchIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/search'}
        />
        <MenuButton
          label="Home"
          icon={HomeIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/home' || location.pathname === '/'}
        />
        <MenuButton
          label="TV Shows"
          icon={TvShowsIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/tv-shows'}
        />
        <MenuButton
          label="Movies"
          icon={MoviesIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/movies'}
        />
        <MenuButton
          label="Genres"
          icon={GenresIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/genres'}
        />
        <MenuButton
          label="Watch Later"
          icon={WatchLaterIcon}
          isCollapsed={isCollapsed}
          isActive={location.pathname === '/watch-later'}
        />
      </MenuItems>
      <AdditionalOptions isCollapsed={isCollapsed} />
    </Container>
  );
};

export default Sidebar;

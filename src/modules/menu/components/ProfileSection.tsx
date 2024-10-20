import React from 'react';
import styled from 'styled-components';

interface ProfileSectionProps {
  userName: string;
  profileImageUrl?: string;
  isCollapsed?: boolean;
}

const ProfileContainer = styled.div<{ isCollapsed?: boolean }>`
  display: flex;
  align-items: center;
  height: 82px;
  transition: padding 0.3s ease;
  margin-left: 25px;
  margin-bottom: 58px;
`;

const ProfileImage = styled.img<{ isCollapsed?: boolean }>`
  width: ${({ isCollapsed }) => (isCollapsed ? '0' : '82px')};
  height: ${({ isCollapsed }) => (isCollapsed ? '0' : '82px')};
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ isCollapsed }) => (isCollapsed ? '0' : '10px')};
  transition: all 0.3s ease;
`;

const UserName = styled.span<{ isCollapsed?: boolean }>`
  font-family: ${({ theme }) => theme.typography.subtitle1.fontFamily};
  font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '32px')};
  line-height: 32px;
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
  transition:
    opacity 0.3s ease,
    font-size 0.3s ease;
`;

const ProfileSection: React.FC<ProfileSectionProps> = ({
  userName,
  profileImageUrl,
  isCollapsed,
}) => {
  return (
    <ProfileContainer isCollapsed={isCollapsed}>
      <ProfileImage
        src={profileImageUrl || '/default-profile.png'}
        alt={`${userName}'s profile`}
        isCollapsed={isCollapsed}
      />
      <UserName isCollapsed={isCollapsed}>{userName}</UserName>
    </ProfileContainer>
  );
};

export default ProfileSection;

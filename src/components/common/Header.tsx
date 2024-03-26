import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../../assets/header/bell-02.svg';

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>Frolog</Logo>
      <NotificationIcon
        src={BellIcon}
        alt='Notifications'
        onClick={() => navigate('/notice')}
      />
      <BottomBar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
`;

const Logo = styled.h1`
  color: #acd1ad;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const NotificationIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: #acd1ad;
  position: absolute;
  left: 0;
  bottom: 0;
`;

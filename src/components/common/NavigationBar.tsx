import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/NavigationBar/home.svg';
import SearchIcon from '../../assets/NavigationBar/search.svg';
import AddIcon from '../../assets/NavigationBar/add.svg';
import WellIcon from '../../assets/NavigationBar/well.svg';
import ProfileIcon from '../../assets/NavigationBar/profile.svg';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <NavigationBarContainer>
      <NavItem onClick={() => navigate('/')}>
        <Icon src={HomeIcon} style={{ width: '24px', height: '24px' }} />
        <Label>홈</Label>
      </NavItem>
      <NavItem onClick={() => navigate('/search')}>
        <Icon src={SearchIcon} style={{ width: '24px', height: '24px' }} />
        <Label>탐색</Label>
      </NavItem>
      <NavItem onClick={() => navigate('/newreview')}>
        <Icon src={AddIcon} style={{ width: '39px', height: '39px' }} />
      </NavItem>
      <NavItem onClick={() => navigate('/well')}>
        <Icon src={WellIcon} style={{ width: '20px', height: '18px' }} />
        <Label>우물</Label>
      </NavItem>
      <NavItem onClick={() => navigate('/profile')}>
        <Icon src={ProfileIcon} style={{ width: '24px', height: '24px' }} />
        <Label>내 정보</Label>
      </NavItem>
    </NavigationBarContainer>
  );
}

export default NavigationBar;

const NavigationBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 110px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  left: 0;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  flex-shrink: 0;
`;

const Label = styled.span`
  display: flex;
  width: 26px;
  height: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  margin-top: 5px;
`;

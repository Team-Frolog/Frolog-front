import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';

function MainLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      {/* navigation bar 위치 */}
    </Container>
  );
}

export default MainLayout;

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: white;
  border-radius: 0px;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    width: 360px;
    height: 740px;
    border-radius: 12px;
  }
`;

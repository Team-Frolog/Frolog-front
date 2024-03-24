import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';
import NavigationBar from '../common/NavigationBar';

function MainLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <NavigationBar />
    </Container>
  );
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column; // 자식 요소들을 세로 방향으로 정렬
  justify-content: flex-start; // 자식 요소들을 컨테이너의 시작 부분으로 정렬
  align-items: center; // 가로 중앙 정렬
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: white;
  border-radius: 0px;
  position: relative;
  overflow: hidden;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    width: 360px;
    height: 740px;
    border-radius: 12px;
  }
`;
const Content = styled.div`
  flex-grow: 1; // 남은 공간을 모두 차지하도록 함
  width: 100%; // 너비를 부모와 동일하게 함
  overflow: auto; // 내용이 많을 경우 스크롤바 표시
`;

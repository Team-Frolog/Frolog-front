import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import MainLayout from './components/layout/MainLayout';

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01; // 하단 bar 제외 높이 -> 100등분 (1vh 구하기 위함)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/notice' element={<NoticePage />} />{' '}
        </Route>
      </Routes>
    </>
  );
}

export default App;

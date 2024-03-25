import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useDragControls } from 'framer-motion';
import Line from '../assets/bottomSheet/Line.svg';
import { fadeUp } from '../styles/GlobalStyles';
import CommentList from '../components/comment/CommentList';
import CommentInput from '../components/comment/CommentInput';

type CommentBottomSheetProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function CommentBottomSheet({ setOpen }: CommentBottomSheetProps) {
  const ref = useRef<HTMLDivElement | null>(null); // BottomSheet에 대한 ref
  const [sheetHeight, setSheetHeight] = useState<number>(0); // BottomSheet 높이
  const controls = useAnimation(); // BottomSheet 애니메이션 제어
  const dragControls = useDragControls(); // drag 제어

  /* ----- 마운트 시 초기 y 위치, botton sheet 높이 구하기 ----- */
  useEffect(() => {
    if (ref.current) {
      setSheetHeight(ref.current.offsetHeight);
    }
  }, []);

  /* ----- 바텀시트 종료 함수 (drag 속도 기반) ----- */
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: any
  ) => {
    const velocity = info.velocity.y; // y축에 대한 드래그 속도
    // 속도가 일정 값을 초과하면?
    if (velocity > 500) {
      controls.start({ y: sheetHeight + 1000 }); // BottomSheet를 애니메이션하여 화면 밖으로 내보냄
      setTimeout(() => setOpen(false), 500); // BottomSheet를 완전히 닫음
    }
  };

  return (
    <Background>
      <BottomSheet
        ref={ref}
        drag='y'
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd} // 드래그 종료 이벤트 처리
        animate={controls} // 애니메이션 적용
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      >
        <Header onPointerDown={(e) => dragControls.start(e)}>
          <img src={Line} alt='line' />
        </Header>
        <CommentList />
        <CommentInput />
      </BottomSheet>
    </Background>
  );
}

export default CommentBottomSheet;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #80808076;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const BottomSheet = styled(motion.div)`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 18px 18px 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  animation: ${fadeUp} 1s;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    height: 80%;
  }
`;

const Header = styled.button`
  width: 100%;
  padding: 10px 0px;
`;

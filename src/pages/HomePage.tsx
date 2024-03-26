import React, { useState } from 'react';
import styled from 'styled-components';
import CommentBottomSheet from './CommentBottomSheet';
import FeedPopUp from '../components/common/popUp/FeedPopUp';

function HomePage() {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [feedPopUp, setFeedPopUp] = useState<boolean>(false);

  /* ----- 댓글 바텀시트 등장 시 스크롤 방지 ----- */
  if (commentOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <button
        type='button'
        onClick={() => setCommentOpen(true)}
        style={{ border: '1px solid gray' }}
      >
        댓글 바텀시트 테스트
      </button>
      <button
        type='button'
        onClick={() => setFeedPopUp(true)}
        style={{ border: '1px solid gray' }}
      >
        팝업 테스트
      </button>
      <button type='button' style={{ border: '1px solid gray' }}>
        공유하기 테스트
      </button>
      {commentOpen && <CommentBottomSheet setOpen={setCommentOpen} />}
      {feedPopUp && <FeedPopUp setOpen={setFeedPopUp} />}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: fit-content;
`;

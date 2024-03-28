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

  /* ----- 피드 공유 함수 ----- */
  const handleShare = async () => {
    try {
      await window.navigator.share({
        title: '테스트', // 피드명 (아마.. 책이름?)
        text: 'testtesttest', // 한줄 리뷰
        url: '', // 피드 상세페이지 링크
      });
    } catch (err) {
      alert('공유 기능이 지원되지 않는 환경입니다.');
    }
  };

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
      <button
        type='button'
        onClick={() => handleShare()}
        style={{ border: '1px solid gray' }}
      >
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

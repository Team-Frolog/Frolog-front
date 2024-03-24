import React, { useState } from 'react';
import styled from 'styled-components';
import CommentBottomSheet from './CommentBottomSheet';

function HomePage() {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);

  return (
    <Container>
      <button
        type='button'
        onClick={() => setCommentOpen(true)}
        style={{ border: '1px solid gray' }}
      >
        댓글 바텀시트 테스트
      </button>
      {commentOpen && <CommentBottomSheet setOpen={setCommentOpen} />}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { commentDummy } from '../../data/dummyData/commentDummy';

function CommentList() {
  return (
    <Container>
      <Title>댓글</Title>
      <CommentContainer>
        {commentDummy.map((data) => {
          return <CommentItem key={data.id} data={data} />;
        })}
      </CommentContainer>
    </Container>
  );
}

export default CommentList;

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  margin-top: 6px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0;
  gap: 24px;
`;

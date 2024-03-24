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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Title = styled.h4`
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  margin: 12px;
`;

const CommentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  overflow: auto;
`;

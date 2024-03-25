import React, { useState } from 'react';
import styled from 'styled-components';
import LikeClicked from '../../assets/bottomSheet/LikeClicked.svg';
import LikeDefault from '../../assets/bottomSheet/LikeDefault.svg';
import { CommentType, replyDummy } from '../../data/dummyData/commentDummy';
import ReplyItem from './ReplyItem';

interface CommentItemProps {
  data: CommentType;
}

function CommentItem({ data }: CommentItemProps) {
  const [like, setLike] = useState<boolean>(false);
  const [openReply, setOpenReply] = useState<boolean>(false);
  return (
    <Container>
      <CommentWrapper>
        <Profile>
          <ProfileImg />
          <ProfileInfo>
            <h5>{data.name}</h5>
            <span>{data.min}분</span>
          </ProfileInfo>
        </Profile>
        <Content>
          <Comment>{data.comment}</Comment>
          <ReplyBar>
            <ReplyButton>답글 쓰기</ReplyButton>
            <ReplyButton onClick={() => setOpenReply((prev) => !prev)}>
              {openReply ? '답글 닫기' : '답글 보기'}
            </ReplyButton>
          </ReplyBar>
        </Content>
        <LikeBox>
          <LikeButton onClick={() => setLike((prev) => !prev)}>
            <img src={like ? LikeClicked : LikeDefault} alt='like' />
          </LikeButton>
          <span>{data.like}</span>
        </LikeBox>
      </CommentWrapper>

      <ReplyContainer $open={openReply}>
        {replyDummy.map((reply) => (
          <ReplyItem key={reply.id} data={reply} />
        ))}
      </ReplyContainer>
    </Container>
  );
}

export default CommentItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 14px 16px;
  gap: 16px;
`;

const Profile = styled.div`
  display: flex;
  gap: 8px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  gap: 6px;

  & h5 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.06px;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.06px;
  }
`;

const ProfileImg = styled.div`
  // 임시 프로필 이미지
  background-color: lightgray;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  gap: 6px;
`;

const Comment = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.06px;
`;

const ReplyBar = styled.div`
  display: flex;
  gap: 12px;
`;

const ReplyButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_lightgray};
  cursor: pointer;
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  gap: 4px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.text_lightgray};
  }
`;

const LikeButton = styled.button`
  cursor: pointer;
`;

const ReplyContainer = styled.div<{ $open: boolean }>`
  width: 100%;
  max-height: ${({ $open }) => ($open ? '300px' : '0')};
  display: flex;
  flex-direction: column;

  transition: max-height 0.5s linear;
  transition-delay: 0s;

  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Adjust the height of the border */
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.key_color} inset;
  }
`;

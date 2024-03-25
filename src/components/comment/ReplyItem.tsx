import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentType } from '../../data/dummyData/commentDummy';
import LikeClicked from '../../assets/bottomSheet/LikeClicked.svg';
import LikeDefault from '../../assets/bottomSheet/LikeDefault.svg';

interface ReplyItemProps {
  data: CommentType;
}

function ReplyItem({ data }: ReplyItemProps) {
  const [like, setLike] = useState<boolean>(false);

  return (
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
      </Content>
      <LikeBox>
        <LikeButton onClick={() => setLike((prev) => !prev)}>
          <img src={like ? LikeClicked : LikeDefault} alt='like' />
        </LikeButton>
        <span>{data.like}</span>
      </LikeBox>
    </CommentWrapper>
  );
}

export default ReplyItem;

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 14px 0px;
  padding-right: 16px;
  padding-left: 44px;
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

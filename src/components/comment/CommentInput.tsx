import React from 'react';
import styled from 'styled-components';
import InputButton from '../../assets/bottomSheet/InputButton.svg';

function CommentInput() {
  return (
    <Container>
      <EmojiBar>
        <Emoji>&#128512;</Emoji>
        <Emoji>&#128517;</Emoji>
        <Emoji>&#128525;</Emoji>
        <Emoji>&#128514;</Emoji>
        <Emoji>&#128546;</Emoji>
      </EmojiBar>
      <InputWrapper>
        <StyledInput type='text' />
        <SendButton>
          <img src={InputButton} alt='send' />
        </SendButton>
      </InputWrapper>
    </Container>
  );
}

export default CommentInput;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-top: 2px solid ${({ theme }) => theme.colors.key_color};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EmojiBar = styled.div`
  display: flex;
  gap: 20px;
`;

const Emoji = styled.button`
  font-size: 24px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0;

  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 35px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.input_gray};
  border: none;
  color: ${({ theme }) => theme.colors.text_white};
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin-left: 8px;

  & img {
    width: 40px;
    height: 40px;
  }
`;

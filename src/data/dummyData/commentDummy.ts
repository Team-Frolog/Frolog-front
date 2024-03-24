export interface CommentType {
  id: number;
  name: string;
  comment: string;
  like: number;
  min: number;
}

export const commentDummy: CommentType[] = [
  {
    id: 1,
    name: '정건우',
    comment: '아주 재밌네요!',
    like: 11,
    min: 15,
  },
  {
    id: 2,
    name: '정건우',
    comment: '저도 재밌게 읽었습니다.',
    like: 5,
    min: 12,
  },
  {
    id: 3,
    name: '정건우',
    comment: '흠.. 전 별로',
    like: 2,
    min: 10,
  },
  {
    id: 4,
    name: '정건우',
    comment:
      '저도 이거 재밌었어요! 저도 이거 재밌었어요!저도 이거 재밌었어요!저도 이거 재밌었어요!저도 이거 재밌었어요!저도 이거 재밌었어요!',
    like: 1,
    min: 5,
  },
  {
    id: 5,
    name: '정건우',
    comment: '아주 재밌네요!',
    like: 11,
    min: 15,
  },
  {
    id: 6,
    name: '정건우',
    comment: '저도 재밌게 읽었습니다.',
    like: 5,
    min: 12,
  },
  {
    id: 7,
    name: '정건우',
    comment: '흠.. 전 별로',
    like: 2,
    min: 10,
  },
  {
    id: 8,
    name: '정건우',
    comment: '저도 이거 재밌었어요!',
    like: 1,
    min: 5,
  },
];

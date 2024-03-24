// typescript svg 인식 못해서 custom 해놨음.
//svg를 직접 리액트 컴포넌트로 사용하려고 함.
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

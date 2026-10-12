import React from "react";

type HeaderProps = {
  title: string;
  currentCount: number;
  newCount: number;
};

// 스타일 객체를 변수로 분리하고 타입 지정 (CSSProperties 사용)
const headerStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  marginBottom: "20px",
};

export default function Header({ title, currentCount, newCount }: HeaderProps) {
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      <p>현재 멤버 {currentCount}명</p>
      {/* 신규 멤버가 1명 이상일 때만 표시 */}
      {newCount > 0 && <p>신규 {newCount}명</p>}
    </header>
  );
}
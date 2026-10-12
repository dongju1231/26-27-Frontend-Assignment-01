import type { MouseEvent } from "react";
import Button from "./Button";
import styles from "./MemberCard.module.css";

type MemberCardProps = {
  name: string;
  role?: string;
  isLeader?: boolean;
  isOnline?: boolean;
  onGreet: (name: string) => void;
  onDelete: (name: string) => void; // 이 타입이 꼭 있어야 합니다!
};

export default function MemberCard({
  name,
  role = "미정",
  isLeader = false,
  isOnline = false,
  onGreet,
  onDelete, // 👈 여기서 받아오고 있는지 확인
}: MemberCardProps) {
  
  const handleCardClick = () => {
    alert(`${name}님의 상세 정보`);
  };

  const handleGreetClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onGreet(name);
  };

  // 👇 삭제 버튼 클릭 핸들러가 누락되었거나 비어있었을 수 있습니다!
  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 카드 상세 알림창이 뜨는 것을 막음
    onDelete(name);     // App.tsx에서 전달받은 onDelete 함수 실행
  };

  return (
    <div 
      className={`${styles.card} ${isLeader ? styles.leaderCard : ""}`}
      onClick={handleCardClick}
    >
      <h2>{name}</h2>
      <p>담당 분야: {role}</p>
      {isLeader && <p>스터디장</p>}
      <p>상태: {isOnline ? "온라인" : "오프라인"}</p>
      
      <div style={{ marginTop: "10px" }}>
        <Button text="인사하기" variant="primary" onClick={handleGreetClick} />
   
        <Button text="삭제" variant="danger" onClick={handleDeleteClick} />
      </div>
    </div>
  );
}
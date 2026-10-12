import styles from "./MemberCard.module.css";

interface MemberCardProps {
  name: string;
  role: string;
  isLeader: boolean;
  onGreet: (name: string) => void;
}

export default function MemberCard({
  name,
  role,
  isLeader,
  onGreet,
}: MemberCardProps) {
  return (
    <div className={`${styles.card} ${isLeader ? styles.leader : ""}`}>
      <h2>{name}</h2>
      {isLeader && <p>스터디장</p>}
      <p>{role}</p>
      <button type="button" onClick={() => onGreet(name)}>
        인사하기
      </button>
    </div>
  );
}

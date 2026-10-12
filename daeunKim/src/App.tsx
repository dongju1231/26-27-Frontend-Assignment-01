import MemberCard from "./components/MemberCard";

export default function App() {
  const handleGreet = (name: string) => {
    alert(`${name}님, 안녕하세요!`);
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>스터디 멤버</h1>
      <div style={{ display: "flex", gap: 20, padding: 10 }}>
        <MemberCard
          name="태우"
          role="프론트엔드"
          isLeader={true}
          onGreet={handleGreet}
        />
        <MemberCard
          name="재현"
          role="프론트엔드"
          isLeader={false}
          onGreet={handleGreet}
        />
        <MemberCard
          name="동주"
          role="프론트엔드"
          isLeader={false}
          onGreet={handleGreet}
        />
      </div>
    </>
  );
}

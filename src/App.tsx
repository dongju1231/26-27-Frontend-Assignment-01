import { useState } from "react";
import Header from "./components/Header";
import MemberCard from "./components/MemberCard";
import InviteForm from "./components/InviteForm";

export default function App() {
  // 현재 어떤 페이지를 보여줄지 관리하는 상태 ('main' 또는 'practice')
  const [currentPage, setCurrentPage] = useState<"main" | "practice">("main");

  // 🧮 연습용 페이지 카운터 상태
  const [count, setCount] = useState<number>(0);

  // 🎰 연습용 페이지 로또 번호 상태
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  const taewooData = {
    name: "김태우",
    role: "프론트엔드",
    isLeader: true,
    isOnline: true,
  };

  const handleGreet = (name: string) => {
    alert(`${name}님, 안녕하세요!`);
  };

  const handleDelete = (name: string) => {
    alert(`${name} 삭제 요청`); 
  };

  // 숫자 증감 함수들
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // 로또 추첨 함수
  const handlePickLotto = () => {
    const history: number[] = [];

    while (history.length < 7) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      
      // 중복 체크 후 추가
      if (!history.includes(randomNumber)) {
        history.push(randomNumber);
      }
    }

    // 상태 업데이트
    setLottoNumbers(history);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", position: "relative", minHeight: "100vh" }}>
      
      {/* 렌더링할 페이지 분기 처리 */}
      {currentPage === "main" ? (
        // --- 메인 페이지 ---
        <>
          <Header title="프론트엔드 스터디" currentCount={3} newCount={0} />

          <MemberCard {...taewooData} onGreet={handleGreet} onDelete={handleDelete} />
          <MemberCard name="황재현" role="디자인" isLeader={false} isOnline={false} onGreet={handleGreet} onDelete={handleDelete} />
          <MemberCard name="김동주" isLeader={false} onGreet={handleGreet} onDelete={handleDelete} />

          <InviteForm />
        </>
      ) : (
        // --- 연습용 페이지 ---
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>🛠️ 연습용 페이지입니다!</h2>
          <p>여기서 마음껏 컴포넌트나 코드를 테스트해 보세요.</p>
          
          {/* 현재 카운터 숫자 표시 */}
          <h1 style={{ fontSize: "40px", margin: "20px 0" }}>{count}</h1>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <button onClick={handleDecrease} style={{ padding: "8px 15px", cursor: "pointer" }}>-1</button>
            <button onClick={handleReset} style={{ padding: "8px 15px", cursor: "pointer" }}>초기화</button>
            <button onClick={handleIncrease} style={{ padding: "8px 15px", cursor: "pointer" }}>+1</button>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3>로또 번호 추첨</h3>
            <button onClick={handlePickLotto} style={{ padding: "8px 15px", cursor: "pointer", marginBottom: "15px" }}>
              로또번호 추첨
            </button>
            <div>
              {lottoNumbers.map((num, index) => (
                <span key={index} style={{ fontSize: "18px", fontWeight: "bold", marginRight: "8px" }}>
                  {num}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <button 
              onClick={() => setCurrentPage("main")}
              style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      )}

      {/* 우측 하단 구석에 고정(Fixed)되는 버튼 */}
      <button
        onClick={() => setCurrentPage(currentPage === "main" ? "practice" : "main")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 18px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        {currentPage === "main" ? "👉 연습용 페이지로 이동" : "🏠 메인으로 가기"}
      </button>

    </div>
  );
}
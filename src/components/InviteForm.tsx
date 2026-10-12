import { useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import Button from "./Button";

export default function InviteForm() {
  const [email, setEmail] = useState("");

  // [중복 확인] 버튼 클릭 핸들러 (폼 제출 방지)
  const handleDuplicateCheck = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 중요: 폼이 제출되는 것을 막음
    alert("사용 가능한 이메일입니다.");
  };

  // 폼 제출 핸들러 (JSX 바깥에 정의)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    if (!email.trim()) return;
    alert(`${email}로 초대 메일을 보냈습니다!`);
    setEmail(""); // 입력창 초기화
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>스터디원 초대하기</h3>
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", width: "200px" }}
      />
      {/* 중복 확인 버튼 */}
      <button onClick={handleDuplicateCheck} style={{ padding: "8px 12px", marginRight: "5px" }}>
        중복 확인
      </button>
      {/* 초대하기 버튼 (submit 타입) */}
      <Button text="초대하기" variant="primary" onClick={() => {}} />
    </form>
  );
}
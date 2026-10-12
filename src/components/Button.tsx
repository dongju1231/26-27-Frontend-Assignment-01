import type { MouseEvent } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  variant: "primary" | "danger";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ text, variant, onClick }: ButtonProps) {
  // variant에 따라 다른 CSS 모듈 클래스 적용
  const buttonClassName = variant === "danger" ? styles.danger : styles.primary;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
}
import { useRef } from "react";
import styles from "./Common.module.css";

type Props = {
  children: React.ReactNode;
  isShow: boolean | undefined;
  handleBottomSheetShow?: (state: boolean) => void;
  height?: number;
  shadow?: string;
  duration?: number;
};

export default function Section({
  children,
  isShow,
  height,
  shadow,
  duration,
}: Props) {
  const newHeight = height || 250;
  const BottonSheetRef = useRef<HTMLDivElement>(null);

  if (isShow) {
    BottonSheetRef.current?.style.setProperty(
      "transform",
      `translateY(-${newHeight}px)`
    );
  } else {
    BottonSheetRef.current?.style.setProperty("transform", "translateY(0rem)");
  }

  return (
    <div
      ref={BottonSheetRef}
      className={styles.section}
      style={{
        height: newHeight,
        bottom: `-${newHeight}px`,
        boxShadow: shadow,
        transitionDuration: `${duration}ms`,
      }}
    >
      <div style={{ color: "pink", fontWeight: "bold" }}>{children}</div>
    </div>
  );
}

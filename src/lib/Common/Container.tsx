import styles from "./Common.module.css";

type Props = {
  isShow: boolean | undefined;
  handleBottomSheet: (state: boolean) => void;
};

export default function Container({ isShow, handleBottomSheet }: Props) {
  const onClick = () => {
    if (handleBottomSheet) {
      handleBottomSheet(false);
    }
  };

  return (
    <section
      onClick={onClick}
      className={`${styles.container} ${isShow ? styles.block : styles.hidden}`}
    />
  );
}

import styles from "./Common.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}

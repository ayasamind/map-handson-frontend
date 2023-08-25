import { ReactNode } from "react";
import Image from "next/image"
import styles from "./Header.module.css";

interface HeaderProps {
  children?: ReactNode
}

const Header: React.FC = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Map App</h1>
    </header>
  )
}

export default Header

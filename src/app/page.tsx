import styles from "./page.module.scss";
import Slider from "@/component/slider/page";
import LimitProduct from "@/component/limiproduct/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      <LimitProduct limit={6} />
    </main>
  );
}

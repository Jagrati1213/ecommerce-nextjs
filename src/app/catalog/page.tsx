import React from "react";
import style from "./style.module.scss";
import LimitProduct from "@/component/limiproduct/page";
function Catalog() {
  return (
    <section className={style.catalog}>
      <LimitProduct limit={10} />
    </section>
  );
}

export default Catalog;

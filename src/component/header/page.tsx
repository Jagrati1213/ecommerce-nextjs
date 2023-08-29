"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Image } from "antd";
import style from "./style.module.scss";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className="logo">
        <Image src="/logo.png" width={150} height={100} alt="logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
          <li>Login</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

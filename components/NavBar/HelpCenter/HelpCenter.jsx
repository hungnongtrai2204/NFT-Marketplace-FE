import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "Giới Thiệu",
      link: "about",
    },
    {
      name: "Liên Hệ Chúng Tôi",
      link: "contact-us",
    },
    {
      name: "Đăng Ký",
      link: "sign-up",
    },
    {
      name: "Đăng Nhập",
      link: "sign-in",
    },
    {
      name: "Theo Dõi",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;

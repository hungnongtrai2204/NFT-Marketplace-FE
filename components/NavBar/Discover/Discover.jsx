import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //-----------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Bộ Sưu Tập",
      link: "collection",
    },
    {
      name: "Tìm Kiếm",
      link: "search",
    },
    {
      name: "Hồ Sơ Tác Giả",
      link: "author-profile",
    },
    {
      name: "Chi Tiết NFT",
      link: "nft-details",
    },
    {
      name: "Cài Đặt Tài Khoản",
      link: "account-setting",
    },
    {
      name: "Kết Nối Ví",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;

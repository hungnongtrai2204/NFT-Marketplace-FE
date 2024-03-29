import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu }) => {
  //------USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
  //-----------HELP CENTER
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
      name: "Đăng Ký Nhận Thông Tin",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Khám phá những bài viết nổi bật nhất về NFT & chia sẻ câu chuyện của
          bạn
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Khám Phá</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Trung Tâm Trợ Giúp</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName="Tạo" handleClick={() => {}} />
        <Button btnName="Kết Nối Ví" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;

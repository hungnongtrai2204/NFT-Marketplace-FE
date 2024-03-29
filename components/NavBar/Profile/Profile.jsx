import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Vu Quoc Hung</p>
          <small>X0383489384938948348938</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/myprofile" }}>Hồ Sơ Của Tôi</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_one_item}>
          <FaRegImage />
          <p>
            <Link href={{ pathname: "/my-items" }}>Danh Sách Của Tôi</Link>
          </p>
        </div>
        <div className={Style.profile_menu_one_item}>
          <FaUserEdit />
          <p>
            <Link href={{ pathname: "/edit-profile" }}>Chỉnh Sửa Hồ Sơ</Link>
          </p>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Giúp Đỡ</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }}>Ngắt Kết Nối</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

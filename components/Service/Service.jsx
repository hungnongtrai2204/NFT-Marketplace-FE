import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Bước 1</span>
          </p>
          <h3>Lọc & Khám Phá</h3>
          <p>
            Kết nối với ví, khám phá, mua NFTs, bán NFTs của bạn và kiếm tiền
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter % Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Bước 1</span>
          </p>
          <h3>Lọc & Khám Phá</h3>
          <p>
            Kết nối với ví, khám phá, mua NFTs, bán NFTs của bạn và kiếm tiền
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Kết Nối Ví"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Bước 1</span>
          </p>
          <h3>Kết Nối Ví</h3>
          <p>
            Kết nối với ví, khám phá, mua NFTs, bán NFTs của bạn và kiếm tiền
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter % Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Bước 1</span>
          </p>
          <h3>Bắt Đầu Giao Dịch</h3>
          <p>
            Kết nối với ví, khám phá, mua NFTs, bán NFTs của bạn và kiếm tiền
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

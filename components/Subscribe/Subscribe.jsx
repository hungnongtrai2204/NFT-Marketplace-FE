import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Đừng bỏ lỡ bất kỳ đợt phát hành NFT nào</h2>
          <p>
            Đăng ký danh sách drop siêu độc quyền của chúng tôi và trở thành
            những người đầu tiên biết về các đợt phát hành sắp tới!
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Nhận được nhiều ưu đãi hơn</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Tạp chí NFT cao cấp</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Nhập email của bạn" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

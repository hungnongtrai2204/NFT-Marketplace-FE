import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSeaction.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Khám phá, thu thập và bán NFTs 🖼️</h1>
          <p>
            Khám phá những NTFs nổi bật nhất trong mọi chủ đề của cuộc sống. Tạo
            NTFs của bạn và bán chúng
          </p>
          <Button btnName="Bắt đầu tìm kiếm của bạn" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

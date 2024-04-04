import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Duyệt theo chủ đề"
        paragraph="Khám phá NFT trong các danh mục được yêu thích nhất."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;

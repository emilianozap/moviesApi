import React from "react";
import { RootBanner, Button, FadeBottom } from "./BannerStyled";

const Banner = () => {
  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  return (
    <RootBanner>
      <div>
        <h2>
          movie title
        </h2>
        <div>
          <Button>play</Button>
          <Button>my list</Button>
        </div>
        <h6>
          {
            truncate("   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Indignissimos ab neque quis eum, sed sapiente illum! Illo at nostrum mollitia? Veniam quaerat obcaecati cumque aspernatur vitae, dolores facere ipsum.", 150)
          }
       
        </h6>
        <FadeBottom></FadeBottom>
      </div>
    </RootBanner>
  );
};



export default Banner;

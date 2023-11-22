import React from "react";
import {
  RootBanner,
  Button,
  FadeBottom,
  RootBanner1,
  InfoContainer,
  ButtonContainer,
} from "./BannerStyled";
import { useSelector } from "react-redux";

const Banner = () => {
  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;
  const hero = useSelector((state) => state.hero.hero);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {!hero ? (
        <RootBanner1>
          <FadeBottom></FadeBottom>
        </RootBanner1>
      ) : (
        <RootBanner bg={base_url + hero?.backdrop_path}>
          <InfoContainer>
            <h2>{truncate(`${hero?.title || hero.name}`, 30)}</h2>
            <ButtonContainer>
              <div>
                <Button>play</Button>
                <Button>my list</Button>
              </div>
              <h6>{truncate(`${hero?.overview}`, 150)}</h6>
            </ButtonContainer>
          </InfoContainer>
          <FadeBottom></FadeBottom>
        </RootBanner>
      )}
    </>
  );
};

export default Banner;

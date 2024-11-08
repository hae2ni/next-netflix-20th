import Lottie from "lottie-react";
import netflixLanding from "./json/netflixLanding.json";

export default function Landing() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "50vh",
      }}
    >
      <Lottie
        animationData={netflixLanding}
        style={{ maxWidth: "100%" }}
        loop={false}
      />
    </div>
  );
}

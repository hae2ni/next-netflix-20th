import Lottie from "lottie-react";
import netflixLanding from "./json/netflixLanding.json";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();

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
        onComplete={() => router.push("/home")}
      />
    </div>
  );
}

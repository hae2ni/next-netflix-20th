"use client";
import NavBar from "@/components/common/navBar";
import { useParams } from "next/navigation";

export default function Detail() {
  const router = useParams();
  console.log(router);
  return (
    <div>
      <NavBar />
    </div>
  );
}

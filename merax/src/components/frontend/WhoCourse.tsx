import { TWho } from "@/app/frontend/page";
import Image from "next/image";
import React from "react";

type Props = {
  item: TWho;
};

export default function WhoCourse({ item }: Props) {
  return (
    <div className="WhoCourse">
      <div className="">
        <Image src={item.image} alt="" />
      </div>
      <div className="">
        <p>{item.title}</p>
        <div className="">
          <span>{item.text}</span>
          <span>{item.info}</span>
        </div>
      </div>
    </div>
  );
}

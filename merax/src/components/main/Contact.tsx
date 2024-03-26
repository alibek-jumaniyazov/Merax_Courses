"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

export default function Contact({}: Props) {
  type TForm = {
    name: string;
    tel: string;
  };

  const [formData, setFormData] = useState<TForm>({
    name: "",
    tel: "+998 ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const BotYuborish = async () => {
    const apiToken = "7178943806:AAFevetMdSkPeNJk_jU6IzJSRFaYnBIbrko";
    const chatId = "2119173106" || "-1001923251544";

    const message = `
      Ism Familya: ${formData.name}
    Telefon Raqam: ${formData.tel}
    `;

    try {
      if (formData.name === "" || formData.tel === "") {
        toast.error("Iltmos hamma joylarni to'ldiring");
      } else {
        await axios.post(
          `https://api.telegram.org/bot${apiToken}/sendMessage`,
          {
            chat_id: chatId,
            text: message,
          }
        );

        setFormData({ name: "", tel: "+998 " });
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };
  return (
    <div className="Contact w-full flex justify-between items-center mt-40 mb-40 mainFont">
      <div className="flex flex-col justify-center items-start gap-5">
        <p className="font-semibold text-5xl text-textColor">
          Yana savollaringiz qoldimi?
        </p>
        <span className=" w-[698px] font-medium text-xl text-[#979797] leading-8">
          Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni
          bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta
          qo'ng'iroq qilishadi.
        </span>
      </div>
      <div className="flex flex-col justify-center items-start bg-[#ebeaea] gap-6 rounded-3xl py-10 px-12">
        <input
          type="text"
          name="name"
          placeholder="Ismingizni kiriting"
          className="w-full p-4 outline-none rounded-xl border border-[#D0D0D0] "
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder=""
          className="w-full p-4 outline-none rounded-xl border border-[#D0D0D0] "
          value={formData.tel}
          onChange={handleChange}
          required
        />
        <div
          className="w-[383px] flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300 cursor-pointer"
          onClick={() => BotYuborish()}
        >
          <button className="px-4 py-3 font-bold text-lg text-white">
            Yuborish
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

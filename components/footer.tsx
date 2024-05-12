import { logOutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = (props: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const loggedOut = await logOutAccount();
    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div
        className={
          props.type === "mobile" ? "footer_name-mobile" : "footer_name"
        }
      >
        <p className="text-xl font-bold capitalize text-gray-700">
          {props.user?.name[0]}
        </p>
      </div>
      <div
        className={
          props.type === "mobile" ? "footer_email-mobile" : "footer_email"
        }
      >
        <h1 className="text-14 truncate font-semibold text-gray-600">
          {props.user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {props.user?.email}
        </p>
      </div>
      <div onClick={handleLogout} className="footer_image">
        <Image src="icons/logout.svg" fill alt="footer_img" />
      </div>
    </footer>
  );
};

export default Footer;

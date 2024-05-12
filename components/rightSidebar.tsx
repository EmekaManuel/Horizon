import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./bankCard";

const RightSidebar = (props: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {props.user?.name[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">{props.user?.name}</h1>
            <p className="profile-email">{props.user?.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {props.banks.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="z-10 relative">
              <BankCard
                key={props.banks[0].$id}
                account={props.banks[0]}
                userName={`${props.user?.name} `}
                showBalance={false}
              />
            </div>
            {props.banks[1] && (
              <div className="absolute right-[-10px] top-8 z-0 w-[95%]">
                <BankCard
                  key={props.banks[1].$id}
                  account={props.banks[0]}
                  userName={`${props.user?.name}`}
                  showBalance={false}
                />{" "}
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;

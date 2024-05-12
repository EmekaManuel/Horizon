import HeaderBox from "@/components/headerBox";
import RightSidebar from "@/components/rightSidebar";
import TotalBalanceBox from "@/components/totalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Dashboard = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and Manage Your Accounts and Transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={2780033.78}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 21930 }, { currentBalance: 1000000 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Dashboard;

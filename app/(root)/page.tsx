import HeaderBox from "@/components/headerBox";
import TotalBalanceBox from "@/components/totalBalanceBox";
import React from "react";

const Dashboard = () => {
  const loggedIn = { firstName: "Manuel", lastName: "Emeka" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and Manage Your Accounts and Transactions"
          />
          <TotalBalanceBox
            accounts={1}
            totalBanks={1}
            totalCurrentBalance={1250.78}
          />
        </header>
      </div>
    </section>
  );
};

export default Dashboard;

"use client";

import React from "react";
import EarnMoreTable from "@/components/moreTable/EarnMoreTable";
import DepositMoreTable from "@/components/moreTable/DepositMoreTable";

const EarnPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl mb-8">My Deposits</h1>
      <DepositMoreTable />

      <h1 className="text-4xl mb-8">MORE Vaults</h1>
      <EarnMoreTable />
    </div>
  );
};

export default EarnPage;

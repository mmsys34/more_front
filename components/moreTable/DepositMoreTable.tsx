"use client";

import { formatUnits } from "ethers";
import React, { useState, useEffect } from "react";
import { useReadContract, useAccount } from "wagmi";
import { readContract } from "@wagmi/core";
import TableHeaderCell from "./MoreTableHeader";
import ButtonDialog from "../buttonDialog/buttonDialog";
import VaultDeposit from "../modal/deposit/VaultDeposit";
import IconToken from "../token/IconToken";
import { DepositMoreData, Market } from "@/types";
import ListIconToken from "../token/ListIconToken";
import FormatPourcentage from "../tools/formatPourcentage";
import FormatTokenMillion from "../tools/formatTokenMillion";
import VaultWithdraw from "../modal/withdraw/VaultWithdraw";
import { contracts, marketsInstance } from "@/utils/const";
import { getMarketData } from "@/utils/contract";
import { MarketsAbi } from "@/app/abi/MarketsAbi";
import { config } from "@/utils/wagmi";

const DepositMoreTable: React.FC = () => {
  const [positions, setPositions] = useState<DepositMoreData[]>([]);
  const account = useAccount();
  const {
    data: arrayOfMarkets,
    isSuccess,
    refetch: refetchProject,
  } = useReadContract({
    address: contracts.MORE_MARKETS as `0x${string}`,
    abi: MarketsAbi,
    functionName: "arrayOfMarkets",
  });

  const { address: userAddress } = account;

  useEffect(() => {
    refetchProject?.();
  }, [isSuccess]);

  useEffect(() => {
    const initPositions = async () => {
      if (userAddress && arrayOfMarkets) {
        const promises = (arrayOfMarkets as `0x${string}`[]).map(
          async (marketId) => {
            const positionInfo = await readContract(config, {
              ...marketsInstance,
              functionName: "position",
              args: [marketId, userAddress],
            });

            const depositAmount = BigInt((positionInfo as any[])[0]);
            if (depositAmount > 0) {
              const marketData: Market = await getMarketData(marketId);

              return {
                tokenName: "doge",
                apy: 0,
                depositAmount: Number(formatUnits(depositAmount)),
                curator: "-",
                depositValueUSD: 0,
                collaterals: [],
                market: marketData,
              } as DepositMoreData;
            }
          }
        );

        const positionQues = await Promise.all(promises);
        setPositions(positionQues.filter((item) => item !== undefined));
      }
    };

    initPositions();
  }, [userAddress, arrayOfMarkets]);

  const [isStickyDisabled, setIsStickyDisabled] = useState(false);

  const toggleSticky = () => {
    setIsStickyDisabled(!isStickyDisabled);
  };

  return (
    <div
      className="overflow-x-auto relative rounded-[15px] mb-16"
      style={{
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        position: "relative",
        overflow: "visible",
      }}
    >
      <table className="w-full text-sm text-left   border border-gray-800 ">
        <thead
          className="bg-[#212121] h-20  text-xs "
          style={{
            boxShadow: "inset 0 2px 10px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <tr className="rounded-t-lg">
            <th style={{ width: "200px" }} className="rounded-tl-lg">
              <TableHeaderCell title="Vault Name" infoText="" />
            </th>
            <th style={{ width: "200px" }} className="rounded-tl-lg">
              <TableHeaderCell
                title="Deposit Token"
                infoText="The token(s) eligible for deposit into the vault and which are lent to borrowers in order to generate yield."
              />
            </th>
            <th style={{ width: "200px" }}>
              <TableHeaderCell
                title="Net APY"
                infoText="The annualized return you earn on your deposited amount after all fees. This rate fluctuates in real-time based on supply and demand in the underlying markets."
              />
            </th>
            <th style={{ width: "300px" }}>
              <div className="flex justify-start ">
                <TableHeaderCell title="My Deposit" infoText="" />
              </div>
            </th>
            <th style={{ width: "200px" }}>
              <TableHeaderCell
                title="Curator"
                infoText="The organization that manages the vault parameters such as included markets, allocations, caps and performance fees."
              />
            </th>
            <th style={{ width: "200px" }}>
              <TableHeaderCell
                title="Collateral"
                infoText="The token(s) that borrowers must lock in order to borrow funds."
              />
            </th>
            <th
              style={{
                position: isStickyDisabled ? "static" : "sticky",
                right: 0,
                backgroundColor: "#212121",
              }}
            ></th>
          </tr>
        </thead>
        <tbody className="bg-transparent">
          {positions.map((item, index, arr) => (
            <tr
              key={index}
              style={
                index === arr.length - 1
                  ? {
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }
                  : undefined
              }
              className={`last:border-b-0 text-[12px]  cursor-pointer  ${
                index % 2 === 0 ? "bg-transparent" : "dark:bg-[#191919]"
              }`}
            >
              <td className="py-4 px-6 items-start h-full">
                <div className="flex items-start">
                  <div className="mr-2 w-6 h-6">
                    <IconToken
                      tokenName={item.tokenName.toLocaleLowerCase()}
                    ></IconToken>
                  </div>
                  {item.tokenName}
                </div>
              </td>
              <td className="py-4 px-6 items-start h-full">
                <div className="flex items-start">
                  <div className="mr-2 w-6 h-6">
                    <IconToken
                      tokenName={item.tokenName.toLocaleLowerCase()}
                    ></IconToken>
                  </div>
                  {item.tokenName}
                </div>
              </td>
              <td className="py-4 px-6 items-start h-full   ">
                <div className="flex justify-start">
                  <FormatPourcentage value={item.apy}></FormatPourcentage>
                </div>
              </td>
              <td className=" items-start   h-full ">
                <div className="flex justify-start">
                  <FormatTokenMillion
                    value={item.depositAmount}
                    token={item.tokenName}
                    totalValue={item.depositValueUSD}
                  ></FormatTokenMillion>
                </div>
              </td>
              <td className="py-4 px-6 items-start h-full  ">
                <div className="flex items-start">
                  <div className="mr-2 w-6 h-6">
                    <IconToken tokenName="abt"></IconToken>
                  </div>
                  {item.curator}
                </div>
              </td>
              <td className="py-4  items-start h-full">
                <ListIconToken
                  className="w-6 h-6"
                  iconNames={item.collaterals}
                ></ListIconToken>
              </td>
              <td
                className={`py-4 px-6 flex gap-2 items-center justify-end h-full ${
                  isStickyDisabled ? "" : "sticky"
                }`}
                style={{
                  right: 0,
                  backgroundColor: index % 2 === 0 ? "#141414" : "#191919",
                }}
              >
                <ButtonDialog
                  color="primary"
                  buttonText="Deposit More"
                  onButtonClick={toggleSticky}
                >
                  {(closeModal) => (
                    <div className=" w-full h-full">
                      {/* <VaultDeposit closeModal={closeModal} /> */}
                    </div>
                  )}
                </ButtonDialog>

                <ButtonDialog
                  color="grey"
                  buttonText="Withdraw"
                  onButtonClick={toggleSticky}
                >
                  {(closeModal) => (
                    <div className=" w-full h-full">
                      <VaultWithdraw item={item} closeModal={closeModal} />
                    </div>
                  )}
                </ButtonDialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DepositMoreTable;

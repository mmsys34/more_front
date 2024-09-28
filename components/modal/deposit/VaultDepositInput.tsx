"use client";

import { useAccount } from "wagmi";
import { ZeroAddress } from "ethers";
import React, { useEffect, useState } from "react";
import { type GetBalanceReturnType } from "@wagmi/core";
import MoreButton from "../../moreButton/MoreButton";
import MoreToggle from "../../moreToggle/MoreToggle";
import InputTokenMax from "../../input/InputTokenMax";
import FormatTokenMillion from "@/components/tools/formatTokenMillion";
import { InvestmentData } from "@/types";
import { getTokenBallance } from "@/utils/contract";
import { getTokenInfo, notify } from "@/utils/utils";
import { initBalance, errMessages, contracts } from "@/utils/const";

interface Props {
  item: InvestmentData;
  useFlow: boolean;
  closeModal: () => void;
  setAmount: (amount: number) => void;
  setUseFlow: (useFlow: boolean) => void;
}

const VaultDepositInput: React.FC<Props> = ({
  item,
  useFlow,
  setAmount,
  closeModal,
  setUseFlow,
}) => {
  const { address: userAddress } = useAccount();
  const [deposit, setDeposit] = useState<number>();
  const [flowBalance, setFlowBalance] =
    useState<GetBalanceReturnType>(initBalance);
  const [balanceString, setBalanceString] =
    useState<GetBalanceReturnType>(initBalance);

  useEffect(() => {
    const initBalance = async () => {
      if (userAddress) {
        const tokenBal = await getTokenBallance(item.assetAddress, userAddress);
        setBalanceString(tokenBal);

        if (
          item.assetAddress.toLowerCase() == contracts.WNATIVE.toLowerCase()
        ) {
          const flowBal = await getTokenBallance(ZeroAddress, userAddress);
          setFlowBalance(flowBal);
        }
      }
    };

    initBalance();
  }, [item, userAddress]);

  // const toggleFlow = (useWrap: boolean) => {
  //   setDeposit(0);
  //   setUseFlow(useWrap);
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal =
      event.target.value.length > 0
        ? parseFloat(event.target.value)
        : undefined;
    setDeposit(inputVal);
  };

  const handleSetMax = (maxValue: number) => {
    setDeposit(maxValue);
  };

  const handleDeposit = () => {
    if (deposit && deposit > 0) {
      setAmount(deposit);
    } else {
      notify(errMessages.invalid_amount);
    }
  };

  const tokenInfo = getTokenInfo(item.assetAddress);
  const flowVault =
    useFlow &&
    item.assetAddress.toLowerCase() == contracts.WNATIVE.toLowerCase();

  return (
    <div className="more-bg-secondary w-full rounded-[20px] modal-base">
      <div className="px-[28px] pt-[50px] pb-[30px] font-[16px]">
      <div className="text-[24px] mb-[40px] font-semibold">{item.vaultName}</div>
      <div className="text-l text-[16px] mb-5">
        Deposit {flowVault ? "Flow" : tokenInfo.symbol}
      </div>
      <div>
        {/* <div className="text-xl my-3">
          <span className="mr-3">Use Flow</span>
          {flowVault && (
            <MoreToggle checked={useFlow} setChecked={toggleFlow} />
          )}
        </div> */}
        {flowVault ? (
          <InputTokenMax
            type="number"
            value={deposit}
            onChange={handleInputChange}
            placeholder="0"
            token={ZeroAddress}
            balance={Number(flowBalance.formatted)}
            setMax={handleSetMax}
          />
        ) : (
          <InputTokenMax
            type="number"
            value={deposit}
            onChange={handleInputChange}
            placeholder="0"
            token={item.assetAddress}
            balance={Number(balanceString.formatted)}
            setMax={handleSetMax}
          />
        )}
      </div>
      {flowVault ? (
        <div className="text-right text-[16px] font-semibold more-text-gray px-4 mt-4">
          Balance: {flowBalance.formatted} Flow
        </div>
      ) : (
        <div className="text-right text-[16px] font-semibold more-text-gray px-4 mt-4">
          Balance: {balanceString.formatted} {tokenInfo.symbol}
        </div>
      )}
      <div className="flex justify-end mt-[40px]">
        <div className="mr-5">
          <MoreButton
            className="text-2xl py-2"
            text="Cancel"
            onClick={closeModal}
            color="grey"
          />
        </div>
        <MoreButton
          className="text-2xl py-2 "
          text="Deposit"
          onClick={() => handleDeposit()}
          color="primary"
        />
      </div>
      </div>
      <div className=""></div>
      <div className="more-bg-primary rounded-b-[20px] px-[28px] pb-[40px] pt-[30px] text-[16px] font-normal">
        <div className="flex justify-between mb-4">
          <div>APY:</div>
          <div>
            {/* {item.netAPY}
            <span className="more-text-gray">%</span> */}
            N/A
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <div className="">Total Deposits</div>
          <div>
            <FormatTokenMillion
              value={item.totalDeposits}
              totalValue={0}
              token={item.assetAddress}
              inTable={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultDepositInput;

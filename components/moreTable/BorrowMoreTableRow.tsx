import React from "react";
import { useAccount } from "wagmi";
import { formatEther } from "ethers";
import IconToken from "../token/IconToken";
import FormatTwoPourcentage from "../tools/formatTwoPourcentage";
import FormatPourcentage from "../tools/formatPourcentage";
import FormatTokenMillion from "../tools/formatTokenMillion";
import ButtonDialog from "../buttonDialog/buttonDialog";
import VaultBorrow from "../modal/borrow/VaultBorrow";
import { BorrowMarket } from "@/types";
import { formatTokenValue } from "@/utils/utils";

interface BorrowMoreTableRowProps {
  item: BorrowMarket;
  index: number;
}

const BorrowMoreTableRow: React.FC<BorrowMoreTableRowProps> = ({
  item,
  index,
}) => {
  const { address: userAddress } = useAccount();

  const totalSupply = BigInt(item.totalSupply);
  const utilization =
    totalSupply == BigInt(0)
      ? 0
      : Number((BigInt(item.totalBorrow) * BigInt(100)) / totalSupply);

  return (
    <>
      <td className="py-4 px-6 items-center h-full">
        <div className="flex items-center">
          <IconToken
            className="mr-2 w-6 h-6"
            tokenName={item.inputToken.id}
            showSymbol={true}
          />
        </div>
      </td>
      <td className="py-4 px-6 items-center h-full  ">
        <div className="flex items-center">
          <IconToken
            className="mr-2 w-6 h-6"
            tokenName={item.borrowedToken.id}
            showSymbol={true}
          />
        </div>
      </td>
      <td className="py-4  items-center h-full ">
        <div className="flex gap-1 justify-start">
          <FormatTwoPourcentage
            value={Number(formatEther(BigInt(item.lltv)))}
            value2={
              item.marketParams.isPremiumMarket &&
              item.marketParams.categoryLltv.length > 0
                ? Number(
                    formatEther(
                      item.marketParams.categoryLltv[
                        item.marketParams.categoryLltv.length - 1
                      ]
                    )
                  )
                : null
            }
          />
        </div>
      </td>
      <td className="py-4 px-6 items-center h-full">
        <div className="flex justify-start">
          <FormatPourcentage value={"N/A"} />
        </div>
      </td>
      <td className="py-4 px-6 items-center h-full">
        <div className="flex">
          <FormatPourcentage value={utilization / 100} />
        </div>
      </td>
      <td className="py-4 px-6 items-center   h-full ">
        <div className="flex justify-start">
          <FormatTokenMillion
            value={formatTokenValue(
              item.marketInfo.totalSupplyAssets,
              item.inputToken.id
            )}
            token={item.inputToken.id}
            totalValue={0}
          />
        </div>
      </td>
      {userAddress && (
        <td
          className="py-4 px-6 items-center justify-end h-full"
          style={{
            paddingRight: 10,
            right: 0,
            backgroundColor: `${index % 2 === 0 ? "#141414" : "#191919"}`,
          }}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <ButtonDialog color="secondary" buttonText="Borrow">
              {(closeModal) => (
                <div className=" w-full h-full">
                  <VaultBorrow item={item} closeModal={closeModal} />
                </div>
              )}
            </ButtonDialog>
          </div>
        </td>
      )}
    </>
  );
};

export default BorrowMoreTableRow;

import React from "react";
import millify from "millify";
import { isNaN } from "lodash";
import { ZeroAddress } from "ethers";
import IconToken from "../token/IconToken";
import MoreButton from "../moreButton/MoreButton";
import usePrice from "@/hooks/usePrice";
import { contracts } from "@/utils/const";

interface Props {
  type: string;
  value: number;
  token: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  balance: number;
  setMax: (maxValue: number) => void;
}

const InputTokenMax: React.FC<Props> = ({
  type,
  value,
  onChange,
  placeholder,
  token,
  balance,
  setMax,
}) => {
  const tokenAddr = token == ZeroAddress ? contracts.WNATIVE : token;
  const { tokenPrice } = usePrice(tokenAddr);

  return (
    <div className="w-full flex  rounded-[8px] more-input-bg-color flex justify-between items-center px-4 py-2 gap-4">
      <div className="flex w-full flex-col items-center gap-2">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="noBorder noArrows input mt-1  text-left text-2xl w-full more-input-text-color more-input-bg-color"
          placeholder={placeholder}
        />
        {!isNaN(value) && (
          <div className="flex -mt-5 pl-3 pb-4 justify-start w-full items-center ">
            <span className="text-grey">
              ${millify(tokenPrice * value, { precision: 2 })}
            </span>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <IconToken className="h-8 w-8" tokenName={token} showSymbol={true} />
        <MoreButton
          text="Max"
          onClick={() => setMax(balance)}
          color="gray"
          className=" py-2 w-20 text-xl"
        />
      </div>

      <style jsx>{`
        .noBorder {
          border: none;
          outline: none;
        }

        .noArrows::-webkit-inner-spin-button,
        .noArrows::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .noArrows {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default InputTokenMax;

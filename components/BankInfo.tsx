'use client';
import React from 'react';
import { useRouter, useSearchParams } from "next/navigation";

import { cn, formatAmount, formUrlQuery, getAccountTypeColors } from "@/lib/utils";
import Image from "next/image";

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account?.appwriteItemId
    });

    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(`bank-info ${colors.bg}`, {
        "shadow-sm border-blue-700": type === 'card' && isActive,
        "rounded-xl": type === 'card',
        "hover:shadow-sm cursor-pointer": type === 'card',
      })}
    >
      <figure className={`
        flex-center h-fit rounded-full bg-blue-100 ${colors.lightBg}`}
      >
        <Image
          src="/icons/connect-bank.svg"
          alt={account.subtype}
          width={20}
          height={20}
          className="min-w-5 m-2"
        />
      </figure>
      <div className="flex flex-col justify-center flex-1 gap-1 w-full">
        <div className="bank-info_content">
          <h2 className={`
            flex-1 text-16 font-bold text-blue-900 line-clamp-1 ${colors.title}`}
          >
            {account.name}
          </h2>

          {type === 'full' && (
            <p className={`
              text-12 font-medium text-blue-700 rounded-full px-3 py-1
              ${colors.subText} ${colors.lightBg}`}
            >
              {account.subtype}
            </p>
          )}
        </div>

        <p className={`
          text-16 font-medium text-blue-700 ${colors.subText}`}
        >
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
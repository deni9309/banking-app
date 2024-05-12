'use client';
import React from 'react';
import { useRouter, useSearchParams } from "next/navigation";

import { cn, formUrlQuery } from "@/lib/utils";

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account?.appwriteItemId
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, { "border-blue-600": isActive })}
    >
      <p className={cn(`flex-1 text-16 font-medium text-gray-500 line-clamp-1`, { "text-blue-500": isActive })}>
        {account.name}
      </p>
    </div>
  );
};

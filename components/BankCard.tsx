import Link from 'next/link'
import Image from 'next/image'

import { cn, formatAmount } from '@/lib/utils'
import { Copy } from '@/components/Copy'

const BankCard = ({
  account,
  userName,
  showBalance = true,
  type = 'aside',
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        prefetch
        className={cn('bank-card', {
          'min-w-[310px]': type === 'main',
          'min-w-[200px]': type === 'aside',
        })}
      >
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white max-sm:text-xs">
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white max-sm:text-xs">
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white max-sm:text-[10px]">
              ●●●● ●●●● ●●●●{' '}
              <span className="text-16 max-sm:text-xs">{account?.mask}</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" alt="pay" width={20} height={24} />
          <Image
            src="/icons/mastercard.svg"
            alt="mastercard"
            width={45}
            height={32}
            className="ml-5"
          />
        </div>
        <Image
          src="/icons/lines.svg"
          alt="lines"
          width={316}
          height={190}
          className="absolute left-0 top-0"
        />
      </Link>

      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  )
}

export default BankCard

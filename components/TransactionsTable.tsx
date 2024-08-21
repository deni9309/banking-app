import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { transactionCategoryStyles } from '@/constants'

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    textColor,
    chipBackgroundColor,
  } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default

  return (
    <div className={cn('flex items-center gap-1 rounded-xl border-[1.5px] py-[2px] px-1.5', borderColor, chipBackgroundColor)}>
      <div className={cn(textColor)}>●</div>
      <p className={cn('text-[11px] text-wrap leading-tight font-medium')}>{category}</p>
    </div>
  )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date))
          const amount = formatAmount(t.amount)

          const isDebit = t.type === 'debit'
          const isCredit = t.type === 'credit'

          return (
            <TableRow
              key={t.id}
              className={`!over:bg-none max-md:text-xs !border-b-DEFAULT ${isDebit || amount[0] === '-' ? 'bg-[#fffbfa]' : 'bg-[#f6fef9]'}`}
            >
              <TableCell className="max-w-[160px] pl-2 pr-5">
                <div className="flex items-center gap-3">
                  <h1 className="text-14 line-clamp-2 font-semibold text-[#344054]">
                    {removeSpecialCharacters(t.name)}
                  </h1>
                </div>
              </TableCell>

              <TableCell
                className={`pl-2 pr-5 font-semibold ${isDebit || amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'}`}
              >
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              <TableCell className="pl-2 pr-5 w-[118px]">
                <CategoryBadge category={status} />
              </TableCell>

              <TableCell className="w-28 line-clamp-2 pl-2 pr-5">
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>

              <TableCell className="truncate max-w-14 pl-2 pr-5 capitalize max-md:hidden">
                {t.paymentChannel}
              </TableCell>

              <TableCell className="pl-2 pr-5 w-28 max-md:hidden">
                <CategoryBadge category={t.category} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TransactionsTable

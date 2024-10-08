import React from 'react'

import { getLoggedInUser } from '@/lib/actions/user.actions'
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions'
import BankCard from '@/components/BankCard'

const MyBanks = async () => {
  const loggedIn: LoggedInType = await getLoggedInUser()

  if (!loggedIn?.$id) return null

  const accounts: {
    data: Account[]
    totalBanks: number
    totalCurrentBalance: number
  } = await getAccounts({ userId: loggedIn.$id })

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6 max-sm:mx-auto max-sm:justify-center">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={a.id}
                  account={a}
                  userName={loggedIn?.firstName}
                  type="main"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks

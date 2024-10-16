# Horizon - Financial SaaS web platform

## Introduction

Powered by Next.js, Horizon is a comprehensive financial SaaS platform that links multiple bank accounts, offers real-time transaction tracking, enables seamless money transfers between users, and simplifies overall financial management.

## Teck Stack

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## Features

- **Authentication:** Features highly secure server-side authentication with robust validation and authorization protocols.

- **Bank Integration:** Utilizes Plaid for seamless linking of multiple bank accounts.

- **Dashboard:** Displays a comprehensive account overview, including total balance across connected banks, recent transactions, and spending categorized by type.

- **Bank Accounts:** Provides a detailed list of all connected banks, showing individual balances and account details.

- **Transaction History:** Offers advanced filtering and pagination options for viewing and managing transaction histories from different accounts.

- **Real-Time Syncing:** Automatically updates all relevant pages in real-time when new bank accounts are added.

- **Fund Transfers:** Facilitates transfers via Dwolla, requiring key details like recipient bank ID and necessary fields.

- **Responsive Design:** Optimized for various devices, ensuring smooth and consistent functionality on desktop, tablet, and mobile.

- **Additional Features:** Includes efficient code architecture and high reusability for easier maintenance and scalability.

## Installation

Install the project dependencies using npm:  
`npm install`

**Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:

```bash
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

#SENTRY
SENTRY_AUTH_TOKEN=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Appwrite, Plaid, Dwolla and Sentry

Running the Project  
``npm run dev``

Open ``http://localhost:3000`` with your browser to see the result.

## Credits and Attribution

This project was inspired and made with the great mentoring of [JavaScript Mastery](https://www.youtube.com/@javascriptmastery). The tutorial I followed can be found [here](https://www.youtube.com/watch?v=PuOVqP_cjkE).
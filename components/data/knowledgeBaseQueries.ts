export interface FAQQuery {
  id: string;
  category:
    | "AI & Statement Extraction"
    | "Privacy, Encryption & Hardware Security"
    | "Double-Entry Ledger & DAG Engine"
    | "Portfolio, Investments & Horizon Math"
    | "Data Portability, Recovery & Exports"
    | "Licensing, Payments & Transparency"
    | "Edge Cases, Multi-Asset & Troubleshooting";
  question: string;
  answer: string;
  badge?: string;
}

export const KNOWLEDGE_BASE_QUERIES: FAQQuery[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. AI & Statement Extraction (10 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "ai-01",
    category: "AI & Statement Extraction",
    badge: "100% OFFLINE",
    question: "Is any of my financial data or bank statement text sent to a remote AI server?",
    answer:
      "No. By default, Temporal uses an on-device AI pipeline powered by Google's Gemma 2B running locally on your phone (using LiteRT hardware acceleration). Your statements, transaction memos, and receipt photos are read, analyzed, and categorized right on your device. Your financial data never leaves your hand."
  },
  {
    id: "ai-02",
    category: "AI & Statement Extraction",
    badge: "FLIGHT MODE READY",
    question: "Can I scan receipts or import bank PDF statements without an internet connection?",
    answer:
      "Yes. You can scan receipts, import multi-page PDF statements, and auto-categorize your spending while completely offline (even in airplane mode). The neural parser operates 100% locally on your phone's processor."
  },
  {
    id: "ai-03",
    category: "AI & Statement Extraction",
    question: "What happens if my phone is older and cannot run the on-device AI model?",
    answer:
      "Temporal includes an intelligent CPU fallback that ensures stability on older hardware. Alternatively, you can opt to use your own private API key from cloud providers like Google Gemini, NVIDIA NIM, or OpenRouter. This is strictly opt-in and controlled entirely by you."
  },
  {
    id: "ai-04",
    category: "AI & Statement Extraction",
    question: "How are my third-party cloud API keys protected if I choose to use them?",
    answer:
      "If you choose to enter your own OpenRouter or Gemini API key, it is encrypted and saved directly into your device's hardware Secure Enclave. Temporal has no central server or database that could ever access, see, or transmit your keys."
  },
  {
    id: "ai-05",
    category: "AI & Statement Extraction",
    question: "Can Temporal handle password-protected bank PDF statements?",
    answer:
      "Yes. When importing a protected PDF (like standard monthly credit card or bank e-statements), Temporal prompts you for your statement password in memory only to unlock the text stream, parses the entries locally, and never stores your document password."
  },
  {
    id: "ai-06",
    category: "AI & Statement Extraction",
    question: "How does Temporal filter out bank disclaimers, advertisements, and page headers?",
    answer:
      "Our Layout Analyzer examines the visual structure of the document before passing it to the parser. It isolates table columns (Date, Description, Debit, Credit, Balance) and strips away legal boilerplate, reward ads, and branch addresses to guarantee clean transaction data."
  },
  {
    id: "ai-07",
    category: "AI & Statement Extraction",
    question: "Can I scan UPI payment screenshots from GPay, PhonePe, or Paytm?",
    answer:
      "Yes. The on-device vision pipeline automatically recognizes UPI reference IDs (UTR numbers), merchant names, timestamps, and amounts directly from screenshots and maps them into your designated bank account."
  },
  {
    id: "ai-08",
    category: "AI & Statement Extraction",
    question: "Does the AI support credit card statements with pending or unbilled authorizations?",
    answer:
      "Temporal specifically distinguishes settled charges from unbilled holds by analyzing settlement dates and transaction flags, preventing inflated spending reports."
  },
  {
    id: "ai-09",
    category: "AI & Statement Extraction",
    question: "How does Temporal categorize obscure bank descriptions (e.g., 'POS 49129034 HYD' or 'ACH DR')?",
    answer:
      "The on-device parser combines regular expression merchant entity cleaning with a local category association memory, converting raw POS terminal strings into clean merchant names (like 'Starbucks' or 'Utility Bill')."
  },
  {
    id: "ai-10",
    category: "AI & Statement Extraction",
    question: "Can I review and edit extracted transactions before they are saved to my ledger?",
    answer:
      "Always. Temporal presents an interactive staging review screen where you can adjust dates, amounts, categories, or delete unwanted line items with a single tap before committing to your database."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Privacy, Encryption & Hardware Security (10 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "sec-01",
    category: "Privacy, Encryption & Hardware Security",
    badge: "ZERO ACCOUNT",
    question: "Why doesn't Temporal ask me to create an account with an email or phone number?",
    answer:
      "We believe true privacy means zero data collection. You don't need a username, password, email, or phone number to use Temporal. You simply open the app, set your local PIN or Biometrics, and manage your finances independently."
  },
  {
    id: "sec-02",
    category: "Privacy, Encryption & Hardware Security",
    question: "How does the Biometric Lock (Fingerprint / Face ID) work on my device?",
    answer:
      "Temporal hooks directly into your phone's hardware security module (Android KeyStore / BiometricPrompt). When enabled, opening the app requires your fingerprint, Face ID, or master device PIN before the local SQLite database can be accessed."
  },
  {
    id: "sec-03",
    category: "Privacy, Encryption & Hardware Security",
    question: "What happens to my financial data when the app is minimized or closed?",
    answer:
      "Temporal immediately clears sensitive in-memory caches and re-engages the biometric lock the moment you switch apps or turn off your screen. The app does not maintain open read sessions in the background."
  },
  {
    id: "sec-04",
    category: "Privacy, Encryption & Hardware Security",
    question: "Where is my database stored, and can other apps on my phone read it?",
    answer:
      "Your ledger is stored in an encrypted SQLite database inside Temporal's sandboxed private app storage. Android's OS security prevents any other application or third-party tool from reading these private files."
  },
  {
    id: "sec-05",
    category: "Privacy, Encryption & Hardware Security",
    question: "Does Temporal communicate with any external servers in the background?",
    answer:
      "The only external network requests Temporal ever makes are public, anonymous market price lookups (fetching live Mutual Fund NAVs from AMFI, public stock quotes, and spot gold rates). No personal identifier, device ID, account balance, or transaction detail is ever sent."
  },
  {
    id: "sec-06",
    category: "Privacy, Encryption & Hardware Security",
    question: "Does Temporal read my SMS messages automatically?",
    answer:
      "No. Temporal does not request or require background SMS reading permissions. We avoid invasive SMS scraping in favor of secure, intentional PDF statement imports and on-demand receipt scanning."
  },
  {
    id: "sec-07",
    category: "Privacy, Encryption & Hardware Security",
    question: "What cryptographic algorithm is used to secure the database and exports?",
    answer:
      "All master backups and sensitive preference stores utilize standard AES-256-GCM encryption with cryptographic keys derived via PBKDF2/KeyStore hardware primitives."
  },
  {
    id: "sec-08",
    category: "Privacy, Encryption & Hardware Security",
    question: "Can Temporal's developers or customer support view my financial numbers?",
    answer:
      "Never. Because we run zero database servers and store zero user telemetry, we have zero technical ability to view, access, or intercept your balances or transactions."
  },
  {
    id: "sec-09",
    category: "Privacy, Encryption & Hardware Security",
    question: "What is the 'Nuclear Wipe' feature in Settings?",
    answer:
      "Nuclear Wipe is an instant, unrecoverable factory-reset trigger. It overwrites memory, purges all local SQLite tables, destroys hardware encryption keys, and returns the app to a fresh installation state."
  },
  {
    id: "sec-10",
    category: "Privacy, Encryption & Hardware Security",
    question: "Are document images or PDFs saved permanently in my gallery after scanning?",
    answer:
      "No. Uploaded statement buffers and camera photos are processed entirely in temporary memory and purged immediately after extraction to keep your phone gallery clean."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Double-Entry Ledger & DAG Engine (10 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "led-01",
    category: "Double-Entry Ledger & DAG Engine",
    badge: "DAG SOLVER",
    question: "How does Temporal prevent scrambled or duplicate entries when importing statements?",
    answer:
      "Temporal uses a smart balance-continuity solver called LedgerPathFinder. It evaluates candidate transactions like a puzzle, validating that every transaction mathematically aligns with your opening and closing balances. This automatically eliminates duplicates and fixes out-of-order rows."
  },
  {
    id: "led-02",
    category: "Double-Entry Ledger & DAG Engine",
    question: "What is the difference between an Account and a Vault?",
    answer:
      "An Account represents a real-world financial container (such as your HDFC Bank, ICICI Bank, Cash Wallet, or Credit Card). A Vault is a dedicated virtual envelope (e.g. Emergency Fund, Tax Provision, Vacation Savings) allowing you to allocate money toward goals without needing separate bank accounts."
  },
  {
    id: "led-03",
    category: "Double-Entry Ledger & DAG Engine",
    question: "How do transfers between my own accounts work without messing up income/expense reports?",
    answer:
      "When you transfer money from your Bank Account to your Cash Wallet, Temporal logs it as a double-entry balance adjustment. It updates both account totals simultaneously while properly excluding the transfer from your monthly spending and income charts."
  },
  {
    id: "led-04",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I customize spending categories and teach the app new merchant rules?",
    answer:
      "Yes. You can create custom categories with distinct colors and symbols. When you assign or change a merchant's category (e.g. marking 'Swiggy' as 'Dining'), Temporal remembers the rule and automatically applies it to future statements."
  },
  {
    id: "led-05",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Will the app slow down if I log tens of thousands of transactions over several years?",
    answer:
      "No. Temporal is built with high-performance list virtualization and a lightning-fast SQLite query engine. It handles 50,000+ transactions seamlessly at a fluid 60 frames per second with instant search."
  },
  {
    id: "led-06",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I manually adjust an account balance if I made an untracked cash expense?",
    answer:
      "Yes. You can perform a quick Balance Reconciliation at any time. Temporal will calculate the variance and allow you to log an adjustment entry with a custom note to keep your books balanced."
  },
  {
    id: "led-07",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Does Temporal support multi-currency accounts (e.g., USD, EUR, GBP, AED, INR)?",
    answer:
      "Yes. You can assign different native currencies to individual accounts and set your primary base display currency. Temporal handles conversions cleanly without corrupting the historical source transaction."
  },
  {
    id: "led-08",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I split a single transaction across multiple categories (e.g., Grocery + Home Decor)?",
    answer:
      "Yes. Temporal supports transaction splitting, allowing a ₹5,000 superstore bill to be divided accurately across Food, Household, and Personal Care categories."
  },
  {
    id: "led-09",
    category: "Double-Entry Ledger & DAG Engine",
    question: "How does Temporal track recurring monthly bills and subscriptions?",
    answer:
      "The transaction engine detects recurring merchant intervals (like Netflix, Spotify, or Gym memberships) and flags upcoming due dates with cash-flow runway projections."
  },
  {
    id: "led-10",
    category: "Double-Entry Ledger & DAG Engine",
    question: "What happens if I make a mistake and delete a transaction accidentally?",
    answer:
      "Temporal uses non-destructive soft-deletion states with instant undo toasts, allowing you to restore deleted items immediately without re-scanning statements."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Portfolio, Investments & Horizon Math (10 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "inv-01",
    category: "Portfolio, Investments & Horizon Math",
    badge: "LIVE TELEMETRY",
    question: "How are stock prices, Mutual Fund NAVs, and gold rates updated?",
    answer:
      "Temporal connects to trusted public financial data feeds (including AMFI for Indian Mutual Funds and Yahoo Finance for equities). Whenever you are connected to Wi-Fi or cellular data, one tap refreshes all your live portfolio valuations in seconds."
  },
  {
    id: "inv-02",
    category: "Portfolio, Investments & Horizon Math",
    question: "How does Temporal calculate my net worth if I have no internet access?",
    answer:
      "Temporal caches the last known market prices in your local database. When offline, your net worth is calculated instantaneously using these cached prices, meaning your total portfolio summary is always accessible anywhere."
  },
  {
    id: "inv-03",
    category: "Portfolio, Investments & Horizon Math",
    question: "What is XIRR and how does Temporal calculate my true investment return?",
    answer:
      "Unlike simple returns that ignore when you invested, XIRR (Extended Internal Rate of Return) accounts for the exact dates and amounts of every SIP or lump-sum deposit. Temporal uses an exact mathematical solver to show your annualized performance accurately."
  },
  {
    id: "inv-04",
    category: "Portfolio, Investments & Horizon Math",
    question: "How does Fixed Deposit (FD) interest tracking work?",
    answer:
      "Temporal dynamically calculates compound interest daily based on your deposit tenure, principal, and compounding frequency (quarterly/monthly). You always see your exact accrued interest in real-time without needing to manually update entries."
  },
  {
    id: "inv-05",
    category: "Portfolio, Investments & Horizon Math",
    question: "What is the Ledger Horizon projection feature?",
    answer:
      "Ledger Horizon is a forward-looking wealth simulation tool. It uses your historical savings rate, active SIP contributions, and conservative growth modeling to generate a dynamic horizon trajectory, showing when you'll reach key financial milestones."
  },
  {
    id: "inv-06",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I track physical 24K and 22K Gold and Silver holdings?",
    answer:
      "Yes. You can log physical gold and silver by weight (grams) and purchase price. Temporal automatically tracks the current live market spot price and shows your unrealized profit/loss and total asset value."
  },
  {
    id: "inv-07",
    category: "Portfolio, Investments & Horizon Math",
    question: "How does Temporal handle stock dividends and corporate splits?",
    answer:
      "You can record dividend income directly to any linked bank account without distorting stock purchase quantities, and adjust holding lots cleanly during stock splits or bonus share allocations."
  },
  {
    id: "inv-08",
    category: "Portfolio, Investments & Horizon Math",
    question: "Does Temporal support FIFO (First-In, First-Out) lot tracking for partial stock sales?",
    answer:
      "Yes. Our `holdingLots.repository` tracks individual purchase tranches, automatically calculating realized capital gains using standard FIFO matching when shares are sold."
  },
  {
    id: "inv-09",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I track Public Provident Fund (PPF) and Employee Provident Fund (EPF)?",
    answer:
      "Yes. Temporal includes specialized fixed-income models for PPF and EPF that track annual financial year contributions and compound at current government interest benchmarks."
  },
  {
    id: "inv-10",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I create custom stock and crypto watchlists?",
    answer:
      "Yes. Temporal includes a dedicated Watchlist manager where you can track prospective equities, indices, and currency pairs with live percentage delta indicators without owning them."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. Data Portability, Recovery & Exports (8 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "rec-01",
    category: "Data Portability, Recovery & Exports",
    badge: "RECOVERY KIT",
    question: "What is a Recovery Kit and why is it important?",
    answer:
      "Because Temporal stores zero data on remote servers, your Recovery Kit is your master encrypted backup file. It packages your entire database, settings, accounts, and history into a password-protected file that you can save to Google Drive, email to yourself, or keep on a USB drive."
  },
  {
    id: "rec-02",
    category: "Data Portability, Recovery & Exports",
    question: "What happens if I lose my phone or buy a new one?",
    answer:
      "Simply install Temporal on your new phone, choose 'Restore from Recovery Kit', select your backup file, and enter your master password. Your entire financial history, accounts, and portfolios will be restored instantly."
  },
  {
    id: "rec-03",
    category: "Data Portability, Recovery & Exports",
    question: "Can I export my financial data to Excel or Google Sheets?",
    answer:
      "Yes. Temporal provides clean, standard CSV and JSON exports with one tap. You can export your full transaction ledger, category summaries, or portfolio holdings to analyze in Excel or any spreadsheet tool."
  },
  {
    id: "rec-04",
    category: "Data Portability, Recovery & Exports",
    question: "Can I delete all my data permanently from the device?",
    answer:
      "Yes. Under Settings, the 'Nuclear Wipe' feature allows you to permanently erase the local SQLite database, encryption keys, and cached preferences with zero trace left behind."
  },
  {
    id: "rec-05",
    category: "Data Portability, Recovery & Exports",
    question: "Does Temporal support automatic background backups?",
    answer:
      "You can export a fresh encrypted backup anytime with a single tap. Because Temporal respects strict Android privacy sandboxing, backups are saved only to locations you explicitly authorize (such as your Downloads folder or preferred cloud storage)."
  },
  {
    id: "rec-06",
    category: "Data Portability, Recovery & Exports",
    question: "Are exported CSV files encrypted?",
    answer:
      "Standard CSV files exported for spreadsheet analysis are plain text for universal compatibility. For password-protected storage, always use the encrypted `.zenkit` Recovery Kit export option."
  },
  {
    id: "rec-07",
    category: "Data Portability, Recovery & Exports",
    question: "Can I import historical transactions from another budgeting app via CSV?",
    answer:
      "Yes. Temporal includes a universal CSV column mapper that allows you to map Date, Description, Category, and Amount columns from Mint, YNAB, Wallet, or any other finance app."
  },
  {
    id: "rec-08",
    category: "Data Portability, Recovery & Exports",
    question: "How large is the backup file typically?",
    answer:
      "Because SQLite stores relational data efficiently, a 5-year ledger with over 20,000 transactions and holdings typically compresses into an encrypted Recovery Kit under 3 MB in size."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Licensing, Payments & Transparency (6 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "pri-01",
    category: "Licensing, Payments & Transparency",
    badge: "NO SUBSCRIPTION",
    question: "Is ₹49 truly a lifetime one-time purchase, or will I be charged monthly?",
    answer:
      "₹49 is a lifetime, one-time payment. There are zero recurring subscriptions, zero monthly fees, and zero hidden paywalls. Once purchased, you own Temporal forever with access to all core features and offline AI."
  },
  {
    id: "pri-02",
    category: "Licensing, Payments & Transparency",
    question: "How does payment verification work without a cloud account?",
    answer:
      "When you purchase Temporal via Razorpay, a cryptographically signed license receipt is stored directly into your device's Secure Enclave. The app unlocks full access locally without ever requiring you to create an account or provide personal details."
  },
  {
    id: "pri-03",
    category: "Licensing, Payments & Transparency",
    question: "Does Temporal contain advertisements or third-party tracking scripts?",
    answer:
      "None. Temporal contains zero advertising networks, zero user tracking SDKs, and zero telemetry monitors. The app is completely ad-free and silent."
  },
  {
    id: "pri-04",
    category: "Licensing, Payments & Transparency",
    question: "What is your refund policy if the app doesn't fit my needs?",
    answer:
      "We offer a straightforward 7-day money-back guarantee. If Temporal does not meet your expectations, contact our support team with your payment reference ID, and we will issue a full refund promptly."
  },
  {
    id: "pri-05",
    category: "Licensing, Payments & Transparency",
    question: "Can I transfer my license if I upgrade to a new phone?",
    answer:
      "Yes. When you restore your encrypted Recovery Kit on your new phone, your embedded cryptographic license receipt is transferred automatically."
  },
  {
    id: "pri-06",
    category: "Licensing, Payments & Transparency",
    question: "Will future updates require paying extra upgrade fees?",
    answer:
      "No. All maintenance releases, UI enhancements, and core engine improvements are included in your lifetime license."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. Edge Cases, Multi-Asset & Troubleshooting (6 In-Depth Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "edge-01",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    badge: "ERROR RECOVERY",
    question: "What should I do if a bank statement PDF fails to parse?",
    answer:
      "Ensure the PDF is a true digital text e-statement (downloaded directly from your bank netbanking or email) rather than a low-resolution scanned photocopy. If it's protected, verify the PDF password when prompted. You can also edit any parsed line directly before committing."
  },
  {
    id: "edge-02",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "What happens if I forget my master Recovery Kit backup password?",
    answer:
      "Because the Recovery Kit is protected with strong AES cryptography and zero keys are stored on our servers, forgotten passwords cannot be recovered by anyone. We strongly recommend writing your backup password down in a secure password manager."
  },
  {
    id: "edge-03",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Why did a Mutual Fund NAV not update immediately over the weekend?",
    answer:
      "Mutual fund NAVs in India are published once per business day by AMFI after markets close (typically around 9 PM to 11 PM IST). On weekends and market holidays, AMFI does not publish new NAVs, so Temporal shows the last officially published Friday closing valuation."
  },
  {
    id: "edge-04",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Can I use Temporal on multiple devices simultaneously?",
    answer:
      "Because Temporal is 100% offline and air-gapped (no remote cloud sync database), each device holds its own independent local SQLite file. You can migrate or synchronize your ledger between devices anytime by generating and restoring a Recovery Kit."
  },
  {
    id: "edge-05",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "How do I fix a discrepancy between my physical bank balance and app balance?",
    answer:
      "Open the account in Temporal and select 'Reconcile Balance'. Enter your bank's actual closing figure, and the app will generate a single balancing journal entry with custom notes to keep reports accurate."
  },
  {
    id: "edge-06",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Does Temporal drain battery in the background?",
    answer:
      "No. Temporal does not run background daemons, location services, or continuous sync loops. When the app is not on your screen, it consumes 0% battery."
  }
];

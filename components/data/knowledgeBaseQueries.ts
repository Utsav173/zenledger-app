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
  // 1. AI & Statement Extraction (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "ai-01",
    category: "AI & Statement Extraction",
    badge: "100% OFFLINE",
    question: "Is any of my financial data or bank statement text sent to a remote AI server?",
    answer:
      "No. By default, Temporal operates an entirely air-gapped, on-device AI pipeline powered by Google Gemma (LiteRT hardware acceleration on device NPU/CPU). All bank e-statements, receipt scans, and transaction narrations are tokenized, parsed, and categorized locally within hardware-isolated memory. Zero bytes of your financial data ever leave your physical device."
  },
  {
    id: "ai-02",
    category: "AI & Statement Extraction",
    badge: "FLIGHT MODE READY",
    question: "Can I scan receipts or import bank PDF statements without an internet connection?",
    answer:
      "Yes. You can import multi-page PDF statements, scan physical camera receipts, and auto-categorize historical transactions in complete airplane mode. Both the System 1 symbolic algorithms (SpatialLattice KDE, Viterbi solver) and System 2 neural extractors (LiteRT Gemma) run offline directly on device silicon."
  },
  {
    id: "ai-03",
    category: "AI & Statement Extraction",
    question: "What happens if my phone is older and cannot run the on-device AI model?",
    answer:
      "Temporal features a dual-system architecture. System 1 (SpatialLattice 1D Gaussian KDE, Viterbi Trellis DP, and Diophantine subset-sum solver) runs with ultra-low latency (<35ms) on any standard ARM/x86 CPU without requiring a neural accelerator. Additionally, you can optionally connect private API keys for Google Gemini, NVIDIA NIM, or OpenRouter via a secure BYOK bridge."
  },
  {
    id: "ai-04",
    category: "AI & Statement Extraction",
    question: "How are my third-party cloud API keys protected if I choose to use them?",
    answer:
      "If you configure an optional OpenRouter or Gemini API key, it is encrypted and saved directly into your device's hardware Secure Enclave via Android KeyStore / iOS Keychain. Temporal has no central telemetry servers, intermediate proxies, or logging pipelines that could ever access or intercept your credentials."
  },
  {
    id: "ai-05",
    category: "AI & Statement Extraction",
    question: "Can Temporal handle password-protected bank PDF statements?",
    answer:
      "Yes. When importing a password-protected PDF (such as monthly bank or credit card e-statements), Temporal prompts for the password in transient memory only. The file text stream is decrypted and tokenized in RAM, and the password is automatically destroyed immediately after parsing without ever being written to persistent storage."
  },
  {
    id: "ai-06",
    category: "AI & Statement Extraction",
    badge: "SPATIALLATTICE",
    question: "How does Temporal filter out bank disclaimers, advertisements, and page headers?",
    answer:
      "Temporal uses SpatialLattice—a 2D anisotropic proximity graph combined with 1D Gaussian Kernel Density Estimation (KDE, σ = 10pt)—to dynamically discover table column gutters without brittle regex. Multi-page Redundant Spatial Information (RSI) lattice reconciliation snaps drifted column boundaries across pages, isolating table data while stripping legal notices, reward ads, and branch addresses."
  },
  {
    id: "ai-07",
    category: "AI & Statement Extraction",
    question: "Can I scan UPI payment screenshots from GPay, PhonePe, or Paytm?",
    answer:
      "Yes. The on-device vision pipeline automatically extracts UPI reference IDs (UTR numbers), counterparty names, timestamps, and payment amounts directly from transaction screenshots, mapping them cleanly to your selected bank vault."
  },
  {
    id: "ai-08",
    category: "AI & Statement Extraction",
    question: "Does the AI support credit card statements with pending or unbilled authorizations?",
    answer:
      "Yes. Temporal analyzes statement posting dates, authorization markers, and settlement flags, strictly isolating settled balance line items from unbilled holds or pending authorizations to prevent distorted spending analytics."
  },
  {
    id: "ai-09",
    category: "AI & Statement Extraction",
    badge: "ENTROPY PEELING",
    question: "How does Temporal categorize obscure bank descriptions (e.g., 'POS 49129034 HYD' or 'ACH DR')?",
    answer:
      "The engine uses an InformationEntropyDecomposer to calculate Shannon token entropy H(X), automatically stripping transit protocol noise (UPI, IMPS, NEFT, BBPS, POS, Razorpay, NACH) and transit hashes. It then queries the local MerchantMemoryGraph counterparty cache and on-device BayesianLearner (Multinomial Naive Bayes MAP) to resolve clean counterparty names (e.g. 'Starbucks' or 'Swiggy') and assign categories with mathematical confidence."
  },
  {
    id: "ai-10",
    category: "AI & Statement Extraction",
    question: "Can I review and edit extracted transactions before they are saved to my ledger?",
    answer:
      "Always. Temporal provides a micro-diff audit staging console before any transaction is committed to the database. You can review, split, re-categorize, adjust dates, or delete candidate rows with full visibility into the balance reconciliation proof."
  },
  {
    id: "ai-11",
    category: "AI & Statement Extraction",
    badge: "MATH_LOCK",
    question: "What is the [MATH_LOCK] badge on extracted transactions?",
    answer:
      "The [MATH_LOCK] badge is an immutable cryptographic verification flag stamped on transactions that have been mathematically validated by the ViterbiBalanceSolver. When balance continuity (Balance[t] = Balance[t-1] ± Amount[t]) is proven to within 5 cents/paise, the row is locked against LLM mutations, hallucinations, or automatic category overrides."
  },
  {
    id: "ai-12",
    category: "AI & Statement Extraction",
    badge: "GAUSSIAN KDE",
    question: "How does 1D Gaussian Kernel Density Estimation (KDE) detect statement columns without regex?",
    answer:
      "Traditional parsers rely on hardcoded regex that breaks whenever a bank modifies its layout. SpatialLattice accumulates token bounding boxes across the horizontal axis using a 1D Gaussian kernel: Density(x) = Σ [exp(-(x - x_left)² / 2σ²) + 0.5 · exp(-(x - x_center)² / 2σ²)]. Density peaks identify column centers, while density valleys define column gutters with zero bank-specific configuration."
  },
  {
    id: "ai-13",
    category: "AI & Statement Extraction",
    badge: "TRANSIT RAIL PEELING",
    question: "Why doesn't Temporal misclassify merchant UPI payments as transfers?",
    answer:
      "Many finance apps mistakenly label merchant transactions as 'cat_transfer' simply because rail protocols like 'UPI', 'IMPS', or 'NEFT' appear in the bank narration. Temporal enforces the Transit Rail Peeling Invariant: transit protocols are peeled as transport layers, reserving 'cat_transfer' strictly for self-account sweeps or verified P2P transfers."
  },
  {
    id: "ai-14",
    category: "AI & Statement Extraction",
    question: "Which quantized LLM models are supported on-device, and what are their hardware footprints?",
    answer:
      "Temporal supports Google Gemma 2B (INT4, ~1.4GB RAM), Gemma 3 1B (~900MB RAM), and Qwen 2.5 1.5B via react-native-litert-lm. Models execute directly on device NPUs or quantized multi-threaded CPU backends, maintaining complete isolation from remote sockets."
  },
  {
    id: "ai-15",
    category: "AI & Statement Extraction",
    badge: "BAYESIAN MAP",
    question: "How does continuous Bayesian learning work on-device without cloud training?",
    answer:
      "Whenever you manually assign or correct a transaction category, BayesianLearner updates an encrypted SQLite vocabulary token frequency matrix. It calculates Maximum A Posteriori (MAP) log-likelihood probabilities across narration tokens, continuously adapting to your personalized spending habits without retraining a neural network."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Privacy, Encryption & Hardware Security (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "sec-01",
    category: "Privacy, Encryption & Hardware Security",
    badge: "ZERO ACCOUNT",
    question: "Why doesn't Temporal ask me to create an account with an email or phone number?",
    answer:
      "True privacy requires architectural elimination of centralized identities. Temporal has no user database, no sign-up forms, and no cloud authentication. You simply launch the app, initialize your local hardware vault, and manage your sovereign wealth independently."
  },
  {
    id: "sec-02",
    category: "Privacy, Encryption & Hardware Security",
    question: "How does the Biometric Lock (Fingerprint / Face ID) work on my device?",
    answer:
      "Temporal interfaces directly with your device's hardware security module (Android KeyStore / iOS Secure Enclave). When enabled, access to the encrypted SQLite database requires valid biometric authentication or device master PIN before decryption keys are unsealed in memory."
  },
  {
    id: "sec-03",
    category: "Privacy, Encryption & Hardware Security",
    question: "What happens to my financial data when the app is minimized or closed?",
    answer:
      "Temporal automatically purges sensitive in-memory decrypted buffers and locks the database context immediately upon application backgrounding or screen lock. Background read sessions and telemetry handles are never maintained."
  },
  {
    id: "sec-04",
    category: "Privacy, Encryption & Hardware Security",
    question: "Where is my database stored, and can other apps on my phone read it?",
    answer:
      "Your ledger is stored in `zenledger.db` within the operating system's sandboxed private app storage. OS-level sandboxing, SELinux enforcement, and SQLite WAL encryption prevent third-party applications from reading or accessing these files."
  },
  {
    id: "sec-05",
    category: "Privacy, Encryption & Hardware Security",
    question: "Does Temporal communicate with any external servers in the background?",
    answer:
      "The only outbound requests Temporal ever makes are anonymous, public market data queries (AMFI NAV daily feed for mutual funds, Cloudflare Worker cached Yahoo quotes for stocks, and spot gold bullion feeds). No personal identifiers, balances, device serials, or transactions are ever transmitted."
  },
  {
    id: "sec-06",
    category: "Privacy, Encryption & Hardware Security",
    question: "Does Temporal read my SMS messages automatically?",
    answer:
      "No. Temporal intentionally avoids SMS scraping permissions, which pose severe security and privacy risks. Instead, we use structured PDF statement imports, receipt scans, and clean CSV imports to capture complete, verified financial histories."
  },
  {
    id: "sec-07",
    category: "Privacy, Encryption & Hardware Security",
    badge: "AES-256-GCM",
    question: "What cryptographic algorithm is used to secure the database and exports?",
    answer:
      "All master backups, secure preferences, and recovery kits use military-grade AES-256-GCM encryption with 128-bit authentication tags, 96-bit random initialization vectors (IV), and PBKDF2-SHA256 key derivation with 600,000 hashing rounds."
  },
  {
    id: "sec-08",
    category: "Privacy, Encryption & Hardware Security",
    question: "Can Temporal developers or customer support view my financial numbers?",
    answer:
      "Never. Because we run zero central servers, zero cloud databases, and zero telemetry collection, we have zero architectural capability to view, access, or restore your financial records."
  },
  {
    id: "sec-09",
    category: "Privacy, Encryption & Hardware Security",
    question: "What is the 'Nuclear Wipe' feature in Settings?",
    answer:
      "Nuclear Wipe is an irrevocable cryptographic sanitization routine. It overwrites transient memory, drops all 13 SQLite tables, invalidates hardware encryption keys, and resets the application to an uninitialized state."
  },
  {
    id: "sec-10",
    category: "Privacy, Encryption & Hardware Security",
    question: "Are document images or PDFs saved permanently in my gallery after scanning?",
    answer:
      "No. Uploaded PDF byte streams and camera OCR captures are processed exclusively in volatile memory and purged immediately after transaction extraction. No temporary image or PDF artifacts remain in your device storage."
  },
  {
    id: "sec-11",
    category: "Privacy, Encryption & Hardware Security",
    badge: "FIXED-POINT MATH",
    question: "How does Temporal eliminate floating-point rounding errors across portfolio balances?",
    answer:
      "IEEE 754 floating-point numbers inherently suffer from binary rounding drift (e.g. 0.1 + 0.2 = 0.30000000000000004). Temporal enforces strict Fixed-Point Unit Scaling: all fiat currency amounts are stored as 100× scaled 64-bit integers (cents/paise), and all asset quantities are stored as 10,000× scaled integers (4 decimal places). Consideration formula: amountCents = Math.round((scaledQuantity * pricePerUnitCents) / 10000)."
  },
  {
    id: "sec-12",
    category: "Privacy, Encryption & Hardware Security",
    badge: "RECOVERY ENVELOPE",
    question: "What is the exact specification of the AES-256-GCM recovery envelope?",
    answer:
      "The recovery envelope stores the entire 13-table SQLite schema in an encrypted JSON payload. Key derivation uses PBKDF2 with HMAC-SHA256, 600,000 iterations, and a 32-byte cryptographically secure salt. The ciphertext is sealed with AES-256-GCM and verified with an authentication tag before database reconstruction."
  },
  {
    id: "sec-13",
    category: "Privacy, Encryption & Hardware Security",
    question: "Are network sockets completely blocked when running in air-gapped mode?",
    answer:
      "Yes. In air-gapped mode, all outbound HTTP/WebSocket requests are completely disabled at the engine level. No crashlytics, telemetry beacons, or analytics daemons exist in the codebase to leak metadata."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Double-Entry Ledger & DAG Engine (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "led-01",
    category: "Double-Entry Ledger & DAG Engine",
    badge: "VITERBI SOLVER",
    question: "How does Temporal prevent scrambled or duplicate entries when importing statements?",
    answer:
      "Temporal uses the ViterbiBalanceSolver—a Trellis Dynamic Programming and branch-and-bound subset-sum Diophantine solver. It enforces balance continuity (Balance[t] = Balance[t-1] ± Amount[t]) in integer paise/cents across multi-hop transactions. Verified continuous rows are stamped with an immutable [MATH_LOCK] badge, eliminating hallucinations, duplicate lines, and out-of-order rows without relying on probabilistic LLM guessing."
  },
  {
    id: "led-02",
    category: "Double-Entry Ledger & DAG Engine",
    question: "What is the difference between an Account and a Vault?",
    answer:
      "An Account corresponds to a physical financial institution (e.g. HDFC Bank, ICICI Bank, Zerodha, Physical Cash, Credit Card). A Vault is a sovereign sub-allocation container (e.g. Tax Reserve, Emergency Runway, Capital Expenditure) that lets you partition capital virtually without opening redundant bank accounts."
  },
  {
    id: "led-03",
    category: "Double-Entry Ledger & DAG Engine",
    question: "How do transfers between my own accounts work without messing up income/expense reports?",
    answer:
      "Internal sweeps between self-owned accounts are tagged with the protected 'cat_transfer' category. Both accounts are updated simultaneously in a balanced double-entry transaction, ensuring overall net worth is preserved while excluding the transfer from monthly income or operational expense totals."
  },
  {
    id: "led-04",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I customize spending categories and teach the app new merchant rules?",
    answer:
      "Yes. You can manage a hierarchy of custom categories with custom icons, color tokens, and budget thresholds. When you categorize a merchant, BayesianLearner and MerchantMemoryGraph record the normalized entity fingerprint to automatically categorize subsequent encounters."
  },
  {
    id: "led-05",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Will the app slow down if I log tens of thousands of transactions over several years?",
    answer:
      "No. Temporal is architected with @legendapp/list 60fps native list virtualization and SQLite indexed queries. It effortlessly navigates 100,000+ historical entries with sub-16ms frame render times and instantaneous search."
  },
  {
    id: "led-06",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I manually adjust an account balance if I made an untracked cash expense?",
    answer:
      "Yes. You can perform a Balance Reconciliation audit at any time. Temporal computes the exact variance delta and logs an audited reconciliation journal entry with custom notes to keep balance continuity intact."
  },
  {
    id: "led-07",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Does Temporal support multi-currency accounts (e.g., USD, EUR, GBP, AED, INR)?",
    answer:
      "Yes. Each vault can hold its native ISO currency (e.g. USD, EUR, INR). Transactions maintain their native integer amounts, while aggregate dashboards convert values using active exchange telemetry without overwriting historical source figures."
  },
  {
    id: "led-08",
    category: "Double-Entry Ledger & DAG Engine",
    question: "Can I split a single transaction across multiple categories (e.g., Grocery + Home Decor)?",
    answer:
      "Yes. Temporal supports multi-split transactions. A ₹10,000 supermarket charge can be divided across Groceries, Electronics, and Household Supplies while maintaining a single balancing entry in your account ledger."
  },
  {
    id: "led-09",
    category: "Double-Entry Ledger & DAG Engine",
    question: "How does Temporal track recurring monthly bills and subscriptions?",
    answer:
      "The engine detects recurring intervals across counterparties and dates, projecting upcoming fixed commitments and computing your net unencumbered cash-flow runway."
  },
  {
    id: "led-10",
    category: "Double-Entry Ledger & DAG Engine",
    question: "What happens if I make a mistake and delete a transaction accidentally?",
    answer:
      "Temporal utilizes soft-deletion architecture with immediate undo toasts. Deleted rows can be restored instantaneously without needing to re-import original bank statement documents."
  },
  {
    id: "led-11",
    category: "Double-Entry Ledger & DAG Engine",
    badge: "DIOPHANTINE SOLVER",
    question: "How does the Diophantine subset-sum solver reconcile batch transactions with missing balances?",
    answer:
      "When banks batch several transactions together on a single day without publishing intermediate closing balances, the Viterbi solver formulates a subset-sum Diophantine problem: find a sign vector s ∈ {-1, +1}^m such that |Σ (s_k · A_k) - (B_end - B_start)| ≤ ε (5 cents). A branch-and-bound algorithm prunes invalid combinations in milliseconds to restore absolute balance continuity."
  },
  {
    id: "led-12",
    category: "Double-Entry Ledger & DAG Engine",
    question: "How does Temporal heal multi-hop balance gaps caused by unlisted bank charges?",
    answer:
      "Banks occasionally levy quarterly maintenance or SMS alert fees that appear as balance drops without itemized rows. The Viterbi solver checks 1-hop and 2-hop jump continuity: |(B_curr - B_prev) - (A_curr + A_anchor)| ≤ ε, automatically identifying omitted fee charges and alerting you to confirm the variance."
  },
  {
    id: "led-13",
    category: "Double-Entry Ledger & DAG Engine",
    badge: "SQLITE WAL",
    question: "What SQLite configuration ensures database durability and zero corruption?",
    answer:
      "Temporal runs SQLite in Write-Ahead Logging mode (`PRAGMA journal_mode = 'wal'`), with `PRAGMA synchronous = NORMAL`, and `PRAGMA foreign_keys = ON`. A Self-Healing Schema Guard verifies column integrity on initialization, running non-destructive migrations automatically."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Portfolio, Investments & Horizon Math (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "inv-01",
    category: "Portfolio, Investments & Horizon Math",
    badge: "LIVE TELEMETRY",
    question: "How are stock prices, Mutual Fund NAVs, and gold rates updated?",
    answer:
      "Temporal connects directly to keyless public financial feeds: AMFI for 44,000+ Indian Mutual Fund schemes, Yahoo Finance via an edge-cached Cloudflare Worker for NSE/BSE equities, and CoinGecko PAXG Spot Gold bullion rates. A single tap refreshes your entire multi-asset net worth in seconds."
  },
  {
    id: "inv-02",
    category: "Portfolio, Investments & Horizon Math",
    question: "How does Temporal calculate my net worth if I have no internet access?",
    answer:
      "All recent market valuations, purchase tranches, and unit quantities are persisted in encrypted local SQLite tables. When offline, your total net worth and asset allocations are computed instantaneously using cached market data."
  },
  {
    id: "inv-03",
    category: "Portfolio, Investments & Horizon Math",
    badge: "XIRR SOLVER",
    question: "What is XIRR and how does Temporal calculate my true investment return?",
    answer:
      "Simple point-to-point returns fail to account for cash flow timing. Temporal computes Extended Internal Rate of Return (XIRR) using the Newton-Raphson numerical method with a 10⁻⁷ convergence limit and [-0.99, 100.0] boundary guards, accurately calculating annualized performance across irregular SIPs, dividend payouts, and lump sums."
  },
  {
    id: "inv-04",
    category: "Portfolio, Investments & Horizon Math",
    question: "How does Fixed Deposit (FD) interest tracking work?",
    answer:
      "Temporal features an FD compounding engine that accrues interest daily based on principal, tenure, and compounding frequency (monthly, quarterly, or cumulative). You always see your exact accrued interest and maturity value in real-time."
  },
  {
    id: "inv-05",
    category: "Portfolio, Investments & Horizon Math",
    question: "What is the Ledger Horizon projection feature?",
    answer:
      "Ledger Horizon is a forward-looking wealth trajectory engine. Combining historical savings rates, recurring SIP commitments, and Monte Carlo conservative growth distributions, it projects wealth accumulation milestones over 1-year to 30-year horizons."
  },
  {
    id: "inv-06",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I track physical 24K and 22K Gold and Silver holdings?",
    answer:
      "Yes. You can log physical gold and silver in grams along with purchase costs. Temporal tracks spot bullion telemetry, showing your current liquidation value and unrealized capital gain."
  },
  {
    id: "inv-07",
    category: "Portfolio, Investments & Horizon Math",
    badge: "SPLIT INVARIANT",
    question: "How does Temporal handle stock splits and bonus issues without distorting my portfolio?",
    answer:
      "Temporal enforces the Corporate Action Invariant: stock splits and bonus issues adjust the remainingQuantity and pricePerUnit of unconsumed tranches using adjustment factor F, but MUST NEVER alter totalInvested (cost basis). Your historical capital basis remains mathematically pristine for tax reporting."
  },
  {
    id: "inv-08",
    category: "Portfolio, Investments & Horizon Math",
    badge: "FIFO MATCHING",
    question: "Does Temporal support FIFO (First-In, First-Out) lot tracking for partial stock sales?",
    answer:
      "Yes. When you execute a sell order, the FIFO engine depletes buy lots chronologically (`ORDER BY date ASC, _creationTime ASC`). Realized short-term and long-term capital gains are computed tranche-by-tranche using integer-scaled unit pricing."
  },
  {
    id: "inv-09",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I track Public Provident Fund (PPF) and Employee Provident Fund (EPF)?",
    answer:
      "Yes. Temporal models PPF and EPF fixed-income instruments with annual contribution benchmarks, calculating statutory compounding schedules based on active government rate notices."
  },
  {
    id: "inv-10",
    category: "Portfolio, Investments & Horizon Math",
    question: "Can I create custom stock and crypto watchlists?",
    answer:
      "Yes. Temporal includes an integrated Watchlist engine allowing you to monitor prospective equities, ETFs, and commodity tokens with real-time percentage delta indicators before taking a position."
  },
  {
    id: "inv-11",
    category: "Portfolio, Investments & Horizon Math",
    badge: "HHI TELEMETRY",
    question: "How does Temporal measure portfolio risk and asset concentration?",
    answer:
      "Temporal calculates the Herfindahl-Hirschman Index (HHI) to quantify portfolio concentration risk, alongside Pareto 80/20 distribution metrics and asset class diversification curves across equities, mutual funds, gold, fixed deposits, and liquid cash."
  },
  {
    id: "inv-12",
    category: "Portfolio, Investments & Horizon Math",
    question: "How is AMFI mutual fund telemetry ingested without third-party API rate limits?",
    answer:
      "Temporal connects directly to the Association of Mutual Funds in India (AMFI) keyless daily NAV master feed. Over 44,000+ mutual fund schemes are indexed locally by ISIN and Scheme Code, bypassing commercial broker paywalls and third-party rate limits."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. Data Portability, Recovery & Exports (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "rec-01",
    category: "Data Portability, Recovery & Exports",
    badge: "RECOVERY KIT",
    question: "What is a Recovery Kit and why is it important?",
    answer:
      "Because Temporal stores zero data on remote cloud servers, your Recovery Kit (`.zenkit`) is your master encrypted backup envelope. It packages all 13 SQLite tables, accounts, categories, and investment lots into an AES-256-GCM authenticated archive sealed with your master password."
  },
  {
    id: "rec-02",
    category: "Data Portability, Recovery & Exports",
    question: "What happens if I lose my phone or buy a new one?",
    answer:
      "Install Temporal on your new phone, select 'Restore from Recovery Kit', choose your `.zenkit` backup file, and provide your master passphrase. Your entire historical ledger, asset registries, and custom rules will be restored in seconds."
  },
  {
    id: "rec-03",
    category: "Data Portability, Recovery & Exports",
    question: "Can I export my financial data to Excel or Google Sheets?",
    answer:
      "Yes. Temporal provides unencrypted CSV exports with RFC 4180 compliance for easy import into Microsoft Excel, Google Sheets, or ledger CLI tools. You can export complete transactions, account journals, or holding summaries."
  },
  {
    id: "rec-04",
    category: "Data Portability, Recovery & Exports",
    question: "Can I delete all my data permanently from the device?",
    answer:
      "Yes. The Nuclear Wipe feature in Settings completely purges the local SQLite database, destroys hardware keystore salts, and resets the app storage to 0 bytes."
  },
  {
    id: "rec-05",
    category: "Data Portability, Recovery & Exports",
    question: "Does Temporal support automatic background backups?",
    answer:
      "Temporal does not run background telemetry daemons that secretly ship files. Instead, you can trigger an authenticated backup snapshot anytime with a single tap to your device storage or personal cloud drive."
  },
  {
    id: "rec-06",
    category: "Data Portability, Recovery & Exports",
    question: "Are exported CSV files encrypted?",
    answer:
      "Standard CSV exports are plaintext files designed for external spreadsheet software. For encrypted off-site archiving, always use the authenticated `.zenkit` Recovery Kit export option."
  },
  {
    id: "rec-07",
    category: "Data Portability, Recovery & Exports",
    question: "Can I import historical transactions from another budgeting app via CSV?",
    answer:
      "Yes. Temporal provides a Delimiter Entropy Detector and RFC 4180 CSV parser that automatically identifies separators (comma, semicolon, tab) and maps Date, Amount, Description, and Category columns from other financial tools."
  },
  {
    id: "rec-08",
    category: "Data Portability, Recovery & Exports",
    question: "How large is the backup file typically?",
    answer:
      "Because SQLite stores relational data compactly, a 5-year ledger with over 20,000 transactions and holdings typically compresses into an encrypted Recovery Kit under 3 MB in size."
  },
  {
    id: "rec-09",
    category: "Data Portability, Recovery & Exports",
    badge: "UNIVERSAL SCHEMA",
    question: "Can I migrate my Temporal data between Android, iOS, Desktop, and Web?",
    answer:
      "Yes. Temporal's SQLite database schema adheres to the Universal Portability Specification documented in our technical architecture. The `.zenkit` archive can be decrypted and restored across React Native, Tauri/Electron desktop, or Next.js OPFS WASM runtimes without schema incompatibility."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Licensing, Payments & Transparency (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "pri-01",
    category: "Licensing, Payments & Transparency",
    badge: "LIFETIME LICENSE",
    question: "Is ₹49 truly a lifetime one-time purchase, or will I be charged monthly?",
    answer:
      "₹49 is an absolute lifetime one-time purchase. There are zero subscriptions, zero recurring monthly charges, and zero locked features. Once unlocked, you own Temporal permanently with full access to on-device AI and portfolio engines."
  },
  {
    id: "pri-02",
    category: "Licensing, Payments & Transparency",
    question: "How does payment verification work without a cloud account?",
    answer:
      "Upon purchasing your license via Razorpay or Stripe, a cryptographically signed license receipt is written into your device's hardware Secure Enclave. The app unlocks Pro entitlements locally without ever requiring personal registration."
  },
  {
    id: "pri-03",
    category: "Licensing, Payments & Transparency",
    question: "Does Temporal contain advertisements or third-party tracking scripts?",
    answer:
      "Zero. Temporal contains no advertising SDKs, no behavioral tracking frameworks, and no telemetry monitors. The application code is clean, silent, and strictly utilitarian."
  },
  {
    id: "pri-04",
    category: "Licensing, Payments & Transparency",
    question: "What is your refund policy if the app doesn't fit my needs?",
    answer:
      "We provide an unconditional 7-day money-back guarantee. If Temporal does not satisfy your requirements, contact our support team with your payment reference ID for an immediate full refund."
  },
  {
    id: "pri-05",
    category: "Licensing, Payments & Transparency",
    question: "Can I transfer my license if I upgrade to a new phone?",
    answer:
      "Yes. When you restore your encrypted Recovery Kit on your new device, your embedded cryptographic license receipt is transferred and verified automatically."
  },
  {
    id: "pri-06",
    category: "Licensing, Payments & Transparency",
    question: "Will future updates require paying extra upgrade fees?",
    answer:
      "No. All future feature additions, engine refinements, and platform updates are included with your original lifetime license."
  },
  {
    id: "pri-07",
    category: "Licensing, Payments & Transparency",
    badge: "ZERO DRM",
    question: "Does the lifetime license require online DRM check-ins or internet pings?",
    answer:
      "No. Temporal has zero online DRM heartbeats. The license validation is self-contained and verified locally via public-key cryptography inside the app bundle, so your Pro entitlements function permanently even with zero internet connectivity."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. Edge Cases, Multi-Asset & Troubleshooting (Refined + Expanded)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "edge-01",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    badge: "ERROR RECOVERY",
    question: "What should I do if a bank statement PDF fails to parse?",
    answer:
      "Ensure the PDF is a digital text statement rather than a low-resolution photo scan. If it is password-protected, verify the password when prompted. You can also view the raw spatial debug lattice in the staging console to inspect extracted line items before committing."
  },
  {
    id: "edge-02",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "What happens if I forget my master Recovery Kit backup password?",
    answer:
      "Because the Recovery Kit is sealed with AES-256-GCM using PBKDF2-SHA256 (600,000 rounds) and no recovery backdoor exists on any server, forgotten backup passwords cannot be recovered by anyone. We strongly advise recording your passphrase in a secure password vault."
  },
  {
    id: "edge-03",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Why did a Mutual Fund NAV not update immediately over the weekend?",
    answer:
      "Mutual fund NAVs in India are published once per business day by AMFI following market close (typically between 9:00 PM and 11:00 PM IST). Over weekends and market holidays, AMFI does not issue updates, so Temporal displays the verified Friday closing NAV."
  },
  {
    id: "edge-04",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Can I use Temporal on multiple devices simultaneously?",
    answer:
      "Because Temporal is 100% air-gapped and local-first without a centralized sync server, each device maintains its own sovereign SQLite database. You can synchronize your ledger between devices anytime by generating and restoring a `.zenkit` Recovery Kit."
  },
  {
    id: "edge-05",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "How do I fix a discrepancy between my physical bank balance and app balance?",
    answer:
      "Open the account vault and tap 'Reconcile Balance'. Enter your actual bank statement balance, and the reconciliation engine will calculate the variance and log a balanced journal entry with custom audit notes."
  },
  {
    id: "edge-06",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    question: "Does Temporal drain battery in the background?",
    answer:
      "Zero battery impact. Temporal runs no background daemons, location polling, or periodic sync tasks. When the application is closed or minimized, its CPU and battery consumption is 0%."
  },
  {
    id: "edge-07",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    badge: "SYMBOL SWAP",
    question: "How does Temporal handle stocks that trade on both NSE and BSE?",
    answer:
      "Temporal incorporates self-healing market symbol swapping (NSE ↔ BSE). If an equity quote is unavailable or halted on one exchange, the engine automatically checks the corresponding secondary ticker on the alternate exchange to maintain uninterrupted portfolio valuations."
  },
  {
    id: "edge-08",
    category: "Edge Cases, Multi-Asset & Troubleshooting",
    badge: "STANDALONE APK",
    question: "Can I run Temporal on rooted Android devices or custom AOSP ROMs without Google Play Services?",
    answer:
      "Yes. Temporal does not depend on proprietary Google Play Services frameworks. Both SQLite storage and LiteRT local neural inference execute self-contained within the application binary, allowing flawless operation on de-Googled ROMs (GrapheneOS, CalyxOS, LineageOS)."
  }
];

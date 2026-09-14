"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HoldingItem {
  symbol: string;
  name: string;
  units: string;
  avgPrice: string;
  currentPrice: string;
  currentValue: string;
  returnPct: string;
  isPositive: boolean;
}

interface AssetClass {
  id: string;
  name: string;
  tag: string;
  telemetrySource: string;
  description: string;
  accentColor: string;
  metric: string;
  metricLabel: string;
  features: string[];
  sampleHoldings: HoldingItem[];
  stats: {
    totalValue: string;
    totalReturn: string;
    xirr: string;
    riskProfile: string;
  };
}

const ASSET_CLASSES: AssetClass[] = [
  {
    id: "stocks",
    name: "Equities & Stocks",
    tag: "NSE / BSE / NASDAQ",
    telemetrySource: "LIVE YAHOO TELEMETRY",
    description:
      "Precision tracking for domestic and international stocks. Dynamic multi-currency valuation, dividend logging, realized/unrealized P&L, and weighted portfolio beta calculations.",
    accentColor: "border-sky-500/40 text-sky-400 bg-sky-500/5",
    metric: "LIVE T+0",
    metricLabel: "MARKET STREAM",
    features: [
      "Dynamic multi-currency FX conversion (USD/INR/EUR)",
      "Automated stock split & dividend bookkeeping",
      "Instant real-time XIRR / CAGR recalculation",
      "Dedicated custom Watchlist monitoring",
    ],
    stats: {
      totalValue: "₹24,85,420.00",
      totalReturn: "+₹5,42,100 (+27.8%)",
      xirr: "+19.42%",
      riskProfile: "MODERATE_HIGH",
    },
    sampleHoldings: [
      {
        symbol: "HDFCBANK.NS",
        name: "HDFC Bank Ltd",
        units: "250",
        avgPrice: "₹1,490.00",
        currentPrice: "₹1,720.50",
        currentValue: "₹4,30,125.00",
        returnPct: "+15.47%",
        isPositive: true,
      },
      {
        symbol: "RELIANCE.NS",
        name: "Reliance Industries",
        units: "120",
        avgPrice: "₹2,420.00",
        currentPrice: "₹2,980.00",
        currentValue: "₹3,57,600.00",
        returnPct: "+23.14%",
        isPositive: true,
      },
      {
        symbol: "NVDA",
        name: "NVIDIA Corp (USD)",
        units: "45",
        avgPrice: "$108.50",
        currentPrice: "$134.20",
        currentValue: "$6,039.00",
        returnPct: "+23.68%",
        isPositive: true,
      },
    ],
  },
  {
    id: "mutual_funds",
    name: "Mutual Funds",
    tag: "AMFI OFFICIAL STREAM",
    telemetrySource: "DIRECT AMFI DAILY NAV",
    description:
      "Direct ingestion of AMFI daily Net Asset Values. Track SIP schedules, lump-sum investments, asset allocation drift, and capital gains tax liabilities with zero manual updating.",
    accentColor: "border-indigo-500/40 text-indigo-400 bg-indigo-500/5",
    metric: "44,000+",
    metricLabel: "SCHEMES TRACKED",
    features: [
      "Official AMFI scheme code matching & auto-sync",
      "SIP installment cadence & automated ledger linkage",
      "Equity vs Debt vs Hybrid allocation breakdown",
      "Time-weighted performance vs Benchmark indices",
    ],
    stats: {
      totalValue: "₹18,40,900.00",
      totalReturn: "+₹4,12,000 (+28.8%)",
      xirr: "+16.85%",
      riskProfile: "BALANCED_INDEX",
    },
    sampleHoldings: [
      {
        symbol: "120503",
        name: "Parag Parikh Flexi Cap Fund",
        units: "1,420.5",
        avgPrice: "₹58.20",
        currentPrice: "₹76.40",
        currentValue: "₹1,08,526.20",
        returnPct: "+31.27%",
        isPositive: true,
      },
      {
        symbol: "118989",
        name: "Mirae Asset Large Cap Fund",
        units: "2,100.0",
        avgPrice: "₹82.10",
        currentPrice: "₹104.80",
        currentValue: "₹2,20,080.00",
        returnPct: "+27.64%",
        isPositive: true,
      },
      {
        symbol: "125497",
        name: "SBI Nifty 50 Index Fund",
        units: "3,500.0",
        avgPrice: "₹164.00",
        currentPrice: "₹198.50",
        currentValue: "₹6,94,750.00",
        returnPct: "+21.03%",
        isPositive: true,
      },
    ],
  },
  {
    id: "bullion",
    name: "Bullion & Gold",
    tag: "SPOT COMMODITY",
    telemetrySource: "GLOBAL SPOT FEED",
    description:
      "Physical gold, sovereign gold bonds (SGB), and digital bullion tracking with real-time per-gram valuation and purity calibrations (24K / 22K / 18K).",
    accentColor: "border-amber-500/40 text-amber-400 bg-amber-500/5",
    metric: "24K / 22K",
    metricLabel: "PURITY MATRIX",
    features: [
      "Automated per-gram pricing from live gold spot tickers",
      "SGB interest accrual & maturity schedule monitoring",
      "Inflation-hedge weighting in global asset map",
      "Weight-based entry in grams, tolas, or sovereign units",
    ],
    stats: {
      totalValue: "₹8,92,000.00",
      totalReturn: "+₹2,40,000 (+36.8%)",
      xirr: "+14.10%",
      riskProfile: "LOW_INFLATION_HEDGE",
    },
    sampleHoldings: [
      {
        symbol: "SGB2028-V",
        name: "Sovereign Gold Bond 2.5%",
        units: "50 grams",
        avgPrice: "₹5,120/g",
        currentPrice: "₹7,280/g",
        currentValue: "₹3,64,000.00",
        returnPct: "+42.18%",
        isPositive: true,
      },
      {
        symbol: "GOLD_24K",
        name: "Physical 24K Minted Bar",
        units: "75 grams",
        avgPrice: "₹5,400/g",
        currentPrice: "₹7,040/g",
        currentValue: "₹5,28,000.00",
        returnPct: "+30.37%",
        isPositive: true,
      },
      {
        symbol: "GOLDBEES.NS",
        name: "Nippon India Gold ETF",
        units: "1,200 units",
        avgPrice: "₹56.40",
        currentPrice: "₹72.10",
        currentValue: "₹86,520.00",
        returnPct: "+27.84%",
        isPositive: true,
      },
    ],
  },
  {
    id: "fixed_deposits",
    name: "Fixed Deposits & Cash",
    tag: "MONEY MARKET",
    telemetrySource: "DETERMINISTIC ACCRUAL",
    description:
      "Track multi-bank term deposits, recurring deposits, and liquidity reserves with exact compounding interest calculators and maturity countdowns.",
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/5",
    metric: "100%",
    metricLabel: "ACCRUED ACCURACY",
    features: [
      "Quarterly & monthly compound interest math engines",
      "Maturity date alerts & principal renewal schedules",
      "Emergency fund runway calculations",
      "Bank deposit insurance threshold alerts",
    ],
    stats: {
      totalValue: "₹12,50,000.00",
      totalReturn: "+₹89,250 (ACCRUED)",
      xirr: "+7.45%",
      riskProfile: "ZERO_CAPITAL_RISK",
    },
    sampleHoldings: [
      {
        symbol: "HDFC_FD_3YR",
        name: "HDFC Term Deposit 7.4%",
        units: "1 Deposit",
        avgPrice: "Matures 2027",
        currentPrice: "Accruing Qtly",
        currentValue: "₹7,50,000.00",
        returnPct: "+7.40% p.a.",
        isPositive: true,
      },
      {
        symbol: "SBI_FD_1YR",
        name: "SBI Liquidity Reserve FD",
        units: "1 Deposit",
        avgPrice: "Matures 2026",
        currentPrice: "Auto-renew On",
        currentValue: "₹5,00,000.00",
        returnPct: "+6.85% p.a.",
        isPositive: true,
      },
      {
        symbol: "ICICI_TAX_5YR",
        name: "ICICI 80C Tax Saver FD",
        units: "1 Deposit",
        avgPrice: "Matures 2029",
        currentPrice: "7.10% Compounded",
        currentValue: "₹1,50,000.00",
        returnPct: "+7.10% p.a.",
        isPositive: true,
      },
    ],
  },
];

export function MultiAssetPortfolioShowcase() {
  const [activeId, setActiveId] = useState<string>("stocks");
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const activeAsset =
    ASSET_CLASSES.find((a) => a.id === activeId) || ASSET_CLASSES[0];

  return (
    <section className="py-20 md:py-32 bg-[#000000] border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#FFD666] font-bold uppercase mb-3 px-2.5 py-1 border border-amber-500/30 bg-amber-500/5">
              <span className="h-1.5 w-1.5 bg-amber-400 animate-pulse" />
              FINVEST_ENGINE // WEALTH MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
              Multi-Vector Asset Engine.
            </h2>
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-3">
              One unified ledger for Stocks, Mutual Funds, Bullion, and Fixed Deposits with live market telemetry.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <Link
              href="/vault"
              className="border border-white/20 px-4 py-2 text-gray-400 hover:text-white hover:border-white transition-all uppercase tracking-wider text-[10px]"
            >
              EXPLORE VAULT →
            </Link>
          </div>
        </div>

        {/* 4 Asset Class Tabs - Horizontal scroll corridor on mobile, 4-col grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-4 overflow-x-auto sm:overflow-x-visible gap-2.5 sm:gap-3 mb-8 pb-2 sm:pb-0 scrollbar-none touch-pan-x overscroll-x-contain pr-4 sm:pr-0">
          {ASSET_CLASSES.map((asset) => {
            const isSelected = activeId === asset.id;
            return (
              <button
                key={asset.id}
                onClick={() => setActiveId(asset.id)}
                className={`p-3.5 sm:p-6 border text-left transition-all relative cursor-pointer min-w-[175px] sm:min-w-0 flex-1 shrink-0 ${
                  isSelected
                    ? "border-white bg-white/10 shadow-lg shadow-white/5"
                    : "border-white/10 bg-[#050505] hover:border-white/25 hover:bg-white/[0.02] active:bg-white/5"
                }`}
              >
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider truncate mr-1">
                    {asset.tag}
                  </span>
                  <span
                    className={`text-[8px] font-mono font-bold px-1.5 py-0.5 border shrink-0 ${asset.accentColor}`}
                  >
                    {asset.metric}
                  </span>
                </div>
                <div className="font-bold text-sm sm:text-lg text-white mb-1 flex items-center justify-between">
                  <span>{asset.name}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse sm:hidden" />
                  )}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-gray-500 tracking-wider uppercase truncate">
                  {asset.telemetrySource}
                </div>
              </button>
            );
          })}
        </div>

        {/* Asset Detail & Live Telemetry Grid */}
        <div className="border border-white/20 bg-[#040404] p-4 sm:p-8 md:p-10 brutalist-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Description & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-500 font-bold">
                  // TELEMETRY_PROFILE
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  FEED_ONLINE
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif italic text-white">
                {activeAsset.name}
              </h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed min-h-[64px] sm:min-h-[72px]">
                {activeAsset.description}
              </p>

              {/* Stats HUD Block */}
              <div className="grid grid-cols-2 gap-3 font-mono border border-white/10 bg-black/60 p-4">
                <div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest">TOTAL VALUE</div>
                  <div className="text-sm font-bold text-white tabular-nums">{activeAsset.stats.totalValue}</div>
                </div>
                <div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest">REALIZED XIRR</div>
                  <div className="text-sm font-bold text-emerald-400 tabular-nums">{activeAsset.stats.xirr}</div>
                </div>
                <div className="border-t border-white/5 pt-2">
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest">TOTAL GAIN</div>
                  <div className="text-[11px] font-bold text-emerald-400 tabular-nums">{activeAsset.stats.totalReturn}</div>
                </div>
                <div className="border-t border-white/5 pt-2">
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest">RISK PROFILE</div>
                  <div className="text-[11px] font-bold text-gray-300">{activeAsset.stats.riskProfile}</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-3">
                  CORE_CAPABILITIES
                </div>
                <ul className="space-y-2 font-mono text-xs text-gray-300 min-h-[110px]">
                  {activeAsset.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#FFD666] font-bold">»</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Live Holdings Simulation HUD */}
            <div className="lg:col-span-7 border border-white/15 bg-black/90 p-4 sm:p-7 space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-[10px] text-gray-500 uppercase">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-white font-bold">PORTFOLIO_TELEMETRY // {activeAsset.id.toUpperCase()}</span>
                </div>
                <span className="text-emerald-400 tabular-nums">[ REFRESH: T+{tick % 4}s ]</span>
              </div>

              <div className="space-y-3 font-mono min-h-[255px]">
                {activeAsset.sampleHoldings.map((h, i) => (
                  <div
                    key={i}
                    className="border border-white/5 bg-white/[0.02] p-3 sm:p-3.5 hover:border-white/20 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white tracking-wide truncate">{h.name}</div>
                        <div className="text-[9px] text-gray-500 uppercase truncate">{h.symbol} · {h.units}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-white tabular-nums">{h.currentValue}</div>
                        <div className="text-[10px] font-bold text-emerald-400 tabular-nums">{h.returnPct}</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-500 border-t border-white/5 pt-1.5 uppercase">
                      <span>AVG: {h.avgPrice}</span>
                      <span>CMP: {h.currentPrice}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[9px] text-gray-500 uppercase gap-2">
                <span>SECURITY: 100% AIR-GAPPED SQLITE REPOSITORY</span>
                <span className="text-sky-400 font-bold">0 REMOTE CLOUD SYNC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";

const Investment = () => {
  const [netWorth, setnetWorth] = useState(100000)
  const [invested, setInvested] = useState(0)
  const [totalReturn, settotalReturn] = useState(0)
  const [returnPercentage, setreturnPercentage] = useState(0)
  const [availableCash, setavailableCash] = useState(100000)

  const stocks = [
    {
      name: "Reliance Industries",
      symbol: "RELIANCE",
      price: "₹2,760",
      change: "+1.42%",
      positive: true,
    },
    {
      name: "Tata Consultancy Services",
      symbol: "TCS",
      price: "₹3,950",
      change: "+0.84%",
      positive: true,
    },
    {
      name: "Infosys",
      symbol: "INFY",
      price: "₹1,420",
      change: "-0.63%",
      positive: false,
    },
    {
      name: "HDFC Bank",
      symbol: "HDFCBANK",
      price: "₹1,890",
      change: "+1.18%",
      positive: true,
    },
  ];

  const investments = [
    {
      name: "Reliance Industries",
      symbol: "RELIANCE",
      quantity: 10,
      value: "₹27,600",
      profit: "+₹600",
      percentage: "+2.22%",
      positive: true,
    },
    {
      name: "TCS",
      symbol: "TCS",
      quantity: 5,
      value: "₹19,750",
      profit: "+₹750",
      percentage: "+3.95%",
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080C14] text-white px-4 py-6 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          My Investments
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Manage your virtual investments and track your returns.
        </p>
      </div>


      {/* ================= NET WORTH ================= */}
      <div className="rounded-2xl border border-gray-800 bg-[#101620] p-5 sm:p-7">

        {/* Net Worth */}
        <div className="mb-7">
          <p className="text-sm text-gray-400">
            Total Net Worth
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold">
              ₹{netWorth}
            </h2>

            <span className="mb-1 rounded-md bg-green-500/10 px-2 py-1 text-sm font-medium text-green-400">
              +₹8,500
            </span>
          </div>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-6 sm:grid-cols-4">

          {/* Invested */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500">
              Invested Amount
            </p>

            <p className="mt-2 text-lg sm:text-xl font-semibold">
              ₹{invested}
            </p>
          </div>


          {/* Returns */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500">
              Total Returns
            </p>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-green-400">
              +₹{totalReturn}
            </p>
          </div>


          {/* Return Percentage */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500">
              Return %
            </p>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-green-400">
              +{returnPercentage}%
            </p>
          </div>


          {/* Cash */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500">
              Available Cash
            </p>

            <p className="mt-2 text-lg sm:text-xl font-semibold">
              ₹{availableCash}
            </p>
          </div>

        </div>
      </div>


      {/* ================= INVEST IN STOCKS ================= */}
      <div className="mt-10">

        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-bold">
            Invest in Stocks
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Choose a stock and start investing with your virtual cash.
          </p>
        </div>


        {/* Search */}
        <div className="mb-5">
          <div className="relative">

            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full rounded-xl border border-gray-800 bg-[#101620] px-4 py-3 pl-11 text-sm text-white placeholder-gray-500 outline-none transition focus:border-gray-600"
            />

            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              />
            </svg>

          </div>
        </div>


        {/* Stock List */}
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#101620]">

          {stocks.map((stock, index) => (

            <div
              key={stock.symbol}
              className={`flex flex-col gap-4 p-5 transition hover:bg-[#151C27] sm:flex-row sm:items-center sm:justify-between ${
                index !== stocks.length - 1
                  ? "border-b border-gray-800"
                  : ""
              }`}
            >

              {/* Stock Info */}
              <div className="flex items-center gap-4">

                {/* Logo */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B2432] text-sm font-bold text-gray-300">
                  {stock.symbol.slice(0, 2)}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {stock.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {stock.symbol}
                  </p>
                </div>

              </div>


              {/* Price + Change + Button */}
              <div className="flex items-center justify-between gap-6 sm:justify-end">

                <div className="text-right">
                  <p className="font-semibold">
                    {stock.price}
                  </p>

                  <p
                    className={`mt-1 text-sm ${
                      stock.positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {stock.change}
                  </p>
                </div>


                <button
                  className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Invest
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>


      {/* ================= YOUR INVESTMENTS ================= */}
      <div className="mt-10">

        <div className="mb-5 flex items-end justify-between">

          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Your Investments
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Stocks currently held in your portfolio.
            </p>
          </div>

          <span className="hidden text-sm text-gray-500 sm:block">
            2 Stocks
          </span>

        </div>


        {/* Investment List */}
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#101620]">

          {investments.map((investment, index) => (

            <div
              key={investment.symbol}
              className={`p-5 transition hover:bg-[#151C27] ${
                index !== investments.length - 1
                  ? "border-b border-gray-800"
                  : ""
              }`}
            >

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Stock */}
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B2432] text-sm font-bold text-gray-300">
                    {investment.symbol.slice(0, 2)}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {investment.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {investment.symbol}
                    </p>
                  </div>

                </div>


                {/* Quantity */}
                <div>
                  <p className="text-xs text-gray-500">
                    Quantity
                  </p>

                  <p className="mt-1 font-medium">
                    {investment.quantity} Shares
                  </p>
                </div>


                {/* Current Value */}
                <div>
                  <p className="text-xs text-gray-500">
                    Current Value
                  </p>

                  <p className="mt-1 font-semibold">
                    {investment.value}
                  </p>
                </div>


                {/* Profit */}
                <div>
                  <p className="text-xs text-gray-500">
                    Returns
                  </p>

                  <p className="mt-1 font-semibold text-green-400">
                    {investment.profit}
                    <span className="ml-2 text-xs">
                      ({investment.percentage})
                    </span>
                  </p>
                </div>


                {/* Sell */}
                <button className="rounded-lg border border-red-500/30 px-5 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10">
                  Sell
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>


      {/* ================= FOOTER INFO ================= */}
      <div className="mt-8 rounded-xl border border-gray-800 bg-[#0D131D] p-4 text-center text-xs text-gray-500">
        Prices are based on the latest available market data.
      </div>

    </div>
  );
};

export default Investment;
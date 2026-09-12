const InvestModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-800 bg-[#101620] p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Invest in
            </p>

            <h2 className="mt-1 text-2xl font-bold">Reliance Industries</h2>

            <p className="mt-1 text-sm text-gray-500">RELIANCE</p>
          </div>

          <button className="text-xl text-gray-500 hover:text-white">×</button>
        </div>

        {/* Current Price */}
        <div className="mb-6 rounded-xl bg-[#151C27] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Current Price</p>

              <p className="mt-1 text-xl font-bold">₹2,760</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Today's Change</p>

              <p className="mt-1 font-medium text-green-400">+1.42%</p>
            </div>
          </div>
        </div>

        {/* Investment Amount */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Investment Amount
          </label>

          <div className="flex items-center rounded-xl border border-gray-700 bg-[#0B1018] px-4 focus-within:border-gray-500">
            <span className="text-gray-400">₹</span>

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
            />
          </div>

          <div className="mt-2 flex justify-between text-xs">
            <span className="text-gray-500">Available Cash</span>

            <span className="text-gray-300">₹1,00,000</span>
          </div>
        </div>

        {/* Prediction */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-300">
            Next Trading Day Prediction
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Will Reliance close higher or lower?
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Higher */}
            <button className="group rounded-xl border border-gray-700 bg-[#0B1018] p-4 text-center transition hover:border-green-500/50 hover:bg-green-500/5">
              <div className="text-2xl text-green-400">↗</div>

              <p className="mt-2 font-semibold">Higher</p>

              <p className="mt-1 text-xs text-gray-500">Price goes up</p>
            </button>

            {/* Lower */}
            <button className="group rounded-xl border border-gray-700 bg-[#0B1018] p-4 text-center transition hover:border-red-500/50 hover:bg-red-500/5">
              <div className="text-2xl text-red-400">↘</div>

              <p className="mt-2 font-semibold">Lower</p>

              <p className="mt-1 text-xs text-gray-500">Price goes down</p>
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-5 rounded-xl border border-gray-800 bg-[#0B1018] p-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Investment</span>

            <span className="font-semibold">₹20,000</span>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-gray-500">Prediction</span>

            <span className="font-medium text-green-400">Higher ↗</span>
          </div>
        </div>

        {/* Confirm */}
        <button className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-gray-200">
          Confirm Investment
        </button>
      </div>
    </div>
  );
};

export default InvestModal;

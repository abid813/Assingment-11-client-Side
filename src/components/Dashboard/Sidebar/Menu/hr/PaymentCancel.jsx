import { MdCancel } from "react-icons/md";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-[#18212F] max-w-md w-full rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <MdCancel className="text-red-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-500 mb-2">
          Payment Cancelled
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Your payment was not completed. Don’t worry — no money was charged.
          You can try again anytime.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to="/dashboard/packages"
            className="block w-full bg-[#9435E7] text-white py-3 rounded-xl font-semibold hover:bg-[#7b28c9] transition"
          >
            Try Again
          </Link>

          <Link
            to="/dashboard"
            className="block w-full border border-[#9435E7] text-[#9435E7] py-3 rounded-xl font-semibold hover:bg-[#7b28c940] transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;

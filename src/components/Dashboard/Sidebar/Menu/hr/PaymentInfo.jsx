import React from "react";
import useAuth from "../../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import MenuItem from "../MenuItem";
import { MdPayment } from "react-icons/md";

const PaymentInfo = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const { data: paymentInfo = [] } = useQuery({
    queryKey: ["paymentInfo", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/payment?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto border border-[#9435E7] text-gray-400 bg-[#18212F] rounded-xl">
        <MenuItem
          icon={MdPayment}
          address={"/dashboard/payment-info"}
          label={"PaymentInfo"}
        />

        {/* <div className="pl-4">
          <label className="input border border-[#9435E7] bg-[#18212F]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search by Name"
            />
          </label>
        </div> */}

        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-[#9435E7]">
              <th>#</th>
              <th>PackageName</th>
              <th>HrEmail</th>
              <th>Limit</th>
              <th>Date</th>
              <th>transactionId</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentInfo.map((payment, i) => (
              <tr key={payment._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{payment.packageName}</div>
                    </div>
                  </div>
                </td>
                <td>{payment.hrEmail}</td>
                <td>{payment.employeeLimit}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.amount}</td>
                <td className="text-green-500" >{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentInfo;

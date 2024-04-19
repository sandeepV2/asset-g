import React from "react";

type Props = {
  id: number;
  currency: string;
  amount: string;
};

const Card: React.FC<Props> = ({ id, currency, amount }) => {
  return (
    <div className="max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Asset id : {id}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Curreny : {currency}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Amount : {amount}
      </p>
    </div>
  );
};

export default Card;

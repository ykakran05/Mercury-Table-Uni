import { useState } from "react";

const TransactionRow = ({ transaction, isFirstInGroup, showDate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="transaction-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="date-column">
        {(isFirstInGroup || isHovered) && showDate && transaction.date}
      </div>
      <div className="data-columns">
        <div className="column">{transaction.toFrom}</div>
        <div className="column">{transaction.amount}</div>
        <div className="column">{transaction.account}</div>
        <div className="column">{transaction.paymentMethod}</div>
      </div>
    </div>
  );
};

export default TransactionRow;

import TransactionRow from "./TransactionRow";

const TransactionTable = ({ transactions }) => {
  let currentDate = null;

  return (
    <div className="transaction-table-container">
      <h1 className="transaction-table-header">Transactions</h1>
      <div className="transaction-table">
        
        <div className="header-row">
          <div className="header-date-column">Date</div>
          <div className="header-data-columns">
            <div className="header-column">To/From</div>
            <div className="header-column">Amount</div>
            <div className="header-column">Account</div>
            <div className="header-column">Payment Method</div>
          </div>
        </div>
        
        {transactions.map((transaction, index) => {
          const isFirstInGroup = transaction.date !== currentDate;
          currentDate = transaction.date;
          return (
            <TransactionRow
              key={index}
              transaction={transaction}
              isFirstInGroup={isFirstInGroup}
              showDate={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransactionTable;

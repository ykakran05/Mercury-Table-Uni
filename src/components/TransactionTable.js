
const TransactionTable = ({ transactions }) => {

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
      </div>
    </div>
  );
};

export default TransactionTable;

import TransactionTable from "./components/TransactionTable";
import useFetch from "./hooks/useFetch";

export default function App() {

  const [transactions] = useFetch();

  return <TransactionTable transactions={transactions} />;
}

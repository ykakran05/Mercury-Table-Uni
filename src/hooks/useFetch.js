const useFetch = () => {
    const transactions = [
        {
          date: "Dec 6",
          toFrom: "To Ops / Payroll",
          amount: "-$54,810.16",
          account: "AR",
          paymentMethod: "Transfer",
        },
        {
          date: "Dec 6",
          toFrom: "From AR",
          amount: "$54,810.16",
          account: "Ops / Payroll",
          paymentMethod: "Transfer",
        },
        {
          date: "Dec 6",
          toFrom: "Lily's Eatery",
          amount: "$0.93",
          account: "Ops / Payroll",
          paymentMethod: "Jane B. • *1234",
        },
        {
          date: "Dec 5",
          toFrom: "Deli 77",
          amount: "$6.91",
          account: "Credit account",
          paymentMethod: "Jane B. • *5555",
        },
        {
          date: "Dec 5",
          toFrom: "Deli 77",
          amount: "$23.28",
          account: "Ops / Payroll",
          paymentMethod: "Landon S. • *49...",
        },
        {
          date: "Dec 4",
          toFrom: "Office Stop Co.",
          amount: "-$287.89",
          account: "Ops / Payroll",
          paymentMethod: "Jessica A. • *99...",
        },
        {
          date: "Dec 4",
          toFrom: "Trader John's",
          amount: "$53.49",
          account: "Credit account",
          paymentMethod: "Landon S. • *0331",
        },
      ];

      return [transactions];
}

export default useFetch;
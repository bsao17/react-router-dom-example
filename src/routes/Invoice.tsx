import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  //@ts-ignore
  let invoice: string = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
        {/**@ts-ignore */}
      <h2>Total Due: {invoice.amount}</h2>
      <p>
          {/**@ts-ignore */}
        {invoice.name}: {invoice.number}
      </p>
      {/**@ts-ignore */}
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}

"use client"
import axios from "axios";
import { useEffect, useState } from "react";

import { quotesType, selectQuoteType, selectedQuoteType, setQuotesType } from "./types/quotes";

/* Components */
import { Quotes } from "./components/Quotes";
import { SelectedQuote } from "./components/SelectedQuote";

export default function Home() {
  const [quotes, setQuotes]: [quotesType, setQuotesType] = useState()
  const [selectedQuote, selectQuote]: [selectedQuoteType, selectQuoteType] = useState()

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'get',
        url: 'http://localhost:8080/v1/quotes'
      })

      setQuotes(data)
    })()
  }, [])

  return (
    <div className="main">
      <Quotes quotes={quotes} selectQuote={selectQuote} />
      <SelectedQuote selectedQuote={selectedQuote} />
    </div>
  );
}
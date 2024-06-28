import { quotesType, selectQuoteType } from "../types/quotes"

const Quotes = ({ quotes, selectQuote }: { quotes: quotesType, selectQuote: selectQuoteType }) => {
    if (!quotes || quotes.length <= 0) return <div className="quotes">
        <h2>No quotes available</h2>
    </div>

    return <div className="quotes">
        {quotes.map((quote: any, index) => {
            return <div key={index + 'quote'} className="selection" onClick={() => selectQuote(quote)}>
                {quote.quote}
            </div>
        })}
    </div>
}

export { Quotes }
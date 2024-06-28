import { selectedQuoteType } from "../types/quotes"

const SelectedQuote = ({ selectedQuote }: { selectedQuote: selectedQuoteType }) => {
    if (!selectedQuote) return <div className="selected-quote">
        <h2>No quote selected. Start by clicking in one of them.</h2>
    </div>

    return <div className="selected-quote">
        <div className="quote">
            <h2>Quote (user email)</h2>
            {selectedQuote?.quote}
        </div>

        <div className="analysis">
            <h2>Analysis</h2>
            {selectedQuote?.analysis}
        </div>

        <button onClick={() => alert('This button does not do anything.')}>Send quote</button>

    </div>
}

export { SelectedQuote }
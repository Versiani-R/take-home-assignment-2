import { Dispatch, SetStateAction } from "react"

type quotesType = Record<string, string>[] | undefined
type setQuotesType = Dispatch<SetStateAction<quotesType>>
export type { quotesType, setQuotesType }

type selectedQuoteType = Record<string, string> | undefined
type selectQuoteType = Dispatch<SetStateAction<selectedQuoteType>>
export type { selectedQuoteType, selectQuoteType }
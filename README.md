# Automated RFQ Processing System - Frontend

## Overview

This project implements the frontend of an automated system for processing customer emailed requests for quotes (RFQs) in a metal service center. The frontend provides a user interface for salespeople to view, finalize, and send quotes generated by the backend system. 

The main features of the frontend include:
1. Displaying a list of generated quotes.
2. Viewing detailed information of a selected quote.
3. An option to send the selected quote (mock functionality).

## Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── Quotes.tsx
│   │   └── SelectedQuote.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── quotes.css
│   ├── types/
│   │   └── quotes.ts
│   ├── layout.tsx
│   └── page.tsx
│
└── README.md
```

## Components

### Quotes

- **Path**: `src/app/components/Quotes.tsx`
- **Description**: Displays a list of quotes. Each quote can be selected to view its details.
- **Props**:
  - `quotes` (quotesType): List of quotes.
  - `selectQuote` (selectQuoteType): Function to set the selected quote.

### SelectedQuote

- **Path**: `src/app/components/SelectedQuote.tsx`
- **Description**: Displays detailed information about the selected quote, including the quote itself and the AI analysis.
- **Props**:
  - `selectedQuote` (selectedQuoteType): The currently selected quote.

## Pages

### Home

- **Path**: `src/app/page.tsx`
- **Description**: The main page that fetches and displays quotes. It uses the `Quotes` and `SelectedQuote` components.
- **State**:
  - `quotes` (quotesType): List of quotes fetched from the backend.
  - `selectedQuote` (selectedQuoteType): The currently selected quote.

### RootLayout

- **Path**: `src/app/layout.tsx`
- **Description**: Defines the root layout of the application, including global styles and metadata.

## Types

- **Path**: `src/app/types/quotes.ts`
- **Description**: Type definitions for quotes and state management.

  ```typescript
  type quotesType = Record<string, string>[] | undefined;
  type setQuotesType = Dispatch<SetStateAction<quotesType>>;
  export type { quotesType, setQuotesType };

  type selectedQuoteType = Record<string, string> | undefined;
  type selectQuoteType = Dispatch<SetStateAction<selectedQuoteType>>;
  export type { selectedQuoteType, selectQuoteType };
  ```

## Setup and Running the Project

### Prerequisites

- Node.js (>=20.x.x)
- npm (>=10.x.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Versiani-R/take-home-assignment-2 rfq-processing-frontend
    cd rfq-processing-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Ensure the backend is running and accessible at `http://localhost:8080`.

### Running the Application

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The application will be accessible at `http://localhost:3000`.

### Usage

- **View Quotes**:
  Upon loading the application, it will fetch the list of quotes from the backend and display them.
  
- **Select a Quote**:
  Click on any quote from the list to view its details in the right pane.

- **Send Quote**:
  Click on the "Send quote" button in the detailed view (this button currently does not perform any action).

## Conclusion

This frontend project complements the backend system by providing a user-friendly interface for salespeople to manage and process RFQs efficiently. The use of React with Next.js ensures a responsive and dynamic user experience, facilitating quick interactions and decision-making.

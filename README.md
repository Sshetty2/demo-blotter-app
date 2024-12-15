# Blotter App Demo

## Description

This is a demo blotter app built with React, Redux, and Ant Design.
## Features

- Order entry form with validation for market and limit orders
- Real-time blotter display using AG Grid
- Buy/Sell actions with color coding (green for buy, red for sell)
- Support for different order types (Market, Limit)
- Time-in-force options
- Stop price and limit price fields
- Comment field for order notes
- Loading state indicators
- Redux state management
- Responsive layout

## Tech Stack

- React 18
- Redux + Redux Thunk for state management
- TypeScript for type safety
- AG Grid for blotter display
- Ant Design (antd) for UI components
- SCSS for styling
- Vite for build tooling

## Components

### OrderEntry

The order entry form allows users to:
- Select Buy/Sell action
- Enter symbol with autocomplete
- Specify quantity
- Choose order type (Market/Limit)
- Set time-in-force
- Enter price and stop price (for limit orders)
- Add comments

### Blotter

Displays submitted orders in a grid format with:
- Action (Buy/Sell)
- Symbol
- Quantity
- Order Type
- Time in Force
- Price
- Stop Price
- Comments

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`                         
3. Start the development server: `npm run dev`

## Usage

- Fill in the order entry form and click "Submit" to add an order to the blotter.
- The blotter will update in real-time with the new order.
- The app is responsive and should work on both desktop and mobile devices.      

## Notes 

- The app is built with Vite and TypeScript.
- The app uses Redux for state management and Redux Thunk for asynchronous actions.
- The app uses AG Grid for the blotter display.
- The app uses Ant Design for the UI components.
- The app uses SCSS for styling.
- The app uses React Numeric Input for the numeric input fields.
- The app uses React Autosuggest for the symbol autocomplete.
- The app uses React Draggable for the draggable blotter.
- The app uses React Redux for state management.
- The app uses Redux Thunk for asynchronous actions.
- The app uses AWS Amplify for authentication and authorization.  




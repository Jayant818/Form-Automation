# Puppeteer Automation README

This project demonstrates automation of user actions on a website using the Puppeteer library. The automation involves performing specific actions on the swap.defillama.com website.

## Prerequisites

To run this automation script, you need to have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:

   ```node
   npm install
   ```

## Running the Automation

To run the automation script, follow these steps:

1. Open the project directory in a terminal or command prompt.
2. Execute the following command:

   ```js
    node index.js
   ```

3. The script will launch a headful browser and navigate to the swap.defillama.com website.
4. It will fill in the form by entering the required data, such as "Arbitrum One" in the "chain" field and "12" in the "You Sell" field.
5. It will select the "Wrapped BTC" token in the "You Sell" section and "USDC" token in the "You Buy" section.
6. Once the data is entered, a section titled "Select a route to perform a swap" will appear on the right-hand side. The script will select the second option in this section.
7. The browser window will remain open until you manually close it or terminate the script.

## Troubleshooting

If you encounter any issues or errors during the execution of the script, make sure you have met the prerequisites and followed the steps correctly. If the problem persists, please open an issue in this repository for further assistance.

## Dependencies

This project relies on the following dependencies:

- Puppeteer: A Node.js library that provides a high-level API for controlling headless Chrome or Chromium.

The dependencies are managed using npm and are automatically installed when running the `npm install` command.

# Open Product Research Toolkit

A small, open-source, local-first web tool for organizing and comparing product research data.

## Current features

- Import product records from CSV files.
- Search products and filter by category or saved status.
- Sort by opportunity score, name, growth, or estimated sales.
- Save and unsave products in browser storage.
- View product notes and a transparent heuristic score.
- Export the current dataset to CSV.
- Download a CSV template.

## Important data notes

The included records are fictional examples. This project does not connect to TikTok Shop, FastMoss, or another marketplace. It does not collect live sales, trend, or creator data. Imported information is supplied by the user and stored locally in the browser. The opportunity score is a simple heuristic for sorting, not a prediction or recommendation.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Import your own CSV or load the demo dataset.

No build tools, account, or API key are required.

## CSV format

Required columns: `product`, `category`, `price`, `estimated_sales`, `growth_percent`, `competition`.

Optional column: `notes`.

`competition` must be `low`, `medium`, or `high`. Numeric columns must contain non-negative numbers. Use values you have permission to use and clearly distinguish estimates from verified data.

## Privacy

This is a static client-side application. CSV parsing, filtering, saving, and exporting happen in your browser. The app does not send product data to a server. Saved records use browser local storage on the current device and browser.

## Roadmap

- Improve CSV validation and add tests.
- Add editable product records and research notes.
- Improve accessibility and mobile usability.
- Consider integrations only where official documentation and permission allow them.

## License

MIT. See [LICENSE](LICENSE).

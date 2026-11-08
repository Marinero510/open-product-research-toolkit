# Open Product Research Toolkit

An open-source, browser-based toolkit for organizing product research, comparing market opportunities, and tracking promising product ideas.

## Features

- Import product research through CSV files.
- Search products by name, category, and notes.
- Filter products by category and saved status.
- Sort products by opportunity score, growth, and estimated sales.
- Calculate product opportunity scores.
- Save promising products for future review.
- Export research data to CSV.
- Store research locally in the browser without requiring an account or server.

## Getting Started

1. Visit the project website.
2. Download the CSV template.
3. Add your researched product information.
4. Import the CSV file.
5. Review, compare, and save promising products.
6. Export your research whenever needed.

## CSV Format

Required columns:

`product, category, price, estimated_sales, growth_percent, competition`

Optional column:

`notes`

Competition values: `low`, `medium`, `high`.

## Technology

- HTML
- CSS
- JavaScript
- Browser Local Storage
- CSV import and export

## Data Transparency

This project currently provides a local-first research workflow. Sample records are fictional demonstration data, not verified marketplace statistics.

Live marketplace integrations and automated market-data collection are not currently implemented.

Opportunity scores are heuristic indicators and should not be treated as investment or sales predictions.

## Privacy

Research data is processed locally in the browser. No account or server is required for the current version.

## License

MIT License.

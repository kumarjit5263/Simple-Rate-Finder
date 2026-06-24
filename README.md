# Simple Rate Finder

## Overview

Simple Rate Finder is a web application designed to help users identify the best straightforward savings account based on their current savings balance.

Many users want to maximize their savings returns but do not want to manage bonus conditions, account switching strategies, or complex financial products. This tool focuses on simplicity by recommending the most suitable savings account based on projected annual earnings and account characteristics.

---

## Problem Statement

Many Australians open a savings account and rarely revisit their decision. As interest rates change across providers, users may be missing opportunities to earn additional interest on their savings.

For users who prioritize simplicity over optimization, comparing savings accounts can be time-consuming and confusing.

The challenge was to create a simple and intuitive experience that helps users:

- Compare available savings accounts
- Understand potential annual earnings
- Make an informed decision quickly
- Avoid unnecessary complexity

---

## Solution

Simple Rate Finder allows users to:

1. Enter their current savings balance
2. Receive a recommended savings account
3. View estimated annual and monthly earnings
4. Understand why the recommendation was made
5. Compare alternative account options
6. Visualize earning differences through charts
7. Review the methodology behind the recommendation

The experience is designed to be simple, transparent, and easy to understand.

---

## Features

### Savings Account Recommendation

Provides a recommended savings account based on projected annual earnings.

### Earnings Calculator

Calculates:

- Annual interest earnings
- Monthly interest earnings

based on the user's savings balance.

### Recommendation Explanation

Provides transparency into why an account was selected.

### Savings Insights

Shows the potential earnings difference compared with alternative accounts.

### Comparison Table

Allows users to compare:

- Interest rates
- Account types
- Monthly fees
- Projected annual earnings

### Earnings Visualization

Displays a chart comparing estimated annual earnings across all available accounts.

### Methodology Section

Explains how recommendations are generated.

---

## Product Decisions

### Why focus on simplicity?

The chosen brief specifically targets users who value straightforward savings options rather than continuously optimizing for bonus conditions and promotional offers.

The application therefore prioritizes:

- Ease of understanding
- Low cognitive load
- Transparent recommendations
- Clear financial outcomes

### Why use projected earnings instead of only interest rates?

Most users understand dollar amounts more easily than percentages.

Showing projected annual and monthly earnings makes the value proposition more tangible and actionable.

### Why provide comparison data?

Recommendations should be transparent.

Rather than acting as a black box, the application allows users to review all available options and understand the reasoning behind the recommendation.

---

## Recommendation Logic

The current recommendation engine identifies the account with the highest projected return based on the available dataset.

The design intentionally supports future enhancements such as:

- Monthly fee weighting
- Minimum balance requirements
- User preferences
- Risk tolerance
- Personalized scoring models

---

## Technical Architecture

```text
User Input
     |
     v
Savings Balance
     |
     v
Recommendation Engine
     |
     v
Savings Account Dataset
     |
     +-------> Recommendation Card
     |
     +-------> Comparison Table
     |
     +-------> Insights
     |
     +-------> Earnings Chart
```

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite

### Styling

- Tailwind CSS
- shadcn/ui

### Data Visualization

- Recharts

### Icons

- Lucide React

---

## AI-Assisted Development

This project was developed using an AI-native workflow.

AI tools were used to assist with:

- UI component generation
- Product ideation
- UX improvements
- Documentation drafting
- Testing scenarios
- Refactoring suggestions

All implementation decisions, architecture choices, and final code were reviewed and validated manually.

---

## Assumptions

The assessment permitted the use of representative data.

Therefore:

- Savings account information is mock data
- Interest rates are representative values
- No live banking APIs were integrated

The focus was placed on user experience, product thinking, and decision-making support.

---

## Future Improvements

### Live Savings Account Data

- Integration with real-time savings account datasets
- Automated rate updates

### Personalized Recommendations

- User preferences
- Financial goals
- Savings behaviour

### Advanced Scoring Engine

- Fee analysis
- Minimum balance requirements
- Account restrictions
- Multi-factor ranking

### Open Banking Integration

- Account aggregation
- Account balance synchronization
- Personalized financial recommendations

### Historical Rate Tracking

- Rate trends
- Provider performance over time

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Author

Kumarjit Pal

Engineering Assessment Submission - Brief 2B: Simple Rate Finder

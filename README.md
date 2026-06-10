# Whistle Frontend Assessment

## Overview

This project is a React-based implementation of the Whistle landing page created from the provided Figma design. The application is fully responsive and built using React functional components, React Hooks, and custom CSS without using any UI libraries.

---

## Setup Instructions

### Clone the Repository

```bash
git clone <your-github-repository-url>
```

### Navigate to Project Directory

```bash
cd whistle-assessment
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open in Browser

```text
http://localhost:5173
```

---

## Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* CSS3
* React Hooks (useState, useEffect)

---

## API Used

The project uses the DummyJSON API:

https://dummyjson.com/products

The API was used to demonstrate:

* Data Fetching
* useEffect Lifecycle
* useState Management
* Loading States
* Error Handling
* Dynamic Rendering

---

## Key Dynamic Sections

### 1. Results You'll Love

This section displays before-and-after treatment transformations using locally stored JSON data.

The external API did not provide dental treatment-specific content such as before/after images, treatment concerns, and treatment durations. Therefore, a local JSON file was used to accurately match the provided Figma design.

**Concepts Demonstrated:**

* Dynamic Rendering using `.map()`
* Local JSON Data Integration
* Reusable Components
* Responsive Grid Layout

---

### 2. What Sets Whistle Apart?

This section serves as the primary API-driven feature of the project.

Data is fetched from the DummyJSON API using React's `useEffect` hook and managed using `useState`. Loading and error states have been implemented to handle the fetch lifecycle gracefully.

**Concepts Demonstrated:**

* API Integration
* useEffect
* useState
* Loading State
* Error State
* Dynamic Data Rendering

---

### 3. FAQ Section

The FAQ section was implemented as an interactive accordion where users can expand and collapse individual questions.

Since the API does not provide aligner-specific FAQs, local mock data was used to represent the content shown in the Figma design.

**Concepts Demonstrated:**

* Accordion Interaction
* Expand / Collapse Functionality
* useState
* Conditional Rendering
* User Interaction Handling

---

## Use of Local JSON / Mock Data

As permitted in the assessment instructions, local JSON/mock data was used where the API content did not accurately represent the dental and aligner-related content shown in the Figma design.

### Results You'll Love

The `results.json` file was created to store:

* Before Images
* After Images
* Treatment Concerns
* Treatment Duration

This data was rendered dynamically within the Results section.

### FAQ Section

The FAQ content uses locally defined mock data because the external API does not provide aligner-related questions and answers.

Using local data allowed the implementation to remain faithful to the Figma design while still demonstrating dynamic rendering and React state management.

---

## Assessment Requirements Covered

✔ Functional Components

✔ React Hooks (useState, useEffect)

✔ Custom CSS (No UI Libraries)

✔ Responsive Design

✔ Loading State

✔ Error State

✔ Hover Effects

✔ Dynamic Rendering

✔ Accordion Expand/Collapse

✔ Figma-Based UI Implementation

✔ API Integration

---

## Project Structure

```text

src
│
├── components
│   ├── Navbar
│   ├── OfferBar
│   ├── Hero
│   ├── ResultsSection
│   ├── ComparisonTable
│   └── FAQ
│
├── data
│   ├── results.json
│   └── faqData.json
│
├── services
│   └── api.js
│
├── App.jsx
│
└── main.jsx
```

---

## Approach

The application was developed using a component-based architecture in React. The primary goal was to closely match the provided Figma design while maintaining responsiveness across desktop and mobile devices.

Special attention was given to implementing the assessment requirements through three key sections:

* Results You'll Love (Dynamic rendering using local JSON data)
* What Sets Whistle Apart? (API integration with loading and error handling)
* FAQ Section (Interactive accordion functionality)

Where API data did not naturally align with the dental and aligner-specific content shown in the Figma design, local JSON/mock data was used as permitted in the assessment instructions.

The codebase is organized into reusable components to ensure maintainability, scalability, and readability.

---

## Author

**Maaz Zafar**

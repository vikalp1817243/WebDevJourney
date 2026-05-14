# Forensics Knowledge Base

## Overview
The Forensics Knowledge Base is a multi-page, static documentation hub designed to store digital forensics methodologies, approved tool arsenals, and standard operating procedures (SOPs). It was engineered with a strict "Security and Efficiency First" mindset, prioritizing semantic markup, accessibility, and modular styling.

## Directory Architecture
```text
forensics-hub/
│
├── index.html           (Dashboard / Entry Point)
├── arsenal.html         (Forensics Tools Inventory)
├── protocols.html       (SOPs & Methodologies)
│
├── css/
│   └── main.css         (Global Stylesheet)
│
└── img/
    ├── favicon.ico
    └── arch-diagram.png

```

## Core Technologies & Engineering Principles

### 1. Semantic HTML DOM Structure

This project actively avoids "div soup." All structural elements utilize semantic HTML to ensure optimal machine readability, SEO, and accessibility for screen readers:

    <header>: Used for primary page and section titles.

    <nav>: Wraps all internal and external routing links.

    <section>: Isolates distinct methodological phases and paragraphs.

    <footer>: Contains copyright data and secondary resource links.

### 2. CSS Architecture & Global Scope

Inline (style="") and internal style CSS are strictly prohibited in this project to prevent scope pollution and maintain the separation of concerns.

    Single Source of Truth: Colors and styling metrics are defined as CSS Custom Properties (Variables) within the :root pseudo-class.

    Runtime Resolution: By utilizing var(--bg-primary), the browser's rendering engine resolves styles dynamically, allowing for highly maintainable code and future dynamic theming (e.g., Light/Dark mode toggles) without rewriting classes.

### 3. WCAG Accessibility & Visual Ergonomics

The UI is engineered specifically for Security Operations Center (SOC) environments.

    Mathematical Contrast: The color palette (deep gray/black background with off-white text) strictly adheres to WCAG AA/AAA contrast ratios.

    Minimizing Fatigue: High-frequency and low-frequency colors (like cyan and neon purple) were explicitly removed as background/foreground pairs to eliminate chromatic aberration, preventing eye strain and optical bleeding during prolonged analysis sessions.

### 4. Security Implementations

    Reverse Tabnabbing Mitigation: All external links utilizing target="_blank" are secured with the rel="noopener noreferrer" attribute. This prevents malicious target pages from hijacking the window.opener object and silently redirecting the originating tab to a phishing site.

### 5. Deployment Simulation

Testing is not conducted via the local file:// protocol to avoid CORS (Cross-Origin Resource Sharing) restrictions. The project is served over a local HTTP daemon binding strictly to the loopback interface (127.0.0.1) on port 5500 to accurately simulate production web server behavior while preventing local network sniffing.
Future Development Roadmap: Advanced CSS Layouts

## Future Development Roadmap: Advanced CSS Layouts

As this project scales, the UI layout will transition from standard document flow to advanced 1D and 2D layouts.
### 1. Isolate Flexbox vs. Grid

To maintain rendering efficiency, the following layout rules will be enforced:

    Flexbox (1-Dimensional): Will be used exclusively for aligning items in a single row OR a single column. It will handle the micro-layouts (e.g., centering navigation links, aligning icons next to text).

    CSS Grid (2-Dimensional): Will be used exclusively for macro-layouts. It will control both rows AND columns simultaneously to build the main dashboard scaffold.

    The Golden Rule: We will use Grid for the main page architecture, and Flexbox for the individual components residing inside those grid cells.
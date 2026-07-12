# **Product Requirement Document (PRD)**

## **Project: OmniTools (The Swiss Army Knife Web Utility Suite)**

**Status:** Draft | **Target Launch:** Phase-Based (2026)

## **1\. Executive Summary & Vision**

OmniTools is an all-in-one, privacy-first web utility platform that provides a comprehensive suite of free digital tools for developers, designers, content creators, and general internet users.

Instead of forcing users to bookmark dozens of single-purpose websites (many of which are bloated with ads and tracking scripts), OmniTools bundles file manipulation, text processing, formatting, and productivity tools under **one clean, fast, unified dashboard**.

### **Core Philosophies:**

* **Privacy-First:** Whenever possible, tools operate strictly **client-side**. User data (images, PDFs, text) never leaves their browser, ensuring zero server storage costs and total user privacy.  
* **Speed & Accessibility:** Clean UI/UX, fast loading times, responsive design, and absolutely no forced registration or paywalls for core functions.  
* **Scalability:** A modular architecture that allows the developer to easily build, test, and plug in new tools as separate components without risking the stability of the entire site.

## **2\. Target Audience & Categorization**

The platform bridges the gap between highly technical developer tools and everyday file-handling utilities.

| Category | Primary Users | Key Value Proposition |
| :---- | :---- | :---- |
| **Developer & Data Tools** | Software Engineers, Data Analysts | Instantly format, convert, and parse raw data safely. |
| **Design & Frontend Tools** | Web Designers, UI/UX, Frontend Devs | Generate production-ready assets (SVG, CSS) visually. |
| **Media & File Utilities** | Marketers, General Users, Office Workers | Crop, compress, and edit media without bloated software. |
| **Productivity & Business** | Freelancers, Students, Creators | Quick administrative math, text optimization, and invoicing. |

## **3\. Epics & Feature Breakdown (The 17-Tool Suite)**

### **Phase 1: Core Shell & "Quick Win" Dev Tools**

* **Unified Shell Layout:** Sidebar navigation (collapsible on mobile), search bar to filter tools instantly, dark/light mode toggle, and global layouts.  
* **Tool 1: Prettify JSON:** Input raw/minified JSON $\\rightarrow$ validate syntax $\\rightarrow$ output beautified, color-coded JSON with a "Copy to Clipboard" button.  
* **Tool 2: Sort a List:** Multi-line text input $\\rightarrow$ sort options (Alphabetical A-Z, Z-A, Numeric, Reverse) $\\rightarrow$ output sorted list.  
* **Tool 3: Calculate Number Sum:** Text area for dumping mixed text/numbers $\\rightarrow$ regex parser extracts all numbers $\\rightarrow$ outputs Count, Sum, Average, Median, Min, and Max.

### **Phase 2: Design & Asset Generators**

* **Tool 4: SVG Shape & Wave Generator:** Sliders for variance, complexity, and color $\\rightarrow$ real-time visual canvas rendering $\\rightarrow$ export as raw SVG code or download .svg file.  
* **Tool 5: Dynamic Social Media Preview Mockup:** Form fields (Title, Description, Image Upload) $\\rightarrow$ dynamic visual rendering of how it will look in Google Search, X (Twitter), LinkedIn, and Facebook feeds.  
* **Tool 6: CSS Animation Keyframe Builder:** Timeline UI $\\rightarrow$ adjust object properties over time (scale, rotate, opacity) $\\rightarrow$ export optimized @keyframes CSS code.

### **Phase 3: Advanced Client-Side Document & Image Editing**

* **Tool 7: Privacy-First Blur Tool:** Drag-and-drop image upload $\\rightarrow$ draw rectangular blur boxes over sensitive data locally using HTML5 Canvas $\\rightarrow$ export as PNG.  
* **Tool 8: Compress PNG & Create Transparent Image:** Image file drop $\\rightarrow$ option 1: pick a color threshold to remove background; option 2: select quality percentage $\\rightarrow$ run compression inside the browser $\\rightarrow$ download optimized asset.  
* **Tool 9: Split PDF:** Upload PDF file $\\rightarrow$ read metadata via pdf-lib $\\rightarrow$ show thumbnail grid $\\rightarrow$ allow users to select page ranges $\\rightarrow$ compile and trigger a download for new sliced PDFs.  
* **Tool 10: Change GIF Speed:** Upload .gif $\\rightarrow$ slider for playback speed ($0.5x$ to $3.0x$) $\\rightarrow$ frame extraction and reconstruction in browser canvas $\\rightarrow$ output new GIF.

### **Phase 4: Business, Text Analysis, and Complex Processing**

* **Tool 11: Smart Text/Format Converter:** Dropdowns for Source (JSON, CSV, YAML, Markdown) and Target $\\rightarrow$ parse data schema $\\rightarrow$ convert structures natively in JS.  
* **Tool 12: Developers' Cheat Sheet & RegEx Tester:** Regular expression text box \+ sample text box $\\rightarrow$ live highlight matching strings \+ display plain-English translation of regex tokens.  
* **Tool 13: Micro-SaaS Invoicing & Receipt Generator:** Minimalist billing template form $\\rightarrow$ automated line-item calculations, tax percentages, and currency picking $\\rightarrow$ compile directly to high-quality PDF.  
* **Tool 14: Readability & Skimmability Analyzer:** Text area $\\rightarrow$ algorithm calculates Flesch-Kincaid reading ease, highlights paragraphs with $\>4$ sentences, and auto-bolds key thematic phrases for web presentation.  
* **Tool 15: Split a Text:** Input text block $\\rightarrow$ split parameters (by character count, word count, or custom delimiter) $\\rightarrow$ outputs structured blocks.  
* **Tool 16: Micro-Learning Flashcard Generator:** Text input wrapper $\\rightarrow$ trigger lightweight backend AI endpoint $\\rightarrow$ parse structured response into interactive flipping digital flashcards.  
* **Tool 17: Trim Video:** Local file handler $\\rightarrow$ dual-slider video scrubber interface $\\rightarrow$ execute inline WebAssembly FFmpeg compilation $\\rightarrow$ trim and output video without file upload costs.

## **4\. Technical Architecture Requirements**

### **Frontend Framework**

* **Framework:** Next.js (React) or Vite (React). Next.js is preferred for its file-based routing system, making each tool a distinct, self-contained route (/tools/prettify-json).  
* **Styling & UI Components:** Tailwind CSS combined with a headless component system (like Shadcn UI / Radix Primitives) to ensure accessible, uniform design across every tool page.

### **Core Processing Logic (Client-Side Paradigm)**

* To keep operational costs at zero ($0) dollars:  
  * **Text & Coding Tools:** Pure vanilla JavaScript/TypeScript logic.  
  * **Images & Graphics:** HTML5 \<canvas\> manipulation APIs.  
  * **PDF Manipulation:** pdf-lib (runs entirely client-side).  
  * **Video Trimming:** @ffmpeg/ffmpeg utilizing WebAssembly (Wasm) to leverage the user’s local CPU rather than a paid server infrastructure.

### **Deployment & Infrastructure**

* **Hosting:** Deploy the entire client application on **Vercel** or **Netlify** (Free Tiers).  
* **Analytics:** Privacy-centric tracking (such as Plausible or Umami free instances) to monitor tool popularity without cookie pop-ups.

## **5\. UI/UX Design Specifications**

* **Dashboard Layout:** A responsive split screen. On desktop, a left sidebar menu; on mobile, a bottom-navigation drawer or hamburger overlay menu.  
* **The Tool Playground Template:** Every individual tool must follow a consistent internal template layout:  
  1. **Header:** Tool Name, brief subtitle explaining what it does, and a "Privacy badge" (e.g., *🛡️ Client-side: Your files never leave your device*).  
  2. **Workspace Area:** Typically split into an **Input Block** (left/top) and an **Output Block** (right/bottom).  
  3. **Action Bar:** Prominent, high-contrast CTA buttons (e.g., "Format", "Compress", "Copy to Clipboard", "Download").  
* **Global Search:** Users hitting Cmd \+ K or clicking the search box should instantly trigger an overlay to type and jump to any tool in the suite.

## **6\. Implementation & Phased Rollout Plan**

### **Phase 1: The Shell and the "Placeholders" (Week 1–2)**

1. Set up the repository architecture and global dashboard UI shell.  
2. Code and deploy the **3 Quick-Win Tools** (Prettify JSON, Sort List, Calculate Sum).  
3. Build unique landing links for the remaining 14 tools, but render a sleek **"Coming Soon" Feature Gateway** on those pages.  
   **Product Note:** Implement a simple waitlist input form on placeholder pages. If 70% of traffic expresses interest in the "Privacy-First Blur Tool", bump that feature up the backlog immediately.

### **Phase 2: Iterate and Populate (Continuous Release)**

Group the remaining tools into batches of 3, moving from low data complexity (Text / Design) to heavy data complexity (PDF / Video). Deploy updates weekly to maintain development momentum and gauge user acquisition velocity.


This is the final, production-ready Product Requirements Document (PRD). You can copy and paste this directly into Google Docs, Notion, or a PDF exporter to send to your developer.

It integrates the **Utilitarian/Swiss Design philosophy**, the **15-screen architecture**, and the **strict tech stack constraints** we defined.

# ---

**Product Requirements Document (PRD): ZenLedger**

| Project Name   | ZenLedger (Working Title)                                             |
| :------------- | :-------------------------------------------------------------------- |
| **Version**    | 1.0 (Final Release Candidate)                                         |
| **Status**     | Approved for Development                                              |
| **Platform**   | Android (Primary)                                                     |
| **Tech Stack** | **Expo (React Native)**, **Convex (BaaS)**, **NativeWind (Tailwind)** |

## ---

**1\. Product Vision**

**ZenLedger** is a minimalist, high-performance expense tracker designed for speed and clarity. It rejects modern "app bloat"—no gamification, no social features, no onboarding carousels.

- **The Goal:** Reduce the friction of tracking expenses to near zero.
- **The Vibe:** A digital precision instrument. Think "Braun electronics" or "Swiss architectural blueprints," not "Tech Startup."
- **Success Metric:** Time from _App Open_ $\\rightarrow$ _Transaction Saved_ must be under **3 seconds**.

## ---

**2\. Design & Visual Strategy**

Strict Constraint: Single Theme Only. No Light/Dark toggle.  
Style: "Utilitarian Architecture" / "Matte Obsidian".

### **2.1 Core Aesthetics (Anti-Slop)**

- **No Gradients, No Shadows, No Blur:** The interface must be flat, high-contrast, and defined by **1px borders** and **visible grid lines**.
- **Typography:**
  - **Headings:** Editorial Serif (e.g., _Fragment Glare_ or similar) to break the generic "tech" look.
  - **Data/Numbers:** Strict **Monospace** (e.g., _JetBrains Mono_) for all financial figures.
- **Layout:** Dense, receipt-style lists. Avoid "bubbly" rounded cards. Use sharp or minimally rounded corners (2px).

### **2.2 Color Palette (Strict)**

- **Canvas:** \#050505 (Deep OLED Black)
- **Surface:** \#121212 (Matte Graphite)
- **Borders:** \#333333 (Structural dividers)
- **Text Primary:** \#EAEAEA (Off-white)
- **Accents:**
  - **Selection:** Inverted (Black text on White block).
  - **Success:** \#4B5E4B (Muted Forest Green) \- _No neon._
  - **Error:** \#5E3A3A (Muted Brick Red) \- _No bright red._

## ---

**3\. Functional Requirements & User Flows**

### **3.1 Authentication (The "Magic" Entry)**

- **Method:** Passwordless Magic Link (via Convex Auth).
- **Fallback:** "Continue with Google" (One-tap).
- **Behavior:**
  - Session persistence is mandatory.
  - **Offline Handling:** If the user is logged out and offline, show a generic "Offline/Read-Only" dashboard if data is cached, otherwise a specific "Offline Error" state.

### **3.2 The Dashboard (The Hub)**

- **Hero Section:** Displays "Current Month" and "Total Balance" (Huge Monospace).
- **Visual:** A **Sparkline** (1px single line graph) traversing the screen width. No axes, no labels, just the trend line.
- **Feed:** A high-density list of transactions.
  - _Grouped by:_ Date (Today, Yesterday).
  - _Layout:_ Time (Left, Vertical) | Merchant (Center, Serif) | Amount (Right, Mono).
- **Action:** A fixed bottom toolbar button: \[ \+ NEW ENTRY \].

### **3.3 Transaction Entry (The Core Loop)**

- **Mechanism:** A **Bottom Sheet** (60% height) that overlays the screen.
- **Input Priority:**
  1. **Numpad:** Custom 4x3 grid. Large hit areas. No system keyboard.
  2. **Category:** Horizontal scrolling rail. Selection style \= Inverted color (White background, Black text).
  3. **Note:** Optional text field.
- **Performance:** "Optimistic UI" is required. The list must update _instantly_ when "Save" is pressed; the background sync happens silently.

### **3.4 Reports & Data**

- **Visualization:** "Architectural Diagrams," not standard charts.
  - **Donut:** Thin stroke rings, no fill.
  - **Bar:** Solid rectangular blocks, sharp corners.
- **Table View:** A strict spreadsheet-like view below charts for detailed breakdown.

### **3.5 Monetization (2-Tier Model)**

- **Free Tier:** Unlimited entries, standard categories, current month data only.
- **Pro Tier (One-Time Purchase):**
  - Unlocks: Lifetime History, CSV/PDF Export, Custom Categories, Biometric Lock.
  - **Upsell UI:** A clean "Invoice-style" modal listing features with checkboxes.

## ---

**4\. Screen Architecture (15 Screens)**

The app consists of exactly these 15 states. Development should follow this list strictly.

**Phase 1: Onboarding & Hub**

1. **Splash/Login:** Stark typography, email input, "Authenticate" button.
2. **Dashboard (Populated):** The main feed with Sparkline and Transaction List.
3. **Dashboard (Empty):** Zero-state. Minimal geometric line-art, "Initialize First Entry" prompt.

Phase 2: Input & Management  
4\. Add Entry Sheet: Custom keypad, category rail.  
5\. Edit Entry Sheet: Same as Add, but pre-filled. Header: "CORRECT ENTRY".  
6\. Transaction Receipt: Full-screen detail view. Looks like a printed receipt (tear line at bottom). Delete/Edit actions here.  
7\. Success Toast: Small, non-intrusive "RECORD SAVED" notification (Pill shape).  
Phase 3: System & Config  
8\. Reports Console: Charts and Data Table.  
9\. Settings Menu: Table-of-contents style list.  
10\. Category Manager: Grid layout to add/edit taxonomy tags.  
11\. Currency Setup: Region selection (Radio buttons as inverted blocks).  
Phase 4: Pro Features  
12\. Export Console: Date range slider \+ CSV/PDF download buttons.  
13\. Biometric Lock: Black screen, fingerprint icon, "SECURE ENCLAVE LOCKED".  
14\. Pro Upsell Modal: Terms of Upgrade, feature list, "Purchase" button.  
Phase 5: Edge Cases  
15\. Offline Error: Slim warning strip under the header: "OFFLINE MODE. LOCAL SAVE."

## ---

**5\. Technical Data Strategy (Convex)**

- **Database Schema:** Developer to define based on User, Transaction, and Category relationships.
  - _Crucial:_ Money must be stored as **Integers** (cents), not Floats, to prevent rounding errors.
- **Sync Logic:**
  - The app must be "Local First" in feel. Use Convex's caching to ensure the app loads instantly even on slow networks.
- **Security:**
  - Row-level security (RLS) is mandatory. Users can only fetch/edit their own records.

## ---

**6\. Implementation Notes for Developer**

1. **Do Not Use Component Libraries:** Do not use React Native Paper or NativeBase. They are too bloated. Build primitive components (Buttons, Inputs, Cards) using **NativeWind** to match the strict design system.
2. **Haptics:** Implement expo-haptics. Every keypad press and save action should have a subtle "tick" vibration.
3. **Fonts:** Load JetBrains Mono (or similar) and a sharp Serif font. Do not use the system default font.
4. **Performance:** Avoid re-renders on the Dashboard list. Use FlashList if FlatList performance drops.

# App Specification: AI Smart Barcode & Ingredient Health Scanner

## Core Purpose
A zero-cost React Native (Expo) mobile app that helps users scan packaged food products (via Barcode or Ingredient Photo OCR) and alerts them based on both general ingredient risks and their personal health input (such as High Sugar / Diabetes).

## Core Features
1. **Personal Health Profile (Local):**
   - User can save/edit their health condition (e.g., Diabetes / High Sugar toggle, or lab sugar reading like `180 mg/dL`).
   - Optional: User can scan a health report photo via OCR to extract numbers, but MUST confirm/edit before saving.
2. **Barcode Scanner Mode:**
   - Scans product barcode using device camera.
   - Fetches product details (`product_name`, `ingredients_text`, `sugars_100g`, `nutriscore_grade`, `allergens`) from Open Food Facts free API.
   - If barcode is not found, shows a button to switch directly to **Scan Ingredients Photo (OCR)**.
3. **Ingredient Photo OCR Mode (Fallback & Local Products):**
   - Captures photo of the packet's ingredient label.
   - Extracts text offline on-device using Google ML Kit OCR.
4. **Smart Health & Sugar Alert Engine:**
   - Checks extracted ingredients/nutrition against `src/data/ingredientsRules.json` (Sugar, Sucrose, Corn Syrup, Maltodextrin, Palm Oil, INS/E-number preservatives).
   - **Personalized Sugar Alert:** If user has High Sugar / Diabetes active (or reading > 140) AND product has high sugar content or hidden sugar ingredients, display a prominent **High Sugar Warning Banner**.
5. **Local Scan History:**
   - Saves past scans locally on device (`AsyncStorage` / `SQLite`).
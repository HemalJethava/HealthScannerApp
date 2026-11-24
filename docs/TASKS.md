# Step-by-Step Build Checklist & AI Prompts (React Native CLI)

> **How to use:** Copy the prompt of the current unchecked step and give it to your AI coding assistant. Move to the next step only after building and testing the current step via `npx react-native run-android`.

---

## [ ] Step 1: Project Folder Structure & Navigation (RN CLI)
- **Goal:** Create the `src/` folder structure (`screens`, `services`, `data`, `storage`, `components`) and stack navigation starting on `HomeScreen`.
- **Prompt to give AI:**
  > "Read `AGENTS.md`, `docs/SPEC.md`, and `docs/ARCHITECTURE.md`. This is a pure React Native CLI project (not Expo). Complete ONLY **Step 1** from `docs/TASKS.md`: create the exact `src/` folders, placeholder screen files (`HomeScreen.js`, `HealthProfileScreen.js`, `BarcodeScannerScreen.js`, `IngredientOcrScreen.js`, `ResultScreen.js`, `HistoryScreen.js`), and React Navigation stack starting on `HomeScreen`. Do not implement business logic yet."

---

## [ ] Step 2: Local Storage & User Health Profile (Sugar / Diabetes Input)
- **Goal:** Save and load user's health profile (High Sugar / Diabetes status + numeric sugar value like `180`) locally using `@react-native-async-storage/async-storage`.
- **Prompt to give AI:**
  > "Read `AGENTS.md` and `docs/ARCHITECTURE.md` (React Native CLI). Complete ONLY **Step 2** from `docs/TASKS.md`: implement `src/storage/localStorage.js` and `src/screens/HealthProfileScreen.js` so the user can enter, save, and edit their sugar level / diabetes status locally on the device. Link this screen from `HomeScreen.js` without changing existing layout or navigation logic."

---

## [ ] Step 3: Ingredients Rules, Health Evaluator & Result Screen
- **Goal:** Build local rules JSON, health evaluation engine (matching product sugar/ingredients against user's sugar profile), warning banner, disclaimer, and result screen.
- **Prompt to give AI:**
  > "Read `AGENTS.md`, `docs/SPEC.md`, and `docs/ARCHITECTURE.md` (React Native CLI). Complete ONLY **Step 3** from `docs/TASKS.md`: create `src/data/ingredientsRules.json`, `src/services/healthEvaluator.js`, `src/components/WarningBanner.js`, `src/components/DisclaimerBox.js`, and `src/screens/ResultScreen.js` (including a sample/mock test button or preview data so it can be tested before camera integration). Do not modify completed files from Steps 1 and 2."

---

## [ ] Step 4: Barcode Scanner & Open Food Facts Integration (RN CLI)
- **Goal:** Scan product barcodes using camera (`react-native-vision-camera`), fetch product data from Open Food Facts free API, and navigate to `ResultScreen.js`.
- **Prompt to give AI:**
  > "Read `AGENTS.md` and `docs/ARCHITECTURE.md` (React Native CLI). Complete ONLY **Step 4** from `docs/TASKS.md`: implement `src/services/openFoodFactsService.js` and `src/screens/BarcodeScannerScreen.js` using `react-native-vision-camera` and the Open Food Facts API (`https://world.openfoodfacts.org/api/v2/product/{barcode}.json`). Pass found product data to `ResultScreen.js`, and if a barcode is not found, show a button to open `IngredientOcrScreen`. Do not alter Steps 1–3 files unless needed for navigation."

---

## [ ] Step 5: Ingredient Photo OCR (On-Device ML Kit)
- **Goal:** Capture or pick an ingredient label photo, extract text offline via `@react-native-ml-kit/text-recognition`, allow user review/edit, and evaluate with `healthEvaluator.js`.
- **Prompt to give AI:**
  > "Read `AGENTS.md` and `docs/ARCHITECTURE.md` (React Native CLI). Complete ONLY **Step 5** from `docs/TASKS.md`: implement `src/services/ocrService.js` and `src/screens/IngredientOcrScreen.js` using `@react-native-ml-kit/text-recognition` (and `react-native-image-picker` if gallery selection is included). Let the user review or edit extracted text before running `healthEvaluator.js` and navigating to `ResultScreen.js`. Do not touch previously completed files."

---

## [ ] Step 6: Scan History & Edge-Case Polish
- **Goal:** Save completed scans into local storage, display them in `HistoryScreen.js`, and handle camera permissions, empty/blurry OCR text, and network/offline states gracefully.
- **Prompt to give AI:**
  > "Read `AGENTS.md` and `docs/ARCHITECTURE.md` (React Native CLI). Complete ONLY **Step 6** from `docs/TASKS.md`: add scan history save/load/clear functions in `src/storage/localStorage.js`, implement `src/screens/HistoryScreen.js`, and add clean error/empty/loading handling across `BarcodeScannerScreen.js`, `IngredientOcrScreen.js`, and `ResultScreen.js` without breaking existing features."
# Technical Architecture & Folder Structure

## Tech Stack (₹0 Cost)
- **Framework:** React Native with Expo (Development Build via `npx expo prebuild` / `npx expo run:android`).
- **Camera & Barcode:** `expo-camera` (`CameraView` with `onBarcodeScanned`).
- **On-Device OCR:** `@react-native-ml-kit/text-recognition`.
- **Product API:** Open Food Facts (`https://world.openfoodfacts.org/api/v2/product/{barcode}.json`).
- **Local Storage:** `@react-native-async-storage/async-storage`.
- **Navigation:** `@react-navigation/native` + `@react-navigation/native-stack`.

## Exact Code Folder Structure (Do Not Change)
```text
src/
 ├── screens/
 │    ├── HomeScreen.js            # Buttons: Scan Barcode, Scan Ingredients Photo, My Health Profile, History
 │    ├── HealthProfileScreen.js   # Form to set Diabetes/Sugar level (e.g. 180) & save locally
 │    ├── BarcodeScannerScreen.js  # Live barcode camera + API call + fallback button
 │    ├── IngredientOcrScreen.js   # Camera/Gallery photo + ML Kit OCR text extraction
 │    ├── ResultScreen.js          # Product info + Personal Sugar Alert + Ingredient flags
 │    └── HistoryScreen.js         # List of locally saved scans
 ├── services/
 │    ├── openFoodFactsService.js  # Fetch & normalize product data from barcode
 │    ├── ocrService.js            # Run ML Kit OCR on image URI & clean text
 │    └── healthEvaluator.js       # Compare product sugar/ingredients with rules & user profile
 ├── data/
 │    └── ingredientsRules.json    # Keywords & risk levels (sugar, palm oil, preservatives)
 ├── storage/
 │    └── localStorage.js          # Save/get user health profile & scan history
 └── components/
      ├── WarningBanner.js         # Red/Yellow/Green alert card
      └── DisclaimerBox.js         # Non-medical informational disclaimer
const BASE_URL = 'https://world.openfoodfacts.org/api/v2/product';

// Open Food Facts asks all apps to send a descriptive User-Agent.
const HEADERS = {
  'User-Agent': 'HealthScannerApp/1.0 (React Native; Android) - github.com/your-repo',
};

/**
 * Fetch a product by barcode from Open Food Facts.
 * Returns a normalised object, or null if not found.
 */
export async function fetchProductByBarcode(barcode) {
  const url = `${BASE_URL}/${barcode}.json`;
  console.log('[OFFService] Fetching:', url);

  const response = await fetch(url, {headers: HEADERS});
  const json = await response.json();

  console.log('[OFFService] Raw response status:', json.status);
  console.log('[OFFService] Raw product object:', JSON.stringify(json.product, null, 2));

  // status 0 = not found, status 1 = found
  if (json.status !== 1 || !json.product) {
    console.log('[OFFService] Product not found for barcode:', barcode);
    return null;
  }

  const p = json.product;

  const normalised = {
    barcode,
    name:          p.product_name        || p.product_name_en || 'Unknown Product',
    brand:         p.brands              || '',
    ingredients:   p.ingredients_text    || p.ingredients_text_en || '',
    sugars100g:    p.nutriments?.sugars_100g  ?? null,
    energy100g:    p.nutriments?.energy_100g  ?? null,
    nutriscoreGrade: p.nutriscore_grade  || null,
    allergens:     p.allergens           || '',
    imageUrl:      p.image_url           || null,
  };

  console.log('[OFFService] Normalised product:', JSON.stringify(normalised, null, 2));
  return normalised;
}

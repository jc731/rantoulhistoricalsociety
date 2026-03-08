/**
 * Image registry from project root image-assets.json.
 * Use for alt_text and description; do not hardcode in components.
 * Actual image src comes from Astro imports (src/images/).
 */
import imageAssetsJson from '../../image-assets.json';

export interface ImageAsset {
  file_name: string;
  dimensions: string;
  file_size: string;
  category: string;
  alt_text: string;
  description: string;
}

const assets: ImageAsset[] = (imageAssetsJson as { image_assets: ImageAsset[] }).image_assets;

/** Home page hero/banner image: file_name from registry. Must exist in src/images and public/images. */
export const HOME_BANNER_FILE_NAME = 'rantoul-historical-society-museum-building-exterior.jpg';

export function getImageAssets(): ImageAsset[] {
  return assets;
}

export function getImageAssetByFileName(fileName: string): ImageAsset | undefined {
  return assets.find((a) => a.file_name === fileName);
}

/** Home banner asset from registry (Facilities / building exterior). Use this for the home hero; do not reference non-existent ids like "home-banner-slide". */
export function getHomeBannerAsset(): ImageAsset | undefined {
  return getImageAssetByFileName(HOME_BANNER_FILE_NAME);
}

/** Public URL for an image in public/images/ (stable path for caching and service worker). */
export function getPublicImageUrl(fileName: string): string {
  return `/images/${fileName}`;
}

export { assets as imageAssets };

import { ImageSource } from "image-source";

export interface RetrieveTextOptions {
  image: ImageSource;
  /**
   * Default "eng".
   */
  language?: string;
  /**
   * For instance to only extract numbers, set: "0123456789".
   */
  whitelist?: string;
  /**
   * For instance to exclude numbers, set: "0123456789".
   */
  blacklist?: string;
  onProgress?: (percentage: number) => void;
}

export interface RetrieveTextResult {
  text: string;
}

export interface OCRApi {
  retrieveText(options: RetrieveTextOptions): Promise<RetrieveTextResult>;
}
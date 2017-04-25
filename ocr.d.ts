import { ImageSource } from "image-source";

declare module "nativescript-ocr" {

    export interface RetrieveTextOptions {
      image: ImageSource;
      /**
       * Default "eng".
       */
      language?: string;
    }

    export function retrieveText(options: RetrieveTextOptions): Promise<any>;
}
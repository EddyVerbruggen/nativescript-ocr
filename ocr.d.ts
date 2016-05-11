declare module "nativescript-ocr" {

    export interface RetrieveTextOptions {
      image: string;
    }

    export function retrieveText(options: RetrieveTextOptions): Promise<any>;
}
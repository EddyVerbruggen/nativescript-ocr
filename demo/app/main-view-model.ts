import { Observable } from "data/observable";
import { ImageSource } from "image-source";
import { OCR, RetrieveTextResult } from "nativescript-ocr";

export class HelloWorldModel extends Observable {
  private static BUSY_KEY = "isBusy";
  private static RESULT_KEY = "result";

  public result: string;
  public isBusy: boolean = false;

  private ocr: OCR;

  constructor() {
    super();
    this.ocr = new OCR();
  }

  public doRetrieveText(): void {
    this.set(HelloWorldModel.RESULT_KEY, null);
    this.set(HelloWorldModel.BUSY_KEY, true);
    let img: ImageSource = new ImageSource();
    img.fromFile("~/samples/scanned.png").then((success: boolean) => {
      if (success) {
        this.ocr.retrieveText({
          image: img,
          // whitelist: "0123456789",
          // blacklist: "0123456789",
          onProgress: (percentage: number ) => {
            console.log(`Decoding progress: ${percentage}%`);
          }
        }).then(
            (result: RetrieveTextResult) => {
              this.set(HelloWorldModel.BUSY_KEY, false);
              this.set(HelloWorldModel.RESULT_KEY, result.text);
            }, (error: string) => {
              this.set(HelloWorldModel.BUSY_KEY, false);
              this.set(HelloWorldModel.RESULT_KEY, error);
            });
      }
    });
  }
}
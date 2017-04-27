import {
  OCRApi,
  RetrieveTextOptions,
  RetrieveTextResult
} from "./ocr.common";

let _tesseractDelegate: G8TesseractDelegate = null;

export class OCR implements OCRApi {
  retrieveText(options: RetrieveTextOptions): Promise<RetrieveTextResult> {
    return new Promise(function (resolve, reject) {
      try {

        if (!options.image) {
          reject("no image specified");
          return;
        }

        const lang = options.language || "eng";

        const tesseract = G8Tesseract.alloc().initWithLanguage(lang);
        // tesseract.engineMode = G8OCREngineModeTesseractOnly; // the default

         // Assign first to local variable, otherwise it will be garbage collected since delegate is weak reference.
        _tesseractDelegate = G8TesseractDelegateImpl.new().initWithProgressHandler(options.onProgress);
         tesseract.delegate = _tesseractDelegate;

         if (options.whitelist) {
           tesseract.charWhitelist = options.whitelist;
         }

         if (options.blacklist) {
           tesseract.charBlacklist = options.blacklist;
         }

        tesseract.doSetImage(options.image.ios);

        // tesseract.maximumRecognitionTime = 2.0;

        if (tesseract.recognize()) {
          resolve({
            text: tesseract.recognizedText
          });
        } else {
          reject("Recognize failed, check the log for possible details.");
        }
      } catch (ex) {
        console.log("Error in ocr.retrieveText: " + ex);
        reject(ex);
      }
    });
  }
}

class G8TesseractDelegateImpl extends NSObject implements G8TesseractDelegate {
  public static ObjCProtocols = [G8TesseractDelegate];
  private progressHandler: (percentage: number) => void;

  static new(): G8TesseractDelegateImpl {
    return <G8TesseractDelegateImpl>super.new();
  }

  public initWithProgressHandler(progressHandler: (percentage: number) => void): G8TesseractDelegateImpl {
    this.progressHandler = progressHandler;
    return this;
  }

  shouldCancelImageRecognitionForTesseract(tesseract: G8Tesseract): boolean {
    return false;
  }

  progressImageRecognitionForTesseract(tesseract: G8Tesseract): void {
    if (this.progressHandler !== undefined) {
      this.progressHandler(tesseract.progress);
    } else {
      console.log("Progress: " + tesseract.progress);
    }
  }

}
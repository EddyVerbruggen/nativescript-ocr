import * as fs from "file-system";

import {
  OCRApi,
  RetrieveTextOptions,
  RetrieveTextResult
} from "./ocr.common";

declare const com: any;

export class OCR implements OCRApi {
  retrieveText(options: RetrieveTextOptions): Promise<RetrieveTextResult> {
    return new Promise(function (resolve, reject) {
      try {
        if (!options.image) {
          reject("no image specified");
          return;
        }

        const lang = options.language || "eng";

        const progressNotifier = new com.googlecode.tesseract.android.TessBaseAPI.ProgressNotifier({
          onProgressValues: (progressValues) => {
            if (options.onProgress) {
              options.onProgress(progressValues.getPercent());
            } else {
              console.log("Progress: " + progressValues.getPercent());
            }
          }
        });

        const tessBaseAPI = new com.googlecode.tesseract.android.TessBaseAPI(progressNotifier);
        tessBaseAPI.setDebug(false);

        const tessfolder = fs.path.join(fs.knownFolders.currentApp().path, "tesseract");

        const initSuccess = tessBaseAPI.init(tessfolder, lang, com.googlecode.tesseract.android.TessBaseAPI.OEM_TESSERACT_ONLY);
        // const initSuccess = tessBaseAPI.init(tessfolder, lang, com.googlecode.tesseract.android.TessBaseAPI.OEM_DEFAULT);

        if (!initSuccess) {
          reject("init failed");
          return;
        }

        // see https://github.com/rmtheis/tess-two/blob/master/tess-two/src/com/googlecode/tesseract/android/TessBaseAPI.java#L53
        // tessBaseAPI.setPageSegMode(com.googlecode.tesseract.android.TessBaseAPI.PageSegMode.PSM_AUTO_OSD);
        // tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_SAVE_BLOB_CHOICES, com.googlecode.tesseract.android.TessBaseAPI.VAR_TRUE);

        if (options.whitelist) {
          tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_CHAR_WHITELIST, options.whitelist);
        }

        if (options.blacklist) {
          tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_CHAR_BLACKLIST, options.blacklist);
        }

        tessBaseAPI.setImage(options.image.android);
        const recognizedText = tessBaseAPI.getUTF8Text();

        tessBaseAPI.end();

        resolve({
          text: recognizedText
        });
      } catch (ex) {
        console.log("Error in ocr.retrieveText: " + ex);
        reject(ex);
      }
    });
  }
}
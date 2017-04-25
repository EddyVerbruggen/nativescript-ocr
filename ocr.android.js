var ocr = require("./ocr-common");
var fs = require("file-system");

ocr.retrieveText = function(arg) {
  return new Promise(function (resolve, reject) {
    try {
      
      if (!arg.image) {
        reject("no image specified");
        return;
      }

      var lang = arg.language || "eng";

      var tessBaseAPI = new com.googlecode.tesseract.android.TessBaseAPI();
      tessBaseAPI.setDebug(true);
      
      var tessfolder = fs.path.join(fs.knownFolders.currentApp().path, "tesseract");

      // see https://github.com/rmtheis/tess-two/blob/master/tess-two/src/com/googlecode/tesseract/android/TessBaseAPI.java#L111
      var initSuccess = tessBaseAPI.init(tessfolder, lang, com.googlecode.tesseract.android.TessBaseAPI.OEM_TESSERACT_ONLY);
      // var initSuccess = tessBaseAPI.init(tessfolder, "eng", com.googlecode.tesseract.android.TessBaseAPI.OEM_TESSERACT_CUBE_COMBINED);

      if (!initSuccess) {
        reject("init failed");
        return;
      }

      // see https://github.com/rmtheis/tess-two/blob/master/tess-two/src/com/googlecode/tesseract/android/TessBaseAPI.java#L53
      // tessBaseAPI.setPageSegMode(com.googlecode.tesseract.android.TessBaseAPI.PageSegMode.PSM_AUTO_OSD);
      // tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_SAVE_BLOB_CHOICES, com.googlecode.tesseract.android.TessBaseAPI.VAR_TRUE);
        
      // limit to numbers
      // tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_CHAR_WHITELIST, "1234567890");

      tessBaseAPI.setImage(arg.image.android);
      var recognizedText = tessBaseAPI.getUTF8Text();

      tessBaseAPI.end();

      resolve({
        text: recognizedText
      });
    } catch (ex) {
      console.log("Error in ocr.scan: " + ex);
      reject(ex);
    }
  });
};

module.exports = ocr;
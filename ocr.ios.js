var ocr = require("./ocr-common");

ocr.retrieveText = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      
      if (!arg.image) {
        reject("no image specified");
        return;
      }

      var tesseract = G8Tesseract.alloc().initWithLanguage("eng");
      // tesseract.engineMode = G8OCREngineModeTesseractOnly; // the default

      /*
      // Assign first to local variable, otherwise it will be garbage collected since delegate is weak reference.
      var delegate = G8TesseractDelegateImpl.new().initWithCallback(function (result) {
        // Remove the local variable for the delegate.
        delegate = undefined;
      });
      tesseract.delegate = delegate;
      */

      // tesseract.charWhitelist = "0123456789";
      // tesseract.charBlacklist = "OoZzBbSs";

      tesseract.doSetImage(arg.image.ios);

      // tesseract.maximumRecognitionTime = 2.0;
      
      tesseract.recognize();        

      resolve({
        text: tesseract.recognizedText
      });
    } catch (ex) {
      console.log("Error in ocr.scan: " + ex);
      reject(ex);
    }
  });
};

var G8TesseractDelegateImpl = (function (_super) {
  __extends(G8TesseractDelegateImpl, _super);
  function G8TesseractDelegateImpl() {
    _super.apply(this, arguments);
  }

  G8TesseractDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  G8TesseractDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };
  G8TesseractDelegateImpl.prototype.shouldCancelImageRecognitionForTesseract = function (tess) {
  };
  G8TesseractDelegateImpl.ObjCProtocols = [G8TesseractDelegate];
  return G8TesseractDelegateImpl;
})(NSObject);

module.exports = ocr;
# NativeScript OCR

Optical Character Recognition - powered by Tesseract

This plugin is pretty limited at the moment, but feel free to rip it apart for your purpose and send a PR if applicable :)

## Setup
You'll need to add language files to help Tesseract recognizing text in the images you feed it.

### Android
Just add the `*.traineddata` files you need in `app/tesseract/tessdata/`.

### iOS
After installing the plugin open your `platforms/ios/<project>.xcworkspace` file and follow [these instructions](https://github.com/gali8/Tesseract-OCR-iOS/wiki/Installation#importing-the-tessdata-folder)
to add the tessdata folder as a reference to your project.

## Example
```js
var ocr = require("nativescript-ocr");
var dialogs = require("ui/dialogs");
var imageSource = require("image-source");

DemoAppModel.prototype.doOCR = function () {
  ocr.retrieveText({
    // assuming here you have a file at app/testimages/file.png
    image: imageSource.fromFile("~/testimages/file.png")
  }).then(
      function (result) {
          dialogs.alert({
              title: "Scan OK",
              message: result.text,
              okButtonText: "Sweet"
          });
      },
      function (error) {
          dialogs.alert({
              title: "Scan NOT OK",
              message: error,
              okButtonText: "Mmkay"
          });
      }
  );
};

```

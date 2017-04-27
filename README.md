# NativeScript OCR

[![Build Status][build-status]][build-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-ocr.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-ocr
[npm-image]:http://img.shields.io/npm/v/nativescript-ocr.svg
[npm-url]:https://npmjs.org/package/nativescript-ocr
[downloads-image]:http://img.shields.io/npm/dm/nativescript-ocr.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://github.com/EddyVerbruggen/nativescript-ocr/raw/master/demo/app/samples/scanned.png" height="440px"/> <img src="https://github.com/EddyVerbruggen/nativescript-ocr/raw/master/screenshots/ios-scanning.png" height="440px"/> <img src="https://github.com/EddyVerbruggen/nativescript-ocr/raw/master/screenshots/ios-scanned.png" height="440px"/>

Optical Character Recognition - powered by Tesseract

## Installation
```bash
tns plugin add nativescript-ocr
```

## Setup
You'll need to add language files to help Tesseract recognizing text in the images you feed it.

Download version 3.04.00 of the tessdata files [here](https://github.com/tesseract-ocr/tessdata/releases/tag/3.04.00) and
add your required language to the `app/tesseract/tessdata/` folder of your app.

Note that if your language(s) has multiple files (like English: there's 9 files matching `eng.*`), copy _all_ those files to the folder.

### iOS
iOS searches for the tessdata folder in `app/App_Resources/iOS`, but instead of dulicating the folder
you can create a symbolic link:

```bash
cd app/App_Resources/iOS
ln -s ../../tesseract/tessdata
```

## API

### `retrieveText`

#### JavaScript
This is just a basic example using the default settings, look at the TypeScript code below
for a more elaborate example.

```js
var OCRPlugin = require("nativescript-ocr");
var ocr = new OCRPlugin.OCR();

ocr.retrieveText({
  image: myImage
}).then(
    function (result) {
      console.log("Result: " + result.text);
    },
    function (error) {
      console.log("Error: " + error);
    }
);
```

#### TypeScript
This example shows how to use all possible (but optional) options you can pass into `retrieveText`:

```js
import { OCR, RetrieveTextResult } from "nativescript-ocr";
import { ImageSource } from "image-source";

export Class MyOCRClass {
  private ocr: OCR;
  
  constructor() {
    this.ocr = new OCR();
  }

  doRecognize(): void {
    let img: ImageSource = new ImageSource();

    img.fromFile("~/samples/scanned.png").then((success: boolean) => {
      if (success) {
        this.ocr.retrieveText({
          image: img,
          whitelist: "ABCDEF",     // you can include only certain characters in the result
          blacklist: "0123456789", // .. or you can exclude certain characters from the result
          onProgress: (percentage: number ) => {
            console.log(`Decoding progress: ${percentage}%`);
          }
        }).then(
            (result: RetrieveTextResult) => {
              this.set(HelloWorldModel.BUSY_KEY, false);
              console.log(`Result: ${result.text}`);
            }, (error: string) => {
              console.log(`Error: ${err}`);
            })
      }
    });
  }
}
```

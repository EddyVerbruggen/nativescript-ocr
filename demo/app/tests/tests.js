var Ocr = require("nativescript-ocr").Ocr;
var ocr = new Ocr();

describe("retrieveText", function () {
  it("exists", function () {
    expect(ocr.retrieveText).toBeDefined();
  });

  it("returns a promise", function () {
    expect(ocr.retrieveText()).toEqual(jasmine.any(Promise));
  });
});
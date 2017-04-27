
declare const enum G8OCREngineMode {

	TesseractOnly = 0,

	CubeOnly = 1,

	TesseractCubeCombined = 2
}

declare const enum G8Orientation {

	PageUp = 0,

	PageRight = 1,

	PageDown = 2,

	PageLeft = 3
}

declare const enum G8PageIteratorLevel {

	Block = 0,

	Paragraph = 1,

	Textline = 2,

	Word = 3,

	Symbol = 4
}

declare const enum G8PageSegmentationMode {

	OSDOnly = 0,

	AutoOSD = 1,

	AutoOnly = 2,

	Auto = 3,

	SingleColumn = 4,

	SingleBlockVertText = 5,

	SingleBlock = 6,

	SingleLine = 7,

	SingleWord = 8,

	CircleWord = 9,

	SingleChar = 10,

	SparseText = 11,

	SparseTextOSD = 12
}

declare class G8RecognitionOperation extends NSOperation {

	/**
	 * Returns a new instance of the receiving class.
	 */
	static alloc(): G8RecognitionOperation; // inherited from NSObject

	/**
	 * Allocates a new instance of the receiving class, sends it an init message, and returns the initialized object.
	 */
	static new(): G8RecognitionOperation; // inherited from NSObject

	delegate: G8TesseractDelegate;

	readonly progress: number;

	progressCallbackBlock: (p1: G8Tesseract) => void;

	recognitionCompleteBlock: (p1: G8Tesseract) => void;

	readonly tesseract: G8Tesseract;

	constructor(o: { language: string; });

	initWithLanguage(language: string): this;
}

declare class G8RecognizedBlock extends NSObject implements NSCopying {

	/**
	 * Returns a new instance of the receiving class.
	 */
	static alloc(): G8RecognizedBlock; // inherited from NSObject

	/**
	 * Allocates a new instance of the receiving class, sends it an init message, and returns the initialized object.
	 */
	static new(): G8RecognizedBlock; // inherited from NSObject

	readonly boundingBox: CGRect;

	readonly confidence: number;

	readonly level: G8PageIteratorLevel;

	readonly text: string;

	constructor(o: { text: string; boundingBox: CGRect; confidence: number; level: G8PageIteratorLevel; });

	boundingBoxAtImageOfSize(imageSize: CGSize): CGRect;

	/**
	 * Returns a new instance that’s a copy of the receiver.
	 * @param zone - This parameter is ignored. Memory zones are no longer used by Objective-C.
	 */
	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithTextBoundingBoxConfidenceLevel(text: string, boundingBox: CGRect, confidence: number, level: G8PageIteratorLevel): this;
}

declare class G8Tesseract extends NSObject {

	/**
	 * Returns a new instance of the receiving class.
	 */
	static alloc(): G8Tesseract; // inherited from NSObject

	static clearCache(): void;

	/**
	 * Allocates a new instance of the receiving class, sends it an init message, and returns the initialized object.
	 */
	static new(): G8Tesseract; // inherited from NSObject

	readonly absoluteDataPath: string;

	charBlacklist: string;

	charWhitelist: string;

	readonly characterChoices: NSArray<any>;

	delegate: G8TesseractDelegate;

	readonly deskewAngle: number;

	readonly engineConfigured: boolean;

	engineMode: G8OCREngineMode;

	image: UIImage;

	language: string;

	maximumRecognitionTime: number;

	readonly orientation: G8Orientation;

	pageSegmentationMode: G8PageSegmentationMode;

	readonly progress: number;

	readonly recognizedText: string;

	rect: CGRect;

	sourceResolution: number;

	readonly textlineOrder: G8TextlineOrder;

	readonly thresholdedImage: UIImage;

	readonly writingDirection: G8WritingDirection;

	constructor(o: { language: string; });

	constructor(o: { language: string; configDictionary: NSDictionary<any, any>; configFileNames: NSArray<any>; absoluteDataPath: string; engineMode: G8OCREngineMode; });

	constructor(o: { language: string; configDictionary: NSDictionary<any, any>; configFileNames: NSArray<any>; cachesRelatedDataPath: string; engineMode: G8OCREngineMode; });

	constructor(o: { language: string; engineMode: G8OCREngineMode; });

	analyseLayout(): void;

	doSetImage(image: UIImage): void;

	imageWithBlocksDrawTextThresholded(blocks: NSArray<any>, drawText: boolean, thresholded: boolean): UIImage;

	initWithLanguage(language: string): this;

	initWithLanguageConfigDictionaryConfigFileNamesAbsoluteDataPathEngineMode(language: string, configDictionary: NSDictionary<any, any>, configFileNames: NSArray<any>, absoluteDataPath: string, engineMode: G8OCREngineMode): this;

	initWithLanguageConfigDictionaryConfigFileNamesCachesRelatedDataPathEngineMode(language: string, configDictionary: NSDictionary<any, any>, configFileNames: NSArray<any>, cachesRelatedDataPath: string, engineMode: G8OCREngineMode): this;

	initWithLanguageEngineMode(language: string, engineMode: G8OCREngineMode): this;

	recognize(): boolean;

	recognizedBlocksByIteratorLevel(pageIteratorLevel: G8PageIteratorLevel): NSArray<any>;

	recognizedHOCRForPageNumber(pageNumber: number): string;

	recognizedPDFForImages(images: NSArray<any>): NSData;

	setVariableValueForKey(value: string, key: string): void;

	setVariablesFromDictionary(dictionary: NSDictionary<any, any>): void;

	variableValueForKey(key: string): string;
}

interface G8TesseractDelegate extends NSObjectProtocol {

	preprocessedImageForTesseractSourceImage?(tesseract: G8Tesseract, sourceImage: UIImage): UIImage;

	progressImageRecognitionForTesseract?(tesseract: G8Tesseract): void;

	shouldCancelImageRecognitionForTesseract?(tesseract: G8Tesseract): boolean;
}
declare var G8TesseractDelegate: {

	prototype: G8TesseractDelegate;
};

declare const enum G8TextlineOrder {

	LeftToRight = 0,

	RightToLeft = 1,

	TopToBottom = 2
}

declare const enum G8WritingDirection {

	LeftToRight = 0,

	RightToLeft = 1,

	TopToBottom = 2
}

declare var TesseractOCRVersionNumber: number;

declare var TesseractOCRVersionNumberVar: number;

declare var TesseractOCRVersionString: interop.Reference<number>;

declare var TesseractOCRVersionStringVar: interop.Reference<number>;

declare var kG8DefaultResolution: number;

declare var kG8MaxCredibleResolution: number;

declare var kG8MinCredibleResolution: number;

declare var kG8ParamApplyboxDebug: string;

declare var kG8ParamApplyboxExposurePattern: string;

declare var kG8ParamApplyboxLearnCharsAndCharFragsMode: string;

declare var kG8ParamApplyboxLearnNgramsMode: string;

declare var kG8ParamApplyboxPage: string;

declare var kG8ParamAssumeFixedPitchCharSegment: string;

declare var kG8ParamBestratePruningFactor: string;

declare var kG8ParamBidiDebug: string;

declare var kG8ParamBlandUnrej: string;

declare var kG8ParamCertaintyScale: string;

declare var kG8ParamChopCenterKnob: string;

declare var kG8ParamChopCenteredMaxwidth: string;

declare var kG8ParamChopDebug: string;

declare var kG8ParamChopEnable: string;

declare var kG8ParamChopGoodSplit: string;

declare var kG8ParamChopInsideAngle: string;

declare var kG8ParamChopMinOutlineArea: string;

declare var kG8ParamChopMinOutlinePoints: string;

declare var kG8ParamChopNewSeamPile: string;

declare var kG8ParamChopOkSplit: string;

declare var kG8ParamChopOverlapKnob: string;

declare var kG8ParamChopSameDistance: string;

declare var kG8ParamChopSeamPileSize: string;

declare var kG8ParamChopSharpnessKnob: string;

declare var kG8ParamChopSplitDistKnob: string;

declare var kG8ParamChopSplitLength: string;

declare var kG8ParamChopVerticalCreep: string;

declare var kG8ParamChopWidthChangeKnob: string;

declare var kG8ParamChopXYWeight: string;

declare var kG8ParamChsLeadingPunct: string;

declare var kG8ParamChsTrailingPunct1: string;

declare var kG8ParamChsTrailingPunct2: string;

declare var kG8ParamClassifyAdaptFeatureThreshold: string;

declare var kG8ParamClassifyAdaptProtoThreshold: string;

declare var kG8ParamClassifyAdaptedPruningFactor: string;

declare var kG8ParamClassifyAdaptedPruningThreshold: string;

declare var kG8ParamClassifyBlnNumericMode: string;

declare var kG8ParamClassifyCharNormRange: string;

declare var kG8ParamClassifyCharacterFragmentsGarbageCertaintyThreshold: string;

declare var kG8ParamClassifyClassPrunerMultiplier: string;

declare var kG8ParamClassifyClassPrunerThreshold: string;

declare var kG8ParamClassifyCpCutoffStrength: string;

declare var kG8ParamClassifyDebugCharacterFragments: string;

declare var kG8ParamClassifyDebugLevel: string;

declare var kG8ParamClassifyEnableAdaptiveDebugger: string;

declare var kG8ParamClassifyEnableAdaptiveMatcher: string;

declare var kG8ParamClassifyEnableLearning: string;

declare var kG8ParamClassifyIntegerMatcherMultiplier: string;

declare var kG8ParamClassifyLearnDebugStr: string;

declare var kG8ParamClassifyLearningDebugLevel: string;

declare var kG8ParamClassifyMaxCertaintyMargin: string;

declare var kG8ParamClassifyMaxNormScaleX: string;

declare var kG8ParamClassifyMaxNormScaleY: string;

declare var kG8ParamClassifyMaxRatingRatio: string;

declare var kG8ParamClassifyMinNormScaleX: string;

declare var kG8ParamClassifyMinNormScaleY: string;

declare var kG8ParamClassifyMisfitJunkPenalty: string;

declare var kG8ParamClassifyNonlinearNorm: string;

declare var kG8ParamClassifyNormMethod: string;

declare var kG8ParamClassifySaveAdaptedTemplates: string;

declare var kG8ParamClassifyUsePreAdaptedTemplates: string;

declare var kG8ParamConflictSetIL1: string;

declare var kG8ParamCrunchAcceptOk: string;

declare var kG8ParamCrunchDebug: string;

declare var kG8ParamCrunchDelCert: string;

declare var kG8ParamCrunchDelHighWord: string;

declare var kG8ParamCrunchDelLowWord: string;

declare var kG8ParamCrunchDelMaxHt: string;

declare var kG8ParamCrunchDelMinHt: string;

declare var kG8ParamCrunchDelMinWidth: string;

declare var kG8ParamCrunchDelRating: string;

declare var kG8ParamCrunchEarlyConvertBadUnlvChs: string;

declare var kG8ParamCrunchEarlyMergeTessFails: string;

declare var kG8ParamCrunchIncludeNumerals: string;

declare var kG8ParamCrunchLeaveAcceptStrings: string;

declare var kG8ParamCrunchLeaveLcStrings: string;

declare var kG8ParamCrunchLeaveOkStrings: string;

declare var kG8ParamCrunchLeaveUcStrings: string;

declare var kG8ParamCrunchLongRepetitions: string;

declare var kG8ParamCrunchPoorGarbageCert: string;

declare var kG8ParamCrunchPoorGarbageRate: string;

declare var kG8ParamCrunchPotGarbage: string;

declare var kG8ParamCrunchPotIndicators: string;

declare var kG8ParamCrunchPotPoorCert: string;

declare var kG8ParamCrunchPotPoorRate: string;

declare var kG8ParamCrunchRatingMax: string;

declare var kG8ParamCrunchSmallOutlinesSize: string;

declare var kG8ParamCrunchTerribleGarbage: string;

declare var kG8ParamCrunchTerribleRating: string;

declare var kG8ParamCubeDebugLevel: string;

declare var kG8ParamDawgDebugLevel: string;

declare var kG8ParamDebugAcceptableWds: string;

declare var kG8ParamDebugFixSpaceLevel: string;

declare var kG8ParamDebugXHtLevel: string;

declare var kG8ParamDisableCharacterFragments: string;

declare var kG8ParamDocDictCertaintyThreshold: string;

declare var kG8ParamDocDictPendingThreshold: string;

declare var kG8ParamDocqualExcuseOutlineErrs: string;

declare var kG8ParamEnableNewSegsearch: string;

declare var kG8ParamFileType: string;

declare var kG8ParamFixspDoneMode: string;

declare var kG8ParamFixspNonNoiseLimit: string;

declare var kG8ParamFixspSmallOutlinesSize: string;

declare var kG8ParamForceWordAssoc: string;

declare var kG8ParamFragmentsDebug: string;

declare var kG8ParamFragmentsGuideChopper: string;

declare var kG8ParamHeuristicMaxCharWhRatio: string;

declare var kG8ParamHeuristicSegcostRatingBase: string;

declare var kG8ParamHeuristicWeightRating: string;

declare var kG8ParamHeuristicWeightSeamcut: string;

declare var kG8ParamHeuristicWeightWidth: string;

declare var kG8ParamHyphenDebugLevel: string;

declare var kG8ParamIl1AdaptionTest: string;

declare var kG8ParamInteractiveDisplayMode: string;

declare var kG8ParamLanguageModelDebugLevel: string;

declare var kG8ParamLanguageModelFixedLengthChoicesDepth: string;

declare var kG8ParamLanguageModelMinCompoundLength: string;

declare var kG8ParamLanguageModelNgramNonmatchScore: string;

declare var kG8ParamLanguageModelNgramOn: string;

declare var kG8ParamLanguageModelNgramOrder: string;

declare var kG8ParamLanguageModelNgramRatingFactor: string;

declare var kG8ParamLanguageModelNgramScaleFactor: string;

declare var kG8ParamLanguageModelNgramSmallProb: string;

declare var kG8ParamLanguageModelNgramSpaceDelimitedLanguage: string;

declare var kG8ParamLanguageModelNgramUseOnlyFirstUft8Step: string;

declare var kG8ParamLanguageModelPenaltyCase: string;

declare var kG8ParamLanguageModelPenaltyChartype: string;

declare var kG8ParamLanguageModelPenaltyFont: string;

declare var kG8ParamLanguageModelPenaltyIncrement: string;

declare var kG8ParamLanguageModelPenaltyNonDictWord: string;

declare var kG8ParamLanguageModelPenaltyNonFreqDictWord: string;

declare var kG8ParamLanguageModelPenaltyPunc: string;

declare var kG8ParamLanguageModelPenaltyScript: string;

declare var kG8ParamLanguageModelPenaltySpacing: string;

declare var kG8ParamLanguageModelUseSigmoidalCertainty: string;

declare var kG8ParamLanguageModelViterbiListMaxNumPrunable: string;

declare var kG8ParamLanguageModelViterbiListMaxSize: string;

declare var kG8ParamLoadBigramDawg: string;

declare var kG8ParamLoadFixedLengthDawgs: string;

declare var kG8ParamLoadFreqDawg: string;

declare var kG8ParamLoadNumberDawg: string;

declare var kG8ParamLoadPuncDawg: string;

declare var kG8ParamLoadSystemDawg: string;

declare var kG8ParamLoadUnambigDawg: string;

declare var kG8ParamMatcherAvgNoiseSize: string;

declare var kG8ParamMatcherBadMatchPad: string;

declare var kG8ParamMatcherClusteringMaxAngleDelta: string;

declare var kG8ParamMatcherDebugFlags: string;

declare var kG8ParamMatcherDebugLevel: string;

declare var kG8ParamMatcherDebugSeparateWindows: string;

declare var kG8ParamMatcherGoodThreshold: string;

declare var kG8ParamMatcherGreatThreshold: string;

declare var kG8ParamMatcherMinExamplesForPrototyping: string;

declare var kG8ParamMatcherPerfectThreshold: string;

declare var kG8ParamMatcherPermanentClassesMin: string;

declare var kG8ParamMatcherRatingMargin: string;

declare var kG8ParamMatcherSufficientExamplesForPrototyping: string;

declare var kG8ParamMaxPermuterAttempts: string;

declare var kG8ParamMaxViterbiListSize: string;

declare var kG8ParamMergeFragmentsInMatrix: string;

declare var kG8ParamMinOrientationMargin: string;

declare var kG8ParamMinSaneXHtPixels: string;

declare var kG8ParamNgramPermuterActivated: string;

declare var kG8ParamNumericPunctuation: string;

declare var kG8ParamOkRepeatedChNonAlphanumWds: string;

declare var kG8ParamOutlines2: string;

declare var kG8ParamOutlinesOdd: string;

declare var kG8ParamOutputAmbigWordsFile: string;

declare var kG8ParamParagraphDebugLevel: string;

declare var kG8ParamParagraphTextBased: string;

declare var kG8ParamPermuteChartypeWord: string;

declare var kG8ParamPermuteDebug: string;

declare var kG8ParamPermuteFixedLengthDawg: string;

declare var kG8ParamPermuteOnlyTop: string;

declare var kG8ParamPermuteScriptWord: string;

declare var kG8ParamPolyAllowDetailedFx: string;

declare var kG8ParamPrioritizeDivision: string;

declare var kG8ParamQualityBlobPc: string;

declare var kG8ParamQualityCharPc: string;

declare var kG8ParamQualityMinInitialAlphasReqd: string;

declare var kG8ParamQualityOutlinePc: string;

declare var kG8ParamQualityRejPc: string;

declare var kG8ParamQualityRowrejPc: string;

declare var kG8ParamRatingScale: string;

declare var kG8ParamRej1IlTrustPermuterType: string;

declare var kG8ParamRej1IlUseDictWord: string;

declare var kG8ParamRejAlphasInNumberPerm: string;

declare var kG8ParamRejTrustDocDawg: string;

declare var kG8ParamRejUseGoodPerm: string;

declare var kG8ParamRejUseSensibleWd: string;

declare var kG8ParamRejUseTessAccepted: string;

declare var kG8ParamRejUseTessBlanks: string;

declare var kG8ParamRejWholeOfMostlyRejectWordFract: string;

declare var kG8ParamRepairUnchoppedBlobs: string;

declare var kG8ParamSaveAltChoices: string;

declare var kG8ParamSaveDocWords: string;

declare var kG8ParamSaveRawChoices: string;

declare var kG8ParamSegmentAdjustDebug: string;

declare var kG8ParamSegmentDebug: string;

declare var kG8ParamSegmentNonalphabeticScript: string;

declare var kG8ParamSegmentPenaltyDictCaseBad: string;

declare var kG8ParamSegmentPenaltyDictCaseOk: string;

declare var kG8ParamSegmentPenaltyDictFrequentWord: string;

declare var kG8ParamSegmentPenaltyDictNonword: string;

declare var kG8ParamSegmentPenaltyGarbage: string;

declare var kG8ParamSegmentPenaltyNgramBestChoice: string;

declare var kG8ParamSegmentRewardChartype: string;

declare var kG8ParamSegmentRewardNgramBestChoice: string;

declare var kG8ParamSegmentRewardScript: string;

declare var kG8ParamSegmentSegcostRating: string;

declare var kG8ParamSegsearchDebugLevel: string;

declare var kG8ParamSegsearchMaxCharWhRatio: string;

declare var kG8ParamSegsearchMaxFixedPitchCharWhRatio: string;

declare var kG8ParamSegsearchMaxFutileClassifications: string;

declare var kG8ParamSegsearchMaxPainPoints: string;

declare var kG8ParamSpeckleLargeMaxSize: string;

declare var kG8ParamSpeckleRatingPenalty: string;

declare var kG8ParamStopperAllowableCharacterBadness: string;

declare var kG8ParamStopperCertaintyPerChar: string;

declare var kG8ParamStopperDebugLevel: string;

declare var kG8ParamStopperNoAcceptableChoices: string;

declare var kG8ParamStopperNondictCertaintyBase: string;

declare var kG8ParamStopperPhase2CertaintyRejectionOffset: string;

declare var kG8ParamStopperSmallwordSize: string;

declare var kG8ParamSubscriptMaxYTop: string;

declare var kG8ParamSuperscriptBetteredCertainty: string;

declare var kG8ParamSuperscriptDebug: string;

declare var kG8ParamSuperscriptMinYBottom: string;

declare var kG8ParamSuperscriptScaledownRatio: string;

declare var kG8ParamSuperscriptWorseCertainty: string;

declare var kG8ParamSuspectAcceptRating: string;

declare var kG8ParamSuspectConstrain1Il: string;

declare var kG8ParamSuspectLevel: string;

declare var kG8ParamSuspectRatingPerCh: string;

declare var kG8ParamSuspectShortWords: string;

declare var kG8ParamSuspectSpaceLevel: string;

declare var kG8ParamTessBnMatching: string;

declare var kG8ParamTessCnMatching: string;

declare var kG8ParamTessdataManagerDebugLevel: string;

declare var kG8ParamTesseditAdaptionDebug: string;

declare var kG8ParamTesseditAmbigsTraining: string;

declare var kG8ParamTesseditBigramDebug: string;

declare var kG8ParamTesseditCertaintyThreshold: string;

declare var kG8ParamTesseditCharBlacklist: string;

declare var kG8ParamTesseditCharWhitelist: string;

declare var kG8ParamTesseditClassMissScale: string;

declare var kG8ParamTesseditConsistentReps: string;

declare var kG8ParamTesseditCreateBoxfile: string;

declare var kG8ParamTesseditCreateHocr: string;

declare var kG8ParamTesseditCreatePdf: string;

declare var kG8ParamTesseditDebugBlockRejection: string;

declare var kG8ParamTesseditDebugDocRejection: string;

declare var kG8ParamTesseditDebugFonts: string;

declare var kG8ParamTesseditDebugQualityMetrics: string;

declare var kG8ParamTesseditDisplayOutwords: string;

declare var kG8ParamTesseditDontBlkrejGoodWds: string;

declare var kG8ParamTesseditDontRowrejGoodWds: string;

declare var kG8ParamTesseditDumpChoices: string;

declare var kG8ParamTesseditDumpPagesegImages: string;

declare var kG8ParamTesseditEnableBigramCorrection: string;

declare var kG8ParamTesseditEnableDocDict: string;

declare var kG8ParamTesseditFixFuzzySpaces: string;

declare var kG8ParamTesseditFixHyphens: string;

declare var kG8ParamTesseditFlip0O: string;

declare var kG8ParamTesseditGoodDocStillRowrejWd: string;

declare var kG8ParamTesseditGoodQualityUnrej: string;

declare var kG8ParamTesseditImageBorder: string;

declare var kG8ParamTesseditInitConfigOnly: string;

declare var kG8ParamTesseditLoadSublangs: string;

declare var kG8ParamTesseditLowerFlipHyphen: string;

declare var kG8ParamTesseditMakeBoxesFromBoxes: string;

declare var kG8ParamTesseditMatcherLog: string;

declare var kG8ParamTesseditMinimalRejPass1: string;

declare var kG8ParamTesseditMinimalRejection: string;

declare var kG8ParamTesseditOcrEngineMode: string;

declare var kG8ParamTesseditOkMode: string;

declare var kG8ParamTesseditOverridePermuter: string;

declare var kG8ParamTesseditPageNumber: string;

declare var kG8ParamTesseditPagesegMode: string;

declare var kG8ParamTesseditParallelize: string;

declare var kG8ParamTesseditPreferJoinedPunct: string;

declare var kG8ParamTesseditPreserveBlkRejPerfectWds: string;

declare var kG8ParamTesseditPreserveMinWdLen: string;

declare var kG8ParamTesseditPreserveRowRejPerfectWds: string;

declare var kG8ParamTesseditRedoXheight: string;

declare var kG8ParamTesseditRejectBadQualWds: string;

declare var kG8ParamTesseditRejectBlockPercent: string;

declare var kG8ParamTesseditRejectDocPercent: string;

declare var kG8ParamTesseditRejectMode: string;

declare var kG8ParamTesseditRejectRowPercent: string;

declare var kG8ParamTesseditRejectionDebug: string;

declare var kG8ParamTesseditResegmentFromBoxes: string;

declare var kG8ParamTesseditResegmentFromLineBoxes: string;

declare var kG8ParamTesseditRowRejGoodDocs: string;

declare var kG8ParamTesseditSingleMatch: string;

declare var kG8ParamTesseditTessAdaptionMode: string;

declare var kG8ParamTesseditTestAdaption: string;

declare var kG8ParamTesseditTestAdaptionMode: string;

declare var kG8ParamTesseditTimingDebug: string;

declare var kG8ParamTesseditTrainFromBoxes: string;

declare var kG8ParamTesseditTrainingTess: string;

declare var kG8ParamTesseditTruncateWordchoiceLog: string;

declare var kG8ParamTesseditUnrejAnyWd: string;

declare var kG8ParamTesseditUpperFlipHyphen: string;

declare var kG8ParamTesseditUsePrimaryParamsModel: string;

declare var kG8ParamTesseditUseRejectSpaces: string;

declare var kG8ParamTesseditWholeWdRejRowPercent: string;

declare var kG8ParamTesseditWordForWord: string;

declare var kG8ParamTesseditWriteBlockSeparators: string;

declare var kG8ParamTesseditWriteImages: string;

declare var kG8ParamTesseditWriteParamsToFile: string;

declare var kG8ParamTesseditWriteRepCodes: string;

declare var kG8ParamTesseditWriteUnlv: string;

declare var kG8ParamTesseditZeroKelvinRejection: string;

declare var kG8ParamTesseditZeroRejection: string;

declare var kG8ParamTestPt: string;

declare var kG8ParamTestPtX: string;

declare var kG8ParamTestPtY: string;

declare var kG8ParamTextordAscheightModeFraction: string;

declare var kG8ParamTextordAscxRatioMax: string;

declare var kG8ParamTextordAscxRatioMin: string;

declare var kG8ParamTextordBaselineDebug: string;

declare var kG8ParamTextordBiasedSkewcalc: string;

declare var kG8ParamTextordBlobSizeBigile: string;

declare var kG8ParamTextordBlobSizeSmallile: string;

declare var kG8ParamTextordBlshiftMaxshift: string;

declare var kG8ParamTextordBlshiftXfraction: string;

declare var kG8ParamTextordChopWidth: string;

declare var kG8ParamTextordDebugBlob: string;

declare var kG8ParamTextordDebugXheights: string;

declare var kG8ParamTextordDescheightModeFraction: string;

declare var kG8ParamTextordDescxRatioMax: string;

declare var kG8ParamTextordDescxRatioMin: string;

declare var kG8ParamTextordEquationDetect: string;

declare var kG8ParamTextordExcessBlobsize: string;

declare var kG8ParamTextordExpansionFactor: string;

declare var kG8ParamTextordFixMakerowBug: string;

declare var kG8ParamTextordFixXheightBug: string;

declare var kG8ParamTextordHeavyNr: string;

declare var kG8ParamTextordInitialascIle: string;

declare var kG8ParamTextordInitialxIle: string;

declare var kG8ParamTextordInterpolatingSkew: string;

declare var kG8ParamTextordLinespaceIqrlimit: string;

declare var kG8ParamTextordLmsLineTrials: string;

declare var kG8ParamTextordMaxBlobOverlaps: string;

declare var kG8ParamTextordMaxNoiseSize: string;

declare var kG8ParamTextordMinBlobHeightFraction: string;

declare var kG8ParamTextordMinBlobsInRow: string;

declare var kG8ParamTextordMinLinesize: string;

declare var kG8ParamTextordMinXheight: string;

declare var kG8ParamTextordMinxh: string;

declare var kG8ParamTextordNewInitialXheight: string;

declare var kG8ParamTextordNoRejects: string;

declare var kG8ParamTextordNoiseAreaRatio: string;

declare var kG8ParamTextordNoiseDebug: string;

declare var kG8ParamTextordNoiseHfract: string;

declare var kG8ParamTextordNoiseNormratio: string;

declare var kG8ParamTextordNoiseRejrows: string;

declare var kG8ParamTextordNoiseRejwords: string;

declare var kG8ParamTextordNoiseRowratio: string;

declare var kG8ParamTextordNoiseSizefraction: string;

declare var kG8ParamTextordNoiseSizelimit: string;

declare var kG8ParamTextordNoiseSncount: string;

declare var kG8ParamTextordNoiseSxfract: string;

declare var kG8ParamTextordNoiseSyfract: string;

declare var kG8ParamTextordNoiseTranslimit: string;

declare var kG8ParamTextordOccupancyThreshold: string;

declare var kG8ParamTextordOldBaselines: string;

declare var kG8ParamTextordOldXheight: string;

declare var kG8ParamTextordOverlapX: string;

declare var kG8ParamTextordParallelBaselines: string;

declare var kG8ParamTextordShowBlobs: string;

declare var kG8ParamTextordShowBoxes: string;

declare var kG8ParamTextordShowExpandedRows: string;

declare var kG8ParamTextordShowFinalBlobs: string;

declare var kG8ParamTextordShowFinalRows: string;

declare var kG8ParamTextordShowInitialRows: string;

declare var kG8ParamTextordShowParallelRows: string;

declare var kG8ParamTextordSingleHeightMode: string;

declare var kG8ParamTextordSkewIle: string;

declare var kG8ParamTextordSkewLag: string;

declare var kG8ParamTextordSkewsmoothOffset: string;

declare var kG8ParamTextordSkewsmoothOffset2: string;

declare var kG8ParamTextordSplineMedianwin: string;

declare var kG8ParamTextordSplineMinblobs: string;

declare var kG8ParamTextordSplineOutlierFraction: string;

declare var kG8ParamTextordSplineShiftFraction: string;

declare var kG8ParamTextordStraightBaselines: string;

declare var kG8ParamTextordTabfindShowVlines: string;

declare var kG8ParamTextordTestLandscape: string;

declare var kG8ParamTextordTestX: string;

declare var kG8ParamTextordTestY: string;

declare var kG8ParamTextordUnderlineWidth: string;

declare var kG8ParamTextordUseCjkFpModel: string;

declare var kG8ParamTextordWidthLimit: string;

declare var kG8ParamTextordXheightErrorMargin: string;

declare var kG8ParamTextordXheightModeFraction: string;

declare var kG8ParamTospAllFlipsFuzzy: string;

declare var kG8ParamTospBlockUseCertSpaces: string;

declare var kG8ParamTospDebugLevel: string;

declare var kG8ParamTospDontFoolWithSmallKerns: string;

declare var kG8ParamTospEnoughSmallGaps: string;

declare var kG8ParamTospEnoughSpaceSamplesForMedian: string;

declare var kG8ParamTospFewSamples: string;

declare var kG8ParamTospFlipCaution: string;

declare var kG8ParamTospFlipFuzzKnToSp: string;

declare var kG8ParamTospFlipFuzzSpToKn: string;

declare var kG8ParamTospForceWordbreakOnPunct: string;

declare var kG8ParamTospFuzzyKnFraction: string;

declare var kG8ParamTospFuzzyLimitAll: string;

declare var kG8ParamTospFuzzySpFraction: string;

declare var kG8ParamTospFuzzySpaceFactor: string;

declare var kG8ParamTospFuzzySpaceFactor1: string;

declare var kG8ParamTospFuzzySpaceFactor2: string;

declare var kG8ParamTospGapFactor: string;

declare var kG8ParamTospIgnoreBigGaps: string;

declare var kG8ParamTospIgnoreVeryBigGaps: string;

declare var kG8ParamTospImproveThresh: string;

declare var kG8ParamTospInitGuessKnMult: string;

declare var kG8ParamTospInitGuessXhtMult: string;

declare var kG8ParamTospKernGapFactor1: string;

declare var kG8ParamTospKernGapFactor2: string;

declare var kG8ParamTospKernGapFactor3: string;

declare var kG8ParamTospLargeKerning: string;

declare var kG8ParamTospMaxSaneKnThresh: string;

declare var kG8ParamTospMinSaneKnSp: string;

declare var kG8ParamTospNarrowAspectRatio: string;

declare var kG8ParamTospNarrowBlobsNotCert: string;

declare var kG8ParamTospNarrowFraction: string;

declare var kG8ParamTospNearLhEdge: string;

declare var kG8ParamTospOldSpKnThFactor: string;

declare var kG8ParamTospOldToBugFix: string;

declare var kG8ParamTospOldToConstrainSpKn: string;

declare var kG8ParamTospOldToMethod: string;

declare var kG8ParamTospOnlySmallGapsForKern: string;

declare var kG8ParamTospOnlyUsePropRows: string;

declare var kG8ParamTospOnlyUseXhtGaps: string;

declare var kG8ParamTospPassWideFuzzSpToContext: string;

declare var kG8ParamTospRecoveryIsolatedRowStats: string;

declare var kG8ParamTospRedoKernLimit: string;

declare var kG8ParamTospRepSpace: string;

declare var kG8ParamTospRowUseCertSpaces: string;

declare var kG8ParamTospRowUseCertSpaces1: string;

declare var kG8ParamTospRule9TestPunct: string;

declare var kG8ParamTospSanityMethod: string;

declare var kG8ParamTospShortRow: string;

declare var kG8ParamTospSillyKnSpGap: string;

declare var kG8ParamTospStatsUseXhtGaps: string;

declare var kG8ParamTospTableFuzzyKnSpRatio: string;

declare var kG8ParamTospTableKnSpRatio: string;

declare var kG8ParamTospTableXhtSpRatio: string;

declare var kG8ParamTospThresholdBias1: string;

declare var kG8ParamTospThresholdBias2: string;

declare var kG8ParamTospUsePreChopping: string;

declare var kG8ParamTospUseXhtGaps: string;

declare var kG8ParamTospWideAspectRatio: string;

declare var kG8ParamTospWideFraction: string;

declare var kG8ParamUnlvTildeCrunching: string;

declare var kG8ParamUnrecognisedChar: string;

declare var kG8ParamUseNewStateCost: string;

declare var kG8ParamUseOnlyFirstUft8Step: string;

declare var kG8ParamUserPatternsSuffix: string;

declare var kG8ParamUserWordsSuffix: string;

declare var kG8ParamWordToDebug: string;

declare var kG8ParamWordToDebugLengths: string;

declare var kG8ParamWordrecDebugBlamer: string;

declare var kG8ParamWordrecDebugLevel: string;

declare var kG8ParamWordrecDisplaySegmentations: string;

declare var kG8ParamWordrecEnableAssoc: string;

declare var kG8ParamWordrecMaxJoinChunks: string;

declare var kG8ParamWordrecNoBlock: string;

declare var kG8ParamWordrecRunBlamer: string;

declare var kG8ParamWordrecSkipNoTruthWords: string;

declare var kG8ParamWordrecWorstState: string;

declare var kG8ParamXHtAcceptanceTolerance: string;

declare var kG8ParamXHtMinChange: string;

declare var kG8ParamXheightPenaltyInconsistent: string;

declare var kG8ParamXheightPenaltySubscripts: string;


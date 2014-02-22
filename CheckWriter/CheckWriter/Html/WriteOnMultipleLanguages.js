/// <reference path="../Scripts/angular.js" />



var numToTextConverterModule = angular.module("numToTextConverterModule", []);

numToTextConverterModule.factory('numToTextConverterService', [
    function () {


        /***************************************************************************/

        /// API SECTION 

        /**************************************************************************/

        function CustomCheckWriter(language) {
            this.language = language === 'undefined' ? 'en' : language;
            this.TEN = 10;
            this.HUNDRED = 100;
            this.THOUSAND = 1000;
            this.MILLION = 1000000;
            this.BILLION = 1000000000;
            this.wordList = [];
            this.wordList2 = [];
            this.initializeTwentys(this.language);
            this.initializeSingleDigitNumber(this.language);


            this.languageIsoCodesCountryToAbbreviation = [
            { "Abkhazian": "ab" }, { "Afar": "aa" }, { "Afrikaans": "af" }, { "Albanian": "sq" }, { "Amharic": "am" }, { "Arabic": "ar" }, { "Aragonese": "an" }, { "Armenian": "hy" }, { "Assamese": "as" }, { "Aymara": "ay" }, { "Azerbaijani": "az" }, { "Bashkir": "ba" }, { "Basque": "eu" }, { "Bhutani": "dz" }, { "Bihari": "bh" }, { "Bislama": "bi" }, { "Breton": "br" }, { "Bulgarian": "bg" }, { "Burmese": "my" }, { "Cambodian": "km" }, { "Catalan": "ca" }, { "Chinese": "zh" }, { "Corsican": "co" }, { "Croatian": "hr" }, { "Czech": "cs" }, { "Danish": "da" }, { "Dutch": "nl" }, { "English": "en" }, { "Esperanto": "eo" }, { "Estonian": "et" }, { "Faeroese": "fo" }, { "Farsi": "fa" }, { "Fiji": "fj" }, { "Finnish": "fi" }, { "French": "fr" }, { "Frisian": "fy" }, { "Galician": "gl" }, { "Georgian": "ka" }, { "German": "de" }, { "Greek": "el" }, { "Greenlandic": "kl" }, { "Guarani": "gn" }, { "Gujarati": "gu" }, { "Hausa": "ha" }, { "Hindi": "hi" }, { "Hungarian": "hu" }, { "Icelandic": "is" }, { "Ido": "io" }, { "Interlingua": "ia" }, { "Interlingue": "ie" }, { "Inuktitut": "iu" }, { "Inupiak": "ik" }, { "Irish": "ga" }, { "Italian": "it" }, { "Japanese": "ja" }, { "Javanese": "jv" }, { "Kannada": "kn" }, { "Kashmiri": "ks" }, { "Kazakh": "kk" }, { "Kirghiz": "ky" }, { "Korean": "ko" }, { "Kurdish": "ku" }, { "Laothian": "lo" }, { "Latin": "la" }, { "Lingala": "ln" }, { "Lithuanian": "lt" }, { "Macedonian": "mk" }, { "Malagasy": "mg" }, { "Malay": "ms" }, { "Malayalam": "ml" }, { "Maltese": "mt" }, { "Maori": "mi" }, { "Marathi": "mr" }, { "Moldavian": "mo" }, { "Mongolian": "mn" }, { "Nauru": "na" }, { "Nepali": "ne" }, { "Norwegian": "no" }, { "Occitan": "oc" }, { "Oriya": "or" }, { "Polish": "pl" }, { "Portuguese": "pt" }, { "Punjabi": "pa" }, { "Quechua": "qu" }, { "Rhaeto-Romance": "rm" }, { "Romanian": "ro" }, { "Russian": "ru" }, { "Samoan": "sm" }, { "Sangro": "sg" }, { "Sanskrit": "sa" }, { "Serbian": "sr" }, { "Serbo-Croatian": "sh" }, { "Sesotho": "st" }, { "Setswana": "tn" }, { "Shona": "sn" }, { "Sindhi": "sd" }, { "Sinhalese": "si" }, { "Siswati": "ss" }, { "Slovak": "sk" }, { "Slovenian": "sl" }, { "Somali": "so" }, { "Spanish": "es" }, { "Sundanese": "su" }, { "Swedish": "sv" }, { "Tagalog": "tl" }, { "Tajik": "tg" }, { "Tamil": "ta" }, { "Tatar": "tt" }, { "Telugu": "te" }, { "Thai": "th" }, { "Tibetan": "bo" }, { "Tigrinya": "ti" }, { "Tonga": "to" }, { "Tsonga": "ts" }, { "Turkish": "tr" }, { "Turkmen": "tk" }, { "Twi": "tw" }, { "Uighur": "ug" }, { "Ukrainian": "uk" }, { "Urdu": "ur" }, { "Uzbek": "uz" }, { "Vietnamese": "vi" }, { "Volap�k": "vo" }, { "Wallon": "wa" }, { "Welsh": "cy" }, { "Wolof": "wo" }, { "Xhosa": "xh" }, { "Yoruba": "yo" }, { "Zulu": "zu" }];

            this.languageIsoCodesAbbreviationToCountry = [{ "ab": "Abkhazian" }, { "aa": "Afar" }, { "af": "Afrikaans" }, { "sq": "Albanian" }, { "am": "Amharic" }, { "ar": "Arabic" }, { "an": "Aragonese" }, { "hy": "Armenian" }, { "as": "Assamese" }, { "ay": "Aymara" }, { "az": "Azerbaijani" }, { "ba": "Bashkir" }, { "eu": "Basque" }, { "dz": "Bhutani" }, { "bh": "Bihari" }, { "bi": "Bislama" }, { "br": "Breton" }, { "bg": "Bulgarian" }, { "my": "Burmese" }, { "km": "Cambodian" }, { "ca": "Catalan" }, { "zh": "Chinese" }, { "co": "Corsican" }, { "hr": "Croatian" }, { "cs": "Czech" }, { "da": "Danish" }, { "nl": "Dutch" }, { "en": "English" }, { "eo": "Esperanto" }, { "et": "Estonian" }, { "fo": "Faeroese" }, { "fa": "Farsi" }, { "fj": "Fiji" }, { "fi": "Finnish" }, { "fr": "French" }, { "fy": "Frisian" }, { "gl": "Galician" }, { "ka": "Georgian" }, { "de": "German" }, { "el": "Greek" }, { "kl": "Greenlandic" }, { "gn": "Guarani" }, { "gu": "Gujarati" }, { "ha": "Hausa" }, { "hi": "Hindi" }, { "hu": "Hungarian" }, { "is": "Icelandic" }, { "io": "Ido" }, { "ia": "Interlingua" }, { "ie": "Interlingue" }, { "iu": "Inuktitut" }, { "ik": "Inupiak" }, { "ga": "Irish" }, { "it": "Italian" }, { "ja": "Japanese" }, { "jv": "Javanese" }, { "kn": "Kannada" }, { "ks": "Kashmiri" }, { "kk": "Kazakh" }, { "ky": "Kirghiz" }, { "ko": "Korean" }, { "ku": "Kurdish" }, { "lo": "Laothian" }, { "la": "Latin" }, { "ln": "Lingala" }, { "lt": "Lithuanian" }, { "mk": "Macedonian" }, { "mg": "Malagasy" }, { "ms": "Malay" }, { "ml": "Malayalam" }, { "mt": "Maltese" }, { "mi": "Maori" }, { "mr": "Marathi" }, { "mo": "Moldavian" }, { "mn": "Mongolian" }, { "na": "Nauru" }, { "ne": "Nepali" }, { "no": "Norwegian" }, { "oc": "Occitan" }, { "or": "Oriya" }, { "pl": "Polish" }, { "pt": "Portuguese" }, { "pa": "Punjabi" }, { "qu": "Quechua" }, { "rm": "Rhaeto-Romance" }, { "ro": "Romanian" }, { "ru": "Russian" }, { "sm": "Samoan" }, { "sg": "Sangro" }, { "sa": "Sanskrit" }, { "sr": "Serbian" }, { "sh": "Serbo-Croatian" }, { "st": "Sesotho" }, { "tn": "Setswana" }, { "sn": "Shona" }, { "sd": "Sindhi" }, { "si": "Sinhalese" }, { "ss": "Siswati" }, { "sk": "Slovak" }, { "sl": "Slovenian" }, { "so": "Somali" }, { "es": "Spanish" }, { "su": "Sundanese" }, { "sv": "Swedish" }, { "tl": "Tagalog" }, { "tg": "Tajik" }, { "ta": "Tamil" }, { "tt": "Tatar" }, { "te": "Telugu" }, { "th": "Thai" }, { "bo": "Tibetan" }, { "ti": "Tigrinya" }, { "to": "Tonga" }, { "ts": "Tsonga" }, { "tr": "Turkish" }, { "tk": "Turkmen" }, { "tw": "Twi" }, { "ug": "Uighur" }, { "uk": "Ukrainian" }, { "ur": "Urdu" }, { "uz": "Uzbek" }, { "vi": "Vietnamese" }, { "vo": "Volap�k" }, { "wa": "Wallon" }, { "cy": "Welsh" }, { "wo": "Wolof" }, { "xh": "Xhosa" }, { "yo": "Yoruba" }, { "zu": "Zulu" }];
        }

        CustomCheckWriter.prototype.initializeSingleDigitNumber = function (languageAbb) {

            switch (languageAbb) {
                case 'en':
                    this.wordList = new Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "TEN", "Eleven", "Twelve", "Thirteen", "Fourteen", "fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"); break;
                case 'es':
                    this.wordList = new Array("", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"); break;
                case 'fr':
                    this.wordList = new Array("", "Un", "Deux", "Trois", "Quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"); break;
                
            }
        }

        CustomCheckWriter.prototype.initializeTwentys = function (languageAbbreviation) {

            switch (languageAbbreviation) {
                case 'en':
                    this.wordList2 = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
                    break;
                case 'es':
                    this.wordList2 = ["", "Diez", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
                    break;
                case 'fr':
                    this.wordList2 = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "Quatre-vingt dix"];
                    break;
            }
        }

        CustomCheckWriter.prototype.WordsInMillion = function () {

            var self = this;
            var millions = "";
            switch (self.language) {
                case 'en':
                    millions = " millions "; break;
                case 'es':
                    millions = " millones "; break;
                case 'fr':
                    millions = " des millions "; break;
               
            }
            return millions;
        }

        CustomCheckWriter.prototype.WordsInThousand = function () {

            var self = this;
            var millions = "";
            switch (self.language) {
                case 'en':
                    millions = " Thousands "; break;
                case 'es':
                    millions = " Miles "; break;
                case 'fr':
                    millions = " Des milliers "; break;
            }
            return millions;
        }

        CustomCheckWriter.prototype.WordsInBillion = function () {

            var self = this;
            var billions = "";
            switch (self.language) {
                case 'en':
                    billions = " billions "; break;
                case 'es':
                    billions = " billones "; break;
                case 'fr':
                    billions = " milliards "; break;
            }
            return billions;
        }

        CustomCheckWriter.prototype.WordsInHundred = function () {

            var self = this;
            var millions = "";
            switch (self.language) {
                case 'en':
                    millions = " hundreds "; break;
                case 'es':
                    millions = " Cientos "; break;
                case 'fr':
                    millions = " des centaines "; break;
            }
            return millions;
        }


        CustomCheckWriter.prototype.writeHundredText = function (number) {
            var quotient = Math.floor(number / this.HUNDRED);
            var remainder = number % this.HUNDRED;
            var word = "";
            var converter = this;
            if (number >= this.HUNDRED) {
                return converter.wordList[quotient] +
                        converter.WordsInHundred() +
                        converter.writeDoubleDigitText(remainder);
            }
            else {
                return converter.writeDoubleDigitText(remainder);
            }
        };


        CustomCheckWriter.prototype.writeSingleDigitText = function (number) {
            return this.wordList[number];
        };
        CustomCheckWriter.prototype.writeDoubleDigitText = function (number) {
            var quotient = Math.floor(number / this.TEN);
            var remainder = number % this.TEN;
            var word = "";
            if (number > 19) {
                switch (quotient) {
                    case 2: word = this.wordList2[2]; break;
                    case 3: word = this.wordList2[3]; break;
                    case 4: word = this.wordList2[4]; break;
                    case 5: word = this.wordList2[5]; break;
                    case 6: word = this.wordList2[6]; break;
                    case 7: word = this.wordList2[7]; break;
                    case 8: word = this.wordList2[8]; break;
                    case 9: word = this.wordList2[9]; break;
                }
                return word + " " + this.wordList[remainder];
            }
            else {
                return this.wordList[number];
            }
        };

        CustomCheckWriter.prototype.writeThousandsText = function (number) {
            var quotient = Math.floor(number / this.THOUSAND);
            var remainder = number % this.THOUSAND;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.THOUSAND) {
                return converter.writeHundredText(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue +
                        converter.writeHundredText(quotient) +
                        converter.WordsInThousand();
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue +
                                converter.writeDoubleDigitText(quotient) +
                                converter.WordsInThousand();
                }
                else {
                    realValue = realValue +
                                this.wordList[quotient] +
                                converter.WordsInThousand();
                }
                realValue = realValue + converter.writeHundredText(remainder);
            }
            return realValue;
        };


        CustomCheckWriter.prototype.writeMillionsText = function (number) {
            var quotient = Math.floor(number / this.MILLION);
            var remainder = number % this.MILLION;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.MILLION) {
                return converter.writeThousandsText(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue +
                        converter.writeHundredText(quotient)
                        + converter.WordsInMillion();
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue +
                                converter.writeDoubleDigitText(quotient) +
                                converter.WordsInMillion();
                }
                else {
                    realValue = realValue +
                                this.wordList[quotient] +
                                converter.WordsInMillion();
                }
                realValue = realValue + converter.writeThousandsText(remainder);
            }
            return realValue;
        };


        CustomCheckWriter.prototype.writeBillionsText = function (number) {
            var quotient = Math.floor(number / this.BILLION);
            var remainder = number % this.BILLION;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.BILLION) {
                return converter.writeMillionsText(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue +
                        converter.writeHundredText(quotient) +
                        converter.WordsInBillion();
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue +
                                converter.writeDoubleDigitText(quotient) +
                                converter.WordsInBillion();
                }
                else {
                    realValue = realValue +
                                this.wordList[quotient] +
                                converter.WordsInBillion();
                }
                realValue = realValue + converter.writeMillionsText(remainder);
            }
            return realValue;
        };



        /**********************************************************************************/

        // END OF THE API SECTION 

        /**********************************************************************************/



        // public methods
    return {
        convertNumberToText: function (number, languageAbbreviation) {

            var checkWriter = new CustomCheckWriter(languageAbbreviation)
            return checkWriter.writeBillionsText(number);
        }


        , isNotNumber: function (inputNumber) {
            var indexNumbers = '0123456789';
            for (var index = 0; index < inputNumber.length; index++) {
                var currentCharacter =  inputNumber.charAt(index);
                if (indexNumbers.indexOf(currentCharacter) == -1) return true;
            }
            return false;
        }
        ,

        playAudioSound: function () {

               
            var audioResource =
            /msie/.test(navigator.userAgent.toLowerCase())
            || Object.hasOwnProperty.call(window, "ActiveXObject")
            ? 'keyboardIE.wav' : 'keyboard.ogg';
            var path = '../Resources/Sounds/' + audioResource;
            var audio = new Audio(path);
                
            audio.play();
                
        }
            
        }
    }]);




/*****************************************************************************************/

 // Controller that takes service as DI

/*****************************************************************************************/


numToTextConverterModule.controller('numToTextConverterController',
    ['$scope', 'numToTextConverterService', function ($scope, numToTextConverterService) {
        

 

        $scope.ShouldDisplayBoard = false;
        $scope.convertToText = function () {

            numToTextConverterService.playAudioSound();
            var inputNumber = $scope.inputNumber;
            if (numToTextConverterService.isNotNumber(inputNumber)) {
                $scope.inputNumber = "";
                $scope.resultsInEnglish = "";
                $scope.resultsInSpanish = "";
                $scope.resultsInFrench = "";
                $scope.ShouldDisplayBoard = false;
                return;
            }

            if (inputNumber !== 'undefined'
                && typeof (inputNumber === 'number')) {


                if (inputNumber.length > 11) {
                    $scope.ShouldDisplayBoard = false;
                    $scope.inputNumber = "";
                    return;
                }
                var evaluatedTextInEnglish = numToTextConverterService.convertNumberToText(inputNumber, 'en');
                var evaluatedTextInSpanish = numToTextConverterService.convertNumberToText(inputNumber, 'es');
                var evaluatedTextInFrench = numToTextConverterService.convertNumberToText(inputNumber, 'fr');

                $scope.ShouldDisplayBoard = true;

                $scope.resultsInEnglish = evaluatedTextInEnglish;
                $scope.resultsInSpanish = evaluatedTextInSpanish;
                $scope.resultsInFrench = evaluatedTextInFrench;


            }

            $scope.inputNumber += $scope.inputNumber.charAt($scope.inputNumber.length - 1);
            $scope.inputNumber = $scope.inputNumber.substring(0, $scope.inputNumber.length - 1);

        }



    }]);






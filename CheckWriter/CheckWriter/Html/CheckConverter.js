/// <reference path="../Scripts/angular.js" />


var easyItSolutionCheckConModule = angular.module('easyItSolutionCheckConModule', []);


easyItSolutionCheckConModule.factory('easyItSolutionService', [
    function () {
        function NumberToTextConverter() {
            this.TEN = 10;
            this.HUNDRED = 100;
            this.THOUSAND = 1000;
            this.MILLION = 1000000;
            this.BILLION = 1000000000;
            this.wordList = new Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "TEN", "Eleven", "Twelve", "Thirteen", "Fourteen", "fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");
            this.wordList2 = [];
            this.initializeTwentys(); // this would populate the twentys

        }

        NumberToTextConverter.Convert = function (number) {
            var currentConverter = new NumberToTextConverter();
            return currentConverter.Convert(number);
        };

        NumberToTextConverter.prototype.Convert = function (number) {
            var quotient = Math.floor(number / this.BILLION);
            var remainder = number % this.BILLION;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.BILLION) {
                return converter.ConvertToMillions(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue + converter.ConvertHundreds(quotient) + " billions ";
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue + converter.ConvertToDoubleDigit(quotient) + " billions ";
                }
                else {
                    realValue = realValue + this.wordList[quotient] + " billions ";
                }
                realValue = realValue + converter.ConvertToMillions(remainder);
            }
            return realValue;
        };
        NumberToTextConverter.prototype.ConvertToMillions = function (number) {
            var quotient = Math.floor(number / this.MILLION);
            var remainder = number % this.MILLION;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.MILLION) {
                return converter.ConverToThousands(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue + converter.ConvertHundreds(quotient) + " millions ";
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue + converter.ConvertToDoubleDigit(quotient) + " millions ";
                }
                else {
                    realValue = realValue + this.wordList[quotient] + " millions ";
                }
                realValue = realValue + converter.ConverToThousands(remainder);
            }
            return realValue;
        };

        NumberToTextConverter.prototype.ConverToThousands = function (number) {
            var quotient = Math.floor(number / this.THOUSAND);
            var remainder = number % this.THOUSAND;
            var word = "";
            var realValue = "";
            var converter = this;
            if (number < this.THOUSAND) {
                return converter.ConvertHundreds(number);
            }
            else {
                var quotientValue = quotient.toString();
                if (quotientValue.length == 3) {
                    realValue = realValue + converter.ConvertHundreds(quotient) + " thousands ";
                }
                else if (quotientValue.length == 2) {
                    realValue = realValue + converter.ConvertToDoubleDigit(quotient) + " thousands ";
                }
                else {
                    realValue = realValue + this.wordList[quotient] + " thousands ";
                }
                realValue = realValue + converter.ConvertHundreds(remainder);
            }
            return realValue;
        };

        NumberToTextConverter.prototype.ConvertHundreds = function (number) {
            var quotient = Math.floor(number / this.HUNDRED);
            var remainder = number % this.HUNDRED;
            var word = "";
            var converter = this;
            if (number >= 100) {
                return this.wordList[quotient] + " hundred " + converter.ConvertToDoubleDigit(remainder);
            }
            else {
                return converter.ConvertToDoubleDigit(remainder);
            }
        };
        NumberToTextConverter.prototype.initializeTwentys = function () {
            this.wordList2[0] = "";
            this.wordList2[1] = "Ten";
            this.wordList2[2] = "Twenty";
            this.wordList2[3] = "Thirty";
            this.wordList2[4] = "Fourty";
            this.wordList2[5] = "Fifty";
            this.wordList2[6] = "Sixty";
            this.wordList2[7] = "Seventy";
            this.wordList2[8] = "Eighty";
            this.wordList2[9] = "Ninety";
        };
        NumberToTextConverter.prototype.ConvertSingleDigit = function (number) {
            return this.wordList[number];
        };
        NumberToTextConverter.prototype.ConvertToDoubleDigit = function (number) {
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



        return {

            writeNumberToWords: function (currentNumber) {
                return new NumberToTextConverter().Convert(currentNumber);
                
            },

            isNotNumber: function (inputNumber) {
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
                
                //alert(path);
                audio.play();
                
            }
            ,
            playGoogleSound: function () {

                var audio = new Audio();
                audio.src = 'http://translate.google.com/#en/en/nice%20features';
                audio.play();

            }
        };

    }]);

easyItSolutionCheckConModule.controller('easyItSolutionForUCtrl',
    ['$scope', 'easyItSolutionService', function ($scope, easyItSolutionService) {


        $scope.ShouldDisplayBoard = false;
        $scope.convertToText = function () {

            easyItSolutionService.playAudioSound();
            var inputNumber = $scope.inputNumber;
            if (easyItSolutionService.isNotNumber(inputNumber)) {
                $scope.inputNumber = "";
                $scope.results = "";
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
                var evaluatedText = easyItSolutionService.writeNumberToWords(inputNumber);

                easyItSolutionService.playGoogleSound();

                $scope.ShouldDisplayBoard = true;

                $scope.results = evaluatedText;

            }

            $scope.inputNumber += $scope.inputNumber.charAt($scope.inputNumber.length - 1);
            $scope.inputNumber = $scope.inputNumber.substring(0, $scope.inputNumber.length - 1);

        }


    }]);
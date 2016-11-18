/*
 Input Mask plugin extensions
 http://github.com/bobahbi44/inputmaskPhone164
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Phone 164 extension.

 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask.dependencyLib", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./inputmask.dependencyLib"), require("./inputmask"));
    } else {
        factory(window.dependencyLib || jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    Inputmask.extendAliases({
        "phone164": {
            clearIncomplete: true,
            mask: function () {
                return [
                    "+7(999)999-99-99",
                    "+375(99)999-99-99",
                    '+380(999)99-999'
                ];
            },
            onBeforePaste: function (pastedValue, opts) {
                var processedValue = pastedValue;
                if (processedValue.charAt(0)==8 && processedValue.length>3) {
                    processedValue = '+7' + processedValue.substr(1);

                }
                return processedValue;
            }
        }
    });
    return Inputmask;
}));
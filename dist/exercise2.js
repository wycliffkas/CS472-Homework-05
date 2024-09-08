"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n < 2) {
            reject(false);
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0)
                resolve(false);
        }
        resolve(true);
    });
};
const testIsPrime = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield isPrime(1);
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
});
testIsPrime();

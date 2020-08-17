const cardType = {
    americanexpress: [34, 37],
    chinatunio: 31,
    chinaunionpay: [62, 88],
    dankort: 5019,
    dinersclubinternational: ["300-505", 309, 36, 38-39],
    discovercard: [6011, "622126-622925", 644, 649, 65],
    interpayment: 636,
    instapayment: ["637-639"],
    jcb: [3528, 3589],
    maestro: [5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 0604, 6390],
    mastercard: ["2221-2720", "51-55"],
    rupay: [60, 6521, 6522],
    uatp: 1,
    verve: ["506099-506198", "650002-650027"],
    visaelectron: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
    visa: 4
}

function verifyCard(cardNumber) {
    return new Promise((resolve, eject) => {
        for (const type in cardType) {
            if (cardType[type] instanceof Array) {
                cardType[type].forEach(number => {
                    if (isFromType(number, String)) {
                        const transformNumberInBitween = number.split('-')
                        for (i = transformNumberInBitween[0]; i < transformNumberInBitween[1]; i++) {
                            if (new String(cardNumber).startsWith(parseInt(i))) resolve(type);
                        }
                    }
                });
                if (new String(cardNumber).startsWith(cardType[type])) resolve(type);
            } else {
                if (new String(cardNumber).startsWith(cardType[type])) resolve(type);
            }
        }
    })
}

function isFromType(variable, type) {
    if (typeof type == 'string') res = (typeof variable == type.toLowerCase())
    else res = (variable.constructor == type)
    return res
}

/*
American Express (AmEx)	34, 37	Active //img
China T-Union	31	Active
China UnionPay	62, 88	Active
Dankort	5019	Active
Diners Club International (DCI)	300-305, 309, 36, 38-39	Active
Discover Card	6011, 622126-622925, 644-649, 65	Active
InterPayment	636	Active
InstaPayment	637-639	Active
Japan Credit Bureau (JCB)	3528-3589	Active
Maestro	5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 0604, 6390	Active
MasterCard	2221-2720, 51-55	Active //img
RuPay	60, 6521, 6522	Active
UATP	1	Active
Verve	506099–506198, 650002–650027	Active
Visa Electron	4026, 417500, 4405, 4508, 4844, 4913, 4917	Active
Visa	4	Active //img
*/
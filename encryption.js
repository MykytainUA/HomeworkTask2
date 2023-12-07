
document.getElementById("encryptionKeyInput").value = 1;
document.getElementById("decryptionKeyInput").value = 1;

var lowercaseArr = ["а", "б", "в", "г", "ґ", "д", 
"е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", 
"м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", 
"ц", "ч", "ш", "щ", "ь", "ю", "я"];

var uppercaseArr = ["А", "Б", "В", "Г", "Ґ", "Д", 
"Е", "Є", "Ж", "З", "И", "І", "Ї", "Й", "К", "Л", 
"М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", 
"Ц", "Ч", "Ш", "Щ", "Ь", "Ю", "Я"];


encryptButton.onclick = EncryptButtonPressed;
decryptButton.onclick = DecryptButtonPressed;

function EncryptButtonPressed(){

    var textForEncryption = document.getElementById("textAreaForTextForEncryption").value;
    var encryptionKey = document.getElementById("encryptionKeyInput").value;
    var encryptedText = "";

    // Check if encryptyonKey is valid
    if(encryptionKey > 32 || encryptionKey < 1){
        document.getElementById("encryptionKeyInput").value = 1;
    }

    // Iteration over entire text
    for (var i = 0; i < textForEncryption.length; i++) {
        
        // Check wether letter is uppercase or lowercase
        if(textForEncryption[i]=== textForEncryption[i].toUpperCase()){  // If letter is uppercase

            var indexOfLetter = FindIndexOfLetterInArr(uppercaseArr, textForEncryption[i]);

            if(indexOfLetter != null){ // If the letter is in the array

                var indexOfNewLetter = Number(indexOfLetter) + Number(encryptionKey);
                indexOfNewLetter %= 33; // Prevent accessing 34th letter in the alphabet
                encryptedText += uppercaseArr[indexOfNewLetter];

            } else {

                encryptedText += textForEncryption[i];

            }
            
        } else if (textForEncryption[i]=== textForEncryption[i].toLowerCase()){  // If letter is lowercase

            var indexOfLetter = FindIndexOfLetterInArr(lowercaseArr, textForEncryption[i]);

            if(indexOfLetter != null){ // If the letter is in the array

                var indexOfNewLetter = Number(indexOfLetter) + Number(encryptionKey);
                indexOfNewLetter %= 33; // Prevent accessing 34th letter in the alphabet
                encryptedText += lowercaseArr[indexOfNewLetter];

            } else {

                encryptedText += textForEncryption[i];
                
            }

        } else {
            return null;
        }

    }

    document.getElementById("textAreaForTextForEncryptionAnswer").value = encryptedText;

}

function FindIndexOfLetterInArr(array, letter){
    for (var i = 0; i < array.length; i++) {
        if(array[i] === letter){
            return i;
        }
    }
    return null;
}

function DecryptButtonPressed(){

    var textForDecryption = document.getElementById("textAreaForTextForDecryption").value;
    var decryptionKey = document.getElementById("decryptionKeyInput").value;
    var decryptedText = "";

    // Check if decryptyonKey is valid
    if(decryptionKey > 32 || decryptionKey < 1){
        document.getElementById("decryptionKeyInput").value = 1;
    }

    for (var i = 0; i < textForDecryption.length; i++) {

        // Check wether letter is uppercase or lowercase
        if(textForDecryption[i] === textForDecryption[i].toUpperCase()){ // If letter is uppercase

            var indexOfLetter = FindIndexOfLetterInArr(uppercaseArr, textForDecryption[i]);

            if(indexOfLetter != null){ // If the letter is in the array

                var indexOfNewLetter = Number(indexOfLetter) - Number(decryptionKey);
                
                if(indexOfNewLetter < 0){
                    indexOfNewLetter += uppercaseArr.length;
                }

                decryptedText += uppercaseArr[indexOfNewLetter];

            } else {

                decryptedText += textForDecryption[i];

            }


        } else if (textForDecryption[i] === textForDecryption[i].toLowerCase()){  // If letter is lowercase

            var indexOfLetter = FindIndexOfLetterInArr(lowercaseArr, textForDecryption[i]);

            if(indexOfLetter != null){ // If the letter is in the array

                var indexOfNewLetter = Number(indexOfLetter) - Number(decryptionKey);
                
                if(indexOfNewLetter < 0){
                    indexOfNewLetter += lowercaseArr.length;
                }

                decryptedText += lowercaseArr[indexOfNewLetter];

            } else {

                decryptedText += textForDecryption[i];

            }
      
        } else {

            return null;

        }
        
    } 

    document.getElementById("textAreaForTextForDecryptionAnswer").value = decryptedText;
}
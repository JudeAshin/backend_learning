const service = require('./service');
const logger = require("./logger");

exports.isPalindrome = async (req, res) => {
    const word = req.params.word;

    try {
        const result = await service.isPalindrome(word);
        logger.info(`Fetched palindrome for word : ${word}`, result);

        if (!result) {
            return res.status(200).json({
                success: true,
                message: `Fetched palindrome for word : ${word}. It's a not palindrome`,
                data: result,
            });
        }

        res.status(200).json({
            success: true,
            message: `Fetched palindrome for word : ${word}. It's a palindrome`,
            data: result,
        });
    } catch (error) {
        logger.error("Error fetching palindome word details", error);
        res.status(500).json({
            success: false,
            message: `Failed to fetch palindrome for word : ${word}`,
            data: result,
        });
    }
};

exports.reverse = async (req, res) => {
    const word = req.params.word;

    try {
        const result = await service.reverseString(word);
        logger.info(`Fetched reverse data for the word : ${word}`, result);

        res.status(200).json({
            success: true,
            message: `Fetched reverse data for the word : ${word}. It's ${result}`,
            data: result,
        });
    } catch (error) {
        logger.error("Error fetching reverse data for the word", error);
        res.status(500).json({
            success: false,
            message: `Failed to fetch data for word : ${word}`,
            data: result,
        });
    }
};

exports.sumOfArray = async (req, res) => {
    const numbers = req.body.numbers;
    try {
        if (!Array.isArray(numbers)) {
            return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers in the "numbers" field.' });
        }
        const result = await service.sumOfArray(numbers);
        logger.info(`Fetched sum for the array: ${numbers} is ${result}`); // Corrected log message

        res.status(200).json({
            success: true,
            message: `Sum of the array of ${numbers} is : ${result}`, // Corrected message
            data: result,
        });
    } catch (error) {
        logger.error("Error calculating sum of array", error); // Corrected log message
        res.status(500).json({
            success: false,
            message: `Failed to calculate sum of the array. Error: ${error.message}`, // Include the error
            data: null,
        });
    }
};

exports.maxNoArray = async (req, res) => {
    const numbers = req.body.numbers;
    try {
        if (!Array.isArray(numbers)) {
            return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers in the "numbers" field.' });
        }
        const result = await service.maxNoArray(numbers);
        logger.info(`Fetched the maximum number in the array: ${numbers} is ${result}`); // Corrected log message

        res.status(200).json({
            success: true,
            message: `Maximum number in the array of ${numbers} is : ${result}`, // Corrected message
            data: result,
        });
    } catch (errror) {
        logger.error("Error calculating maximum number in array", errror); // Corrected log message
        res.status(500).json({
            success: false,
            message: `Failed to find the maximim number in the array. Error: ${errror.message}`, // Include the error
            data: null,
        });
    }
}

exports.vowelCount = async (req, res) => {
    const word = req.params.word;

    try {
        const result = await service.vowelCount(word);
        logger.info(`Fetched vowel count  for the word : ${word}`, result);

        res.status(200).json({
            success: true,
            message: `Fetched vowel count for the word : ${word}. It's ${result}`,
            data: result,
        });
    } catch (error) {
        logger.error("Error fetching vowel count for the word", error);
        res.status(500).json({
            success: false,
            message: `Failed to fetch vowel count for word : ${word}`,
            data: result,
        });
    }
};

exports.removeDuplicate = async (req, res) => {
    const numbers = req.body.numbers;
    try {
        const result = await service.removeDuplicate(numbers);
        logger.info(`Fetched successfully the duplicate in the array : ${numbers}`)
        res.status(200).json({
            success: true,
            message: `Fetched duplicates in the array : ${numbers}. The new array is ${result}`,
            data: result,
        });
    } catch (error) {
        logger.error("Ërror removing duplicates from the array", error);
        res.status(500).json({
            success: false, message: `Failed to remove duplicates from the given array ${numbers}`
        })
    }
}

exports.firstUniqueCharacter = async (req, res) => {
    const word = req.params.word;
    try {
        const result = await service.firstUniqueCharacter(word);
        logger.info(`Fetched successfully the first unique character in the word : ${word}`)
        res.status(200).json({
            success: true,
            message: `Fetched the first unique character of the word : ${word}. The letter is ${result}`,
            data: result,
        });
    } catch (error) {
        logger.error("Ërror fetching the unique character in the word", error);
        res.status(500).json({
            success: false, message: `Failed to fetch the unique character from the word ${word}`
        })
    }
}

exports.titleCase = async (req, res) => {
    const words = req.body.words;
    try {
        const result = await service.titleCase(words);
        logger.info(`Fetched successfully the title case in the sentence : ${words}`)
        res.status(200).json({
            success: true,
            message: `Fetched title case in the sentence : ${words}. The new sentence is ${result}`,
            data: result,
        });
    } catch (error) {
        logger.error("Ërror title case from the sentence", error);
        res.status(500).json({
            success: false, message: `Failed to title case from the given sentence ${words}`
        })
    }
}
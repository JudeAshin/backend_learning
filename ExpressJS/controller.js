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

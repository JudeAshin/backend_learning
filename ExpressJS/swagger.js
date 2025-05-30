/**
 * @swagger
 * tags:
 *   name: Learning
 *   description: Learning APIs
 */

/**
 * @swagger
 * /learning/palindrome/{word}:
 *   get:
 *     summary: Check if a word is a palindrome
 *     tags: [Learning]
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Result of palindrome check
 */

/**
 * @swagger
 * /learning/reverse/{word}:
 *   get:
 *     summary: Check if a word is a palindrome
 *     tags: [Learning]
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Result of palindrome check
 */

/**
 * @swagger
 * /learning/sumOfArray:
 *   post:
 *     summary: Calculate sum of an array of numbers
 *     tags: [Learning]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numbers:
 *                 type: array
 *                 items:
 *                   type: number
 *     responses:
 *       200:
 *         description: Sum of array elements
 */


/**
 * @swagger
 * /learning/maxNumber:
 *   post:
 *     summary: Find the maximum number in an array
 *     tags: [Learning]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numbers:
 *                 type: array
 *                 items:
 *                   type: number
 *     responses:
 *       200:
 *         description: Maximum number found
 */


/**
 * @swagger
 * /learning/vowelCount/{word}:
 *   get:
 *     summary: Count vowels in a word
 *     tags: [Learning]
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Number of vowels in the word
 */


/**
 * @swagger
 * /learning/removeDuplicate:
 *   post:
 *     summary: Remove duplicate elements from an array
 *     tags: [Learning]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numbers:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Array without duplicates
 */


/**
 * @swagger
 * /learning/firstUniqueCharacter/{word}:
 *   get:
 *     summary: Get the first unique character in a word
 *     tags: [Learning]
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: First non-repeating character
 */

/**
 * @swagger
 * /learning/titleCase:
 *   post:
 *     summary: Convert a sentence to title case
 *     tags: [Learning]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               words:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sentence converted to title case
 */

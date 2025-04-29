export async function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

export async function reverseString(str) {
    const strArr = str.split('');
    const revArr = strArr.reverse();
    const result = revArr.join('');
    return result
}

export async function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

export async function maxNoArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    const maximum = Math.max(...array)                   //This is a build in function to find the maximum in a array.
    return max
}

export async function vowelCount(string) {
    const newStr = string.toLowerCase();
    let count = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < newStr.length; i++) {
        if (vowel.includes(newStr[i])) {
            count++
        }
    }
    return count
}

export async function removeDuplicate(numbers) {
    const array = [];
    const set = new Set();

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (!set.has(element)) {
            set.add(element);
            array.push(element);
        }
    }
    return array;
}

export async function firstUniqueCharacter(word) {
    const charFrequency = {};
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (charFrequency[char] === 1) {
            return i;
        }
    }
    return -1;
}
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
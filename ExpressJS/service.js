exports.isPalindrome = async (str) => {
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
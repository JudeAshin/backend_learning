import { Injectable } from '@nestjs/common';
import { count } from 'console';

@Injectable()
export class LearningService {

    async isPalindrome(str: string): Promise<boolean> {
        try {
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
        } catch (error) {
            console.error('Error getting Auser', error);
            throw error
        }
    }

    async reverseString(str: string): Promise<string> {
        const strArr = str.split('');
        const revArr = strArr.reverse();
        const result = revArr.join('')
        return result
    }

    async sumOfArray(numbers: number[]): Promise<number> {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        return sum
    }

    async maxNumber(numbers: number[]): Promise<number> {
        let max = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (max < numbers[i]) {
                max = numbers[i]
            }
        }
        return max
    }

    async vowelCount(word: string): Promise<number> {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        const newStr = word.toLocaleLowerCase();
        for (let i = 0; i < newStr.length; i++) {
            if (vowels.includes(newStr[i])) {
                count++
            }
        }
        return count
    }

    async removeDuplicate(values: any[]): Promise<any> {
        const result: any[] = [];
        const set = new Set();
        for (let i = 0; i < values.length; i++) {
            const element = values[i];
            if (!set.has(element)) {
                set.add(element);
                result.push(element);
            }
        }
        return result
    }

    async firstUniqueCharacter(word: string): Promise<number> {
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

    async titleCase(values: string): Promise<any> {
        const str = values.split(' ');
        const newStr = str.map((word) => {
            const firsLetter = word.charAt(0).toUpperCase()
            const restOfWord = word.slice(1).toLowerCase()
            return firsLetter + restOfWord
        });
        return newStr.join(' ');
    }
}
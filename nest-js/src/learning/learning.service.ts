import { Injectable } from '@nestjs/common';

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
}
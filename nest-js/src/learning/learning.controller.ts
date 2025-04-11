import { Controller, Get, Param } from '@nestjs/common';
import { LearningService } from './learning.service';

@Controller('learning')
export class LearningController {
    constructor(private service: LearningService) { } // Inject the service

    @Get('palindrome/:word')
    async checkPalindrome(@Param('word') word: string): Promise<{ success: boolean; message: string; isPalindrome: boolean }> {
        const result = await this.service.isPalindrome(word); // Use the injected service
        if (!result) {
            return { success: false, message: `Fetched palindrome for word : ${word}. It's not a palindrome`, isPalindrome: result };
        }
        return { success: true, message: `Fetched palindrome for word : ${word}. It's a palindrome`, isPalindrome: result };
    }
}

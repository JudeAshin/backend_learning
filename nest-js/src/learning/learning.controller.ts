import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LearningService } from './learning.service';
import { response } from 'express';

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

    @Get('reverse/:word')
    async reverse(@Param('word') word: string): Promise<{ success: boolean; message: string; response: string }> {
        const result = await this.service.reverseString(word); // Use the injected service
        return { success: true, message: `Reversed word fetched successfully for the word: ${word}. It is `, response: result };
    }

    @Post('/sumOfArray')
    async sumOfArray(@Body('numbers') numbers: number[]): Promise<any> {
        const result = await this.service.sumOfArray(numbers);
        return { success: true, message: `Sum of the array of ${numbers} is : ${result} `, response: result };
    }

    @Post('/maxNumber')
    async maxNumber(@Body('numbers') numbers: number[]): Promise<any> {
        const result = await this.service.maxNumber(numbers);
        return { success: true, message: `Maximimum number in the arrayt of ${numbers} is ${result} `, response: result }
    }
}

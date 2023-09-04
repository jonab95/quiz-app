export interface QuizApplication {
    category: string,
    id: string,
    tags: string[],
    difficulty: string,
    regions: string [],
    isNiche: boolean,
    question: any,
    correctAnswer: string,
    incorrectAnswers: string [],
    type: string
}
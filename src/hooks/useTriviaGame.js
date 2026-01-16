import { useState } from 'react';
import { fetchQuestions, checkAnswers, resetGame as resetGameApi } from '@/services/api';

export function useTriviaGame() {
    const [gameState, setGameState] = useState('welcome'); // welcome, loading, playing, results
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Map());
    const [result, setResult] = useState(null);

    const startGame = async () => {
        setGameState('loading');
        const data = await fetchQuestions(5);
        if (data && data.length > 0) {
            setQuestions(data);
            setCurrentIndex(0);
            setUserAnswers(new Map());
            setGameState('playing');
        } else {
            alert("Failed to load questions. Please try again.");
            setGameState('welcome');
        }
    };

    const handleAnswerSelect = (answer) => {
        const currentQuestion = questions[currentIndex];
        const newAnswers = new Map(userAnswers);
        newAnswers.set(currentQuestion.id, answer);
        setUserAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            finishGame();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const finishGame = async () => {
        setGameState('loading');
        const scoreData = await checkAnswers(userAnswers);
        setResult(scoreData);
        setGameState('results');
    };

    const resetGame = async () => {
        await resetGameApi();
        startGame();
    };

    return {
        gameState,
        questions,
        currentIndex,
        userAnswers,
        result,
        startGame,
        handleAnswerSelect,
        handleNext,
        handlePrevious,
        resetGame,
        currentQuestion: questions[currentIndex]
    };
}

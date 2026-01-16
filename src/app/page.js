'use client';

import { useTriviaGame } from '@/hooks/useTriviaGame';
import WelcomeScreen from '@/components/organisms/WelcomeScreen';
import QuestionCard from '@/components/organisms/QuestionCard';
import ResultsView from '@/components/organisms/ResultsView';
import Spinner from '@/components/atoms/Spinner';
import Button from '@/components/atoms/Button';

export default function Home() {
    const {
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
        currentQuestion
    } = useTriviaGame();

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">

            {gameState === 'welcome' && (
                <WelcomeScreen onStart={startGame} />
            )}

            {gameState === 'loading' && (
                <Spinner />
            )}

            {gameState === 'playing' && currentQuestion && (
                <div className="w-full max-w-2xl flex flex-col gap-6">
                    <div className="flex justify-between items-center text-white font-mono text-sm opacity-80 uppercase tracking-widest">
                        <span>Question {currentIndex + 1} / {questions.length}</span>
                        <span>History</span>
                    </div>

                    <QuestionCard
                        question={currentQuestion}
                        selectedAnswer={userAnswers.get(currentQuestion.id)}
                        onSelectAnswer={handleAnswerSelect}
                    />

                    <div className="flex justify-between mt-4">
                        <Button
                            variant="secondary"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className={currentIndex === 0 ? 'opacity-0' : ''}
                        >
                            Previous
                        </Button>

                        <Button
                            variant="primary"
                            onClick={handleNext}
                            disabled={!userAnswers.has(currentQuestion.id)}
                        >
                            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </div>
            )}

            {gameState === 'results' && result && (
                <ResultsView
                    result={result}
                    questions={questions}
                    onPlayAgain={resetGame}
                />
            )}
        </main>
    );
}

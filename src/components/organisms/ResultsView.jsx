import Button from '@/components/atoms/Button';

export default function ResultsView({ result, questions, onPlayAgain }) {
    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl max-w-2xl w-full animate-fade-in max-h-[85vh] overflow-y-auto custom-scrollbar">
            <p className="text-indigo-500 uppercase font-bold tracking-widest mb-4">Quiz Completed</p>
            <h2 className="text-6xl font-black text-gray-900 mb-2">
                {result.score} <span className="text-3xl text-gray-400 font-medium">/ {result.total}</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
                {result.score === result.total ? 'Perfect Score! 🌟' :
                    result.score > result.total / 2 ? 'Great Job! 🎉' : 'Keep Trying! 💪'}
            </p>

            <div className="space-y-4 mb-8 text-left">
                {result.results && result.results.map((res) => {
                    const originalQuestion = questions.find(q => q.id === res.questionId);
                    return (
                        <div key={res.questionId} className={`p-4 rounded-xl border-l-4 ${res.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                            <p className="text-sm text-gray-500 mb-1 font-semibold">{originalQuestion?.category || 'Question'}</p>
                            <p className="font-medium text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: originalQuestion?.question }} />

                            <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Your Answer:</span>
                                    <span className={`font-bold ${res.isCorrect ? 'text-green-600' : 'text-red-500'}`} dangerouslySetInnerHTML={{ __html: res.userAnswer }} />
                                </div>
                                {!res.isCorrect && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Correct Answer:</span>
                                        <span className="font-bold text-green-600" dangerouslySetInnerHTML={{ __html: res.correctAnswer }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Button variant="cta" onClick={onPlayAgain} className="sticky bottom-0">
                Play Again
            </Button>
        </div>
    );
}

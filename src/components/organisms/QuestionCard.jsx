import Badge from '@/components/atoms/Badge';
import AnswerOption from '@/components/molecules/AnswerOption';

export default function QuestionCard({ question, selectedAnswer, onSelectAnswer }) {
    return (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl animate-fade-in-up w-full">
            <div className="flex gap-2 mb-6">
                <Badge text={question.category} color="purple" />
                <Badge text="Hard" color="yellow" />
            </div>

            <h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: question.question }}
            />

            <div className="space-y-3">
                {question.answers.map((answer, index) => (
                    <AnswerOption
                        key={index}
                        answer={answer}
                        isSelected={selectedAnswer === answer}
                        onSelect={onSelectAnswer}
                    />
                ))}
            </div>
        </div>
    );
}

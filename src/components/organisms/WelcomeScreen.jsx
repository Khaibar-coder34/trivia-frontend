import Button from '@/components/atoms/Button';

export default function WelcomeScreen({ onStart }) {
    return (
        <div className="text-center text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
                Trivia<span className="text-yellow-300">Master</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-md mx-auto">
                Test your knowledge!
            </p>
            <Button variant="start" onClick={onStart}>
                Start Quiz
            </Button>
        </div>
    );
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false
}) {
    const baseStyle = "rounded-xl font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-900 icon-bounce py-3 px-8",
        secondary: "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 py-3 px-6",
        cta: "bg-indigo-600 text-white py-4 w-full hover:bg-indigo-700",
        start: "bg-white text-indigo-600 px-8 py-4 text-lg hover:bg-yellow-300 hover:text-indigo-900 hover:scale-105"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

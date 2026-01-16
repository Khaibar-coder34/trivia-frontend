export default function Badge({ text, color = 'blue' }) {
    const colors = {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        yellow: "bg-yellow-100 text-yellow-800",
        purple: "bg-purple-100 text-purple-800"
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors[color] || colors.blue}`}>
            {text}
        </span>
    );
}

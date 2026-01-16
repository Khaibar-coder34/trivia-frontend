export default function AnswerOption({ answer, isSelected, onSelect }) {
    return (
        <button
            onClick={() => onSelect(answer)}
            className={`w-full p-4 text-left rounded-xl transition-all duration-200 border-2 flex items-center group
                ${isSelected
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg transform scale-[1.02]'
                    : 'bg-white border-gray-100 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
        >
            <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors
                ${isSelected ? 'border-white bg-white' : 'border-gray-300 group-hover:border-indigo-400'}`}
            >
                {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-600" />}
            </div>
            <span className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
    );
}

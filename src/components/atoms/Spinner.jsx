export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white font-medium text-lg animate-pulse">Loading...</p>
        </div>
    );
}

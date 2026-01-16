const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export async function fetchQuestions(amount = 5) {
    try {
        const res = await fetch(`${API_BASE_URL}/questions?amount=${amount}`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error('Failed to fetch questions');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function checkAnswers(answers) {
    // answers: Map<questionId, answer>
    // Convert Map to Object for JSON
    const answersObj = Object.fromEntries(answers);

    try {
        const res = await fetch(`${API_BASE_URL}/checkanswers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers: answersObj }),
        });
        if (!res.ok) throw new Error('Failed to check answers');
        return await res.json();
    } catch (error) {
        console.error(error);
        return { score: 0, total: 0 };
    }
}

export async function resetGame() {
    try {
        await fetch(`${API_BASE_URL}/answers`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error("Failed to reset game:", error);
    }
}

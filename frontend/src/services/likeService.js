export const createLike = async (userId, pinId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, pinId })
        });
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch failed: ' + error);
        throw Error(error.message || 'Error creating like');
    }
};

export const checkIfLiked = async (userId, pinId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/like/${userId}/${pinId}`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch failed: ' + error);
        throw Error(error.message || 'Error checking like');
    }
};
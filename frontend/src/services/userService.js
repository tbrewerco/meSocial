export const getUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch failed: ' + error);
        throw Error(error.message || 'Error fetching user');
    }
}

const registerUser = async (username, password, email) => {
    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application-json' },
            body: JSON.stringify({
                username,
                password,
                email
            })
        });

        const data = await response.json();

        if (!response.ok) {
            setAlertOpen(true);
            throw new Error(data.message || 'Error registering user');
        }

        navigate('/', { replace: true });
    } catch (error) {
        console.error(`Error creating user: ${error.message}`);
    }
};

const loginUser = async (username, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error logging in');
        }

        return data;
    } catch (error) {
        console.error(`Error logging in: ${error.message}`);
        throw error;
    };
};

export default { registerUser, loginUser };
const registerUser = async (username, password, email) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                email
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error registering user');
        }

        return data;
    } catch (error) {
        console.error(`Error creating user: ${error.message}`);
        throw Error(error.message || 'Error creating user');
    }
};

const loginUser = async (username, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
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

        navigate('/', { replace: true });
    } catch (error) {
        console.error(`Error logging in: ${error.message}`);
        throw Error(error.message || 'Error logging in');
    };
};

const loginWithGoogle = async (id_token) => {
    const URL = import.meta.env.VITE_SANITY_PROJECT_GOOGLE_AUTH_URL;

    try {
        const serverResponse = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_token })
        });
        
        if (!serverResponse.ok) {
            throw new Error('Failed to authenticate with server.');
        };

        return await serverResponse.json()
    } catch (error) {
        console.error(`Error logging in: ${error.message}`);
        throw Error(error.message || 'Error logging in');
    };
};

export default { registerUser, loginUser, loginWithGoogle };
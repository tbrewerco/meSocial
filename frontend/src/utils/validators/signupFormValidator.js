import validator from "validator";

export default function (username, password, email, confirmPassword) {
    console.log(username, password, email, confirmPassword);
    if (email && !validator.isEmail(email)) {
        return 'Invalid email format.';
    }

    if (password && !validator.isLength(password, { min: 8 })) {
        return 'Password must be at least 8 characters.';
    }

    if (username && !validator.isLength(username, { min: 8 })) {
        return 'Username must be at least 6 characters.';
    }

    if (username && !validator.isAlphanumeric(username)) {
        return 'Username must be alphanumeric.';
    }

    if (password && confirmPassword && password !== confirmPassword) {
        return 'Passwords do not match.';
    }

    return '';
};
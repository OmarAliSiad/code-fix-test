function login(username, password){

    // Bug Fix/Robustness: Ensure username and password are strings to prevent unexpected errors
    // and handle cases where inputs might be null, undefined, or other types.
    if (typeof username !== 'string' || typeof password !== 'string') {
        return { success: false, message: "Invalid input: username and password must be strings." };
    }

    // Robustness: Trim whitespace from inputs to handle accidental leading/trailing spaces
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // For a real-world application, this would involve hashing passwords and querying a secure database.
    // As per the current simplified logic, we're checking against hardcoded values.
    if(trimmedUsername === "admin" && trimmedPassword === "1234"){
        // Bug Fix/Robustness: Return a more informative object instead of just true/false.
        // This allows the calling code to provide specific feedback to the user.
        return { success: true, message: "Login successful!" };
    }

    // Bug Fix/Robustness: Return an informative message for failed login attempts.
    return { success: false, message: "Invalid username or password." };

}

module.exports = login;

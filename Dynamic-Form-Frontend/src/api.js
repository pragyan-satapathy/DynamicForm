export const fetchFormConfig = async () => {
    const response = await fetch('http://localhost:5000');
    if (!response.ok) {
        throw new Error('response was not ok');
    }
    return response.json();
};

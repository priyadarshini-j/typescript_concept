interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
async function getUser(): Promise<User[]> {
    const response = await fetch(
        "https://dummyjson.com/users?limit=5"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.users;
}
async function displayUsers(): Promise<void> {
    try {
        const users = await getUser();
        users.forEach((user) => {
            console.log(user.firstName);
            console.log(user.lastName);
            console.log(user.email);
        });

    } catch (error) {
        console.error("Error displaying users:", error);
    }
}
displayUsers();
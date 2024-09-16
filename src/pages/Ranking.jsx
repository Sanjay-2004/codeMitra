import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import { columns } from "@/components/columns";

// Helper function to generate random ratings
const getRandomRating = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random names for the participants
const randomNames = [
    "John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "David Wilson",
    "Sophia Taylor", "Liam Brown", "Olivia White", "William Harris", "Ethan Clark",
    "Mason Lewis", "James Scott", "Isabella Hill", "Alexander Young", "Amelia King",
    "Lucas Turner", "Emma Wright", "Henry Adams", "Ava Walker", "Benjamin Lee"
];

// Function to generate random users data
const generateRandomData = (numEntries) => {
    let data = [];

    for (let i = 0; i < numEntries; i++) {
        const name = randomNames[Math.floor(Math.random() * randomNames.length)];
        const email = `${name.toLowerCase().replace(" ", ".")}@example.com`;
        const contests = getRandomRating(10, 50);  // Random number of contests
        const leetcode = getRandomRating(1000, 2500);  // Random LC rating
        const codechef = getRandomRating(1000, 2500);  // Random CC rating
        const codeforces = getRandomRating(1000, 2500);  // Random CF rating

        data.push({
            id: `${i + 1}-${name.toLowerCase().replace(" ", "")}`,
            rank: 0,  // Placeholder, will set based on contests later
            name,
            email,
            contests,
            leetcode,
            codechef,
            codeforces,
        });
    }

    // Sort the data by contests in descending order to calculate ranks
    data.sort((a, b) => b.contests - a.contests);

    // Assign ranks based on sorted contests
    data = data.map((entry, index) => ({
        ...entry,
        rank: index + 1,
    }));

    return data;
};

const Ranking = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Generate 200 random entries
        const fetchedData = generateRandomData(200);
        setData(fetchedData);
    }, []);

    return (
        <div className="h-[100vh] text-stone-200 p-7 bg-black">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Ranking;

import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import { columns } from "@/components/columns";

const Ranking = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            // Simulate API call to fetch data
            return [
                {
                    id: "728ed52f",
                    amount: 100,
                    status: "pending",
                    email: "m@example.com",
                },
                {
                    id: "489e1d42",
                    amount: 125,
                    status: "processing",
                    email: "example@gmail.com",
                },
                {
                    id: "57e1d3fa",
                    amount: 150,
                    status: "success",
                    email: "hello@world.com",
                },
                {
                    id: "21d2e7fa",
                    amount: 95,
                    status: "failed",
                    email: "test@example.com",
                },
                // Add more data if needed
            ];
        }

        // Fetch the data and update the state
        getData().then((fetchedData) => setData(fetchedData));
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div className='h-[100vh] text-stone-200 p-7 bg-black'>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Ranking;
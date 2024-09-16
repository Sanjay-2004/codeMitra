
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"

export const description = "A simple area chart"

const datasets = {
    Contests: [
        { month: "January", desktop: Math.random() * 500 },
        { month: "February", desktop: Math.random() * 500 },
        { month: "March", desktop: Math.random() * 500 },
        { month: "April", desktop: Math.random() * 500 },
        { month: "May", desktop: Math.random() * 500 },
        { month: "June", desktop: Math.random() * 500 },
    ],
    LeetCode: [
        { month: "January", desktop: Math.random() * 500 },
        { month: "February", desktop: Math.random() * 500 },
        { month: "March", desktop: Math.random() * 500 },
        { month: "April", desktop: Math.random() * 500 },
        { month: "May", desktop: Math.random() * 500 },
        { month: "June", desktop: Math.random() * 500 },
    ],
    CodeChef: [
        { month: "January", desktop: Math.random() * 500 },
        { month: "February", desktop: Math.random() * 500 },
        { month: "March", desktop: Math.random() * 500 },
        { month: "April", desktop: Math.random() * 500 },
        { month: "May", desktop: Math.random() * 500 },
        { month: "June", desktop: Math.random() * 500 },
    ],
    CodeForces: [
        { month: "January", desktop: Math.random() * 500 },
        { month: "February", desktop: Math.random() * 500 },
        { month: "March", desktop: Math.random() * 500 },
        { month: "April", desktop: Math.random() * 500 },
        { month: "May", desktop: Math.random() * 500 },
        { month: "June", desktop: Math.random() * 500 },
    ],
};

const chartConfig = {
    desktop: {
        label: "Contest",
        color: "hsl(var(--chart-4))",
    },
}

export default function Component({ name = "Sanjay" }) {
    const [selected, setSelected] = useState("Contests")
    return (
        <Card className="h-96 w-full bg-stone-900 border-0 px-3 mt-5 overflow-hidden"> {/* Ensure full height and prevent overflow */}
            <CardHeader className="flex-row justify-between">
                <div>
                    <CardTitle className="text-stone-200">Contest Graph</CardTitle>
                    <CardDescription className="mt-2">
                        Showing ratings of {name}
                    </CardDescription>
                </div>
                <Select onValueChange={(value) => setSelected(value)} defaultValue="Contests">
                    <SelectTrigger className="w-[180px] bg-inherit text-stone-100 font-bold">
                        <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-stone-900 text-stone-200">
                        <SelectItem value="Contests">Contests</SelectItem>
                        <SelectItem value="LeetCode">LeetCode</SelectItem>
                        <SelectItem value="CodeChef">CodeChef</SelectItem>
                        <SelectItem value="CodeForces">CodeForces</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="h-[calc(100%-100px)] w-full p-0"> {/* Adjust content height and padding */}
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={datasets[selected]}
                            margin={{
                                top: 10,
                                left: 12,
                                right: 12,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0.4}
                                stroke="var(--color-desktop)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

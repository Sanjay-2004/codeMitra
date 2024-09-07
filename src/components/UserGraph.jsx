"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

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

export const description = "A simple area chart"

const chartData = [
    { month: "January", desktop: 102 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 525 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Contest",
        color: "hsl(var(--chart-4))",
    },
}

export default function Component({ name = "Sanjay" }) {
    return (
        <Card className="h-96 w-full bg-stone-900 border-0 px-3 mt-5 overflow-hidden"> {/* Ensure full height and prevent overflow */}
            <CardHeader>
                <CardTitle className="text-stone-200">Contest Graph</CardTitle>
                <CardDescription>
                    Showing ratings of {name}
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[calc(100%-100px)] w-full p-0"> {/* Adjust content height and padding */}
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
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

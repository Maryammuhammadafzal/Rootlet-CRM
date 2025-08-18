
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

export const description = "Stacked percentage attendance chart"


let daysArray = [
    { day: "1", present: 60, halfday: 15, absent: 20 },
    { day: "2", present: 50, halfday: 30, absent: 40 },
    { day: "3", present: 20, halfday: 45, absent: 10 },
    { day: "4", present: 20, halfday: 50, absent: 20 },
    { day: "5", present: 60, halfday: 15, absent: 40 },
    { day: "6", present: 45, halfday: 35, absent: 30 },
    { day: "7", present: 40, halfday: 35, absent: 15 },
    { day: "8", present: 65, halfday: 15, absent: 25 },
    { day: "9", present: 40, halfday: 40, absent: 20 },
    { day: "10", present: 25, halfday: 40, absent: 30 },
    { day: "11", present: 50, halfday: 15, absent: 20 },
    { day: "12", present: 15, halfday: 12, absent: 20 },
    { day: "13", present: 60, halfday: 15, absent: 20 },
    { day: "14", present: 50, halfday: 30, absent: 40 },
    { day: "15", present: 20, halfday: 45, absent: 10 },
    { day: "16", present: 20, halfday: 50, absent: 20 },
    { day: "17", present: 60, halfday: 15, absent: 40 },
    { day: "18", present: 45, halfday: 35, absent: 30 },
    { day: "19", present: 40, halfday: 35, absent: 15 },
    { day: "20", present: 65, halfday: 15, absent: 25 },
    { day: "21", present: 40, halfday: 40, absent: 20 },
    { day: "22", present: 25, halfday: 40, absent: 30 },
    { day: "23", present: 50, halfday: 15, absent: 20 },
    { day: "24", present: 15, halfday: 12, absent: 20 },
    { day: "25", present: 15, halfday: 12, absent: 20 },
    { day: "26", present: 15, halfday: 12, absent: 20 },
    { day: "27", present: 15, halfday: 12, absent: 20 },
    { day: "28", present: 15, halfday: 12, absent: 20 },
    { day: "29", present: 15, halfday: 12, absent: 20 },
    { day: "30", present: 15, halfday: 12, absent: 20 },
    { day: "31", present: 15, halfday: 12, absent: 20 },
]
let monthsArray = [
    { month: "Jan", present: 60, halfday: 15, absent: 20 },
    { month: "Feb", present: 50, halfday: 30, absent: 40 },
    { month: "Mar", present: 20, halfday: 45, absent: 10 },
    { month: "Apr", present: 20, halfday: 50, absent: 20 },
    { month: "May", present: 60, halfday: 15, absent: 40 },
    { month: "Jun", present: 45, halfday: 35, absent: 30 },
    { month: "Jul", present: 40, halfday: 35, absent: 15 },
    { month: "Aug", present: 65, halfday: 15, absent: 25 },
    { month: "Sep", present: 40, halfday: 40, absent: 20 },
    { month: "Oct", present: 25, halfday: 40, absent: 30 },
    { month: "Nov", present: 50, halfday: 15, absent: 20 },
    { month: "Dec", present: 15, halfday: 12, absent: 20 },
]
let yearsArray = [
    { year: "2019", present: 40, halfday: 35, absent: 15 },
    { year: "2020", present: 65, halfday: 15, absent: 25 },
    { year: "2021", present: 40, halfday: 40, absent: 20 },
    { year: "2022", present: 25, halfday: 40, absent: 30 },
    { year: "2023", present: 50, halfday: 15, absent: 20 },
    { year: "2024", present: 15, halfday: 12, absent: 20 },
]
let chartData: any = monthsArray;
const chartConfig = {
    present: {
        label: "Present",
        color: "#3b82f6", // blue
    },
    halfday: {
        label: "Half day & Late",
        color: "#facc15", // yellow
    },
    absent: {
        label: "Absent",
        color: "#f87171", // red
    },
} satisfies ChartConfig
// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "var(--chart-1)",
//     },
//     mobile: {
//         label: "Mobile",
//         color: "var(--chart-2)",
//     },
// } satisfies ChartConfig

export function AttendanceChart() {
   const [isChecked, setIsChecked] = useState<'Days' | 'Month' | 'Year'>('Month')
const [chartData, setChartData] = useState<any>(monthsArray) // default chart data

const handleChecked = (value: 'Days' | 'Month' | 'Year') => {
  setIsChecked(value)

  if (value === 'Days') {
    setChartData(daysArray)
    console.log(chartData);
    
  } else if (value === 'Month') {
    setChartData(monthsArray)
  } else if (value === 'Year') {
    setChartData(yearsArray)
  }
}

    return (
        <>
            {isChecked === 'Days' && (
                <Card className="bg-transparent shadow-none border-0">
                    <CardHeader className="flex justify-between gap-4">
                        <h2 className='font-medium text-xl mb-4'>Attendance Overview</h2>
                        {/* Switches */}
                        <div className="flex gap-2">
                            <div className="flex gap-2">
                                {/* Present Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="present" className={`bg-[${chartConfig.present.color}] data-[state=checked]:bg-[${chartConfig.present.color}] `} />
                                    <Label htmlFor="present" className="font-text-xs">{chartConfig.present.label}</Label>
                                </div>
                                {/* Half day Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="halfday" className={`bg-[${chartConfig.halfday.color}] data-[state=checked]:bg-[${chartConfig.halfday.color}] `} />
                                    <Label htmlFor="halfday" className="font-text-xs">{chartConfig.halfday.label}</Label>
                                </div>
                                {/* Absent Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="absent" className={`bg-[${chartConfig.absent.color}] data-[state=checked]:bg-[${chartConfig.absent.color}] `} />
                                    <Label htmlFor="absent" className="font-text-xs">{chartConfig.absent.label}</Label>
                                </div>
                            </div>
                        </div>
                        {/* Mothly Selection */}
                        <div className="">
                            <Select>
                                <SelectTrigger className="w-[90px]">
                                    <SelectValue placeholder="Select" defaultValue={'Days'} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem onClick={() =>handleChecked('Days')} value="Days">Days</SelectItem>
                                    <SelectItem onClick={() => handleChecked('Month')} value="Month">Month</SelectItem>
                                    <SelectItem onClick={() =>handleChecked('Year')} value="Year">Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                            <BarChart data={chartData} >
                                <CartesianGrid vertical={false} strokeDasharray="3 6" />
                                <XAxis
                                    dataKey="day"
                                    tickMargin={15}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    domain={[0, 100]}
                                    ticks={[20, 40, 60, 80, 100]}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />

                                <Bar dataKey="present"
                                    barSize={10}
                                    stackId="a"
                                    fill={chartConfig.present.color}
                                    radius={[4, 4, 4, 4]}
                                    stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="halfday" barSize={10} stackId="a" fill={chartConfig.halfday.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="absent" barSize={8} stackId="a" fill={chartConfig.absent.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            ) || isChecked === 'Month' && (
                <Card className="bg-transparent shadow-none border-0">
                    <CardHeader className="flex justify-between gap-4">
                        <h2 className='font-medium text-xl mb-4'>Attendance Overview</h2>
                        {/* Switches */}
                        <div className="flex gap-2">
                            <div className="flex gap-2">
                                {/* Present Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="present" className={`bg-[${chartConfig.present.color}] data-[state=checked]:bg-[${chartConfig.present.color}] `} />
                                    <Label htmlFor="present" className="font-text-xs">{chartConfig.present.label}</Label>
                                </div>
                                {/* Half day Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="halfday" className={`bg-[${chartConfig.halfday.color}] data-[state=checked]:bg-[${chartConfig.halfday.color}] `} />
                                    <Label htmlFor="halfday" className="font-text-xs">{chartConfig.halfday.label}</Label>
                                </div>
                                {/* Absent Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="absent" className={`bg-[${chartConfig.absent.color}] data-[state=checked]:bg-[${chartConfig.absent.color}] `} />
                                    <Label htmlFor="absent" className="font-text-xs">{chartConfig.absent.label}</Label>
                                </div>
                            </div>
                        </div>
                        {/* Mothly Selection */}
                        <div className="">
                            <Select>
                                <SelectTrigger className="w-[90px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem onClick={() =>handleChecked('Days')} value="Days">Days</SelectItem>
                                    <SelectItem onClick={()=>handleChecked('Month')} value="Month">Month</SelectItem>
                                    <SelectItem onClick={()=>handleChecked('Year')} value="Year">Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                            <BarChart data={chartData} >
                                <CartesianGrid vertical={false} strokeDasharray="3 6" />
                                <XAxis
                                    dataKey="month"
                                    tickMargin={15}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    domain={[0, 100]}
                                    ticks={[20, 40, 60, 80, 100]}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />

                                <Bar dataKey="present"
                                    barSize={10}
                                    stackId="a"
                                    fill={chartConfig.present.color}
                                    radius={[4, 4, 4, 4]}
                                    stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="halfday" barSize={10} stackId="a" fill={chartConfig.halfday.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="absent" barSize={8} stackId="a" fill={chartConfig.absent.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            ) || isChecked === 'Year' && (
                <Card className="bg-transparent shadow-none border-0">
                    <CardHeader className="flex justify-between gap-4">
                        <h2 className='font-medium text-xl mb-4'>Attendance Overview</h2>
                        {/* Switches */}
                        <div className="flex gap-2">
                            <div className="flex gap-2">
                                {/* Present Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="present" className={`bg-[${chartConfig.present.color}] data-[state=checked]:bg-[${chartConfig.present.color}] `} />
                                    <Label htmlFor="present" className="font-text-xs">{chartConfig.present.label}</Label>
                                </div>
                                {/* Half day Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="halfday" className={`bg-[${chartConfig.halfday.color}] data-[state=checked]:bg-[${chartConfig.halfday.color}] `} />
                                    <Label htmlFor="halfday" className="font-text-xs">{chartConfig.halfday.label}</Label>
                                </div>
                                {/* Absent Switch */}
                                <div className="flex items-center space-x-2">
                                    <Switch id="absent" className={`bg-[${chartConfig.absent.color}] data-[state=checked]:bg-[${chartConfig.absent.color}] `} />
                                    <Label htmlFor="absent" className="font-text-xs">{chartConfig.absent.label}</Label>
                                </div>
                            </div>
                        </div>
                        {/* Mothly Selection */}
                        <div className="">
                            <Select>
                                <SelectTrigger className="w-[90px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem onClick={() =>handleChecked('Days')} value="Days">Days</SelectItem>
                                    <SelectItem onClick={()=>handleChecked('Month')} value="Month">Month</SelectItem>
                                    <SelectItem onClick={()=>handleChecked('Year')} value="Year">Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                            <BarChart data={chartData} >
                                <CartesianGrid vertical={false} strokeDasharray="3 6" />
                                <XAxis
                                    dataKey="year"
                                    tickMargin={15}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    domain={[0, 100]}
                                    ticks={[20, 40, 60, 80, 100]}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />

                                <Bar dataKey="present"
                                    barSize={10}
                                    stackId="a"
                                    fill={chartConfig.present.color}
                                    radius={[4, 4, 4, 4]}
                                    stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="halfday" barSize={10} stackId="a" fill={chartConfig.halfday.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                                <Bar dataKey="absent" barSize={8} stackId="a" fill={chartConfig.absent.color} radius={[4, 4, 4, 4]} stroke="#fff"
                                    strokeWidth={3} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            )}
        </>
    )
}

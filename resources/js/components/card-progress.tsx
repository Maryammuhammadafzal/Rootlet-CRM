"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

const chartData = [
  { name: "progress", value: 74, fill: "#fefefe" }, // ✅ use "value" instead of "visitors"
]

export function CardProgress() {
  return (
    <RadialBarChart
      width={64}
      height={64}
      innerRadius={30}
      outerRadius={40}
      data={chartData}
      startAngle={0}
      endAngle={74+180}
    >
      {/* Arc */}
      <RadialBar dataKey="value" cornerRadius={10} />

      {/* Optional faint background circle */}
      <PolarGrid
        gridType="circle"
        radialLines={false}
        stroke="none"
        className=""
        polarRadius={[86, 74]}
      />

      {/* Center number */}
      <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-accent text-lg font-bold"
                  >
                    {chartData[0].value.toLocaleString()}%
                  </tspan>
                </text>
              )
            }
          }}
        />
      </PolarRadiusAxis>
    </RadialBarChart>
  )
}

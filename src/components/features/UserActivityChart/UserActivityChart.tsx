import {
	Chart,
	BarElement,
	CategoryScale,
	ChartData,
	LinearScale,
	Tooltip,
	ArcElement,
} from "chart.js";
import { FC, useState } from "react";
import { Bar } from "react-chartjs-2";

interface IUserActivityChartProps {
	labels?: string[];
	data: number[];
}

Chart.register(ArcElement, Tooltip, LinearScale, CategoryScale, BarElement);

export const UserActivityChart: FC<IUserActivityChartProps> = ({ labels, data }) => {
	const [chart] = useState<ChartData<"bar", number[], unknown>>({
		labels: labels,

		datasets: [
			{
				label: "Animes",
				data: data,

				backgroundColor: [
					"red",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: ["#fff"],
				borderRadius: 160,
				borderWidth: 2,
			},
		],
	});

	return (
		<div style={{ width: "100%", height: "200px" }}>
			<Bar data={chart} width={"100%"} height={"100%"} options={{ maintainAspectRatio: false }} />
		</div>
	);
};

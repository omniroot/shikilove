import { ChartData } from "chart.js";
import { FC, useState } from "react";
import { Doughnut } from "react-chartjs-2";

interface IUserRatesChartProps {
	labels?: string[];
	data: number[];
}
export const UserRatesChart: FC<IUserRatesChartProps> = ({ labels, data }) => {
	const [chart] = useState<ChartData<"doughnut", number[], string>>({
		labels: labels,

		datasets: [
			{
				label: "Animes",
				spacing: 2,
				borderRadius: 4,
				data: data,
				backgroundColor: [
					"red",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: ["#121212"],
				borderWidth: 1,
			},
		],
	});

	return (
		<div style={{ width: "200px", height: "200px" }}>
			<Doughnut data={chart} updateMode="hide" redraw={true} />
		</div>
	);
};

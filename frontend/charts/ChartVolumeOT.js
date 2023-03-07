import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ transactions }) => {
    const chartRef = useRef();

    useEffect(() => {
        if (transactions && transactions.length) {
            const labels = transactions.map((t) => t.block_timestamp);
            const data = transactions.map((t) => t.value / 10 ** 18);
            console.log("labels", labels, "\ndata", data);
            new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Transaction Volume",
                            data: data,
                            fill: false,
                            borderColor: "rgb(75, 192, 192)",
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "time",
                            time: {
                                unit: "day",
                                displayFormats: {
                                    day: "MMM D",
                                },
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Transaction Volume (wei)",
                            },
                            ticks: {
                                callback: (value, index, values) => {
                                    return value.toLocaleString();
                                },
                            },
                        },
                    },
                },
            });
        }
    }, [transactions]);

    return <canvas ref={chartRef} />;
};

export default LineChart;

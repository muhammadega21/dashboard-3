// Line Chart

const lineChart = document.getElementById("lineChart");
const date = new Date();
const month = date.getMonth();

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mai",
  "Juni",
  "July",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

let startMonthIndex, endMonthIndex;
if (month <= 5) {
  startMonthIndex = 0;
  endMonthIndex = 5;
} else {
  startMonthIndex = 6;
  endMonthIndex = 11;
}

const selectedMonth = months.slice(startMonthIndex, endMonthIndex + 1);
new Chart(lineChart, {
  type: "line",
  data: {
    labels: selectedMonth,
    datasets: [
      {
        label: "Uang Masuk",
        data: [300000, 0, 100000],
        borderWidth: 1,
      },
      {
        label: "Uang Keluar",
        data: [10000, 200000, 50000],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Riwayat Perbulan",
        align: "start",
      },
    },
  },
});

// Doughunt Chart

const doughuntChart = document.getElementById("doughuntChart");

new Chart(doughuntChart, {
  type: "doughnut",
  data: {
    labels: ["Total Uang", "Total Pengeluaran"],
    datasets: [
      {
        label: "Total",
        data: [900000, 500000],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
      },
    ],
    hoverOffset: 4,
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Riwayat Total",
        align: "start",
      },
    },
  },
});

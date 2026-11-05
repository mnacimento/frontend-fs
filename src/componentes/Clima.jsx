import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Clima = () => {

    const navigate = useNavigate();
    const [pronostico, setPronostico] = useState([])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pronostico'
            }
        }
    };

    const data = {
        labels: pronostico.map((e,i) => i),//[0,1,2,3,4,5]
        datasets: [
            {
                label: 'Temperatura',
                data: pronostico.map(t => t.main.temp),//[33,20,19,15],
                backgroundColor:'rgba(122, 99, 255, 0.5)',
            }]
    };

    //cuenta cuantas veces aparece cada condicion del clima, ej: {Clouds: 20, Rain: 12, Clear: 8}
    const condiciones = {};
    pronostico.forEach(p => {
        const c = p.weather[0].main;
        condiciones[c] = (condiciones[c] || 0) + 1;
    });

    const optionsDona = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Condiciones del clima'
            }
        }
    };

    const dataDona = {
        labels: Object.keys(condiciones),
        datasets: [
            {
                label: 'Cantidad',
                data: Object.values(condiciones),
                backgroundColor: [
                    'rgba(122, 99, 255, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
            }]
    };

    useEffect(() => {
        console.log(localStorage.getItem("usuario"));
        if (localStorage.getItem("usuario") === null) {
            navigate("/");
        }
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-34&lon=-56&appid=764a496e4b4fb2978c4ba1ba2021a336&units=metric")
            .then(r => r.json())
            .then(datos => {
                setPronostico(datos.list)
            })
    }, [])

    return (
        <div>
            <h2>Clima</h2>
            <Bar options={options} data={data} />
            <div style={{ maxWidth: 400, margin: "0 auto" }}>
                <Doughnut options={optionsDona} data={dataDona} />
            </div>
            <Link to="/">Ir al Inicio</Link>
        </div>
    )
}

export default Clima
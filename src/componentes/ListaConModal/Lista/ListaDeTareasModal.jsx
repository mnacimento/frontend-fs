import { useEffect, useState } from 'react';
import { axiosConfig } from '../../../utils/axiosConfig';
import toast from 'react-hot-toast';
import EditTaskModal from '../Modal/EditTaskModal';
import Spinner from '../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { mostrarSpinner, ocultarSpinner } from '../../../store/slices/spinnerSlice';
import "./ListaDeTareas.css";


const ListaDeTareasModal = () => {

    const [tareas, setTareas] = useState([]);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const obtenerTareas = async () => {
            dispatch(mostrarSpinner());
            try {
                const respuesta = await axiosConfig.get("/todos", {
                    params: { _limit: 20 }
                })
                console.log(respuesta);
                setTareas(respuesta.data)
                toast.success("Tareas cargadas exitosamente");
            } catch (error) {
                console.error("Error al cargar las tareas: ", error);
                toast.error("No se pudieron cargar las tareas");
            } finally {
                dispatch(ocultarSpinner());
            }
        }
        obtenerTareas();
    }, []);


    const abrirModal = (tarea) => {
        setTareaSeleccionada(tarea);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setTareaSeleccionada(null);
        setModalAbierto(false);
    }

    const guardarCambios = async (tareaEditada) => {
        dispatch(mostrarSpinner());
        try {
            await axiosConfig.put(`/todos/${tareaEditada.id}`, tareaEditada);
            setTareas((prev) =>
                prev.map((t) => (t.id === tareaEditada.id ? { ...t, ...tareaEditada } : t))
            );
            toast.success("Tarea actualizada");
            cerrarModal();
        } catch (error) {
            console.error("Error al actualizar la tarea:", error);
            toast.error("No se pudo actualizar la tarea");
        } finally {
            dispatch(ocultarSpinner())
        }
    }


    return (
        <div style={{ padding: "16px" }}>
            <Spinner />
            <h2 className="tareas-title">Últimas 20 tareas</h2>

            <ul className="tareas-list">
                {tareas.map((tarea) => (
                    <li key={tarea.id} className="tarea-item">
                        <div className="tarea-info">
                            <span className="tarea-id">#{tarea.id}</span>
                            <span className="tarea-title">{tarea.title}</span>
                            <span className={`tarea-badge ${tarea.completed ? "ok" : "pending"}`}>
                                {tarea.completed ? "Completada" : "Pendiente"}
                            </span>
                        </div>

                        <div className="tarea-actions">
                            <button className="btn btn-edit" onClick={() => abrirModal(tarea)}>
                                Editar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <EditTaskModal
                isOpen={modalAbierto}
                onRequestClose={cerrarModal}
                task={tareaSeleccionada}
                onSave={guardarCambios}
            />
        </div>
    )
}

export default ListaDeTareasModal
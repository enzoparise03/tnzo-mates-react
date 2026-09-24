import { useState } from 'react';
import '../styles/Contact.css';

const valoresIniciales = {
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    origen: "",
    mensaje: "",
};

function Contact() {
    const [form, setForm] = useState(valoresIniciales);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Campo modificado → ${name}: ${value}`);
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", form);
        setForm(valoresIniciales);
    };

    const handleReset = () => {
        console.log("Formulario limpiado por el usuario");
        setForm(valoresIniciales);
    };

    return (
        <section id="contacto" className="seccion-contacto">
            <h2>Contactate con nosotros</h2>

            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">Teléfono (WhatsApp):</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="motivo">Motivo de Contacto:</label>
                    <select
                        id="motivo"
                        name="motivo"
                        value={form.motivo}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Seleccione una opción...</option>
                        <option value="compra">Consulta por compra</option>
                        <option value="mayorista">Venta Mayorista</option>
                        <option value="reclamo">Reclamo o Devolución</option>
                    </select>
                </div>

                <div className="form-group radio-group">
                    <p>¿Cómo nos conociste?</p>
                    <label>
                        <input
                            type="radio"
                            name="origen"
                            value="instagram"
                            checked={form.origen === "instagram"}
                            onChange={handleChange}
                            required
                        /> Instagram
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="origen"
                            value="recomendacion"
                            checked={form.origen === "recomendacion"}
                            onChange={handleChange}
                        /> Recomendación
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="origen"
                            value="google"
                            checked={form.origen === "google"}
                            onChange={handleChange}
                        /> Google
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">Dejanos tu consulta:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="form-botones">
                    <button type="submit" className="btn-submit">Enviar Mensaje</button>
                    <button type="button" className="btn-reset" onClick={handleReset}>
                        Limpiar Formulario
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
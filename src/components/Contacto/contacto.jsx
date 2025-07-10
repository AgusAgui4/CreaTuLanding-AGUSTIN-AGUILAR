import React, { useState } from "react";
import "./contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>¿Tenés dudas, sugerencias o consultas? Escribinos:</p>

      <form onSubmit={handleSubmit} className="formulario-contacto">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      {enviado && (
        <p className="mensaje-exito">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </p>
      )}
    </div>
  );
}

export default Contacto;

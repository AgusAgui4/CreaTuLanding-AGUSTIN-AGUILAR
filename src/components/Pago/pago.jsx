import "./pago.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router"; 

function Pago() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    metodoPago: "",
  });

  const [error, setError] = useState("");
  const [envioExitoso, setEnvioExitoso] = useState(false);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si todos los campos están completos
    if (Object.values(formData).includes("") || formData.metodoPago === "") {
      setError("Todos los campos deben estar completos.");
      setEnvioExitoso(false);
    } else {
      setError("");
      setEnvioExitoso(true);
      setTimeout(() => {
        navigate("/gracias");
      }, 600)
    }
  };

  return (
    <div className="pago">
      <h2>Formulario de Pago</h2>
      {envioExitoso && <p className="mensaje-exito">¡Compra realizada con éxito!</p>}
      {error && <p className="mensaje-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Número de teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="metodoPago">Método de pago</label>
          <select
            id="metodoPago"
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione un método de pago</option>
            <option value="tarjeta">Tarjeta de crédito/débito</option>
            <option value="paypal">PayPal</option>
            <option value="efectivo">Efectivo/Transferencia</option>
          </select>
        </div>
        <button type="submit" className="btn-completar">
          Completar compra
        </button>
      </form>

      <Link to="/carrito" className="volver-carrito">
        Volver al carrito
      </Link>
    </div>
  );
}

export default Pago;

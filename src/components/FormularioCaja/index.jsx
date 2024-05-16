
const FormularioCaja = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const color = e.target.colorCaja.value;
        const ancho = e.target.anchoCaja.value;
        const alto = e.target.altoCaja.value;

        const caja = document.createElement('div');
        caja.style.width = `${ancho}px`;
        caja.style.height = `${alto}px`;
        caja.style.backgroundColor = color;

        document.querySelector('.cajas').appendChild(caja);

        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorCaja">Color: </label>
                    <input type="color" id="colorCaja" name="colorCaja" />
                </div>
                <br />
                <div>
                    <label htmlFor="anchoCaja">Ancho: </label>
                    <input type="number" id="anchoCaja" name="anchoCaja" />
                </div>
                <br />
                <div>
                    <label htmlFor="altoCaja">Alto: </label>
                    <input type="number" id="altoCaja" name="altoCaja" />
                </div>
                <br />
                <div>
                    <button type="submit">Agregar</button>
                </div>
            </form>
        </>
    );
}

export default FormularioCaja;
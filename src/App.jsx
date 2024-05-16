import './App.css'
import FormCaja from './components/FormularioCaja'

function App() {
  return (
    <>
      <h2>Generador de Caja</h2>
      <FormCaja />
      <div className="cajas">
        {/* Aquí se mostrarán las cajas */}
      </div>
    </>
  )
}

export default App

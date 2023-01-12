import { useState } from "react"
import { BaseColaboradores } from "../BaseColaboradores"

const Colaboradores = () => {
    const [newCoworkerName, setNewCoworkerName] = useState("")
    const [newCoworkerEmail, setNewCoworkerEmail] = useState("")
    const [listCoworkers, setListCoworkers] = useState(BaseColaboradores)
    const [search, setSearch] = useState("")
 
    const searcher = (e) => {
          setSearch(e.target.value)
          console.log(e.target.value)
        }
        
    const sendform = (e) => {
        e.preventDefault()
        if (!newCoworkerName.trim() || !newCoworkerEmail.trim()) {
            alert("Complete los datos")
            return;
        }
        setListCoworkers([...listCoworkers,{id: Date.now(), nombre: newCoworkerName, correo: newCoworkerEmail}])
        setNewCoworkerName("")
        setNewCoworkerEmail("")
    }
    
    const capturaInputName = (e) => {
        e.preventDefault
        setNewCoworkerName(e.target.value)
    }
    const capturaInputEmail = (e) => {
        e.preventDefault
        setNewCoworkerEmail(e.target.value)
    }

return (
<>
<nav className="navbar navbar-light bg-light">
          <div className="container-fluid" style={{backgroundColor: "black", color:"white"}}>
            <form className="d-flex">
                    <p>Buscador de Colaboradores</p>
                    <input
                    value={search}
                    className="form-control me-2 form-control-sg"
                    type="search"
                    onChange={searcher}
                    placeholder="Busca un colaborador"
                    aria-label="Search"
                    />
            </form>
          </div>
        </nav>

    <form onSubmit={sendform}>
    <p>Nombre del colaborador</p>
    <input type="text" placeholder="Ingresa el nombre del colaborador" className="form-control" name="coworkerName" onChange={capturaInputName}/>
    <p>Correo del colaborador</p>
    <input type="text" placeholder="Ingresa el correo del colaborador" className="form-control" name="coworkerEmail" onChange={capturaInputEmail}/>
    <br/>
    <button className="btn btn-primary">Agregar Colaborador</button>
  </form>
  <h3>Listado de colaboradores</h3>
<table className="table table-hover">
    <thead>
        <tr style={{backgroundColor:"grey"}}>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
        </tr>
    </thead>
     <tbody>
        {listCoworkers.filter((coworker) => {
        return search.toLocaleLowerCase()==="" ? coworker :
        coworker.nombre.toLowerCase().includes(search);}).map( coworker => (
            <tr key={coworker.id}>
                <td>{coworker.nombre}</td>
                <td>{coworker.correo}</td>
            </tr>
))}
       </tbody>
</table>
</>
)}

export default Colaboradores
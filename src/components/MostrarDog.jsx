import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ListarDog from './ListarDog'

const MostrarDog = () => {
    const { dog } = useSelector(state => state.dog)

   
    

    return (
        <>
        <ListarDog/>
            {
                dog.map((data,index) => (
                    <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{data.name}</h4>
                                    <div>
                                       
                                        <Link to="/edit">
                                        <i
                                            className="material-icons"
                                            
                                             >
                                            Editar
                                        </i></Link>
                                    </div>
                                </div>
                                <p>{data.description}</p>
                                <img src={data.url}
                                    alt=""
                                    width="50px" />
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default MostrarDog

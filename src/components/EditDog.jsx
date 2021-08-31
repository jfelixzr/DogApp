import React, { useEffect, useRef }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Edit, Listar, startUploading } from '../actions/dogAction'
import { useForm } from '../hooks/useForm'

const EditDog = () => {
let file="";
    const { active } = useSelector(state => state.dog)

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active])

  

    const [formValue, handleInputChange, reset] = useForm(active)
    const { url, name, description } = formValue

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
        
            dispatch(Edit(formValue))
          
         
    }

    const handleFileChange = (e) => {
        file = e.target.files[0];
        console.log(file)
        if (file) {
          dispatch(startUploading(file))
        file = document.querySelector('#imagen').click()
        }
      }

      const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
      }

    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])



    return (
        <form onSubmit={handleSubmit} className="card card-body border-primary">
        <div className="form-group input-group ">
        <input
                    style={{ display: 'none' }}
                    type="text"
                    className="form-control"
                    id="imagen" 
                    name='image' placeholder="Image URL" defaultValue={url} onChange={handleInputChange} hidden
                />
                <div>
                <input
                        id="fileSelector"
                        type="file"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        />  
                </div>
                <div>
                <input
                className="btn-primary text-center"
                            type="button"
                            value="Cargar Imagen"
                            onClick={handlePictureClick}
                        />
                </div>
            </div>
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
            </div>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                defaultValue={name}
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group mt-3">
            <textarea
                rows="3"
                className="form-control"
                placeholder="Write a Description"
                name="description"
                defaultValue={description}
                onChange={handleInputChange}
            ></textarea>
        </div>

        <button className="btn btn-dark mt-3">Editar</button>
    </form>
    )
}

export default EditDog

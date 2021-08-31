import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  dogNew, Edit, Listar, startUploading } from '../actions/dogAction'
import { useForm } from '../hooks/useForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormAdd = () => {
    let file = "";
    
    const { active } = useSelector(state => state.dog)
    
const formik= useFormik({initialValues:{
    url:"",
    name:"",
    description:"",

},
validationSchema: Yup.object({

name:Yup.string().required("nombre requerido"),
description:Yup.string().required("descripcion requerida")


}), onSubmit:(data)=>{
    
        dispatch(dogNew(data))
        
     
}
})
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
      dispatch(Edit(active))
         
    }



    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])

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

    return (
        <>
      
        <form onSubmit={formik.handleSubmit} className="card card-body border-primary">
            <div className="form-group input-group ">
                
                <input
                    style={{ display: 'none' }}
                    type="text"
                    className="form-control"
                    id="imagen" 
                    name='image' placeholder="Image URL" value={formik.values.url} onChange={formik.handleChange} hidden
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                   
                />
                {formik.errors.name ?<div>{formik.errors.name}</div> : null}
            </div>
            <div className="form-group mt-3">
                <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Write a Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  
                ></textarea>
                {formik.errors.description ? <div>{formik.errors.description}</div> : null}
            </div>

            <button type="submit" className="btn btn-dark mt-3">Save</button>
           
        </form>
        
        
        </>
    )
}

export default FormAdd

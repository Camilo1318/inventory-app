import React, { useState, useEffect, Fragment } from 'react'
import { db } from '../Firebase'
import { useForm } from 'react-hook-form'


const LinkForm = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        props.addOrEditProduct(data);
        e.target.reset();
    }

    //Autocompleta inputs para ser editatos, get objeto luego set inputs 
    const setAndGetProductById = async (id) => {
        const product = await db.collection('products').doc(id).get();
        console.log(product);
        setValue('name', product.data().name);
        setValue('cantidad', product.data().cantidad)
        setValue('description', product.data().description)

    }

    useEffect(() => {
        if (props.currentId != '') {
            setAndGetProductById(props.currentId);
        }

    }, [props.currentId])

    return (
        <form className="card card-body" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group input-group">
                <div className="input-group-text bg-dark">
                    <i className="material-icons">create</i>
                </div>
                <input type="text"
                    className="form-control"
                    placeholder="Nombre del producto"
                    name="name"
                    ref={
                        register({
                            required: { value: true, message: 'Campo Obligatorio' }
                        })
                    } />
            </div>
            {
                errors.name &&

                <span className="badge badge-warning mb-4">
                    {/*<i className="material-icons ">warning</i>*/}
                    {errors.name.message}
                </span>

            }
            <div className="form-group input-group">
                <div className="input-group-text bg-dark">
                    <i className="material-icons">view_module</i>
                </div>
                <input type="text"
                    className="form-control"
                    placeholder="Cantidad"
                    name="cantidad"
                    ref={register({
                        required: { value: true, message: 'Campo Obligatorio' }
                    })}
                />
            </div>
            {
                errors.cantidad &&
                <span className="badge badge-warning mb-4">
                    {/*<i className="material-icons ">warning</i>*/}
                    {errors.cantidad.message}
                </span>

            }
            <div className="input-group mb-3">
                <div className="input-group-text bg-dark">
                    <i className="material-icons">list</i>
                </div>
                <select name="category" className="form-select form-control"
                    ref={register({
                        required: { value: true, message: 'Campo Obligatorio' }
                    })}>

                    <option value="">Categoria</option>
                    <option value="mesas">Mesas</option>
                    <option value="cortavidrios">Cortavidrios</option>
                    <option value="lijas">Lijas</option>
                </select>
            </div>
            {
                errors.category &&
                <span className="badge badge-warning mb-4">
                    {/*<i className="material-icons ">warning</i>*/}
                    {errors.category.message}
                </span>

            }
            <div className="form-group input-group">
                <textarea name="description"
                    cols="3"
                    className="form-control"
                    placeholder="Ingrese una descripcion"
                    ref={register}>
                </textarea>
            </div>

            <button className="btn btn-outline-info btn-block">
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>
        </form>
    )
}

export default LinkForm

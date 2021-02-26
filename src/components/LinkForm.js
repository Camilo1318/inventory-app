import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { useForm } from 'react-hook-form'
import { FaRocket } from 'react-icons/fa'
import { AiOutlineNumber } from 'react-icons/ai'
import { FcTodoList } from 'react-icons/fc'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'

const LinkForm = ({ addProduct, currentId, categories, setCategories }) => {

    const { register, errors, handleSubmit, setValue } = useForm();
    const [stateBtnAddCategory, setStateBtnAddCategory] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (data, e) => {
        addProduct(data);
        e.target.reset();
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSend = async () => {
        if (inputValue.trim().length > 3) {
            const categoryRef = db.collection('Categories');
            const categoryObject = { name: inputValue };
            await categoryRef.add(categoryObject);
            setStateBtnAddCategory(false);
        }
        setInputValue('');
    }

    const setCategoriesInForm = async () => {
        const categoryRef = db.collection('Categories');
        categoryRef.onSnapshot(querySnapshot => {
            setCategories(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
    }

    //Autocompleta inputs para ser editatos, get objeto luego set inputs 
    const setAndGetProductById = async (id) => {
        const product = await db.collection('products').doc(id).get();
        setValue('name', product.data().name)
        setValue('cantidad', product.data().cantidad)
        setValue('description', product.data().description)
    }

    useEffect(() => {
        if (currentId != '') {
            setAndGetProductById(currentId);
        }
        setCategoriesInForm();
    }, [currentId]);

    return (
        <>
            <form className="card card-body" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-center py-2">Agregar Producto</h4>
                <div className="form-group input-group">

                    <div className="input-group-text bg-dark">
                        <FaRocket className=""></FaRocket>
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
                        <AiOutlineNumber className="">view_module</AiOutlineNumber>
                    </div>
                    <input type="number"
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
                <div className="form-group input-group">
                    <div className="input-group-text bg-dark">
                        <FcTodoList className="text-primary">list</FcTodoList>
                    </div>
                    <select
                        name="category"
                        className="form-select form-control"
                        ref={register}>

                        {
                            categories.map(({ name, id }) => <option
                                key={id}
                                value={name}
                                defaultValue="selected">
                                {name}
                            </option>)
                        }

                    </select>
                    <div className="input-group-text btn btn-outline-primary">
                        <AiOutlinePlus onClick={() => setStateBtnAddCategory(!stateBtnAddCategory)} className=""></AiOutlinePlus>
                    </div>
                </div>

                {stateBtnAddCategory &&
                    <div className="form-group input-group">
                        <div className="input-group-text bg-dark">
                            <FcTodoList>list</FcTodoList>
                        </div>
                        <input type="text"
                            className="form-control"
                            placeholder="Nombre de la Nueva Categoria"
                            name="new_category"
                            onChange={handleInputChange}
                        />
                        <div className="input-group-text btn btn-outline-primary">
                            <IoMdSend onClick={handleSend}></IoMdSend>
                        </div>
                    </div>
                }
                {
                    errors.new_category &&
                    <span className="badge badge-warning mb-4">
                        {/*<i className="material-icons ">warning</i>*/}
                        {errors.new_category.message}
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
                    {currentId === '' ? 'Save' : 'Update'}
                </button>
            </form >
        </>
    )
}

export default LinkForm;

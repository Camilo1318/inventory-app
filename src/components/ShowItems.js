import React, { useEffect, useState } from 'react'
import { BsX } from "react-icons/bs";
import { FiEdit3 } from 'react-icons/fi'
import { toast } from 'react-toastify' // import somethigns propertys of Toastify
import { db } from '../Firebase' //import Firestore of Firebase

const ShowItems = ({ products, setCurrentId }) => {

    const [productsByCategory, setProductsByCategory] = useState([]);


    const renderProducts = () => {
        /* setProductsByCategory(products.filter((product) => product.category === products.category));
        console.log(productsByCategory); */
    }



    const deleteProduct = async (productsId) => {
        if (window.confirm('Estas seguro de quere eliminar este enlace?')) {
            await db.collection('Products').doc(productsId).delete();
            toast.error('Enlace eliminado!', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    useEffect(() => {
        renderProducts();
    })

    return (
        <>
            {
                products.map(({ id, name, cantidad, description }) => (
                    <div className="col mb-4" key={id}>
                        <div className="card border-primary" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="text-wrap">
                                        <h4 className="">{name}</h4>
                                    </div>
                                    <div className="text-nowrap ">
                                        <FiEdit3 className="m-2" role="button" style={{ fontSize: "15px" }}
                                            onClick={() =>
                                                setCurrentId(id)}>
                                            create
                                        </FiEdit3>
                                        <BsX className="text-danger" role="button" style={{ fontSize: "20px" }}
                                            onClick={() =>
                                                deleteProduct(id)}>
                                            close
                                        </BsX>

                                    </div>
                                </div>
                                <h6 className="card-title">Cantidad: {cantidad}</h6>
                                <img className="rounded mx-auto d-block py-2" src="https://via.placeholder.com/150" alt="" />
                                <h6 className="card-subtitle mt-2 text-center">{description}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ShowItems

import React, { useEffect, useState, Fragment } from 'react' // UseState and useEffect new Hooks
import { toast, Zoom } from 'react-toastify' // import somethigns propertys of Toastify
import LinkForm from './LinkForm' //import component
import { db } from '../Firebase' //import Firestore of Firebase

const Links = () => {

    const [currentId, setCurrentId] = useState('') // Estado de id al onClick de btn Edit
    const [products, setProducts] = useState([]); // Estado Links saved

    const addOrEditProduct = async (products) => {
        if (currentId === '') {
            //Send data to Firestore of Firebase
            await db.collection('products').doc().set(products); //doc(sin parametro) => crear ID autmatico unico
            toast.success('Enlace Agregado!', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom
            });
        } else {
            await db.collection('products').doc(currentId).update(products);
            toast.info('Enlace Actualizado!', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom
            });
            setCurrentId('');
        }
    };

    const getProducts = async () => {
        // Traemos datos de Firebase (onSnapshot => Funcion de Firebase que esta a la escucha de cambios en la base de datos)
        // querySnapshot => modelo o tipo de dato que devuelve Firebase (Study pls !! )
        db.collection('products').onSnapshot(querySnapshot => {
            const tempProducts = [];
            querySnapshot.forEach(tempProduct => {
                tempProducts.push({ ...tempProduct.data(), id: tempProduct.id });

            });
            setProducts(tempProducts);
        }
        )
    }

    useEffect(
        () => {
            getProducts();
        }, []
    );

    const onDeleteLink = async (productsId) => {
        if (window.confirm('Estas seguro de quere eliminar este enlace?')) {
            await db.collection('products').doc(productsId).delete();
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
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-4 p-2">
                    <h3 className="text-center">Inventario de Productos</h3>
                    <LinkForm {...{ addOrEditProduct, currentId, products }} />
                </div>
                <div className="col p-4">
                    <div className="row row-cols-1 row-cols-md-3 g-2">
                        {
                            products.map(product => (
                                <div className="col mb-4" key={product.id}>
                                    <div className="card border-primary" >
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <h4>{product.name}</h4>
                                                <div>
                                                    <i className="material-icons text-danger"
                                                        onClick={() =>
                                                            onDeleteLink(product.id)}>
                                                        close
                                                    </i>
                                                    <i className="material-icons"
                                                        onClick={() =>
                                                            setCurrentId(product.id)}>
                                                        create
                                                    </i>
                                                </div>
                                            </div>
                                            <h6 className="card-title">Cantidad: {product.cantidad}</h6>
                                            <img src="" alt="" />
                                            <p>Description: {product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>

    )

}
export default Links

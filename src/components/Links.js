import React, { useEffect, useState } from 'react' // UseState and useEffect new Hooks
import { toast, Zoom } from 'react-toastify' // import somethigns propertys of Toastify
import { db } from '../Firebase' //import Firestore of Firebase
import AcordionComponent from './AcordionComponent'
import LinkForm from './LinkForm'

const Links = () => {

    const [categories, setCategories] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [products, setProducts] = useState([]);


    const addProduct = async ({ cantidad, description, name, category }) => {
        console.log(category);
        if (currentId === '') {
            //Send data to Firestore of Firebase
            const productsRef = db.collection('Products');
            const productsObject = { cantidad, description, name, category };
            await productsRef.add(productsObject);
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
            await db.collection('Products').doc(currentId).update(products);
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
    }

    const getProducts = async () => {
        const queryRef = db.collection('Products');
        queryRef.onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            /* snapshot.forEach(doc => {
                console.log(doc.data());
            }) */
        })
    };

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <LinkForm {...{ addProduct, currentId, categories, setCategories }} />
                </div>
                <div className="col mt-3">
                    <AcordionComponent {...{ setCurrentId, categories, products }} />
                </div>
            </div>
        </>

    )

}
export default Links

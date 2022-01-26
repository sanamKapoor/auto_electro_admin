import React, { useState } from 'react';
import Pagination from '../Common/Pagination';
import ProductModal from '../Modal/Product';
import WarningModal from '../Modal/Warning';
import ProductRow from './components/ProductRow';

const Products = () => {

    const [addProductModal, setAddProductModal] = useState(false);
    const [modalProductTitle, setProductModalTitle] = useState('')
    const [warningModal, setWarningModal] = useState(false);

    return (
        <div>
            <h4>Products</h4>
            <div className="card mt-4">
        <div className="card-body">
        <div className="row">
            <div className="col-md-4">
                <form>
                    <div className="mb-2">
                        <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                    </div>
                </form>
            </div>
            <div className="col-md-8 text-right">
                <div className="add-categories ">
                    <button className="btn theme_btn" onClick={() => {
                        setAddProductModal(true)
                        setProductModalTitle('Add Product')
                    }}><i className="bi bi-plus-circle"></i> Add Product</button>
                </div>
            </div>
        </div>
        <ProductRow 
            setAddProductModal={setAddProductModal} 
            setProductModalTitle={setProductModalTitle}
            setWarningModal={setWarningModal}
        />
        <ProductRow 
            setAddProductModal={setAddProductModal} 
            setProductModalTitle={setProductModalTitle}
            setWarningModal={setWarningModal}
        />
        <hr />
        <Pagination />
        </div>
        </div>
        <ProductModal
            show={addProductModal}
            setShow={setAddProductModal}
            title={modalProductTitle}
        />
        <WarningModal
            show={warningModal}
            setShow={setWarningModal}
            title="Are you sure you want to delete this product ?"
        />
        </div>
    )
}

export default Products

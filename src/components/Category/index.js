import React, { useState } from 'react'
import { Categories } from '../../data';
import CategoryModal from '../Modal/Category'
import CategoryRow from './components/CategoryRow'

const Category = () => {

    const [categoryModal, setCategoryModal] = useState(false);

    return (
        <div>
            <h4>Category</h4>
            <div className="row">
                    <div className="col-md-12 text-right">
                        <button className="btn btn-primary my-3" onClick={() => setCategoryModal(true)}><i className="bi bi-plus-circle"></i> Add Category</button>
                    </div>
                    <div className="col-md-12">
                        <div className='d-flex flex-wrap mx-4'>
                            {
                                Categories.map(cat => (
                                    <CategoryRow key={cat._id} category={cat} />
                                ))
                            }
                        </div>
                    </div>
            </div>
            <CategoryModal
                title="Add New Category"
                show={categoryModal}
                setShow={setCategoryModal}
            />
        </div>
    )
}

export default Category

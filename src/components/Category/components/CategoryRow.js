import React, { useState } from 'react'
import CategoryModal from '../../Modal/Category';
import WarningModal from '../../Modal/Warning';

const CategoryRow = ({category}) => {

    const [open, setOpen] = useState(false);
    const [categoryModal, setCategoryModal] = useState(false);
    const [warningModal, setWarningModal] = useState(false);
    const [categoryModalText, setCategoryModalText] = useState('');
    const [warningModalText, setWarningModalText] = useState('');

    return (
        <div className='col-md-5 p-3 border bg-light m-3 h-50'>
            <div className='d-flex flex-column'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <h3>{category.name}</h3>
                <div>
                    <i onClick={() => {
                        setCategoryModal(true)
                        setCategoryModalText('Edit Category')
                    }} className="bi bi-pen pointer"></i>
                    <i onClick={() => {
                        setWarningModal(true)
                        setWarningModalText('Are you sure you want to delete this category?')
                    }} className="bi bi-trash mx-3 pointer"></i>
                    <i className={`bi ${open ? 'bi-chevron-up' : 'bi-chevron-down'} pointer`} onClick={() => setOpen(!open)}></i>
                </div>
            </div>

            {
                open &&
                <div className='pt-3'>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between active">
                            Sub Category Name 
                            <div className='icons'>
                                Actions
                            </div>
                        </li>
                        {
                            category.subcategory.map(subCat => (
                                <li className="list-group-item d-flex justify-content-between">
                                {subCat} 
                                <div className='icons'>
                                <i onClick={() => {
                                    setCategoryModal(true);
                                    setCategoryModalText('Edit Sub Category')
                                }} className="bi bi-pen mr-3 pointer"></i>
                                <i onClick={() => {
                                    setWarningModal(true)
                                    setWarningModalText('Are you sure you want to delete this sub category?')
                                }}className="bi bi-trash pointer"></i>
                                </div>
                            </li>  
                            ))
                        }
                    </ul>
                    <button className="btn btn-primary mt-2" 
                    onClick={() => {
                        setCategoryModal(true)
                        setCategoryModalText('Add New Sub Category')
                    }}><i className="bi bi-plus-circle"></i> Add Sub Category</button>
                </div>
            }
            <CategoryModal 
                title={categoryModalText}
                show={categoryModal}
                setShow={setCategoryModal}
            />
            <WarningModal 
                title={warningModalText}
                show={warningModal}
                setShow={setWarningModal}
            />
            </div>
        </div>
    )
}

export default CategoryRow

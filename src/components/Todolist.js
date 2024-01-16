import React from 'react'
import './style.css';

const Todolist = () => {


    return (
        <>
            <div className='main-todo'>
                <h2 className='h2-todo'>Todolist</h2>
                <form className='form'>
                    <div className='form-group'>
                        <label className='label' id='title'>Title</label>
                        <input type='text' className='input' value="" />
                        <small className='small'>Add an item's to the list.</small>
                    </div>
                    <div className='form-group'>
                        <label className='label' id='description'>Description</label>
                        <textarea text='password' className='input' />
                    </div>
                    <button type='submit' className='btn-todo' id='add'>Add to List</button>
                </form>
            </div>
            <div id='items' className='my-4'>
                <h2>Your Items</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>S No.</th>
                            <th scope='col'>Items Title</th>
                            <th scope='col'>Item Description</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>Get some Coffee</td>
                            <td>You need coffee as you are a coder</td>
                            <td>
                                <button className='btn  btn-sm btn-primary'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todolist
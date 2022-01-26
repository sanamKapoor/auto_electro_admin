import React from 'react'

const Contact = () => {
    return (
        <div className="card card-body">
            <h4>Contact</h4>
            <form className="form-horizontal m-t-20 row">
                <div className="form-group col-md-6">
                    <label for="example-email">Email</label>
                    <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label for="example-email">Contact</label>
                    <input type="number" id="contact" name="example-email" className="form-control" placeholder="Contact No" />
                </div>
                <div className="form-group col-md-6">
                    <label>Address</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Contact

import React from 'react'

const Loader = () => {
    return (
        <div className='text-center' style={{"height": "90vh", "width": "100%"}}>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader

import React from 'react'

const Card = () => {
    return (
        <div>
            <div className='card-ui'>
                <h1> Movie Results For {serach} </h1>
                <div className='container'>
                    <div className='imgbox'>
                        <img src={url} />
                    </div>
                    <div className='list-text'>
                        <p> Title: {title}</p>
                        <p> Type: {type}</p>
                        <p> Year: {year}</p>
                    </div>
                    <div className='btn'>
                        <button> Know More </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
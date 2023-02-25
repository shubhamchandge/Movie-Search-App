import React, { useState } from 'react'
import "./Searchpage.css"

const Searchpage = () => {
    const [searchtext, setSearchtext] = useState("");

    const handleinput = (event) => {
        setSearchtext(event.target.value)
    }

    const handleclick = () => {
        const search = searchtext.replace(/ /g, '+');
        console.log(search);

        const apiKey = "cf6d32d1 "

        apicall(apiKey, search);
    }
    const apicall = (apiKey, search) => {

        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`

        fetch(url)
        .then(res => {
            res.json()
            .then((data) => {
                console.log(data)
            })
        })

    }

    return (
        <div>
            <div className='search-container'>
                <h1>Search For Movies By Their Title</h1>
                <div className='search-input'>
                    <input className='inputbox' placeholder='Search...' type="text" value={searchtext} onChange={handleinput}></input>
                </div>
                <div className='btn'>
                    <button className='search-btn' onClick={handleclick}> Search Now!
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Searchpage

import React from 'react'
import './Hobbies.css'

const Hobbies = () =>{
    return(
      <div>

        <div className = "main">

        <h3>Add a hobby</h3>
        <div className="mb">
          <label>Hobby</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Hobby e.g. reading"
          />
        </div>

        <button type="submit" className="AddButton">
          Add
        </button>

        </div>

        <div className = "main">

        <h3>Edit a hobby</h3>

        <div className="mb">
          <label>Hobby ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
          />
        </div>

        <div className="mb">
          <label>Hobby</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Hobby e.g. reading"
          />
        </div>

        <button type="submit" className="AddButton">
          Edit
        </button>

        </div>

        </div>
    )
}

export default Hobbies
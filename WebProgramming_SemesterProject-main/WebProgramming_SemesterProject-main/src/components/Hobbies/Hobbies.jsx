import React from "react";
import './Hobbies.css'

const Hobbies=()=>{
    return(
        <form>
        <h3>Hobbies</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. reading, travelling etc."
          />
        </div>

        <div>
          <button>
            Add
          </button>

          <button>
            Edit
          </button>
        </div>

      </form>
    )
}
export default Hobbies
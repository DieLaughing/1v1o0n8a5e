import React from "react"

const FileCabinet = () => {

  const openFiles = e => {
    const yourFiles = e.target.files
    console.log(yourFiles)

    //TODO: change some global state here
  }
  
  return(
    <label for='upload' class='label'>
      <input onChange={openFiles} id='upload' type='file' accept='text/*,image/*' multiple required autoFocus />
        Choose file
    </label>
  )
}

export default FileCabinet
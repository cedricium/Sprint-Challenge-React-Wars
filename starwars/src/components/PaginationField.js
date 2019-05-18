import React from 'react'

const PaginationField = (props) => {
  const { handlePagination } = props
  return (
    <div>
      <button onClick={() => handlePagination('previous')}>Previous</button>{` `}
      <button onClick={() => handlePagination('next')}>Next</button>
    </div>
  )
}

export default PaginationField

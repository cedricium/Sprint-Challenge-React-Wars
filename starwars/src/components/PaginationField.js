import React from 'react'

const PaginationField = (props) => {
  const { handlePagination, pagination } = props
  return (
    <div>
      <button
        disabled={!pagination.previous}
        onClick={() => handlePagination('previous')}>
          Previous
      </button>{` `}
      <button
        disabled={!pagination.next}
        onClick={() => handlePagination('next')}>
          Next
      </button>
    </div>
  )
}

export default PaginationField

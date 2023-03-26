import React from 'react'
import "./style.css"

function Pagination({ pokemons, currentPage, setCurrentPage }) {
  const pageSize = 10;
  const totalPage = Math.ceil(pokemons.length / pageSize);
  const pageNumber = []
  let minPage = currentPage - 6;
  let maxPage = currentPage + 5;
  if (currentPage < 7) {
    minPage = 0;
    maxPage = 11;
  } else if (currentPage > totalPage - 5) {
    minPage = totalPage - 10;
    maxPage = totalPage + 1;
  }
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i)
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
    if (currentPage < 7) { 
      minPage = 0;
      maxPage = 11;
    } else if (currentPage > totalPage - 5) {
      minPage = totalPage - 10;
      maxPage = totalPage;
    } else {
      minPage = currentPage - 6;
      maxPage = currentPage + 6;
    }
  }

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
    if (currentPage < 7) { 
      minPage = 0;
      maxPage = 11;
    } else if (currentPage > totalPage - 5) {
      minPage = totalPage - 10;
      maxPage = totalPage;
    } else {
      minPage = currentPage - 6;
      maxPage = currentPage + 6;
    }
  }
  const handleClick = (e) => {
    setCurrentPage(e)
    if (e < 7) { 
      minPage = 0;
      maxPage = 11;
    } else if (e > totalPage - 5) {
      minPage = totalPage - 10;
      maxPage = totalPage;
    } else {
      minPage = e - 6;
      maxPage = e + 6;
    }
  }


  return (
    <div className='pages'>
      {currentPage > 1 &&
        <button
          onClick={prevPage}
        > Prev. </button>
      }
      {
        pageNumber.map(number => {
          if (number > minPage && number < maxPage)
            return (
              <button
                key={number}
                onClick={() => handleClick(number)}
                className={currentPage === number ? "btnActive" : ""}
              > {number} </button>
            )
        })
      }
      {currentPage < Math.ceil(pokemons.length / pageSize) &&
        <button
          onClick={nextPage}
        > Next. </button>
      }
    </div>
  )
}

export default Pagination
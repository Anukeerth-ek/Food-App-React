
    import React from 'react'
    import {useState} from 'react'

    function Pagination(props) {
     
      let [activePagination, setActivePagination] = useState(1)

        let numberOfPages = []
    

        for(let item = 1; Math.ceil(item <= props.filteredDishes.length/ props.itemsPerPage) ; item++) {
            numberOfPages.push(item)
        }

            function  showNextDishesHandler(event) {
                let currentPage = event.target.id;
                setActivePagination(currentPage)
                props.setCurrentPage(currentPage)
                
            }

          
      let pages = numberOfPages.map((pageNumber)=> {
        
            return(
                <li  className={pageNumber == activePagination ? 'active' : '' }onClick={showNextDishesHandler} id={pageNumber}>{pageNumber}</li>
            )
        })

       

        return(
            <ul className='pagination'  >
               { pages}
            </ul>
        )
    }

    export default Pagination;
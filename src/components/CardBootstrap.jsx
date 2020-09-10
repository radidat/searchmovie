import React, {useState} from 'react'
import {createPortal} from 'react-dom' 
import {Release} from '../icons/Release'
import { Average} from '../icons/Average'
import{Vote} from '../icons/Vote'
/*carte et boîte modal pour les films*/
function Modal ({onClose, title, url, overview,note, count, release}){

   return createPortal( <>
       <div
        className="modal fade show "
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          
            <div className="modal-body container-fluid">
            <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={onClose}>
                  &times;
                </span>
              </button>
              <div className="row">
                <div className='col-md-4'>
                <img src={url} alt={title} style={{height:'250px',marginTop:'-18px', marginLeft:'-32px'}} ></img>
                </div>
                <div className='col-md-8'>
                <h1 className='title' style ={{textAlign: 'center'}}>{title}</h1>
                  <p>
                    <strong>Synopsis</strong>:<br/>{overview}
                  </p>
                  <div className='d-flex justify-content-start flex-wrap'>
                    <Average/>
                     <p>{`${note}/10`}</p>
                     <Vote/>
                     <p >{` critiques:${count}`}</p>
                     <Release/>
                     <p >{`Sortie:${release}`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-secondary " style={{marginLeft:'422px'}}
                data-dismiss="modal"
                onClick={onClose}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
     </>,document.body
   )
}



 export function CardBootstrap({title, image, overview, note,count, release}) {
   const [modal, setModal]= useState(false)

   const showModal = function (){ 
     setModal(true)
   }
   const hideModal= function(){
     setModal(false)
   }

const url =`https://image.tmdb.org/t/p/w500${image}`
    return(<div className="card col-md-3" style={ {width: '18rem', margin:'10px'}}>
    <img src={url} style={{height:'400px'}} alt={title}></img>
    <div className="card-body">
 <h5 className="card-title">{title}</h5>
 <button type='button' className='btn button-card' onClick= {showModal}>Plus d'info</button>  
    </div>
    { modal && <Modal onClose={hideModal}
     title={title}
      url ={url} 
      overview={overview} 
      note={note}
     count={count} release={release}/>}
  </div>
  )
}

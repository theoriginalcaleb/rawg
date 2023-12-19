
import { StateContextCustom } from '../context/StateContext';
import Card from './Card';


const Cards = () => {

  const {state:{products}} = StateContextCustom(); 
  return (
    < >
    <div className='flex flex-col'>
    <h1 className=' text-white text-7xl font-bold py-6'>Platforms</h1>
    <div className='flex justify-center flex-wrap  gap-5'>
      {
        products?.map(item=>{
          return(
           <div key={item.id}>
                
               <Card  {...item}></Card>
                
           </div>
          )
        })
      }
      </div>
    </div>
   
    </>
  
  )
}

export default Cards
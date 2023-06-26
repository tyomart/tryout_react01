

import './card-list.styles.css'
import Card from '../card/card.comp'


const CardList =({ monsters }) => (
   
     <div className = 'card-list'>
      {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />
            
          })}  
      </div>) //render return
   

export default CardList;


    


 
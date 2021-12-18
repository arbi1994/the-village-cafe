import React from 'react';
// utils
import { food, drinks } from '../../utils/menu';

const MenuContainer = ({ selectedBtn }) => {

  const title = (key) => {
    if(selectedBtn === "EAT"){
      if(key === 'breakfast') return "BREAKFAST - until 3pm daily"
      if(key === 'lightMeals') return "LIGHT MEALS"
      if(key === 'sandwiches') return "SANDWICHES | TURKISH | WRAPS"
      if(key === 'mainMeals') return "MAIN MEALS"
      if(key === 'salads') return "SALADS"
      if(key === 'kidsMeals') return "KIDS MEALS"
      if(key === 'snacks') return "SNACKS & SIDES"
      if(key === 'cakes') return "CAKES & SLICES"
    }else {
      if(key === 'hot') return 'HOT DRINKS'
      if(key === 'cold') return 'COLD DRINKS'
      if(key === 'smoothie') return 'SMOOTHIES'
      if(key === 'alcohol') return 'WINE & BEER & COCKTAILS'
    }
  }
  
  const container = Object.entries(selectedBtn === "EAT" ? food : drinks).map((key, value) => {

    return (
      <div className="menu__container">
        <h3>{title(key[0])}</h3>
    
        <div className="menu-wrapper">
          {key[1]?.map(meal => (
            <div key={meal.name} className="meal-container">
              <h5 className="meal-name">{meal.name}</h5>
              <h6 className="meal-options">{meal.options}</h6>
              <p className="meal-description">{meal.description}</p>
              <div className="meal-extra">
                {meal?.extras?.map(extra => (
                    <p className="meal-description">{extra}</p>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  })
  
  return container
}

export default MenuContainer;

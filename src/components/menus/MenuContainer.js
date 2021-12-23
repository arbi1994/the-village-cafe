import React from 'react';
// utils
import { food, drinks } from '../../utils/menu';
import MenuModal from './MenuModal';

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

  const renderMenuModal = key => {
    console.log(key)
    if(selectedBtn === "EAT"){
      return key === 'breakfast' 
          || key === 'lightMeals'
          || key === 'sandwiches'
          || key === 'mainMeals'
          || key === 'salads'
      ? <MenuModal /> : null
    }
  }
  
  const container = Object.entries(selectedBtn === "EAT" ? food : drinks).map((key, value) => {

    return (
      <div key={value} className="menu__container">
        <div className="menu__container--title">
          <h3>{title(key[0])}</h3>
          {renderMenuModal(key[0])}
        </div>
    
        <div className="menu-wrapper">
          {key[1]?.map(meal => (
            <div key={meal.name} className="meal-container">
              <h5 className="meal-name">{meal.name}</h5>
              <h6 className="meal-options">{meal.options}</h6>
              <p className="meal-description">{meal.description}</p>
              <div className="meal-extra">
                {meal?.extras?.map(extra => (
                    <p key={extra} className="meal-description">{extra}</p>
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

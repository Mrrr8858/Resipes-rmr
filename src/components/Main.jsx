import React from 'react';
import FoodCard from './FoodCard';

class Main extends React.Component {
  render() {
    return (
      <div className="my-3 d-flex flex-wrap justify-content-between">
        {
          this.props.menuPage.menu.recipes?.map((value) => {
            if (this.props.stringToFind === '') {
              for (let key in this.props.filter) {
                if (this.props.filter[key] && key == value.cuisine.title) {
                  if (this.props.filter.kCal[0] <= value.caloricity && value.caloricity <= this.props.filter.kCal[1]) {
                    return <FoodCard name={value.title} description={value.description} id={value.id} key={value.id}
                      caloricity={value.caloricity} time={value.cookTime} cuisine={value.cuisine.title} img={value.thumbnail} />
                  
                  }
                }
              }
            }
            else if (value.title.toLowerCase().indexOf(this.props.stringToFind.toLowerCase()) != -1) {
              for (let key in this.props.filter) {
                if (this.props.filter[key] && key == value.cuisine.title) {
                  if (this.props.filter.kCal[0] <= value.caloricity && value.caloricity <= this.props.filter.kCal[1]) {
                    return <FoodCard name={value.title} description={value.description} id={value.id} key={value.id}
                      caloricity={value.caloricity} time={value.cookTime} cuisine={value.cuisine.title} img={value.thumbnail} />
                  }
                }
              }
            }
          })
        }
      </div>
    );
  }
}

export default Main;
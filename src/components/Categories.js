import React, { Component } from 'react';
import '../App.css';
import './Form.css';
import './Categories.css';
import {Link} from 'react-router-dom';
import animalpng from '../images/animal.png';
import fruitspng from '../images/fruits.png';
import grainspng from '../images/grains.png';
import otherfoodpng from '../images/otherfood.png';

class Categories extends Component {
  
   render() {
    let animal = 'category animal';
    let fruits = 'category fruits';
    let grains = 'category grains';
    let otherfood = 'category other-food';
    let twocategories = '';
    let categoryimg = '';

    if (this.props.page === "Impact"){
      categoryimg = "category-image-impact";
      animal += ' category-impact';
      fruits += ' category-impact';
      grains += ' category-impact';
      otherfood += ' category-impact';
      twocategories = 'twocategories-impact';
        switch(this.props.tempCategory) {
            case "animal":     
                fruits += " opacit other-food";
                grains += " opacit other-food";
                otherfood += " opacit";
            break;
            case "fruits":     
                animal += " opacit other-food";
                grains += " opacit other-food";
                otherfood += " opacit";
            break;
            case "grains":     
                animal += " opacit other-food";
                fruits += " opacit other-food";
                otherfood += " opacit";
            break;
            case "otherfood":     
                animal += " opacit other-food";
                grains += " opacit other-food";
                fruits += " opacit other-food";
            break;
            default:
                fruits += " opacit other-food";
                grains += " opacit other-food";
                otherfood += " opacit";
            break;
        }
    } else {
        animal += " category-home";
        fruits += " category-home";
        grains += " category-home";
        otherfood += " category-home";
        categoryimg = "category-image-home";
        twocategories = 'twocategories-home';
    }
    





    let classform = '';
    let impact = 'impact-button form-button';
    let title = 'section-title form-title';
    let support = 'form-support';
    let formimpactsection = "form-input-section";
    let buttonposition  = "form-button-position-home";
    let alignment = "";
    switch(this.props.page) {
      case "Impact":
        classform += 'form-impact';
        impact += ' impact-button-impactpage impact-button-impactpage-form';
        title = 'page-title';
        support = 'hide';
        formimpactsection = 'form-input-section-impactpage';
        buttonposition  = "form-button-position-impact";
        alignment = 'page';
        break;
      default:
        classform = 'form-home';
        impact = 'impact-button form-button impact-button-homepage-form form-button-new-calculation';
        title = 'section-title form-title category-titleandsupport-home';
        support = 'form-support category-titleandsupport-home';
        formimpactsection = "form-input-section";
        buttonposition  = "form-button-position-home";
        alignment = '';
    }

    
    if (this.props.newCalculation || this.props.calculation === false) {
      impact += ' form-button-new-calculation';
    } else {
      impact += ' form-button-old-calculation';
    };

      return (
        <form className={classform} onSubmit={e => { e.preventDefault(); }}>
          <div className={formimpactsection}>
            <div className="categories">
                <Link to="/impact">
                <div className={twocategories}>
                  <button 
                    className={animal} 
                    type="button" 
                    value="animal"
                    onClick={this.props.handleCategory}>
                    <input type="image" className={categoryimg} src={animalpng} alt="animal" value="animal" onClick={this.props.handleCategory}></input>
                    <br></br>
                    Animal products
                  </button>
                  <button 
                    className={fruits} 
                    type="button" 
                    value="fruits"
                    onClick={this.props.handleCategory}>
                    <input type="image" className={categoryimg} src={fruitspng} alt="fruits" value="fruits" onClick={this.props.handleCategory}></input>
                    <br></br>
                    Fruits and vegetables
                  </button>
                </div>
                <div className={twocategories}>
                  <button 
                    className={grains} 
                    type="button" 
                    value="grains"
                    onClick={this.props.handleCategory}>
                    <input type="image" className={categoryimg} src={grainspng} alt="grains" value="grains" onClick={this.props.handleCategory}></input>
                    <br></br>
                    Grains and legumes
                  </button>
                  <button 
                    className={otherfood} 
                    type="button" 
                    value="otherfood"
                    onClick={this.props.handleCategory}>
                    <input type="image" className={categoryimg} src={otherfoodpng} alt="otherfood" value="otherfood" onClick={this.props.handleCategory}></input>
                    <br></br>
                    Others
                  </button>
                </div>
                </Link>
            </div>
          </div>
        </form>
      );
  }

}


export default Categories;
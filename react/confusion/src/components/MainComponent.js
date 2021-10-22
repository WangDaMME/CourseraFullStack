import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from "react-router-dom"; //withRouter: HOC 包装成 router 路由组件
import Contact from './ContactComponent';
import About from './AboutComponent';

import {connect} from "react-redux" ; //connect MainComnponent to store 获取那4个数据

import { addComment } from '../redux/ActionCreators';

// map react-redux state into props
const mapStateToProps = state =>{ // 这个state 使 redux store 中得到的
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

}); //返回一个对象

class Main extends Component {

  constructor(props) {
    super(props);
    
  }

  


  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = ()=>{
      return (
        //{/*array 返回 index=0*/}
        //{/*从redux 拿到的数据 转换成 props*/}

        <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />

      );
    }

    //路由组建 props 有3大属性 match,location history
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      />
      );
    };
    
    return (
      <div>
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage} />         //{/*从redux 拿到的数据 转换成 props*/}
          <Route exact path="/aboutus" component={ ()=> <About leaders = {this.props.leaders}/> } /> {/* pass the props to a component */}
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} /> {/* pass the props to a component */}
          <Route exact path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" /> {/* default if not matching*/}
        </Switch>

        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

// connect to redux store wrapp with 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
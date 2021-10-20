import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// Menu 是 presentional component 可以 改成 函数式组件

function RenderMenuItem({dish, onClick}) // props 可以写成 形参 形式 props 只是个 js object   onClick 函数形式
{
    return (
        <Card onClick={()=>onClick(dish.id)} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>    
    )
}

const Menu = (props)=>{
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
               <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });
    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>
    );

}

export default Menu;
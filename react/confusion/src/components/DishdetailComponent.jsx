import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'; //CardImgOverlay
import {Link} from "react-router-dom"
{/* <div className="row">
    {menu}
</div>
<div className="row">
  <div  className="col-12 col-md-5 m-1">
    {this.renderDish(this.state.selectedDish)}
  </div>
</div> */}

/**
 * {
    id: 0,
    rating: 5,
    comment: "Imagine all the eatables, living in conFusion!",
    author: "John Lemon",
    date: "2012-10-16T17:57:28.556094Z"
    },
 */

// DishDetail 是 presentional component 可以 改成 函数式组件

function RenderComments({ comments }) {
    if (comments == null) {
        return <div></div>;
    }
    const remarks = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                    -- {comment.author}, &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                    }).format(new Date(comment.date))}
                </p>
            </li>
        );
    });
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>{remarks}</ul>
        </div>
    );
}

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return <div></div>;
    }
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    else {
        return <div></div>;
    }
};

export default DishDetail;
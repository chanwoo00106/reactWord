import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Detail = ({data}) => {
    let history = useHistory();
    let id = Number(useParams().id);

    let shoes = data.find(shoes => shoes.id === id);

    if (shoes){
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt="신발" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                  <h4 className="pt-5">{shoes.title}</h4>
                  <p>{shoes.content}</p>
                  <p>{shoes.price}</p>
                  <button className="btn btn-danger">주문하기</button> 
                  <button className="btn btn-danger" onClick={() => history.goBack()}>뒤로가기</button> 
                </div>
              </div>
            </div>
        )
    }
    else {
        return <div>찾으신 상품은 없는 상품입니다.</div>
    }
}

export default Detail;
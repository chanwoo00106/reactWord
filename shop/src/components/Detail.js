import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

const Box = styled.div`
    padding-top: 20px;

    h4 {
        font-size: 25px;
        color: ${props => props.color}
    }
`;

const Detail = ({data, inventory, setInventory}) => {
    let history = useHistory();
    let id = Number(useParams().id);
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    let shoes = data.find(shoes => shoes.id === id);

    if (shoes){
        return (
            <div className="container">
                <Box>
                    <h4 className="red">Detail</h4>
                </Box>
                {alert && <div className="my-alert2">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>}

                <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt="신발" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}</p>
                    <p>재고 : {inventory[shoes.id]}</p>
                    <button className="btn btn-danger" onClick={() => {
                        // setInventory(...inventory, inventory[shoes.id] - 1)
                        // 아니 이거 어떻게 해!!
                    }}>주문하기</button>
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

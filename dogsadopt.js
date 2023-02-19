import React from 'react';
import ReactDOM from 'react-dom';

function ShopItem(props) {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <section className="container content-section">
            <div className="shop-items">
              <div className="shop-item">
                <span className="shop-item-title">{props.title}</span>
              </div>
              <a href={props.link} className="card button">Learn More</a>
              <img className="shop-item-image" src={props.image} alt={props.title} width="160" height="120" />
              <div className="shop-item-details">
                <span className="shop-item-price">{props.price}</span>
                <button className="btn btn-primary shop-item-button" type="button">ADOPT</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <ShopItem
        title="Joe"
        link="https://haeryny.github.io/teamteam/doginfo/"
        image="https://do31x39459kz9.cloudfront.net/storage/image/cc7c5dd6a09649e3bf5c6bca96b21daa-1670625496-1670625511-jpg/1024-0-"
        price="$200"
      />
      <ShopItem
        title="Bean"
        link="https://haeryny.github.io/teamteam/doginfo/"
        image="https://do31x39459kz9.cloudfront.net/storage/image/672cb9b41e7548f68316d4a328c772d2-1673989499-1673989524-jpg/1024-0-"
        price="$180"
      />
      <ShopItem
        title="Harry"
        link="https://haeryny.github.io/teamteam/doginfo/"
        image="https://do31x39459kz9.cloudfront.net/storage/image/9f57a9ccb04d489c8e0faeb7a6aaecc1-1671755085-1671755107-jpg/1024-0-"
        price="$160"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('dog'));
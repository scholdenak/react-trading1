"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome!</h1> 
      <a href='/cards'>Click here for trading cards</a>
      <img src="/static/img/balloonicorn.jpg"/>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

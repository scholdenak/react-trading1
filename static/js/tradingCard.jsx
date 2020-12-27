"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  },

  {
    name: "Shortstack Overflow",
    skill: "being delicous",
    imgUrl: "/static/img/shortstack-overflow.jpg"
  },

  {
    name: "Off By One",
    skill: "navigating neo's belly-button",
    imgUrl: "/static/img/off-by-one.jpg"
 },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}

function TradingCardContainer() {
  return (
    <div>
      success!
    </div>
  );
}

ReactDOM.render(
  <TradingCardContainer />, document.querySelector('#container')
);

// for (const currentCard of tradingCardData) {
//   (currentCard.name, currentCard.skill);
// }
// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Off By One"
//       skill="navigating neo's belly-button"
//       imgUrl="/static/img/off-by-one.jpg"
//     />
//   ),
//   document.querySelector('#off-by-one')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Shortstack Overflow"
//       skill="being delicous"
//       imgUrl="/static/img/shortstack-overflow.jpg"
//     />
//   ),
//   document.querySelector('#shortstack-overflow')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Console.log"
//       skill="being warm"
//       imgUrl="/static/img/shortstack-overflow.jpg"
//     />
//   ),
//   document.querySelector('#consoledotlog')
// );
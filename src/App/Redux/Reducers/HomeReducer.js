

const INITIAL_STATE = {
  allBids: [],
  auctionBiddings:{currentBid:'',biddings:[]}
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}

function removeVal(myCurrencies, val) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

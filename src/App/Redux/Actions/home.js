import apiAction from './index';
import {
  DATA_FETCH_ERROR,
} from './types';




// export function placeNewBid(data,newbid) {
//   return apiAction({
//     url:
//       `/bidding`,
//     method: 'POST',
//     data:data,
//     onSuccess: ()=>placedNewBidSuccessfull(data,newbid),
//     onFailure: setOnError,
//     label: FETCH_ALL_BID_DATA,
//   });
// }

// export function placedNewBidSuccessfull(data) {

//   console.log("------placedNewBidSuccessfull",data);
  
  
//   return {
//     type: SET_BIDDINGS,
//     payload: data,
//   };
// }






function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: 'error',
  };
}

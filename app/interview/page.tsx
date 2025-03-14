import axios from "axios";
import React from "react";

export default function Interview() {

  // data: [
  // amount: ..
  // created: 1697498130
  // ]

// input: ....
// return all object below the input charges: []


axios
  .get('https://api.stripe.com/v1/charges',{
    headers: {
      Authorization: 'Bearer rk_test_51NrrXAHimQ29jqIUHFRITOp8QVDEWyeAxlCKOvtdVjJsKF9MnHQBKV3QbYF70mxoe49TFViipgplyE7jNm8tWP6K00p19EZfZk',
      'Stripe-Account': "acct_1O1zstQevVV3M3x4"
  }
  })
  .then(function (response) {
    // handle success
    // console.log(response.data.data)

    // console.log(filterResponse(response.data.data))
    return filterResponse(response.data.data, 1697497969)

  })


  // console.log(response.data);


  const filterResponse = (data, timestamp) => {
// /1697497969
    const charges = []

    data.filter((el)=>{
      if(el.created > timestamp){
        return
      }


      console.log(el.created)
      console.log(el.amount)
      return el.created
    })




    // console.log(data);

    // Object.entries(data).map((el)=>{
    //   return el
    //   // el.data.map((data)=>{
    //   //   console.log(data)
    //   // })
    // })
    // const amount = data.map((el)=>{
    //   return el.filter((prop)=>{
    //     return prop === 'amount'
    //   })
    // })


    // return charges
  }

  return (
    <div>
    hi
    </div>
  );
}

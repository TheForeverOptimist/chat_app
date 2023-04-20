import React from 'react'
import { checkToken } from '../../utilities/users-services'

function OrderHistoryPage() {

  async function handleCheckToken(e) {
    const expDate = await checkToken();
    console.log(expDate);
    // alert("clicked")
  }
  return (
    <div>
        <h1>OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  )
}

export default OrderHistoryPage;
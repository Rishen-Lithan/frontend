import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You don't have access to the requested page.</p>
      <div className="">
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  )
}

export default Unauthorized

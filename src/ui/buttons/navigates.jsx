import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigates = ({pathh}) => {
  const navigate = useNavigate();

  return (
    <h4 className="navigate">
        <span onClick={() => navigate("/")} pan>
          Главная
        </span>
        {pathh}
      </h4>
  )
}

export default Navigates
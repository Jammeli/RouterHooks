import React from 'react'
import { useParams } from 'react-router-dom'
import MoviesList from './MoviesList';
import { Link } from 'react-router-dom'
function Description({prodList }) {
  const style1 ={
    fontWeight: "bolder",
    textTransform: "uppercase",
}
  const P = useParams();
  const Mv= prodList.find(el=>el.id === +P.id)
  return (
    <div style={{border: "1px solid",width: "25%",margin:"20px"}}>
      
        
        <div className="card-body" style={{ Border: "1pw solid" }} key={Mv.id}>
        <p style={style1}>{Mv.Title} </p>
        <p className="card-text">
          <span style={{ color: "green" }}>Description : </span>
          {Mv.Description}
        </p>
        <iframe width="300" height="200" src={Mv.Trailer}> </iframe>
        <br></br>
        

        <Link to={`/movies`}>
          <button
            className="btn btn-warning"
            style={{ fontSize: "8px", fontWeight: "900" }}
          >
            Back
          </button>
        </Link>
      </div>
      

    </div>
  )
}

export default Description

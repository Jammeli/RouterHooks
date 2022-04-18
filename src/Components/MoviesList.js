import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import Star from "./Star";
import { Rating } from "react-simple-star-rating";
function MoviesList({ movieList }) {
  const [search, setSearch] = useState("");
  const handChange = (e) => setSearch (e.target.value)
  const style1 = {
    fontWeight: "bolder",
    textTransform: "uppercase",
  };
  const style_S = {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    //justifyContent: "center"
    flexDirection: "column",
  };

  //const handleChange2=(e)=>setNewMovie({...newMovie,[e.target.name]:e.target.value})

  return (
    <div>
    <div className="container" style={style_S}>
    <input
      style={{ border: "2px solid", borderRadius: "4px" }}
      type="text"
      placeholder="Filter with name or rating"
      name="filter"
      onChange={handChange}
    />
  </div>
  <br></br>
   <div style={style_S}><AddMovie mm={movieList}/></div> 
    <div
      className="card rounded"
      style={{
        
        border: "3px solid",
        padding: "18px",
        margin: "26px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "flex-start",
      }}
    >
     
      {
      movieList.filter ((val)=>{
        if (search === "") {
          return val;
        }else if (
          val.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) 
           {
            return val;
          }
      }).map((el) => (
        <div className="card-body" style={{ Border: "1pw solid" }} key={el.id}>
          <p style={style1}>{el.Title} </p>
        
          <p className="card-text">
            <span style={{ color: "green" }}>URL : </span>
            {el.URL}
          </p>
          <div>
          
          <Star/>
          
          
          </div>

          <Link to={`/movies/${el.id}`}>
            <button
              className="btn btn-warning"
              style={{ fontSize: "8px", fontWeight: "900" }}
            >
              More Details
            </button>
          </Link>
        </div>
      ))}
    </div>

    </div>
  );
}

export default MoviesList;

export default function Popular({movies}) {
    return <div className="popular">
        {movies.results.map(movie => (
<div>
  <h3>{movie.title}</h3>
  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
</div>
 ))}

 <style jsx>{`
 .popular{
     display:flex;
     flex-wrap: wrap;
     width: 1200px;
     margin: 0 auto;
     gap: 10px;

     div{
         width: calc(25% - 10px);
         position: relative;

         h3{
             font-size: 15px;
             position: absolute;
             bottom: 0;
             left: 0;
             width: 100%;
             color: #fff;
             background: linear-gradient(to,top, #000, transparent);
             padding: 50px 20px 20px 20px;
         }

         img{
             width: 90%;
         }
     }
 }
 
 
 `} </style>
    </div>
}
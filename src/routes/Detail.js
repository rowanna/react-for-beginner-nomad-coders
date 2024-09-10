import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [movieData, setMovieData] = useState({});

    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        
        setMovieData(json.data.movie);
        setLoading(false)
      };
      useEffect(() => {
        getMovie();
      }, []);


    return (
        <div>
            {
            loading ? <h1>Loading...</h1> : 
            <div>
                <h1>detail page - {movieData.title} ({movieData.year})</h1>
                <img src={movieData.large_cover_image} />
                <ul>
                    {movieData.genres.map((g) => (
                    <li key={g}>{g}</li>
                    ))}
                </ul>
                <p>full description : {movieData.description_full}</p>

                <p>updated date : {movieData.date_uploaded}</p>
            </div>
            }
            
        </div>
        

    );
}

export default Detail;
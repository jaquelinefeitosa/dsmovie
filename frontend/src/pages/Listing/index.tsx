import axios from "axios";
import MovieCard from "components/Navbar/MovieCard";
import Pagination from "components/Navbar/Pagination";

function Listing() {

    // FORMA ERRADA
    axios.get("https://jack-dsmovie.herokuapp.com")
    .then(response => {
        console.log(response.data);
    });

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> <div className="col-sm6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                     </div>
                </div>
            </div>
        </>
    );
}

export default Listing;
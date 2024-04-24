import { Link } from "react-router-dom";
import "./Home.css";

function Home(): JSX.Element {


    return (
        <div className="Home">


            <h1>Welcome to Adventure Travel</h1>

            <div>
                <p>
                    Explore the world and discover amazing destinations with Adventure
                    Travel Vacations. <br /> Start your journey today!
                </p>
            </div>

            <div>
                <p>
                    Already have an account?{' '}
                    <Link to="/login">Login</Link>
                </p>

                <p>
                    New to Adventure Travel Vacations?{' '}
                    <Link to="/register">Register</Link>
                </p>

            </div>

        </div>
    );
}

export default Home;

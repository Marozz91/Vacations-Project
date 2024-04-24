class Config {

    public vacationsUrl = "http://localhost:4000/api/vacations/";
    public vacationsByUserUrl = "http://localhost:4000/api/vacations-by-user/";
    public registerUrl = "http://localhost:4000/api/register/";
    public loginUrl = "http://localhost:4000/api/login/";
    public followersUrl = "http://localhost:4000/api/followers/";
}
const appConfig = new Config();
export default appConfig;
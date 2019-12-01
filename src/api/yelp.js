import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer icUH9NK6EvpH9LBnP2o8Sn7bZUE4IG6olNw5-Z1dwIaCSdf1l4lf7WeWecmjlygflgTGRI2ArrBM_3wswHDMVjkUeDtyLYDyevWOfGC6MbCzW16GrVmZ8cI4mI3fXXYx'
    }
});
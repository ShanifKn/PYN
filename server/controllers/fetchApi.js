import axios from "axios";

// * fetch complete list of movie *//
export const getDatas = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_networks=213`
    );
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

//* fetch movie data with id *//
export const getData = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    );
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

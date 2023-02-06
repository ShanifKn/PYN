import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_networks=213`
    );
    const data = response.data;
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    );
    console.log(response.data);
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;

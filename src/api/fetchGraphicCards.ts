import axios from "axios";
import { IGraphicsResponse } from "../../types/GraphicsCard";

const fetchGraphicsCards = async () => {
  const res = await fetch("https://gfx-backend.herokuapp.com/api/products?populate=*");
  return res.json();
};
export default fetchGraphicsCards;

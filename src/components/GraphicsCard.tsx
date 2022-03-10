import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IGraphicsCard } from "../../types/GraphicsCard";

type Props = {
  videoCard: IGraphicsCard;
};
const GraphicsCard: React.FC<Props> = ({ videoCard }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {videoCard.displayName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {videoCard.price}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={`1_${videoCard?.manufacturer?.name?.toLowerCase()}_${videoCard?.developer?.name?.toLowerCase()}_${videoCard?.video_chipset?.name
              ?.split(" ")
              .join("_")
              .toLowerCase()}.jpg`}
            alt="Graphics card"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};
export default GraphicsCard;

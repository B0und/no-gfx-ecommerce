import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import Copyright from "../src/components/Copyright";
import { useQuery, UseQueryResult } from "react-query";
import fetchGraphicsCards from "../src/api/fetchGraphicCards";
import GraphicsCard from "../src/components/GraphicsCard";
import { IGraphicsResponse } from "../types/GraphicsCard";
import PrimarySearchAppBar from "../src/components/PrimarySearchAppBar";

const Home: NextPage = () => {
  const { isLoading, isError, data, error }: UseQueryResult<IGraphicsResponse, Error> = useQuery<
    IGraphicsResponse,
    Error
  >("graphics-cards", fetchGraphicsCards);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Container maxWidth="lg">
        <PrimarySearchAppBar />
        {data?.data?.map((videoCard) => (
          <GraphicsCard key={videoCard.id} videoCard={videoCard} />
        ))}
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Home;

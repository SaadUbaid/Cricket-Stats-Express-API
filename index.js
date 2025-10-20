import express from "express";
import {
  getList,
  getTopScorer,
  getTopWicketTaker,
  getBestFielder,
  getMostPlayedInnings,
  getMostDuckout,
  getMostRunout,
  getBestPersonality,
  getMostFollowers,
  getBestWicketKeeper,
  getBestAllRounder,
  getBestBowler,
  getBestBatsman,
} from "./models/cricket.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Pakistan Cricket Stats Server");
});

app.get("/players-list", (req, res) => {
  res.send(getList());
});

app.get("/top-scorer", (req, res) => {
  res.send(getTopScorer());
});

app.get("/top-wicket-taker", (req, res) => {
  res.send(getTopWicketTaker());
});

app.get("/best-fielder", (req, res) => {
  res.send(getBestFielder());
});

app.get("/most-played-innings", (req, res) => {
  res.send(getMostPlayedInnings());
});

app.get("/most-duckout", (req, res) => {
  res.send(getMostDuckout());
});

app.get("/most-runout", (req, res) => {
  res.send(getMostRunout());
});

app.get("/best-personality", (req, res) => {
  res.send(getBestPersonality());
});

app.get("/most-followers", (req, res) => {
  res.send(getMostFollowers());
});

app.get("/best-wicket-keeper", (req, res) => {
  res.send(getBestWicketKeeper());
});

app.get("/best-all-rounder", (req, res) => {
  res.send(getBestAllRounder());
});

app.get("/best-bowler", (req, res) => {
  res.send(getBestBowler());
});

app.get("/best-batsman", (req, res) => {
  res.send(getBestBatsman());
});

app.listen(8000, () => {
  console.log("Cricket Stats Server is running on port 8000");
});

const players = [
  {
    id: 1,
    name: "Babar Azam",
    designation: "Captain",
    runs: 12500,
    wickets: 0,
    catches: 110,
    innings: 280,
    duckouts: 8,
    runouts: 4,
    personality: 9.8,
    followers: 18000000,
    battingSkill: 9.9,
    bowlingSkill: 1,
    keepingSkill: 1,
  },
  {
    id: 2,
    name: "Mohammad Rizwan",
    designation: "Vice Captain & Wicket Keeper",
    runs: 8900,
    wickets: 0,
    catches: 200,
    innings: 220,
    duckouts: 10,
    runouts: 6,
    personality: 9.4,
    followers: 9500000,
    battingSkill: 9.2,
    bowlingSkill: 1,
    keepingSkill: 9.8,
  },
  {
    id: 3,
    name: "Shaheen Afridi",
    designation: "Main Bowler",
    runs: 950,
    wickets: 210,
    catches: 45,
    innings: 120,
    duckouts: 12,
    runouts: 2,
    personality: 9.3,
    followers: 7200000,
    battingSkill: 5,
    bowlingSkill: 9.9,
    keepingSkill: 1,
  },
  {
    id: 4,
    name: "Mohammad Amir",
    designation: "Bowler",
    runs: 750,
    wickets: 230,
    catches: 40,
    innings: 150,
    duckouts: 14,
    runouts: 3,
    personality: 9.0,
    followers: 6700000,
    battingSkill: 5,
    bowlingSkill: 9.8,
    keepingSkill: 1,
  },
  {
    id: 5,
    name: "Fakhar Zaman",
    designation: "Opener Batsman",
    runs: 7200,
    wickets: 0,
    catches: 70,
    innings: 190,
    duckouts: 9,
    runouts: 5,
    personality: 8.9,
    followers: 5100000,
    battingSkill: 9.5,
    bowlingSkill: 2,
    keepingSkill: 1,
  },
  {
    id: 6,
    name: "Shadab Khan",
    designation: "All Rounder",
    runs: 2700,
    wickets: 160,
    catches: 95,
    innings: 180,
    duckouts: 7,
    runouts: 3,
    personality: 9.2,
    followers: 8800000,
    battingSkill: 8.2,
    bowlingSkill: 8.8,
    keepingSkill: 1,
  },
  {
    id: 7,
    name: "Imam ul Haq",
    designation: "Batsman",
    runs: 6300,
    wickets: 0,
    catches: 60,
    innings: 160,
    duckouts: 6,
    runouts: 4,
    personality: 8.8,
    followers: 4200000,
    battingSkill: 9.1,
    bowlingSkill: 2,
    keepingSkill: 1,
  },
  {
    id: 8,
    name: "Haris Rauf",
    designation: "Fast Bowler",
    runs: 400,
    wickets: 185,
    catches: 30,
    innings: 100,
    duckouts: 10,
    runouts: 2,
    personality: 8.5,
    followers: 5600000,
    battingSkill: 4,
    bowlingSkill: 9.4,
    keepingSkill: 1,
  },
  {
    id: 9,
    name: "Naseem Shah",
    designation: "Fast Bowler",
    runs: 320,
    wickets: 95,
    catches: 20,
    innings: 80,
    duckouts: 9,
    runouts: 2,
    personality: 8.9,
    followers: 6200000,
    battingSkill: 4,
    bowlingSkill: 9.2,
    keepingSkill: 1,
  },
  {
    id: 10,
    name: "Saud Shakeel",
    designation: "Middle Order Batsman",
    runs: 3800,
    wickets: 0,
    catches: 65,
    innings: 130,
    duckouts: 5,
    runouts: 1,
    personality: 8.7,
    followers: 3500000,
    battingSkill: 8.9,
    bowlingSkill: 1,
    keepingSkill: 1,
  },
  {
    id: 11,
    name: "Agha Salman",
    designation: "All Rounder",
    runs: 2100,
    wickets: 35,
    catches: 75,
    innings: 110,
    duckouts: 4,
    runouts: 3,
    personality: 8.6,
    followers: 2900000,
    battingSkill: 8.3,
    bowlingSkill: 7.0,
    keepingSkill: 1,
  },
  {
    id: 12,
    name: "Usama Mir",
    designation: "Spinner",
    runs: 450,
    wickets: 55,
    catches: 30,
    innings: 85,
    duckouts: 8,
    runouts: 2,
    personality: 8.3,
    followers: 2500000,
    battingSkill: 6,
    bowlingSkill: 8.0,
    keepingSkill: 1,
  },
];

export function getList() {
  return players;
}

export function getTopScorer() {
  let topper = { id: 0, name: "Dummy", runs: 0 };
  players.map((p) => {
    if (p.runs > topper.runs) topper = p;
  });
  return topper;
}

export function getTopWicketTaker() {
  let bowler = { id: 0, name: "Dummy", wickets: 0 };
  players.map((p) => {
    if (p.wickets > bowler.wickets) bowler = p;
  });
  return bowler;
}

export function getBestFielder() {
  let fielder = { id: 0, name: "Dummy", catches: 0 };
  players.map((p) => {
    if (p.catches > fielder.catches) fielder = p;
  });
  return fielder;
}

export function getMostPlayedInnings() {
  let player = { id: 0, name: "Dummy", innings: 0 };
  players.map((p) => {
    if (p.innings > player.innings) player = p;
  });
  return player;
}

export function getMostDuckout() {
  let player = { id: 0, name: "Dummy", duckouts: 0 };
  players.map((p) => {
    if (p.duckouts > player.duckouts) player = p;
  });
  return player;
}

export function getMostRunout() {
  let player = { id: 0, name: "Dummy", runouts: 0 };
  players.map((p) => {
    if (p.runouts > player.runouts) player = p;
  });
  return player;
}

export function getBestPersonality() {
  let player = { id: 0, name: "Dummy", personality: 0 };
  players.map((p) => {
    if (p.personality > player.personality) player = p;
  });
  return player;
}

export function getMostFollowers() {
  let player = { id: 0, name: "Dummy", followers: 0 };
  players.map((p) => {
    if (p.followers > player.followers) player = p;
  });
  return player;
}

export function getBestWicketKeeper() {
  let keeper = { id: 0, name: "Dummy", keepingSkill: 0 };
  players.map((p) => {
    if (p.keepingSkill > keeper.keepingSkill) keeper = p;
  });
  return keeper;
}

export function getBestAllRounder() {
  let player = { id: 0, name: "Dummy", score: 0 };
  players.map((p) => {
    const total = p.battingSkill + p.bowlingSkill;
    if (total > player.score) {
      player = { ...p, score: total };
    }
  });
  return player;
}

export function getBestBowler() {
  let player = { id: 0, name: "Dummy", bowlingSkill: 0 };
  players.map((p) => {
    if (p.bowlingSkill > player.bowlingSkill) player = p;
  });
  return player;
}

export function getBestBatsman() {
  let player = { id: 0, name: "Dummy", battingSkill: 0 };
  players.map((p) => {
    if (p.battingSkill > player.battingSkill) player = p;
  });
  return player;
}

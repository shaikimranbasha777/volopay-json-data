const express = require("express");
const mongoose = require("mongoose");
const Data = require("./model");

mongoose
  .connect(
    "mongodb+srv://shaikimranbasha777:immubasha@cluster0.xqybvfs.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("server running.."));

app.post("/virtualCards", async (req, res) => {
  const { virtualCards } = req.body;
  console.log(virtualCards);
  try {
    const newData = new Data({ virtualCards });
    await newData.save();
    return res.json(await newData.find());
    console.log(Data);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;

/*
//const path = require("path");

// const { open } = require("sqlite");
// const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname, "cricketTeam.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

const convertDbObjectToResponseObject = (dbObject) => {
  return {
    playerId: dbObject.player_id,
    playerName: dbObject.player_name,
    jerseyNumber: dbObject.jersey_number,
    role: dbObject.role,
  };
};

app.get("/players/", async (request, response) => {
  const getPlayersQuery = `
    SELECT
      *
    FROM
      cricket_team;`;
  const PlayersArray = await db.all(getPlayersQuery);
  response.send(
    PlayersArray.map((eachPlayer) =>
      convertDbObjectToResponseObject(eachPlayer)
    )
  );
});

app.get("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const getPlayersQuery = `
    SELECT
        *
    FROM
        cricket_team
    WHERE
        player_id = ${playerId};`;
  const player = await db.get(getPlayersQuery);
  response.send(convertDbObjectToResponseObject(player));
});

app.post("/players/", async (request, response) => {
  const playerDetails = request.body;
  const { playerName, jerseyNumber, role } = playerDetails;
  const postPlayerQuery = `
    INSERT INTO
         cricket_team(player_name, jersey_number, role) 
    VALUES 
        ('${playerName}', '${jerseyNumber}', '${role}');`;
  const player = await db.run(postPlayerQuery);
  response.send("Player Added to Team");
});

app.put("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const { playerName, jerseyNumber, role } = request.body;
  const putPlayerQuery = `
    UPDATE
        cricket_team
    SET
        player_name = '${playerName}',
        jersey_number = '${jerseyNumber}',
        role = '${role}'
    WHERE
        player_id = ${playerId};`;
  await db.run(putPlayerQuery);
  response.send("Player Details Updated");
});

app.delete("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const deletePlayersQuery = `
    DELETE FROM
        cricket_team
    WHERE
        player_id = ${playerId};`;
  await db.run(deletePlayersQuery);
  response.send("Player Removed");
});
*/

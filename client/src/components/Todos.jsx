import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import { useAuthToken } from "../AuthTokenContext";
import "../style/todoList.css";
import Results from "./GameComponents/Results";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@material-ui/core/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
export default function Todos() {
  const [newItemText, setNewItemText] = useState();
  const [todosItems, setTodosItems] = useTodos();
  const { accessToken } = useAuthToken();
  let lethality = 0;
  let transmissibility = 0;
  let results = [];
  let conditions = "";
  let conclusion = "";
  const [contents, setContents] = useState([]);
  const REACT_APP_API_URL="https://neat-vent-365923.uw.r.appspot.com/";

  const REACT_APP_AUTH0_DOMAIN="webassignment-3.us.auth0.com";
  const REACT_APP_AUTH0_CLIENT_ID="53UZlW0muPU4RYb2HxjgZMMqG8rujyxw";
  const REACT_APP_AUTH0_AUDIENCE = "https://api.todos";
  const REACT_APP_JWT_NAMESPACE = "https://api.todos";

  async function insertTodo(title) {
    const data = await fetch(`${REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        title: title,
      }),
    });
    if (data.ok) {
      const todo = await data.json();
      return todo;
    } else {
      return null;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newItemText) return;
    const newTodo = await insertTodo(newItemText);

    if (newTodo) {
      setTodosItems([...todosItems, newTodo]);
      setNewItemText("");
    }
  };
  function setUp() {
    const boxes = document.getElementsByTagName("input");
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].checked === true) {
        if (boxes[i].value === "inland") {
          transmissibility++;
          conditions=conditions.concat("inland ");
        } else if (boxes[i].value === "coastal") {
          conditions=conditions.concat("coastal ");
        } else if (boxes[i].value === "wet") {
          transmissibility++;
          conditions=conditions.concat("wet ");
        } else if (boxes[i].value === "dry") {
          conditions=conditions.concat("dy ");
        } else if (boxes[i].value === "city") {
          transmissibility++;
          conditions += "city ";
        } else if (boxes[i].value === "nervSystem") {
          lethality += 6;
          conditions += "nervSystem ";
        } else if (boxes[i].value === "resTract") {
          lethality += 4;
          transmissibility += 3;
          conditions += "resTract ";
        } else if (boxes[i].value === "skin") {
          lethality += 2;
          conditions += "skin ";
        } else if (boxes[i].value === "stomach") {
          lethality += 3;
          transmissibility += 2;
          conditions += "stomach ";
        } else if (boxes[i].value === "organs") {
          lethality += 4;
          transmissibility++;
          conditions += "organs ";
        } else if (boxes[i].value === "bloodSys") {
          transmissibility += 2;
          lethality += 5;
          conditions += "bloodSys ";
        } else if (boxes[i].value === "birds") {
          transmissibility += 2;
          conditions += "birds ";
        } else if (boxes[i].value === "air") {
          transmissibility += 6;
          conditions += "air ";
        } else if (boxes[i].value === "rodents") {
          transmissibility += 3;
          conditions += "rodents ";
        } else if (boxes[i].value === "water") {
          transmissibility += 4;
          conditions += "water ";
        } else if (boxes[i].value === "blood") {
          transmissibility += 4;
          conditions += "blood ";
        } else if (boxes[i].value === "insects") {
          transmissibility++;
          conditions += "insects ";
        }
      }
    }
    simulation();
  }
  function simulation() {
    while (
      lethality < 25 &&
      transmissibility < 50 &&
      lethality >= 0 &&
      transmissibility >= 0
    ) {
      generateEvent(lethality, transmissibility);
    }
    if (lethality+transmissibility >= 70) {
      conclusion =
        "The last human died after this Epidemic, civilization fade away...";
    } else if (lethality >= 25) {
      conclusion =
        "The Epidemic caused sharply decrease in global population, nobody can survive...";
    } else if (transmissibility >= 50) {
      conclusion =
        "There is no way to control the Epidemic, it would affect everyone.";
    } else {
      conclusion =
        "The Epidemic is under control now, population starts to recover, and waiting for next nightmare...";
    }
    results = results.concat("Result: "+conclusion);
    let i = 0;
    let res = [];
    let s = setInterval(() => {
      if (i < results.length) {
        res = res.concat(results[i]);
        setContents(res);
        i++;
      } else {
        clearInterval(s);
      }
    }, 1000);
  }
  function generateEvent() {
    const random = Math.random() * 250;
    if (random <= 40) {
      transmissibility += 4;
      lethality += 4;
      generateResult("El Nino occurs, Epidemic is more dealy and widespread.");
    } else if (random > 40 && random <= 80) {
      transmissibility += 2;
      generateResult("Birds migration, Epidemic is more widespread.");
    } else if (random <= 100 && random > 80) {
      transmissibility += 4;
      generateResult("There is a parade, Epidemic is more widespread.");
    } else if (random <= 130 && random > 100) {
      transmissibility += 3;
      lethality += 2;
      generateResult(
        "Due to global warming, Pikka migrate to low latitude, Epidemic is more widespread through rodents."
      );
    } else if (random <= 170 && random > 130) {
      transmissibility -= 2;
      lethality -= 3;
      generateResult(
        "UN starts to research on vaccine, Epidemic is under control."
      );
    } else if (random > 170 && random <= 210) {
      transmissibility++;
      generateResult("Epidemic is spreading normally.");
    } else if (random <= 230 && random > 210) {
      lethality += 3;
      generateResult("Epidemic mutates and becomes more threaten.");
    } else {
      generateResult("Nothing happened, Epidemic is stable.");
    }
  }
  function generateResult(event) {
    results = results.concat("Event: "+event);
  }
  function resetBoxes() {
    const boxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].checked = false;
    }
  }

  return (
    <div>
      <Box sx={{width: "100%", maxWidth: 500 }}>
        <div className="App">
          <Typography variant="h4">Conditions</Typography>
        </div>
      </Box>
      <Box sx={{width: "100%", maxWidth: 500 }}>
        <form>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Land</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="coastal"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="coastal"
                  control={<Radio />}
                  label="coastal"
                />
                <FormControlLabel
                  value="inland"
                  control={<Radio />}
                  label="inland"
                />
              </RadioGroup>
            </FormControl>
            <div>
              <FormControl >
                <FormLabel id="demo-radio-buttons-group-label1" >
                  Weather
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label1"
                  defaultValue="wet"
                  name="radio-buttons-group1"
                >
                  <FormControlLabel
                    value="wet"
                    control={<Radio />}
                    label="wet"
                  />
                  <FormControlLabel
                    value="dry"
                    control={<Radio />}
                    label="dry"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label3">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label3"
                  defaultValue="city"
                  name="radio-buttons-group1"
                >
                  <FormControlLabel
                    value="city"
                    control={<Radio />}
                    label="city"
                  />
                  <FormControlLabel
                    value="countryside"
                    control={<Radio />}
                    label="countryside"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <Typography >Symptom</Typography>
            <FormGroup row>
              <FormControlLabel
                className="checkbox"
                control={<Checkbox defaultChecked />}
                label="stomach"
                value="stomach"
              />
              <FormControlLabel
                className="checkbox"
                control={<Checkbox />}
                label="respiratory tract"
                value="resTract"
              />
              <FormControlLabel
                className="checkbox"
                control={<Checkbox />}
                label="skin"
                value="skin"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="nerve system"
                value="nervSystem"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="organs"
                value="organs"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="blood system"
                value="bloodSys"
              />
            </FormGroup>
            <Typography >Distribution</Typography>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                className="checkbox"
                label="birds"
                value="birds"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="air"
                value="air"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="rodents"
                value="rodents"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="water"
                value="water"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="blood"
                value="blood"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="checkbox"
                label="insects"
                value="insects"
              />
            </FormGroup>
          </div>
        </form>
      </Box>
      <Button
        variant="contained"
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          setUp();
        }}
      >
        Start
      </Button>
      <Button
        variant="contained"
        onClick={(evt) => {
          evt.preventDefault();
          lethality = 0;
          transmissibility = 0;
          resetBoxes();
          conditions = "";
          conclusion = "";
          setContents([]);
        }}
      >
        Restart without Save
      </Button>

      <Button variant="contained" onClick={(e) => {
        e.preventDefault();
        setNewItemText(contents[contents.length - 1]);
        lethality = 0;
        transmissibility = 0;
        resetBoxes();
        setContents([]);
        handleFormSubmit(e)
      }}>
        Restart with Save
      </Button>
<br></br>
<br></br>

      <Results contents={contents}></Results>
<Box>
<br></br>
<br></br>
  <Typography variant="h5">Your Past Records</Typography>
      <div className="todo-list">
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="todo-form"
          autoComplete="off"
        >
          <Input
            type="text"
            name="item"
            id="item"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>

        <List sx={{color:'gray'}}className="list">
          {todosItems.map((item) => {
            return (
              <ListItem key={item.id} className="todo-item">
                <span className="itemName">{item.title}</span>
              </ListItem>
            );
          })}
        </List>
    
      </div>
      </Box>
    </div>
  );
}

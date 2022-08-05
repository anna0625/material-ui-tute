import React from "react";
import { Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Avatar from "@material-ui/core/Avatar";
import { yellow, blue, pink, green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return blue[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return green[500];
    },
  },
});

export const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)} name="test">
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
          data-testid="cardheader"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

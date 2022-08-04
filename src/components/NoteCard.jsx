import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
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

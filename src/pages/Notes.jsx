import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import { NoteCard } from "../components/NoteCard";
import Masonry from "react-masonry-css";
import { firebaseConfig } from "../firebase.config.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
// import { getAuth } from "firebase/auth";

//  Initialize Firebase
initializeApp(firebaseConfig);
//  init services
const db = getFirestore();
// const auth = getAuth();
//  collection reference
const colRef = collection(db, "notes");

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    //  get collection data
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let notes = [];
    //     snapshot.docs.forEach((doc) => {
    //       notes.push({ ...doc.data(), id: doc.id });
    //     });
    //     setNotes(notes);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    // realtime collection data
    onSnapshot(colRef, (snapshot) => {
      let notes = [];
      snapshot.docs.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notes);
    });
    // fetch("http://localhost:8000/notes")
    //   .then((res) => res.json())
    //   .then((data) => setNotes(data));
  }, []);

  const handleDelete = (id) => {
    const docRef = doc(db, "notes", id);
    deleteDoc(docRef);
    // const handleDelete = async (id) => {
    //   await fetch(`http://localhost:8000/notes/${id}`, {
    //     method: "DELETE",
    //   });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

// Test Block
// 1. render a compoent we want to test
// 2. find the element we want to interact with
// 3. interact with those elements
// 4. assert that the results are as expected

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NoteCard } from "../NoteCard";
import data from "./note.test.json";

const handleDelete = (id) => {
  console.log(`Delete ${id}`);
};

data.notes.forEach((note) => {
  test(`renders note card with title ${note.title}`, () => {
    render(<NoteCard note={note} handleDelete={handleDelete} />);
    const title = screen.getByText(note.title);
    expect(title).toBeInTheDocument();
  });
});

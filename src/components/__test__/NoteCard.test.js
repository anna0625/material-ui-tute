// Test Block
// 1. render a compoent we want to test
// 2. find the element we want to interact with
// 3. interact with those elements
// 4. assert that the results are as expected

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NoteCard } from "../NoteCard";
// import data from "./note.test.json";

const note = {
  title: "Test Title",
  details: "Test Details",
  category: "work",
  id: 1,
};

const handleDelete = (id) => {
  console.log(`Delete ${id}`);
};

test(`renders note card with title ${note.title}`, () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const title = screen.getByText(note.title);
  expect(title).toBeInTheDocument();
});

test(`renders note card with title ${note.title}`, () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const buttonElement = screen.getByRole("button", { name: "" }); // name is the text inside the button
  expect(buttonElement).toBeInTheDocument();
});

test(`renders note card with title ${note.title}`, () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const title = screen.getByTestId("cardheader");
  expect(title).toBeInTheDocument();
});

test(`renders note card with title ${note.title}`, async () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const title = await screen.findByText(note.title);
  expect(title).toBeInTheDocument();
});

test(`renders note card with title ${note.title}`, () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const textElement = screen.queryByText(/dogs/i);
  expect(textElement).not.toBeInTheDocument();
});

test(`renders note card with title ${note.title}`, () => {
  render(<NoteCard note={note} handleDelete={handleDelete} />);
  const buttonElement = screen.getAllByRole("button");
  expect(buttonElement.length).toBe(1);
});

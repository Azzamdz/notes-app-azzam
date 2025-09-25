import express from "express";
import {
  getAllNotesHandler,
  updateByIdHandler,
} from "../handlers/notesHandler.js";
import { addNoteHandler } from "../handlers/notesHandler.js";
import { getNoteByIdHandler } from "../handlers/notesHandler.js";

const noteRouter = express.Router();

noteRouter.get("/notes", getAllNotesHandler);
noteRouter.post("/notes", addNoteHandler);
noteRouter.get("/notes/:id", getNoteByIdHandler);
noteRouter.put("/notes/:id", updateByIdHandler);

export default noteRouter;

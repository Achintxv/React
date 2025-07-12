import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosinstance";

function AddEditNotes({
  noteData,
  type,
  getAllNotes,
  onClose,
  showToastMessage,
}) {
  const [title, settitle] = useState(noteData?.title || "");
  const [content, setcontent] = useState(noteData?.content || "");
  const [tags, settags] = useState(noteData?.tags || []);
  const [error, seterror] = useState(null);

  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully!");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        seterror(error.response.data.message);
      }
    }
  };
  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully!");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        seterror(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      seterror("Please enter title!");
      return;
    }
    if (!content) {
      seterror("Please enter content!");
      return;
    }
    seterror("");
    if (type == "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };
  return (
    <div className="relative">
      <button
        className="w-10 h-10 text-xl cursor-pointer rounded-full flex items-center justify-center absolute -top-3 -right-3"
        onClick={onClose}
      >
        <MdClose></MdClose>
      </button>
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xs text-zinc-500 font-semibold input-label">
          Title
        </label>
        <input
          type="text"
          className="text-2xl outline-none"
          placeholder="Go to gym at 5"
          value={title}
          onChange={({ target }) => settitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-semibold input-label">
          Content
        </label>
        <textarea
          type="text"
          className="text-sm bg-zinc-100 rounded p-1 outline-none"
          placeholder="Content"
          rows={6}
          value={content}
          onChange={({ target }) => setcontent(target.value)}
        />
      </div>
      <div className="mt-3">
        <div className="input-label">Tags</div>
        <TagInput tags={tags} setTags={settags}></TagInput>
      </div>
      {error && <p className="text-red-500 text-sm mt-2 pt-1">{error}</p>}
      <button
        className="w-full bg-sky-500 hover:bg-sky-600 rounded-md text-white mt-2 p-2"
        onClick={handleAddNote}
      >
        {type === "edit" ? "UPDATE" : "Add"}
      </button>
    </div>
  );
}

export default AddEditNotes;

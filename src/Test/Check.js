import React from "react";
import Active from "./Active";
import Todolist from "./Todolist";

export default function Check() {
  return (
    <div>
      <div>
        ♥ Check Work!
        <>
          <div>
            <Todolist name="Work 1 : ลายละเอียดงานที่Staffส่งมา" />
            <button type="submit" className="btn toggle-btn btn__sm">
              Complete
            </button>
            <button type="submit" className="btn toggle-btn btn__sm">
              cancel
            </button>
          </div>
          <div>
            <Todolist name="Work 2 : ลายละเอียดงานที่Staffส่งมา" />
            <button type="submit" className="btn toggle-btn btn__sm">
              Complete
            </button>
            <button type="submit" className="btn toggle-btn btn__sm">
              cancel
            </button>
          </div>
          <div>
            <Todolist name="Work 3 : ลายละเอียดงานที่Staffส่งมา" />
            <button type="submit" className="btn toggle-btn btn__sm">
              Complete
            </button>
            <button type="submit" className="btn toggle-btn btn__sm">
              cancel
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

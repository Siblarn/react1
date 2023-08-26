import React from "react";
import Active from "./Active";
import FilterButton from "./FilterButton";

export default function Check() {
  return (
    <div>
          <div className="filters btn-group stack-exception">
            <FilterButton />
          </div>
      <div>
        ♥ Check Work!
      </div>
    </div>
  );
}

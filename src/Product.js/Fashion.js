import React from "react";


export default function Fashion() {
  return (
    <div>
    <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    เสื้อผ้าและเครื่องประดับ (Clothes & Accessories)
  </button>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#">
        เครื่องประดับ (Fashion Accessories)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        เสื้อผ้าผู้ชาย (Men Clothes)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        รองเท้าผู้ชาย (Men Shoes)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        กระเป๋าผู้ชาย (Men Bags)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        เสื้อผ้าผู้หญิง (Women Clothes)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        รองเท้าผู้หญิง (Women Shoes)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        กระเป๋าผู้หญิง (Women Bags)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        เสื้อผ้ามุสลิม (Muslim Fashion)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        กระเป๋าเดินทาง (Travel & Luggage)
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        นาฬิกา (Watches)
      </a>
    </li>
  </ul>
    </div>
  );
}

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Testcard() {
  return (
    <div>
      Pokemon
    
      <div className="container text-center" >
        <div
          class="row align-items-start"
          style={{
            background: "#EAF4FF",
            borderRadius: "1rem 1rem 1rem 1rem",
            border: "2px solid gray",
            lineHeight:"2.5rem"
          }}
        >
          <div class="col">
            <div style={{ fontWeight: "600" }}>Name</div>
            <div className="name1">Bulbasaur</div>
            <div className="name2">Ivysaur</div>
            <div className="name3">Charmander</div>
            <div className="name4">Charizard</div>
            <div className="name5">MegaBlastoise</div>
            <div className="name6">Blastoise</div>
            <div className="name7">Pikachu</div>
            <div className="name8">Raichu</div>
            <div className="name9">Sandshrew</div>
            <div className="name10">Sandslash</div>
          </div>
          <div class="col">
            <div style={{fontWeight:"600"}}>Type</div>
            <div className="type1">GRASS,POISON</div>
            <div className="type2">GRASS,POISON</div>
            <div className="type3">FIRE</div>
            <div className="type4">FIRE,FLYING</div>
            <div className="type5">WATER</div>
            <div className="type6">WATER</div>
            <div className="type7">ELECTRIC</div>
            <div className="type8">ELECTRIC,PSYCHIC</div>
            <div className="type9">ICE,STEEL</div>
            <div className="type10">ICE,STEEL</div>
          </div>
          <div class="col">
          <div style={{fontWeight:"600"}}> Hp</div>
            <div className="hp1">45</div>
            <div className="hp2">60</div>
            <div className="hp3">39</div>
            <div className="hp4">78</div>
            <div className="hp5">79</div>
            <div className="hp6">79</div>
            <div className="hp7">35</div>
            <div className="hp8">60</div>
            <div className="hp9">50</div>
            <div className="hp10">75</div>
          </div>
          <div class="col">
          <div style={{fontWeight:"600"}}> Attack </div>
            <div className="atk1">49</div>
            <div className="atk2">62</div>
            <div className="atk3">52</div>
            <div className="atk4">104</div>
            <div className="atk5">103</div>
            <div className="atk6">83</div>
            <div className="atk7">55</div>
            <div className="atk8">85</div>
            <div className="atk9">75</div>
            <div className="atk10">100</div>
          </div>
          <div class="col">
          <div style={{fontWeight:"600"}}> Defense </div>
            <div className="def1">49</div>
            <div className="def2">63</div>
            <div className="def3">43</div>
            <div className="def4">78</div>
            <div className="def5">120</div>
            <div className="def6">100</div>
            <div className="def7">40</div>
            <div className="def8">50</div>
            <div className="def9">90</div>
            <div className="def10">120</div>
          </div>
          <div class="col">
          <div style={{fontWeight:"600"}}> Speed </div>
            <div className="speed1">45</div>
            <div className="speed2">60</div>
            <div className="speed3">65</div>
            <div className="speed4">100</div>
            <div className="speed5">78</div>
            <div className="speed6">78</div>
            <div className="speed7">90</div>
            <div className="speed8">110</div>
            <div className="speed9">40</div>
            <div className="speed10">65</div>
          </div>
        </div>
      </div>
      <br></br>
      <div>SKILL
        <div>
        <div className="container text-center" >
        <div
          class="row align-items-start"
          style={{
            background: "#EAF4FF",
            borderRadius: "1rem 1rem 1rem 1rem",
            border: "2px solid gray",
            lineHeight:"2rem"
          }}
        >
          <div class="col">
          <div style={{fontWeight:"600"}}> Skill</div>
            <div className="Skill01">Tackle </div>
            <div className="Skill02">VineWhip</div>
            <div className="Skill03">Razor Leaf</div>
            <div className="Skill04">Seed Bomb</div>
            <div className="Skill05">Solar Bea</div>
            <div className="Skill06">Dragon Breath</div>
            <div className="Skill07">Ember</div>
            <div className="Skill08">Fire Fang</div>
            <div className="Skill09">Flamethrower</div>
            <div className="Skill10">Inferno</div>
            <div className="Skill11">Flare Blitz</div>
            <div className="Skill12">Air Slash</div>
            <div className="Skill13">Hydro Pump</div>
            <div className="Skill14">Aqua Tail</div>
            <div className="Skill15">Water Pulse</div>
            <div className="Skill16">Water Gun</div>
            <div className="Skill17">Aqua Jet</div>
            <div className="Skill18">Aura Sphere</div>
            <div className="Skill19">Thunder</div>
            <div className="Skill20">Thunderbolt</div>
            <div className="Skill21">Spark</div>
            <div className="Skill22">Thunder Shock</div>
            <div className="Skill23">Nuzzle</div>
            <div className="Skill24">Wild Charge</div>
            <div className="Skill25">Disarming Voice</div>
            <div className="Skill26">Metal Claw</div>
            <div className="Skill27">Iron Tail</div>
            <div className="Skill28">Rapid Spin</div>
            <div className="Skill29">Crush Claw</div>
            <div className="Skill30">Flail</div>
            <div className="Skill31">Sludge</div>
            <div className="Skill32">Sludge Bomb</div>
            <div className="Skill33">Flash Cannon</div>
            <div className="Skill34">Thunder Punch</div>
            <div className="Skill35">Charge Beam</div>
          </div>
          <div class="col">
            <div style={{fontWeight:"600"}}>Type</div>
            <div className="typeS1">GRASS</div>
            <div className="typeS2">GRASS</div>
            <div className="typeS3">GRASS</div>
            <div className="typeS4">GRASS</div>
            <div className="typeS5">GRASS</div>
            <div className="typeS6">FIRE</div>
            <div className="typeS7">FIRE</div>
            <div className="typeS8">FIRE</div>
            <div className="typeS9">FIRE</div>
            <div className="typeS10">FIRE</div>
            <div className="typeS11">FIRE</div>
            <div className="typeS12">FIRE</div>
            <div className="typeS13">FLYING</div>
            <div className="typeS14">WATER</div>
            <div className="typeS15">WATER</div>
            <div className="typeS16">WATER</div>
            <div className="typeS17">WATER</div>
            <div className="typeS18">WATER</div>
            <div className="typeS19">ELECTRIC</div>
            <div className="typeS20">ELECTRIC</div>
            <div className="typeS21">ELECTRIC</div>
            <div className="typeS22">ELECTRIC</div>
            <div className="typeS23">ELECTRIC</div>
            <div className="typeS24">ELECTRIC</div>
            <div className="typeS25">ELECTRIC</div>
            <div className="typeS26">STEEL</div>
            <div className="typeS27">STEEL</div>
            <div className="typeS28">STEEL</div>
            <div className="typeS29">STEEL</div>
            <div className="typeS30">STEEL</div>
            <div className="typeS31">POISON</div>
            <div className="typeS32">POISON</div>
            <div className="typeS33">STEEL</div>
            <div className="typeS34">ELECTRIC</div>
            <div className="typeS35">ELECTRIC</div>
          
          </div>
          <div class="col">
            <div style={{ fontWeight: "600" }}>Power</div>
            <div className="nameS1">40</div>
            <div className="nameS2">45</div>
            <div className="nameS3">55</div>
            <div className="nameS4">80</div>
            <div className="nameS5">120</div>
            <div className="nameS6">60</div>
            <div className="nameS7">40</div>
            <div className="nameS8">65</div>
            <div className="nameS9">90</div>
            <div className="nameS10">100</div>
            <div className="nameS11">120</div>
            <div className="nameS12">75</div>
            <div className="nameS13">110</div>
            <div className="nameS14">90</div>
            <div className="nameS15">60</div>
            <div className="nameS16">40</div>
            <div className="nameS17">40</div>
            <div className="nameS18">80</div>
            <div className="nameS19">110</div>
            <div className="nameS20">90</div>
            <div className="nameS21">65</div>
            <div className="nameS22">40</div>
            <div className="nameS23">25</div>
            <div className="nameS24">90</div>
            <div className="nameS25">45</div>
            <div className="nameS26">50</div>
            <div className="nameS27">100</div>
            <div className="nameS28">50</div>
            <div className="nameS29">75</div>
            <div className="nameS30">0</div>
            <div className="nameS31">65</div>
            <div className="nameS32">90</div>
            <div className="nameS33">80</div>
            <div className="nameS34">75</div>
            <div className="nameS35">50</div>
       
          </div>
         
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

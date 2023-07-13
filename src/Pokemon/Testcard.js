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
          <div style={{fontWeight:"600"}}> Sp.Atk </div>
            <div className="SpAtk1">65</div>
            <div className="SpAtk2">80</div>
            <div className="SpAtk3">60</div>
            <div className="SpAtk4">159</div>
            <div className="SpAtk5">135</div>
            <div className="SpAtk6">85</div>
            <div className="SpAtk7">50</div>
            <div className="SpAtk8">95</div>
            <div className="SpAtk9">10</div>
            <div className="SpAtk10">25</div>
          </div>
          <div class="col">
          <div style={{fontWeight:"600"}}> Sp.Def  </div>
            <div className="SpDef1">65</div>
            <div className="SpDef2">80</div>
            <div className="SpDef3">50</div>
            <div className="SpDef4">115</div>
            <div className="SpDef5">115</div>
            <div className="SpDef6">105</div>
            <div className="SpDef7">50</div>
            <div className="SpDef8">85</div>
            <div className="SpDef9">35</div>
            <div className="SpDef10">65</div>
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
            lineHeight:"2.5rem"
          }}
        >
          <div class="col">
          <div style={{fontWeight:"600"}}> Skill</div>
            <div className="Skill01">Tackle / Razor / SleepPowder</div>
            <div className="Skill02">VineWhip / Razor / SleepPowder</div>
            <div className="Skill03">Tackle / SolarBeam / PoisonPowder / EnergyBall</div>
            <div className="Skill04">Scratch / Flamethrower / SunnyDay / DragonRush</div>
            <div className="Skill05">DragonClaw / Scratch / DragonTail / Air Slash</div>
            <div className="Skill06">Tackle / WaterGun / FocusPunch / MuddyWater</div>
            <div className="Skill07">Tackle / WaterGun / Waterfall / AuraSphere</div>
            <div className="Skill08">Nuzzle / PlayNice / ThunderShock / Thunder</div>
            <div className="Skill09">Discharge / ElectroBall / LightScreen / Charge</div>
            <div className="Skill10">DefenseCurl / GyroBall / IronTail / Counter</div>
            <div className="Skill11">CrushClaw / GyroBall / MetalClaw / NightSlash</div>
          </div>
          <div class="col">
            <div style={{fontWeight:"600"}}>Type</div>
            <div className="typeS1">GRASS,POISON</div>
            <div className="typeS2">GRASS,POISON</div>
            <div className="typeS3">FIRE</div>
            <div className="typeS4">FIRE,FLYING</div>
            <div className="typeS5">WATER</div>
            <div className="typeS6">WATER</div>
            <div className="typeS7">ELECTRIC</div>
            <div className="typeS8">ELECTRIC,PSYCHIC</div>
            <div className="typeS9">ICE,STEEL</div>
            <div className="typeS10">ICE,STEEL</div>
          <div class="col">
            <div style={{ fontWeight: "600" }}>ATK</div>
            <div className="nameS1">80</div>
            <div className="nameS2">100</div>
            <div className="nameS3">100</div>
            <div className="nameS4">150</div>
            <div className="nameS5">200</div>
            <div className="nameS6">10</div>
            <div className="nameS7">70</div>
            <div className="nameS8">50</div>
            <div className="nameS9">40</div>
            <div className="nameS10">150</div>
          </div>
          </div>
         
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import S from "./S.png";

export default function Resume() {
    return (

    <>
    <div className="header .overflow-y-visible" style={{ margin: '30px' }}>

    <div style={{ display: 'flex' }}>
        <div className="MyImage" style={{ margin: '30px' }} ></div>
        <img src={S}  width="20%" alt="text"></img>
    
        <div className="h1" style={{ margin: '50px', fontWeight: '800' }}>
            <div style={{ fontWeight: '500', fontSize: '35px',borderBottom:"3px solid black" ,lineHeight:"4rem"}}>Thippawan Puttachart</div>
           
            <br></br>
            <div style={{ display: 'flex' }}>
                <div style={{marginLeft:"10px", fontWeight: '700' , fontSize:"32px"}}>Info </div>
                <div style={{ fontWeight: '400', padding: '0px 70px',fontSize:"28px",marginLeft:"14px" }}>Female(22year)</div>
            </div>
    
    
            <div className="h2" style={{ display: 'flex' }}>
                <div style={{marginLeft:"10px",fontSize:"28px",fontWeight:"750"}}>Address</div>
                <div style={{ padding: '0px 39px', fontWeight: '400',fontSize:"28px" }}>51/1 Soi Pracha Uthit 54, Bang Mod, Thung Khru District, Bangkok 10140</div>
            </div>
            <div className="h3" style={{ display: 'flex' }}>
                <div style={{marginLeft:"10px",fontSize:"28px",fontWeight:"750"}}>E-mail</div>
                <div style={{ marginLeft: '62px', fontWeight: '400',fontSize:"28px" }}>siblarn5905@gmail.com</div>
                <div style={{ marginLeft: '30px',fontSize:"28px" }}>Tel</div>
                <div style={{ fontWeight: '400', marginLeft: '30px',fontSize:"28px" }}>0929985905</div>
            </div>
        </div>
    </div>
    </div>
    <div>
    <div className="personal" style={{ marginLeft: '150px', fontWeight: '550', fontSize: '20px', display: 'flex', borderRight: '0px' }}>
        <div style={{ marginRight: '90px', borderBottom: '0px' ,fontWeight:"750" , fontSize:"30px"}}>PERSONAL DETAIL</div>
        <div className="redline" style={{ borderLeft: '5px solid black', margin: '0px 0px', borderBottom: '0px' }}></div>
        <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '70px' , fontSize:"30px" ,fontWeight:"750"}}>EDUCATION</div>
            <div style={{ borderRight: '20px' }}></div>
        </div>
    </div>
    
    <div className="nickname" style={{ marginLeft: '150px', lineHeight: '55px', display: 'flex' }}>
        <div style={{ fontWeight: '800' }}>Nickname</div>
        <div style={{ marginLeft: '60px' }}>Siblarn</div>
        <div style={{ marginLeft: '210px', fontSize: '25px' }}>king mongkut's university of technology thonburi</div>                        <br></br>
    </div>
    <div className="age" style={{ display: 'flex', marginLeft: '150px' }}>
        <div style={{ fontWeight: '800' }}>Age</div>
        <div style={{ marginLeft: '131px' }}>22</div>
        <div style={{ marginLeft: '285px' }}>Faculty of industrial education and technology.</div>
    </div>
    <div className="nationnality" style={{ display: 'flex', marginLeft: '150px', lineHeight: '55px' }}>
        <div style={{ fontWeight: '800' }}>Nationnality</div>
        <div style={{ marginLeft: '30px' }}>Thai</div>
        <div style={{ marginLeft: '300px' }}>Department of Electrical engineering.</div>
    
    </div>
    <div className="language" style={{ display: 'flex', marginLeft: '150px', lineHeight: '28px' }}>
        <div style={{ fontWeight: '800' }}>Language</div>
        <div style={{ marginLeft: '64px' }}>Thai</div>
        <div style={{ marginLeft: '320px' }}>Major of Computer engineering</div>
    </div>
    <div className="personallity" style={{ display: 'flex', marginLeft: '150px', lineHeight: '55px' }}>
        <div style={{ fontWeight: '800' }}>Personallity</div>
        <div style={{ marginLeft: '37px' }}>Friendly</div>
        <div style={{ marginLeft: '370px' }}>GPA : 3.00</div>
    
    
    </div>
    
    </div>
    <div className="" style={{}}>
    <div className="experience">
        <div style={{ display: 'flex' }}>
            <div style={{ fontWeight: '750', fontSize: '32px', marginLeft: '150px', lineHeight: '100px' }}>EXPERIENCE</div>
            <div style={{ display: 'inline' }}>
                <hr class="solid" style={{}}></hr>
            </div>
        </div>
        <li style={{ marginLeft: '190px' , fontWeight:"400",fontSize:"25px" }}>Tido Tech Co.</li>
    </div>
    </div>
    </>
    )

}

  

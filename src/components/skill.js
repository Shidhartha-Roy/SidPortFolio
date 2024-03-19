import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";

import Item from "./item";

import HTML from "../images/htmlLogo.jpg"
import JS from "../images/jsLogo.png"
import CSS from "../images/csLogo.png"
import JAVA from "../images/javaLogo.png"
import Cpp from "../images/c++Logo.png"
import SPRING from "../images/springLogo.png"
import PHP from "../images/phpLogo.png"
import MYSQL from "../images/mysqlLogo.png"
import VSC from "../images/vscLogo.png"
import ECLIPSE from "../images/eclipseLogo.png"
import ANDROID from "../images/asLogo.png"
import REACT from "../images/reactLogo.png"
import REST from "../images/restLogo.png"
import LARAVEL from "../images/laraLogo.png"




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="Slider">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000} pagination={false}>
          <Item>
            <img className="img" src={HTML} />
          </Item>
          <Item>
          <img className="img" src={JS} style={{height: "215px", width: "450px"}}/>
          </Item>
          <Item>
          <img className="img" src={CSS} style={{height: "270px", width: "450px", marginTop: "-32px"}}/>
          </Item>
          <Item>
          <img className="img" src={JAVA} style={{height: "270px", width: "450px", marginTop: "-32px"}}/>
          </Item>
          <Item>
          <img className="img" src={Cpp} style={{height: "200px", marginTop: "20px"}}/>
          </Item>
          <Item>
          <img className="img" src={SPRING} />
          </Item>
          <Item>
          <img className="img" src={PHP} style={{height: "270px", width: "450px", marginTop: "-32px"}}/>
          </Item>
          <Item>
          <img className="img" src={MYSQL} />
          </Item>
          <Item>
          <img className="img" src={VSC} style={{height: "270px", width: "450px", marginTop: "-16px"}}/>
          </Item>
          <Item>
          <img className="img" src={ECLIPSE} style={{height: "270px", width: "450px", marginTop: "-32px"}}/>
          </Item>
          <Item>
          <img className="img" src={ANDROID} style={{ marginTop: "23px"}}/>
          </Item>
          <Item>
          <img className="img" src={REACT} style={{height: "270px", width: "450px", marginTop: "-16px"}}/>
          </Item>
          <Item>
          <img className="img" src={REST} style={{height: "270px", width: "450px", marginTop: "-16px"}}/>
          </Item>
          <Item>
          <img className="img" src={LARAVEL} style={{height: "270px", width: "450px", marginTop: "-16px"}}/>
          </Item>
        </Carousel>
      </div>
    </>
  );
}
export default Slider
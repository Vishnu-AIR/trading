import React from "react";
import index from "./index.css";
import c22 from "../../assets/c22.jpeg";
import c11 from "../../assets/c11.jpeg";
import s11 from "../../assets/s11.jpg";
import s22 from "../../assets/s22.jpg";
import s3 from "../../assets/s3.webp";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export const Ourpackages = () => {
  return (
    <>
      <div className="Our-packages">
        <div className="packages-head">
          <span>Our Packages</span>
        </div>
        <div className="package-flexbox">
          <div className="box-1">
            <div className="box-1-img">
              <img src={c11} />
            </div>
            <div className="box-1-data">
              <div className="package-heading">
                <div className="package-name">Beginner Tier</div>
                <div className="package-price">999/-</div>
              </div>
              <div className="package-users">
                <img src={s11} />
                <img src={s22} />
                <img src={s3} />
                <div>+400</div>
                <div>
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                </div>
              </div>
              <div className="learn-btn">Start Learning</div>
              <div className="flex-col-benifits">
                <div className="flex-row-list">
                  <div>Basic Plus</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Support</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Community Access</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Regular Updates</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="partition"></div>
          <div className="box-2">
            <div className="box-2-img">
              <img src={c22} />
            </div>
            <div className="box-2-data">
              <div className="package-heading">
                <div className="package-name">Beginner Tier</div>
                <div className="package-price">999/-</div>
              </div>
              <div className="package-users">
                <img src={s11} />
                <img src={s22} />
                <img src={s3} />
                <div>+400</div>
                <div>
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                </div>
              </div>
              <div className="learn-btn">Start Learning</div>
              <div className="flex-col-benifits">
                <div className="flex-row-list">
                  <div>Basic Plus</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Support</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Community Access</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
                <div className="flex-row-list">
                  <div>Regular Updates</div>
                  <div><TiTick style={{color:'green'}}/></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="box-2">
            <div className="box-2-img">
              <img src={c11} />
            </div>
            <div className="box-2-data">
              <div className="package-heading">
                <div className="package-name">Pro Tier</div>
                <div className="package-price">1499/-</div>
              </div>
              <div className="package-users">
                <img src={s11} />
                <img src={s22} />
                <img src={s3} />
                <div>+600</div>
                <div>
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                  <FaStar style={{ color: "rgba(240, 181, 34, 1)" }} />
                </div>
              </div>
              <div className="learn-btn">Start Learning</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

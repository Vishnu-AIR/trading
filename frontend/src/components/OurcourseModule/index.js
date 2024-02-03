import React from "react";
import index from "./index.css";
import { CgProfile } from "react-icons/cg";
import { GrTools } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import { CgDanger } from "react-icons/cg";
import { GiBreakingChain } from "react-icons/gi";
import { MdOutlinePsychologyAlt, MdPsychology } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { MdCurrencyExchange } from "react-icons/md";
import { FaMeetup } from "react-icons/fa";

export const Module = () => {
  return (
    <>
      <div className="module">
        <div className="our-module">
          <span className="text-modulehead">Our Course Module </span>
        </div>
        <div className="child-group">
          <div className="child-elements">
            <CgProfile style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
              Understanding trading & technical analysis
            </div>
            <div>
              Trading and technical analysis are vital aspects of the financial
              markets, particularly within areas like stocks.
            </div>
          </div>
          <div className="child-elements">
            <CiWallet style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            > 
              Fundamental Analysis
            </div>
            <div>
              Trading and technical analysis are vital aspects of the financial
              markets, particularly within areas like stocks.
            </div>
          </div>
          <div className="child-elements">
            <GrTools style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
             Trading Tools
            </div>
            <div>
            Trading tools assist traders in analyzing markets, executing trades, managing risks, and making informed decisions. 
            </div>
          </div>
          <div className="child-elements">
            <CgDanger style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
              Trade & Risk Management
            </div>
            <div>
            Trade and risk management are crucial aspects of successful trading, focusing on maximizing profits while minimizing potential losses
            </div>
          </div>
          <div className="child-elements">
            <MdPsychology style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
              Psychology and Fear
            </div>
            <div>
            Psychology and emotions play a significant role in trading, impacting decision-making and overall performance
            </div>
          </div>
          <div className="child-elements">
            <GiBreakingChain style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
              BOS & SMC
            </div>
            <div>
            Break Of Structure & CHOCH,
Order Blocks & Imbalance,
Liquidity Grabs,
Wyckoff Theory,
            </div>
          </div>
          <div className="child-elements">
            <RiPresentationFill style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
             LIVE TRADING
            </div>
            <div>
            Trading involves significant risks, and it's crucial to have a thorough understanding of the markets, strategies, and risk management
            </div>
          </div>
          <div className="child-elements">
            <MdCurrencyExchange style={{ fontSize: "24px", color: "green" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "League Spartan",
              }}
            >
              Crypto
            </div>
            <div>
            Involves buying and selling shares of ownership in publicly traded companies 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

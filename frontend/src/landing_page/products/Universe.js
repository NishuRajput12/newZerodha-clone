import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row p-5 text-center  text-muted mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner
          <br /> platforms
        </p>
        <div className="col-6  mt-5 ">
         {/* <img src=" media/images/zerodhaFundhouse.png" />  */}
          <img src=" media\images\sensibullLogo.svg" />
          <p className=" text-muted " style={{ fontSize: "12px" }}>
            Our asset management venture
            <br /> that is creating simple and transparent index
          <br /> funds to help you save for your goals.{" "}
          </p>
        </div>
        <div className="col-6  mt-5 ">
          <img src=" media\images\sensibullLogo.svg" />
          <p className=" text-muted " style={{ fontSize: "12px" }}>
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more. .{" "}
          </p>
        </div>

        <div className="col-6 p-3 mt-5 ">
          <img src=" media/images/smallcaseLogo.png" />
          <p className=" text-muted " style={{ fontSize: "12px" }}>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-6 p-3 mt-5 ">
          {/* <img src=" media/images/streakLogo.png" /> */}
          <img src=" media/images/smallcaseLogo.png" />  
          <p className=" text-muted " style={{ fontSize: "12px" }}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
      
        <div className="col-6 p-3 mt-5 ">
          <img src=" media/images/smallcaseLogo.png" />  
            <p className=" text-muted " style={{ fontSize: "12px" }}>
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-6 p-3 mt-5 ">
          {/* <img src=" media/images/dittoLogo.png" /> */}
          <img src=" media/images/smallcaseLogo.png" />  
          <p className=" text-muted " style={{ fontSize: "12px" }}>
            Personalized advice on life
            <br /> and health insurance. No spam
            <br />and no mis-selling.
          </p>
        </div>

        <button
          className="p-3 btn btn-primary fs-6  mt-4 mb-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}
export default Universe;

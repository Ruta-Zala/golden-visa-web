import React from "react";
import { Helmet } from "react-helmet";
import HeaderGenz from "../../components/HeaderGenz";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

function UserProfile() {
  return (
    <>
      <Helmet>
        <title>
          UAE Golden Visa - Unlock Opportunities with GenZ Talent Program
        </title>
        <meta
          name="description"
          content="Discover the UAE Golden Visa benefits, including a 10-year residency, investment growth, and a vibrant Web3 community. Join the GenZ Talent Program and enter the golden draw for a chance to secure your future with OPN tokens."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Golden Visa"
        />
        <meta name="keywords" content="IOPn, RAKDAO, GenZ Talent Program" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-0">
        <div className="self-stretch">
          <div className="flexitems-start justify-center bg-slate-300 py-4">
            <div className="container-xs flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5 ">
              <div className="flex w-[90%] flex-col gap-[238px] max-[1440px]:w-full max-[1440px]:gap-[178px] max-[1050px]:w-full max-[1050px]:gap-[178px] max-[550px]:gap-[119px] max-[550px]:items-center">
                <HeaderGenz />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen bg-gray-100 p-10 space-x-8">
        <Sidebar />
        <div className="flex-1">
          <Tabs/>
          {/* <Header />
        <MainContent /> */}
        </div>
      </div>
    </>
  );
}

export default UserProfile;

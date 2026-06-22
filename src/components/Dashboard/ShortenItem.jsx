import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { LiaCheckSolid } from 'react-icons/lia';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import api from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
import { Hourglass } from 'react-loader-spinner';
import Graph from './Graph';
import { MdDelete } from "react-icons/md";

const currentYear = new Date().getFullYear();

const startDate = `${currentYear}-01-01T00:00:00`;
const endDate = `${currentYear}-12-31T23:59:59`;

const ShortenItem = ({
        id,
        originalUrl,
        shortUrl,
        clickCount,
        createdDate,
        qrCodePath,
        expiresAt,
        refetch
        }) => {

            console.log("QR Path:", qrCodePath);
    const { token } = useStoreContext();
    const navigate = useNavigate(); 
    const [isCopied, setIsCopied] = useState(false);
    const [analyticToggle, setAnalyticToggle] = useState(false);
    const [loader, setLoader] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [analyticsData, setAnalyticsData] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
        /^https?:\/\//,
        ""
      );

      const [showUpdateModal, setShowUpdateModal] =
        useState(false);

    const [newAlias, setNewAlias] =
        useState(shortUrl);

    const analyticsHandler = (shortUrl) => {
        if (!analyticToggle) {
            setSelectedUrl(shortUrl);
        }
        setAnalyticToggle(!analyticToggle);
    }
        const deleteHandler = async () => {
            try {

                await api.delete(
                    `/api/urls/${id}`,
                    {
                        headers: {
                            Authorization:
                                "Bearer " + token,
                        },
                    }
                );

                refetch();
                setShowDeleteModal(false);

            } catch(error) {
                console.log(error);
            }
        };

        const updateAliasHandler = async () => {

            try {

                await api.put(
                    `/api/urls/${id}/alias`,
                    {
                        customAlias: newAlias
                    },
                    {
                        headers: {
                            Authorization:
                                "Bearer " + token
                        }
                    }
                );

                refetch();
                setShowUpdateModal(false);

            } catch(error) {

                console.log(error);

            }
        };

    const fetchMyShortUrl = async () => {
        setLoader(true);
        try {
             const { data } = await api.get(
                `/api/urls/analytics/${selectedUrl}?startDate=${startDate}&endDate=${endDate}`,
                {
                    headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                    },
                }
);
            setAnalyticsData(data);
            setSelectedUrl("");
            console.log(data);
            
        } catch (error) {
            navigate("/error");
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    useEffect(() => {
        if (selectedUrl) {
            fetchMyShortUrl();
        }
    }, [selectedUrl]);

        const isExpired =
        expiresAt &&
        new Date(expiresAt) < new Date();

  return (
    <div className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}>
    <div className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}>
      <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
        <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
            {/* <a href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
                target="_blank"
                className=" text-[17px]  font-montserrat font-[600] text-linkColor ">
                {subDomain + "/" + `${shortUrl}`}
            </a> */}

            <Link
              target='_'
              className='text-[17px]  font-montserrat font-[600] text-linkColor'
              to={import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}>
                  {subDomain + "/s/" + `${shortUrl}`}
            </Link>
            <FaExternalLinkAlt className="text-linkColor" />
            </div>

        <div className="flex items-center gap-1 ">
                    <h3 className=" text-slate-700 font-[400] text-[17px] ">
                    {originalUrl}
                    </h3>
                </div>

                {qrCodePath && (
                <div className="mt-3">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/${qrCodePath}`}
                        alt="QR Code"
                        className="w-24 h-24 border rounded-md"
                    />
                    <a
                        href={`${import.meta.env.VITE_BACKEND_URL}/${qrCodePath}`}
                        download
                        target="_blank"
                        className="text-xs text-blue-600 mt-1 block"
                    >
                        Download QR
                    </a>
                </div>
                )}
                {expiresAt && (
                <div className="flex items-center gap-3 mt-3">
                    <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                        isExpired
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                    >
                    {isExpired
                        ? "Expired"
                        : "Active"}
                    </span>
                </div>
                )}
                {expiresAt && (
                <p className="text-sm text-gray-500 mt-2">
                    Expires:
                    {" "}
                    {new Date(expiresAt)
                    .toLocaleDateString()}
                </p>
                )}
                <div className="flex items-center gap-8 pt-6 ">
            <div className="flex gap-1  items-center font-semibold  text-green-800">
              <span>
                <MdOutlineAdsClick className="text-[22px] me-1" />
              </span>
              <span className="text-[16px]">{clickCount}</span>
              <span className="text-[15px] ">
                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-lg text-slate-800">
              <span>
                <FaRegCalendarAlt />
              </span>
              <span className="text-[17px]">
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
            </div>
        </div>

            <div className="flex flex-col gap-3">

                <div className="flex gap-3">

                    {/* Copy Button */}
                    <CopyToClipboard
                        onCopy={() => setIsCopied(true)}
                        text={`${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}`}
                    >
                        <div className="flex cursor-pointer gap-1 items-center bg-btnColor py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white">
                            <button>
                                {isCopied ? "Copied" : "Copy"}
                            </button>
                            {isCopied
                                ? <LiaCheckSolid />
                                : <IoCopy />
                            }
                        </div>
                    </CopyToClipboard>

                    {/* Analytics */}
                    <div
                        onClick={() =>
                            analyticsHandler(shortUrl)
                        }
                        className="flex cursor-pointer gap-1 items-center bg-rose-700 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
                    >
                        <button>Analytics</button>
                        <MdAnalytics />
                    </div>

                </div>

                <div className="flex gap-3 justify-end">

                    {/* Future Update Button */}

                    <div
                        onClick={() =>
                            setShowUpdateModal(true)
                        }
                        className="flex cursor-pointer gap-1 items-center bg-blue-600 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
                    >
                        <button>Update</button>
                    </div>

                    {/* Delete Button */}

                    <div
                        onClick={() =>
                            setShowDeleteModal(true)
                        }
                        className="flex cursor-pointer gap-1 items-center bg-red-600 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
                    >
                        <button>Delete</button>
                    </div>

                </div>

            </div>
        </div>
    <React.Fragment>
        <div className={`${
            analyticToggle ? "flex" : "hidden"
          }  sm:mt-4 mt-5 py-4 border-t-2 w-full`}>
            {loader ? (
                <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
                    <div className="flex flex-col items-center gap-1">
                    <Hourglass
                        visible={true}
                        height="50"
                        width="50"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                        />
                        <p className='text-slate-700'>Please Wait...</p>
                    </div>
                </div>
                ) : ( 
                    <>{analyticsData.length === 0 && (
                        <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                            <h1 className=" text-slate-800 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                                No Data For This Time Period
                            </h1>
                            <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-[12px] text-slate-600 ">
                                Share your short link to view where your engagements are
                                coming from
                            </h3>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 mb-4">

                <div className="bg-slate-100 p-4 rounded">
                    <p className="text-gray-500">
                        Total Clicks
                    </p>

                    <p className="text-2xl font-bold">
                        {clickCount}
                    </p>
                </div>

                <div className="bg-slate-100 p-4 rounded">
                    <p className="text-gray-500">
                        Created
                    </p>

                    <p className="font-semibold">
                        {dayjs(createdDate).format(
                            "DD MMM YYYY"
                        )}
                    </p>
                </div>

                </div>
                        <Graph graphData={analyticsData} />
                    </>
                    )}
        </div>
    </React.Fragment>

                {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white rounded-xl p-6 w-[350px] shadow-xl">

                        <h2 className="text-lg font-semibold mb-3">
                            Delete URL?
                        </h2>

                        <p className="text-gray-600 mb-5">
                            This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3">

                            <button
                                onClick={() =>
                                    setShowDeleteModal(false)
                                }
                                className="px-4 py-2 rounded border"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={deleteHandler}
                                className="px-4 py-2 rounded bg-red-600 text-white"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>
            )}

                {showUpdateModal && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                        <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">

                            <h2 className="text-lg font-semibold mb-4">
                                Update Alias
                            </h2>

                            <input
                                type="text"
                                value={newAlias}
                                onChange={(e) =>
                                    setNewAlias(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded px-3 py-2 mb-5"
                            />

                            <div className="flex justify-end gap-3">

                                <button
                                    onClick={() =>
                                        setShowUpdateModal(false)
                                    }
                                    className="border px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={updateAliasHandler}
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Update
                                </button>

                            </div>

                        </div>

                    </div>

                )}
    </div>
  )
}

export default ShortenItem
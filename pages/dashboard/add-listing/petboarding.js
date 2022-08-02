import Link from "next/link";
import NavbarThree from "../../../components/_App/NavbarThree";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import ReactLoading from "react-loading";

const PetBoarding = () => {
    const [files, setFiles] = useState([]);
    const [businessId, setBusinessid] = useState("");
    const [categoriesProfile, setCategoryProfile] = useState("");
    const [businessPhotos, setBusinessPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(categoriesProfile);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs = files.map((file) => (
        <div key={file.name} className="drop-gallery-thumb">
            <img src={file.preview} />
        </div>
    ));

    useEffect(() => {
        if (typeof window != "undefined") {
            let user = JSON.parse(localStorage.getItem("user"));
            setCategoryProfile(user.category);
            setBusinessid(user._id);
            console.log("we are running client side");
            if (categoriesProfile != "") {
                getBusinessProfile(user._id);
            }
        } else {
            console.log("we are running server side");
        }
    }, [categoriesProfile]);

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const getBusinessProfile = async (id) => {
        try {
            console.log(categoriesProfile);
            const { data } = await axios.get(
                `${process.env.DOMAIN_NAME}/api/business/get-profile/${categoriesProfile}/${id}`
            );
            setBusinessPhotos(data.business.images);
        } catch (error) {
            console.log(error);
        }
    };

    const uploadBusinessPhotos = async (e) => {
        e.preventDefault();
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                setLoading(true)
                const formData = new FormData();
                formData.append(`file`, files[i]);
                console.log(files);
                try {
                    console.log(categoriesProfile);
                    const { data } = await axios.post(
                        `${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/allphotos`,
                        formData
                    );
                    console.log(data);
                    setBusinessPhotos(data.businessImages);
                } catch (error) {
                    console.log(error);
                }
            }
            setFiles([]);
            setLoading(false)
            toast.success("Photos Uploaded Successfully", {
                theme: "light",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("Please Upload a Image...!", {
                theme: "light",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <DashboardNavbar />
            <div className="main-content d-flex flex-column">
                <NavbarThree />
                <ToastContainer />

                <div className="add-listings-box">
                    <div {...getRootProps()} className="dropzone">
                        <h3>Boarding Gallery</h3>
                        {files.length > 0 ? (
                            <div className="gallery-flex">
                                {thumbs}
                                <input {...getInputProps()} />
                            </div>
                        ) : (
                            <div className="file-upload-box">
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        )}
                    </div>
                    <br />
                    <form onClick={uploadBusinessPhotos}>
                        <div className="add-listings-btn" style={{ float: "right" }}>
                            <button type="submit">Upload</button>
                        </div>
                    </form>
                </div>

                {/* react loading icons */}
                <div className="d-flex justify-content-center align-items-center">
                    {loading && (
                        <div className="loader">
                            <ReactLoading type="spokes" color="#febc1e" />
                        </div>
                    )}
                </div>


                <div className="gallery add-listings-btn">
                    {businessPhotos.map((photos) => {
                        let photo = `${process.env.DOMAIN_NAME}/api/business/get-photos/${photos}`;
                        return <img src={photo} alt="missing" className="gallery__img" />;
                    })}
                </div>

                <div className="flex-grow-1"></div>

                <div className="copyrights-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <p>
                                <i className="bx bx-copyright"></i>2020 <a href="#">Indice</a>.
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetBoarding;

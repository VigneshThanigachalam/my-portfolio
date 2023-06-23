import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { SkillCard } from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import {
    ArrowLeftCircle,
    ArrowLeftCircleFill,
    ArrowRightCircle,
} from "react-bootstrap-icons";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const skillList = [
        {
            name: "react",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "redux",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
            name: "node.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        },
        {
            name: "express",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
            name: "mongoDB",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "vsCode",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
            name: "html",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "css3",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "javascript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
    ];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="skill-bx wow zoomIn">
                                <h2 className="position-relative row justify-content-center">
                                    Skills
                                    <span className="position-absolute end-0 col-12 col-md-3 mt-5 mt-md-0">
                                        <ArrowLeftCircle
                                            size={50}
                                            className="px-2 swiper-button-prev"
                                        />
                                        <ArrowRightCircle
                                            size={50}
                                            className="px-2 swiper-button-next"
                                        />
                                    </span>
                                </h2>
                            </div>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                slidesPerGroup={4}
                                breakpoints={{
                                    400: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        slidesPerGroup: 2,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        slidesPerGroup: 3,
                                    },
                                    1000: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                        slidesPerGroup: 4,
                                    },
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                pagination={true}
                                modules={[Navigation, Pagination]}
                            >
                                {skillList.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <SkillCard
                                                image={item.img}
                                                name={item.name}
                                            ></SkillCard>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <img
                    className="background-image-left"
                    src={colorSharp}
                    alt="sharp"
                />
            </section>
        </>
    );
};

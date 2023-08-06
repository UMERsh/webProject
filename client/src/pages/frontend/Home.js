import React from 'react'
import './home.scss'
import order from "../../assets/cargo_3045670 (1).png"
import payment from "../../assets/payment.png"
import deliver from "../../assets/carousel2.png"
import love from "../../assets/love_284130.png"
// import { Slider } from 'antd'
import theData from "../../components/Data/pizza"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slider from 'react-slick'
// import { render } from '@testing-library/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HardCotton from "../../../src/assets/carousel3.png"
import t1 from "../../assets/carousel4.png"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
export default function Home() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="container-fluid " >
                <div className="row">
                    <div className="col-12 col-lg-6 ">
                        <div className="homebackground"  >

                        </div>
                    </div>

                    <div className="col-12 col-lg-6 bg-light">
                        <div className='banner-text d-flex justify-content-center mt-5 flex-column' >
                            <h1 style={{ marginTop: "100px", fontFamily: "Oswald ,sans-serif", fontSize: "50px", textTransform: "uppercase", color: "#1D2228" }}>Summer Stock<br></br> Clearance Sale</h1>
                            <h4 style={{ fontFamily: "Oswald ,sans-serif", fontSize: "26px", color: "#1D2228", fontWeight: "700" }}>Now Live</h4>
                            <p style={{ color: "#848486", fontSize: "16px", fontWeight: "400" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div><br></br>
                        <button className='button'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 my-3 '>
                <h5 style={{ color: "#ed4e53", fontSize: "18px", fontFamily: "Oswald ,sans-serif" }}>How we do it</h5>
                <h2 className="mb-3" style={{ color: "#1D2228", fontSize: "42px", fontFamily: "Oswald serif" }}>We Give You Suits In 4 Steps</h2>
                <span style={{ color: "#515151", fontSize: "16px", fontFamily: "Oswald ,sans-serif" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br></br>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            </div>
            <div>
                <div className="container">
                    <div className='d-flex' style={{ marginLeft: "80px" }}>
                        <div className="card align-items-center text-center " style={{ width: "18rem", marginTop: "50px", border: "none" }}>
                            <img src={order} className="card-img-top align-items-center " style={{ width: "90px" }} alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{ fontWeight: "bolder", fontStyle: "Fantasy" }}>Order</h3>
                                <span className="card-text text-center" style={{ color: "black" }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.               </span>

                            </div>
                        </div>
                        <div className="card align-items-center " style={{ width: "18rem", marginTop: "50px", border: "none" }}>
                            <img src={payment} className="card-img-top align-items-center " style={{ width: "90px" }} alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{ fontWeight: "bolder", fontStyle: "Fantasy" }}>Payment</h3>
                                <span className="card-text text-center" style={{ color: "black" }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, distinctio.                                </span>
                            </div>
                        </div>
                        <div className="card align-items-center " style={{ width: "18rem", marginTop: "50px", border: "none" }}>
                            <img src={deliver} className="card-img-top align-items-center " style={{ width: "90px" }} alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{ fontWeight: "bolder", fontStyle: "Fantasy" }}>Deliver</h3>
                                <span className="card-text text-center" style={{ color: "black" }}>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur hic exercitationem commodi!                                </span>
                            </div>
                        </div>
                        <div className="card align-items-center " style={{ width: "18rem", marginTop: "50px", border: "none" }}>
                            <img src={love} className="card-img-top align-items-center " style={{ width: "90px" }} alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{ fontWeight: "bolder", fontStyle: "Fantasy" }}>Enjoy</h3>
                                <span className="card-text text-center" style={{ color: "black" }}>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum? Ipsum possimus
                                </span>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                    </div>
                    <button className="button" style={{ marginLeft: "550px" }}>
                        Get in touch
                        <div className="hoverEffect">
                            <div>
                            </div>
                        </div></button>

                </div>

                <div className='container '>
                    <Slider {...settings}>

                        {
                            theData.map((item, i) => {
                                return <div key={i}>
                                    <div className='card p-3 card-hover' style={{ border: "none" }}>
                                        <div className='card-img text-center '>
                                            <img src={item.Image} className='img-fluid' alt="img" />
                                        </div>
                                        <div className='card-body text-center' style={{ backgroundColor: "#F9F9F9" }}>
                                            <div className='crd-title mb-2' style={{ fontWeight: "bold", fontSize: "25px", fontStyle: "italic" }}>{item.title}</div>
                                            <div className='card-text mb-4'>{item.Text}</div>
                                            <span style={{ borderRadius: "20px", fontWeight: "bold" }} className='card-price border px-3 py-2'>{item.price}<span>$</span></span>
                                            <span style={{ borderRadius: "20px" }} className='card-price border px-3 py-2 mx-1'><FavoriteBorderIcon /></span>
                                            <hr className='card-divider w-100 mx-auto mb-3' />
                                            <div className='row'>
                                                <div className='buttons d-flex justify-content-center align-items-center mb-3 text-center'>
                                                    <div className='col-12 clo-md-6 col-lg-6 d-flex text-center '>
                                                        <button className='button' style={{ background: "#ed4e53", color: "white" }}>
                                                            <span className='button-content'>Order<ShoppingCartIcon /></span>
                                                        </button>
                                                        <div className='col-12 clo-md-6 col-lg-6 text-center' text-center>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
                <br></br><br></br>
                <div className="container-fluid bg-light py-5 mt-5">

                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <img src={HardCotton} alt='img' style={{ width: "400pxpx" }} />
                            </div>
                            <div className="col-12 col-lg-6 mt-5 text-center">
                                <h5 style={{ color: "#ed4e53", fontSize: "18px" }}>Great Offer</h5>
                                <h2 style={{ color: "#1D2228", fontSize: "42px", fontFamily: "fantasy", fontWeight: "none" }}>Buy 1 Get 1 Free</h2><br></br>
                                <h2 style={{ color: "#1D2228", fontSize: "42px", fontFamily: "fantasy", fontWeight: "none" }}>Only for this piece</h2>
                                <span style={{ color: "#515151", fontSize: "16px", fontFamily: "Oswald ,sans-serif" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <br></br><br></br> <span style={{ color: "#515151", fontSize: "16px", fontFamily: "Oswald ,sans-serif" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                <button className='button mt-5'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid mt-3 hd ">
                <div className="row">
                    <div className="col">
                        <div className="card bg-light py-5 px-5" style={{ width: "600px", marginLeft: '190px' }}>
                            <h2 style={{ color: "#1D2228", fontSize: "40px", textAlign: 'start', fontFamily: 'fantasy', fontWeight: 'normal' }}>Join Us NewsLetter</h2>
                            <p style={{ color: "#515151", fontSize: "14px", textAlign: 'start' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <br></br>
                            <input type="email" className="form-control w-75 " id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />
                            <br></br>
                            <button className='button w-25 '>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



import React from 'react';
import './Home.css'
import Img1 from '../Components/imgs/z1.jpg'
import Img2 from '../Components/imgs/z2.jpg'
import Img6 from '../Components/imgs/z6.jpg'
import Logo from '../Components/imgs/logo.png'
import gifimg from './imgs/new.gif'
import SimpleSlider from './slider.js';
// import Mintbtn from './mintbtn.js'

export default function Home() {
  return (
    <div className=' Home' >


      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<NAVBAR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className='container-fluid herosection' >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <nav class="navbar navbar-expand-lg navbar-dark ">
                <a class="navbar-brand" href="#">
                  <img className='logo' src={Logo} alt=""></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  navbtnA" id="navbarNav">
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <a class=" nav-link navbtn mx-lg-3" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                      <a class=" nav-link navbtn mx-lg-3" href="#roadmap">ROADMAP</a>
                    </li>
                    <li class="nav-item">
                      <a class=" nav-link navbtn mx-lg-3" href="#team">TEAM</a>
                    </li>
                  </ul>
                  <span className='d-block mx-auto text-center'>
                    <a type="button" class="btn Sbtn mx-1 d-inline-block" href="https://discord.gg/YbbzBcqC"><i class="fab fa-discord"></i></a>
                    <a type="button" class="btn Sbtn mx-1 d-inline-block" href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
                  </span>
                </div>
              </nav>
              <SimpleSlider />
              <div className='row' id="about">
                <div className="col text-center">
                  <p className=" text-center textAll undead">4444 NFTs on the Ethereum blockchain</p><br />
                  <button type="button" className=" buybtn btn-lg btn btn-outline-primary">BUY ON OPENSEA</button>
                  {/* <Mintbtn /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container text-c enter textAll joinhorde' >
        <div className='row align-items-center py-5'>
          <div className='col-md-6'>
            <h2 className='pt-5'>Join the Dark Clouds</h2><br></br>
            <p>With your Dark Clouds token comes art, culture & community</p>
            <p>We are here for the love of art and the evolution of gamification, IP & NFT tech.</p>
            <p>Our efforts focus on innovating within the NFT space</p>
            <p>& empowering our holders in creative ways.</p>
          </div>
          <div className='col-md-6'>
            <img className='d-block gifimg' src={gifimg} />
          </div>
        </div>
      </div>


      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< < Road Map > >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <br /><br />
      <br /><br />


      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 className='pt-5 text-center RD'>Road Map</h2>

            <div class="main-timeline">
              <div class="timeline">
                <div class="timeline-icon"><span class="year">1</span>
                  <div class="vl"></div>

                </div>

                <div class="timeline-content">

                  <h3 class="title">Stage One</h3>

                  <p class="description">
                    Dark Clouds Token Minted on Ethereum Blockchain
                    Whitelist and OG Pre-mint. Followed by public mint!
                    Whitelist 3 Mints and OG 1
                  </p>

                </div>

              </div>

              <div class="timeline pt-5 mt-1">

                <div class="timeline-icon"><span class="year">2   <div class="vlb"></div>   </span>

                </div>
                <div class="timeline-content">
                  <h3 class="title">Stage Two</h3>
                  <p class="description">
                    Giveaway 10 NFTs These will include to influencers and big players in the NFT world. We will also be hosting Ethereum and general public giveaway
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-icon"><span class="year">3</span><div class="vlc"></div></div>
                <div class="timeline-content">
                  <h3 class="title">Stage Three</h3>
                  <p class="description">
                    Acquisition of Sandbox and Decetraland Plot Purchased NFTWorlds Plot; application submitted to be official builders and our team of architects is getting started asap Our plot will encompass the Dark Cloud themed arena that you will be able to participate and rent! Community members are going to get to participate in the build so they can learn how to build in the metaverse and potentially use this skill as a revenue stream in the future
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-icon"><span class="year">4</span></div>
                <div class="timeline-content">
                  <h3 class="title">Stage Four</h3>
                  <p class="description">
                    1/1 Artist Commisions for Top Holders
                    Get project on rarity tools
                    Get Verified on OpenSea
                    Utility to use in Sandbox and Decentraland
                    New updates for Dark Clouds Metaverse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="container pt-5" id="roadmap">
        <h1 className='textAll text-center' >Road Map</h1>
        <br /><br />
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">
              <h3>Stage 1</h3>
            </div>
            <div className="timeline-content">
              <div className="thumbs">
                <p className='text-left'>
                  Dark Clouds Token Minted on Ethereum Blockchain <br />
                  Whitelist and OG Pre-mint. Followed by public mint! <br />
                  Whitelist 3 Mints and OG 1
                </p>
              </div>

            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              <h3>Stage 2</h3>
            </div>
            <div class="timeline-content">
              <div class="thumbs">
                <p>
                  Giveaway 10 NFTs <br />
                  These will include to influencers and big players in the NFT world. We will also be hosting Ethereum and general public giveaways
                </p>
              </div>

            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              <h3>Stage 3</h3>
            </div>
            <div class="timeline-content">
              <div class="thumbs">
                <p>
                  Acquisition of Sandbox and Decetraland Plot <br />
                  Purchased NFTWorlds Plot; application submitted to be official builders and our team of architects is getting started asap Our plot will encompass the Dark Cloud themed arena that you will be able to participate and rent! Community members are going to get to participate in the build so they can learn how to build in the metaverse and potentially use this skill as a revenue stream in the future
                </p>
              </div>

            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              <h3>Stage 4</h3>
            </div>
            <div class="timeline-content">
              <div class="thumbs">
                <p>
                  1/1 Artist Commisions for Top Holders <br />
                  Get project on rarity tools <br />
                  Get Verified on OpenSea <br />
                  Utility to use in Sandbox and Decentraland <br />
                  New updates for Dark Clouds Metaverse <br />
                </p>
              </div>

            </div>
          </div>

        </div>
      </div> */}

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Team>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <br /><br />
      <div className='container' id="team" >
        <h1 className='textAll text-center' >Our Team</h1><br /><br />
        <div className='row'>
          <div className='col-md-4' >
            <img src={Img6} class="Teamimg mx-auto " alt="..."></img><br /><br />
            <large>Connor Dinnadge</large>
            <h5 className='textAll' > Smart Contract Developer</h5>
            <p><small>Outside of the Metaverse, Betty is Co Director of a Creative Production Agency based in Australia serving global clients.</small></p>
            <i class="fab fa-twitter ico"></i>
          </div>
          <div className='col-md-4' >
            <img src={Img1} class="Teamimg mx-auto " alt="..."></img><br /><br />
            <large>Cloud Limitless </large>
            <h5 className='textAll' >Developer </h5>
            <p><small>Outside of the Metaverse, Betty is Co Director of a Creative Production Agency based in Australia serving global clients.</small></p>
            <i class="fab fa-twitter ico"></i>
          </div>
          <div className='col-md-4' >
            <img src={Img2} class="Teamimg mx-auto " alt="..."></img><br /><br />
            <large>Bunny </large>
            <h5 className='textAll' >Marketing</h5>
            <p><small>Outside of the Metaverse, Betty is Co Director of a Creative Production Agency based in Australia serving global clients.</small></p>
            <i class="fab fa-twitter ico"></i>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <button type="button" class=" text-cente btn Lbtn mx-auto d-block">  View Contract</button>
          </div>
        </div>
      </div>
    </div>
  )
}

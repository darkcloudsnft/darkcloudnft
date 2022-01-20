import React from 'react';
import './Home.css'
import Img1 from '../Components/imgs/z1.jpg'
import Img2 from '../Components/imgs/z2.jpg'
import Img3 from '../Components/imgs/z3.jpg'
import Img4 from '../Components/imgs/z4.jpg'
import Img5 from '../Components/imgs/z5.jpg'
import Img6 from '../Components/imgs/z6.jpg'
import Logo from '../Components/imgs/logo.png'
import SimpleSlider from './slider.js';
// import Mintbtn from './mintbtn.js'

export default function Home() {
  return (
    <div className=' Home' >


      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<NAVBAR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className='container herosection' >
        <div className='row'>
          <div className='col-12'>
            <nav class="navbar navbar-expand-lg navbar-dark ">
              <a class="navbar-brand" href="#">
                <img className='logo' src={Logo}  alt=""></img>
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
                <p className=" text-center textAll undead">10,000 undead NFTs on the Ethereum blockchain</p><br />
                <button type="button" className=" buybtn btn-lg btn btn-outline-primary">BUY ON OPENSEA</button>
                {/* <Mintbtn /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container text-center textAll joinhorde' >
        <h2>JOIN THE HORDE</h2><br></br>
        <p>With your DeadFellaz token comes art, culture & community</p>
        <p>We are here for the love of art and the evolution of gamification, IP & NFT tech.</p>
        <p>Our efforts focus on innovating within the NFT space</p>
        <p>& empowering our holders in creative ways.</p>
      </div>


      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Timeline> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <br /><br />
      <br /><br />


      <div className="container" id="roadmap">
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
                  4444 Dark Clouds Minted on Ethereum Blockchain <br />
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
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Team>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <br /><br />
      <div className='container' id="team" >
        <h1 className='textAll text-center' >Our Team</h1><br /><br />
        <div className='row'>
          <div className='col-md-4' >
            <img src={Img6} class="Teamimg mx-auto " alt="..."></img><br/><br/>
            <large>Betty</large>
            <h5 className='textAll' >Concept Creation</h5>
            <p><small>Outside of the Metaverse, Betty is Co Director of a Creative Production Agency based in Australia serving global clients.</small></p>
            <i class="fab fa-twitter ico"></i>
          </div>
          <div className='col-md-4' >
            <img src={Img1} class="Teamimg mx-auto " alt="..."></img><br/><br/>
            <large>Betty</large>
            <h5 className='textAll' >Concept Creation</h5>
            <p><small>Outside of the Metaverse, Betty is Co Director of a Creative Production Agency based in Australia serving global clients.</small></p>
            <i class="fab fa-twitter ico"></i>
          </div>
          <div className='col-md-4' >
            <img src={Img2} class="Teamimg mx-auto " alt="..."></img><br/><br/>
            <large>Betty</large>
            <h5 className='textAll' >Concept Creation</h5>
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

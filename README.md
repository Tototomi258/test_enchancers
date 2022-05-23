<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Test Enchancers</h3>

  <p align="center">
    ExpressJS server to gather weather info and businesses in selected cities.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Get a free OpenWeather API Key at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Get a free Yelp API key at [https://www.yelp.com/developers/documentation/v3](https://www.yelp.com/developers/documentation/v3)
3. Clone the repo
   ```sh
   git clone https://github.com/Tototomi258/test_enchancers.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your OpenWeather API in a `.env` file
   ```env
   OW_KEY=ENTER YOUR API
   ```
6. Enter your Yelp API in a `.env` file
   ```env
   YELP_KEY=ENTER YOUR API
   ```
7. Enter the desired port to use for the server in a `.env` file
   ```env
   PORT=ENTER YOUR PORT
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Call the API using a servizce like `Postman` by calling the following URL

```
http://localhost:3000/weatherReport?cities={ENTER YOUR CITIES SEPARATED BY COMMA}
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tomas Nicolorich - [Linkedin](https://linkedin.com/in/tomas-nicolorich) - tomasnicolorich@gmail.com

Project Link: [https://github.com/Tototomi258/test_enchancers](https://github.com/Tototomi258/test_enchancers)

<p align="right">(<a href="#top">back to top</a>)</p>

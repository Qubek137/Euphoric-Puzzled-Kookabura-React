import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './mainik.css'

const Mainik = (props) => {
  return (
    <div className="mainik-container1">
      <Helmet>
        <title>Euphoric Puzzled Kookabura</title>
        <meta property="og:title" content="Euphoric Puzzled Kookabura" />
      </Helmet>
      <div className="mainik-container2">
        <div className="mainik-container3">
          <Script
            html={`<style>
        @keyframes pulse {0%,100% {opacity: 1;}
50% {opacity: 0.3;}}@keyframes slide-hint {0%,100% {transform: translateX(0);}
50% {transform: translateX(-5px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="mainik-container4">
        <div className="mainik-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="mainik-container6">
        <div className="mainik-container7">
          <Script
            html={`<script defer data-name="weather-dashboard">
(function(){
  // Real-time weather data updates
  function updateWeatherData() {
    const realtimeIndicators = document.querySelectorAll(".realtime-indicator")
    realtimeIndicators.forEach((indicator) => {
      indicator.style.animation = "none"
      setTimeout(() => {
        indicator.style.animation = "pulse 2s infinite"
      }, 10)
    })
  }

  // ESP32 control interactions
  function initializeControls() {
    const refreshBtn = document.getElementById("refresh-btn")
    const systemRestartBtn = document.getElementById("system-restart")
    const controlBtns = document.querySelectorAll(".control-btn")

    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        this.style.transform = "rotate(360deg)"
        this.style.transition = "transform 1s ease-in-out"

        setTimeout(() => {
          this.style.transform = "rotate(0deg)"
          updateWeatherData()
        }, 1000)
      })
    }

    if (systemRestartBtn) {
      systemRestartBtn.addEventListener("click", function () {
        this.textContent = "Restarting..."
        this.disabled = true

        setTimeout(() => {
          this.textContent = "Restart"
          this.disabled = false
        }, 3000)
      })
    }

    // Add glow effect to control buttons on interaction
    controlBtns.forEach((btn) => {
      btn.addEventListener("mousedown", function () {
        this.style.boxShadow =
          "0 0 20px color-mix(in srgb, var(--color-accent) 50%, transparent)"
        this.style.transform = "scale(0.98)"
      })

      btn.addEventListener("mouseup", function () {
        this.style.boxShadow = ""
        this.style.transform = "scale(1)"
      })

      btn.addEventListener("mouseleave", function () {
        this.style.boxShadow = ""
        this.style.transform = "scale(1)"
      })
    })
  }

  // Temperature control functionality
  function initializeTempControls() {
    const tempDownBtn = document.querySelector(".temp-down")
    const tempUpBtn = document.querySelector(".temp-up")
    let currentTemp = 22

    if (tempDownBtn) {
      tempDownBtn.addEventListener("click", function () {
        if (currentTemp > 16) {
          currentTemp--
          updateTempDisplay()
        }
      })
    }

    if (tempUpBtn) {
      tempUpBtn.addEventListener("click", function () {
        if (currentTemp < 28) {
          currentTemp++
          updateTempDisplay()
        }
      })
    }

    function updateTempDisplay() {
      const tempDisplay = document.querySelector(
        ".status-indicator.online span"
      )
      if (tempDisplay && tempDisplay.textContent.includes("°C")) {
        tempDisplay.textContent = currentTemp + "°C"
      }
    }
  }

  // Weather card hover effects with enhanced glow
  function initializeCardEffects() {
    const cards = document.querySelectorAll(
      ".main-weather-card, .sensor-data-card, .quick-actions-card, .forecast-preview-card, .forecast-card, .control-card"
    )

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.borderColor = "var(--color-primary-variant-10)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.borderColor = "var(--color-outline)"
      })
    })
  }

  // Simulate real-time data updates
  function startDataUpdates() {
    setInterval(() => {
      updateWeatherData()

      // Randomly update sensor values for demo
      const sensorValues = document.querySelectorAll(".sensor-value")
      sensorValues.forEach((value) => {
        if (value.textContent.includes("°C")) {
          const temp = parseInt(value.textContent)
          const variation = Math.random() * 2 - 1 // ±1°C variation
          const newTemp = Math.round((temp + variation) * 10) / 10
          value.textContent = newTemp + "°C"
        }
      })
    }, 30000) // Update every 30 seconds
  }

  // Swipe gesture hint animation
  function initializeSwipeHint() {
    const swipeHint = document.querySelector(".swipe-hint")
    if (swipeHint) {
      setInterval(() => {
        swipeHint.style.animation = "none"
        setTimeout(() => {
          swipeHint.style.animation = "slide-hint 3s infinite"
        }, 100)
      }, 10000) // Repeat every 10 seconds
    }
  }

  // Touch-friendly enhancements for mobile
  function initializeTouchEnhancements() {
    const touchElements = document.querySelectorAll(
      ".action-btn, .control-btn, .btn"
    )

    touchElements.forEach((element) => {
      element.addEventListener("touchstart", function () {
        this.style.transform = "scale(0.95)"
      })

      element.addEventListener("touchend", function () {
        this.style.transform = "scale(1)"
      })
    })
  }

  // Initialize all functionality
  document.addEventListener("DOMContentLoaded", function () {
    initializeControls()
    initializeTempControls()
    initializeCardEffects()
    startDataUpdates()
    initializeSwipeHint()
    initializeTouchEnhancements()
  })

  // Landscape orientation optimization
  function handleOrientationChange() {
    const isLandscape = window.innerHeight < window.innerWidth
    const body = document.body

    if (isLandscape) {
      body.classList.add("landscape-mode")
    } else {
      body.classList.remove("landscape-mode")
    }
  }

  window.addEventListener("orientationchange", handleOrientationChange)
  window.addEventListener("resize", handleOrientationChange)

  // Initial check
  handleOrientationChange()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="current-weather" className="current-weather">
        <div className="weather-grid">
          <div className="main-weather-card">
            <div className="weather-header">
              <h2 className="section-title">Aktualnie </h2>
              <div className="mainik-weather-status weather-status"></div>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="weather-icon"
              >
                <path
                  d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="temp-main">22°C</span>
            </div>
            <span>Pochmurno</span>
            <div className="mainik-weather-condition weather-condition"></div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="detail-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
                <path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
              </g>
            </svg>
            <span>Wilgotność: 58%          </span>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="detail-icon"
            >
              <path
                d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span className="mainik-text12">Wiatr: 12 km/h </span>
            <div className="weather-details">
              <div className="mainik-detail-item detail-item"></div>
            </div>
          </div>
          <div className="sensor-data-card">
            <div className="card-header">
              <h3>Czujniki</h3>
              <div className="realtime-indicator"></div>
            </div>
            <div className="sensor-grid">
              <div className="sensor-item">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="sensor-icon"
                >
                  <path
                    d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="sensor-data">
                  <div className="sensor-label">
                    <span>Odczuwalne</span>
                  </div>
                  <div className="sensor-value">
                    <span>21°C</span>
                  </div>
                </div>
              </div>
              <div className="sensor-item">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="sensor-icon"
                >
                  <path
                    d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="sensor-data">
                  <div className="sensor-label">
                    <span>Ciśnienie</span>
                  </div>
                  <div className="sensor-value">
                    <span>1016 hPa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="forecast-options1"></div>
      <div className="forecast-container1">
        <div className="forecast-header1">
          <h2 className="section-title">Prognoza godzinowa</h2>
        </div>
        <div className="forecast-scroll">
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>00:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>14°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>01:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>13°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>02:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>13°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>03:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>12°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>04:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>12°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>05:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="forecast-temp1">
              <span>12°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>06:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>13°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>07:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>15°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>08:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>17°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>09:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>19°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>10:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>21°C</span>
            </div>
          </div>
          <div className="forecast-card1">
            <div className="forecast-time1">
              <span>11:00</span>
            </div>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="forecast-icon1"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle r="4" cx="12" cy="12"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </g>
            </svg>
            <div className="forecast-temp1">
              <span>23°C</span>
            </div>
          </div>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="mainik-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mainik-icon41"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="mainik-text42">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Mainik

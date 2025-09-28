import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './weather.css'

const Weather = (props) => {
  return (
    <div className="weather-container1">
      <Helmet>
        <title>Weather - Euphoric Puzzled Kookabura</title>
        <meta
          property="og:title"
          content="Weather - Euphoric Puzzled Kookabura"
        />
      </Helmet>
      <div className="weather-container2">
        <div className="weather-container3">
          <Script
            html={`<style>
        @keyframes pulse {0%,100% {opacity: 1;}
50% {opacity: 0.3;}}@keyframes slide-hint {0%,100% {transform: translateX(0);}
50% {transform: translateX(-5px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="weather-container4">
        <div className="weather-container5">
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
      <div className="weather-container6">
        <div className="weather-container7">
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
      <section id="esp32-controls" className="esp32-controls1">
        <div className="controls-container1">
          <div className="controls-header1">
            <h2 className="section-title">ESP32 Quick Controls</h2>
          </div>
          <div className="controls-grid1">
            <div className="control-card1 system-control">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
                >
                  <path
                    d="M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h3>System</h3>
                <div className="status-indicator1 online">
                  <div className="status-dot1"></div>
                  <span>Online</span>
                </div>
              </div>
              <div className="control-actions1">
                <button
                  id="system-restart"
                  className="btn-primary btn control-btn"
                >
                  {' '}
                  Restart
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button className="btn-secondary btn control-btn">
                  Tryb awaryjny
                </button>
              </div>
              <div className="control-status1">
                <span>Połączenie: WiFi • Napięcie: 3.3V</span>
              </div>
            </div>
            <div className="lighting-control control-card1">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h3>Oświetlenie</h3>
                <div className="status-indicator1">
                  <div className="status-dot1"></div>
                  <span>Offline</span>
                </div>
              </div>
              <div className="control-actions1">
                <button className="btn control-btn btn-accent">Dzienny</button>
                <button className="btn-secondary btn control-btn">Nocny</button>
                <button className="btn-outline btn control-btn">
                  Ambience
                </button>
              </div>
              <div className="control-status1">
                <span>Ostatnia aktywność: 2 min temu</span>
              </div>
            </div>
            <div className="security-control control-card1">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h3>Bezpieczeństwo</h3>
                <div className="status-indicator1 armed">
                  <div className="status-dot1"></div>
                  <span>Uzbrojony</span>
                </div>
              </div>
              <div className="control-actions1">
                <button className="btn-primary btn control-btn">Rozbraj</button>
                <button className="btn control-btn btn-accent">
                  Alarm testowy
                </button>
              </div>
              <div className="control-status1">
                <span>Czujniki: 4/4 aktywne</span>
              </div>
            </div>
            <div className="hvac-control control-card1">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
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
                <h3>HVAC</h3>
                <div className="status-indicator1 online">
                  <div className="status-dot1"></div>
                  <span>21°C</span>
                </div>
              </div>
              <div className="control-actions1">
                <button className="btn-secondary btn control-btn temp-down">
                  -1°C
                </button>
                <button className="btn control-btn btn-accent">
                  Oszczędzanie
                </button>
                <button className="btn-secondary btn control-btn temp-up">
                  +1°C
                </button>
              </div>
              <div className="control-status1">
                <span>Tryb: Auto • Docelowa: 22°C</span>
              </div>
            </div>
            <div className="ota-control control-card1">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10l5 5l5-5"></path>
                  </g>
                </svg>
                <h3>Aktualizacja OTA</h3>
                <div className="status-indicator1">
                  <div className="status-dot1"></div>
                </div>
              </div>
              <div className="control-actions1">
                <button className="btn-outline btn control-btn">Sprawdź</button>
                <button className="btn-primary btn control-btn">
                  Aktualizuj
                </button>
              </div>
              <div className="control-status1">
                <span>Ostatnia aktualizacja: 5 dni temu</span>
              </div>
            </div>
            <div className="settings-control control-card1">
              <div className="control-header1">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="control-icon1"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <h3>Personalizacja</h3>
              </div>
              <div className="control-actions1">
                <button className="btn-primary btn control-btn">
                  Konfiguruj panel
                </button>
              </div>
              <div className="control-status1">
                <span>Dostosuj kolejność i etykiety przycisków</span>
              </div>
            </div>
          </div>
          <div className="controls-footer1">
            <div className="weather-security-notice security-notice1"></div>
          </div>
        </div>
      </section>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="weather-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="weather-icon20"
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
          <span className="weather-text26">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Weather

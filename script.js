class WeatherInfo extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 20px;
            font-family: 'Montserrat', sans-serif;
            --bg-color: rgb(128, 125, 125);
            --text-color:  color: rgb(205, 205, 205);
            --font-size: 18px;
          }
  
          .weather-container {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-size: var(--font-size);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }
  
          /* Добавьте другие стили и структуру, отображающую информацию о погоде */
        </style>
        <div class="weather-container">
          <h2>Погода сейчас</h2>
          <p>Loading...</p>
        </div>
      `;
    }
  
    connectedCallback() {
      const weatherData = {
        temperature: '25°C',
        condition: 'Солнечно'
      };
      setTimeout(() => {
        this.shadowRoot.querySelector('.weather-container').innerHTML = `
          <h2>Погода сейчас</h2>
          <p>Температура: 25°C</p>
          <p>Состояние: Солнечно</p>
          <!-- Добавьте другие данные о погоде -->
        `;
      }, 2000);
    }
  }
  
  customElements.define('weather-info', WeatherInfo);
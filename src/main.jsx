import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function applyScaleClass() {
  const dpr = window.devicePixelRatio || 1;
  const widthRatio = window.innerWidth ? (screen.width / window.innerWidth) : dpr;
  const isScale125 = dpr >= 1.25 || widthRatio >= 1.25;

  document.body.classList.toggle('scale-125', isScale125);
  document.body.classList.toggle('scale-100', !isScale125);
}

applyScaleClass();

let resizeTimer;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(applyScaleClass, 150);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

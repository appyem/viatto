import React, { useState } from 'react';

// Pantalla 1: Bienvenida
const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/BIENVENIDA.JPEG"
          alt="Pantalla de bienvenida"
          className="w-full h-auto max-w-full rounded-xl"
        />
        <button
          onClick={onNext}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Descubre
        </button>
      </div>
    </div>
  );
};

// Pantalla 2: Mapa de Colombia con áreas táctiles
const ColombiaScreen = ({ onRegionSelect }) => {
  const regions = {
    antioquia: { top: 38.4, left: 31.5, width: 8, height: 4 },
    caldas: { top: 43.7, left: 34.4, width: 8, height: 4 },
    risaralda: { top: 44.6, left: 26.2, width: 8, height: 4 },
    quindio: { top: 48.8, left: 26.7, width: 8, height: 4 },
    tolima: { top: 51.0, left: 34.5, width: 8, height: 4 }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/COLOMBIA.JPEG"
          alt="Mapa de Colombia"
          className="w-full h-auto max-w-full rounded-xl"
        />
        {Object.entries(regions).map(([region, config]) => (
          <button
            key={region}
            onClick={() => onRegionSelect(region)}
            className="absolute bg-transparent border-0 cursor-pointer"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              width: `${config.width}%`,
              height: `${config.height}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`Seleccionar ${region}`}
          />
        ))}
      </div>
    </div>
  );
};

// Pantalla de Antioquia
const AntioquiaScreen = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/ANTIOQUIA.JPEG"
          alt="Mapa de Antioquia"
          className="w-full h-auto max-w-full rounded-xl"
        />
        <button
          onClick={onBack}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Regreso
        </button>
      </div>
    </div>
  );
};

// Pantalla de Caldas con municipios
const CaldasScreen = ({ onMunicipalitySelect, onBack }) => {
  const municipalities = {
    palestina: { top: 59.6, left: 23.5, width: 5, height: 3 },
    manizales: { top: 57.9, left: 34.2, width: 5, height: 3 },
    villamaria: { top: 62.6, left: 39.2, width: 5, height: 3 }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/CALDAS.JPEG"
          alt="Mapa de Caldas"
          className="w-full h-auto max-w-full rounded-xl"
        />
        {Object.entries(municipalities).map(([municipality, config]) => (
          <button
            key={municipality}
            onClick={() => onMunicipalitySelect(municipality)}
            className="absolute bg-transparent border-0 cursor-pointer"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              width: `${config.width}%`,
              height: `${config.height}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`Seleccionar ${municipality}`}
          />
        ))}
        <button
          onClick={onBack}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Regreso
        </button>
      </div>
    </div>
  );
};

// Pantalla de Risaralda con municipios
const RisaraldaScreen = ({ onMunicipalitySelect, onBack }) => {
  const municipalities = {
    pereira: { top: 63.9, left: 46.6, width: 5, height: 3 },
    dosquebradas: { top: 63.0, left: 63.0, width: 5, height: 3 },
    santarosadecabal: { top: 65.7, left: 78.0, width: 5, height: 3 }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/risaralda.jpeg"
          alt="Mapa de Risaralda"
          className="w-full h-auto max-w-full rounded-xl"
        />
        {Object.entries(municipalities).map(([municipality, config]) => (
          <button
            key={municipality}
            onClick={() => onMunicipalitySelect(municipality)}
            className="absolute bg-transparent border-0 cursor-pointer"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              width: `${config.width}%`,
              height: `${config.height}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`Seleccionar ${municipality}`}
          />
        ))}
        <button
          onClick={onBack}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Regreso
        </button>
      </div>
    </div>
  );
};

// Pantalla de Quindío con municipios
const QuindioScreen = ({ onMunicipalitySelect, onBack }) => {
  const municipalities = {
    quimbaya: { top: 28.3, left: 20.6, width: 5, height: 3 },
    filandia: { top: 20.1, left: 45.2, width: 5, height: 3 },
    circasia: { top: 29.8, left: 41.2, width: 5, height: 3 },
    salento: { top: 28.3, left: 67.1, width: 5, height: 3 },
    armenia: { top: 37.8, left: 32.4, width: 5, height: 3 }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/quindio.jpeg"
          alt="Mapa de Quindío"
          className="w-full h-auto max-w-full rounded-xl"
        />
        {Object.entries(municipalities).map(([municipality, config]) => (
          <button
            key={municipality}
            onClick={() => onMunicipalitySelect(municipality)}
            className="absolute bg-transparent border-0 cursor-pointer"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              width: `${config.width}%`,
              height: `${config.height}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`Seleccionar ${municipality}`}
          />
        ))}
        <button
          onClick={onBack}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Regreso
        </button>
      </div>
    </div>
  );
};

// Pantalla de Tolima con municipios
const TolimaScreen = ({ onMunicipalitySelect, onBack }) => {
  const municipalities = {
    murillo: { top: 22.2, left: 50.1, width: 5, height: 3 },
    santaisabel: { top: 25.5, left: 48.6, width: 5, height: 3 }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://github.com/appyem/imagenes-viatto/raw/main/tolima.jpeg"
          alt="Mapa de Tolima"
          className="w-full h-auto max-w-full rounded-xl"
        />
        {Object.entries(municipalities).map(([municipality, config]) => (
          <button
            key={municipality}
            onClick={() => onMunicipalitySelect(municipality)}
            className="absolute bg-transparent border-0 cursor-pointer"
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              width: `${config.width}%`,
              height: `${config.height}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`Seleccionar ${municipality}`}
          />
        ))}
        <button
          onClick={onBack}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-base shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          Regreso
        </button>
      </div>
    </div>
  );
};

// App principal con historial de navegación completo
export default function App() {
  const [screenHistory, setScreenHistory] = useState(['welcome']);

  const currentScreen = screenHistory[screenHistory.length - 1];

  const goToScreen = (screen) => {
    setScreenHistory(prev => [...prev, screen]);
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      setScreenHistory(prev => prev.slice(0, -1));
    }
  };

  // Renderizar la pantalla actual
  switch (currentScreen) {
    case 'welcome':
      return <WelcomeScreen onNext={() => goToScreen('colombia')} />;
    case 'colombia':
      return <ColombiaScreen onRegionSelect={goToScreen} />;
    case 'antioquia':
      return <AntioquiaScreen onBack={goBack} />;
    case 'caldas':
      return <CaldasScreen onMunicipalitySelect={goToScreen} onBack={goBack} />;
    case 'risaralda':
      return <RisaraldaScreen onMunicipalitySelect={goToScreen} onBack={goBack} />;
    case 'quindio':
      return <QuindioScreen onMunicipalitySelect={goToScreen} onBack={goBack} />;
    case 'tolima':
      return <TolimaScreen onMunicipalitySelect={goToScreen} onBack={goBack} />;
    default:
      // Pantallas de municipios (aún no implementadas, mostrar mensaje temporal)
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 overflow-hidden">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Pantalla de {currentScreen}</h2>
            <p className="text-gray-600 mb-6">Esta pantalla se implementará cuando proporciones las imágenes del municipio.</p>
            <button
              onClick={goBack}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base"
            >
              Regreso
            </button>
          </div>
        </div>
      );
  }
}
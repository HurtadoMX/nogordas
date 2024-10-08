import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

// Importar las imágenes y los sonidos
import image1 from './nogordas.jpg';
import image2 from './chuerkmamado.png';
import audio1 from './oyegelda.mp3';
import audio2 from './sinotequiere.mp3';

Modal.setAppElement('#root'); // Evitar advertencias de accesibilidad

function App() {
  const [peso, setPeso] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peso >= 80) {
      setImageSrc(image1); // Usar la imagen importada
      setAudioSrc(audio1); // Usar el sonido importado
    } else {
      setImageSrc(image2); // Usar la otra imagen importada
      setAudioSrc(audio2); // Usar el otro sonido importado
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPeso('');
  };

  return (
    <div className="App">
      <h1>Ingresa tu peso en kg</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Escribe tu peso en kg"
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Resultado"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>X</button>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3 }}
          src={imageSrc}
          alt="Resultado"
          className="image-fullscreen"
        />
        <audio src={audioSrc} autoPlay loop />
      </Modal>

      {/* Estilos básicos */}
      <style jsx="true">{`
        .App {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          margin: 10px 0;
          padding: 10px;
          font-size: 16px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.8);
        }
        .image-fullscreen {
          width: 100%;
          max-width: 500px;
          max-height: 500px;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.8);
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default App;

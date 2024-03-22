import despejadoBg from '@assets/despejado.jpeg';

const SplashScreen = () => {
  return (
    <div
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${despejadoBg.src})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 10,
      }}
    >
      <p style={{ fontSize: '2.8rem' }}>Cargando...</p>
    </div>
  );
};

export default SplashScreen;

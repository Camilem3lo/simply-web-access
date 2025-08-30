const SkipLinks = () => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      <a href="#navigation" className="skip-to-content" style={{ left: '140px' }}>
        Pular para navegação
      </a>
    </>
  );
};

export default SkipLinks;
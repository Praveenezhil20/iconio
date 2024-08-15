import React from 'react';

function DemoSection() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Pellentesque suscipit<br></br> fringilla libero eu.</h1>
      <button style={styles.button}>Get a Demo →</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width:'160px'
  },
};

export default DemoSection;

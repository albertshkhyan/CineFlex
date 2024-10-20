import React from 'react';

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Romance' },
  { id: 6, name: 'Sci-Fi' },
];

const GenresPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Genres</h1>
      <div style={styles.grid}>
        {genres.map((genre) => (
          <div key={genre.id} style={styles.card}>
            <h3>{genre.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '15px',
    textAlign: 'center' as const,
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
};

export default GenresPage;

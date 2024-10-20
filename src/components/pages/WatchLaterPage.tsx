import React from 'react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

const watchLaterVideos: Video[] = [
  {
    id: 1,
    title: 'Learning React Basics',
    thumbnail: '/images/react-thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Building a Simple App',
    thumbnail: '/images/simple-app.jpg',
  },
  {
    id: 3,
    title: 'Understanding Redux',
    thumbnail: '/images/redux-thumbnail.jpg',
  },
];

const WatchLaterPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Watch Later</h1>
      <div style={styles.videoList}>
        {watchLaterVideos.map((video) => (
          <div key={video.id} style={styles.videoCard}>
            <img
              src={video.thumbnail}
              alt={video.title}
              style={styles.thumbnail}
            />
            <h3 style={styles.title}>{video.title}</h3>
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
  videoList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '20px',
  },
  videoCard: {
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '15px',
    textAlign: 'center' as const,
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  thumbnail: {
    width: '100%',
    height: '150px',
    objectFit: 'cover' as const,
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.2rem',
  },
};

export default WatchLaterPage;

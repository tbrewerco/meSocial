import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useThrowAsyncError from '../hooks/useThrowAsyncError.js';

import { getPins, searchPins } from '../services/pinService.js';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchPins = async () => {
      try {
        setLoading(true);
        const data = categoryId ? await searchPins({ category: categoryId }) : await getPins();
        setPins(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch pins:', error);
      }
    };

    fetchPins();
  }, [categoryId]);


  if (loading) return <Spinner message='Working on it' />

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed;
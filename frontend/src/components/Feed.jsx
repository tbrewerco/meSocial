import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {

    if (categoryId) {
      setLoading(true)
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false)
        })
    } else {
      setLoading(true)
      const query = feedQuery;
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [categoryId]);

  if (loading) return <Spinner message='Working on it' />

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed;
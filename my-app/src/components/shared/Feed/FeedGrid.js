import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Skeleton, Center, Box } from '@chakra-ui/react';
import { Preview } from './Preview';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FeedGrid = ({ dreams, loading }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 480: 2, 560: 3, 821: 4, 992: 4 }}
    >
      <Masonry gutter="16x">
        {loading &&
          [...Array(50)].map((i, index) => (<Skeleton
              margin=".25em"
              borderRadius="lg"
              minHeight="100px"
              key={index}
            />)
          )}
        {!loading &&
          dreams.map(({ uuid, thumbnails }) => (
            <Skeleton
              margin=".25em"
              borderRadius="lg"
              minHeight="50px"
              min-width="360px"
              isLoaded={!loading}
              key={uuid}
            >
              <Center>
                <Preview thumbnails={thumbnails} key={uuid} uuid={uuid} />
              </Center>
            </Skeleton>
          ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default FeedGrid;

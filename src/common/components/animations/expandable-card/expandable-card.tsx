'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '@/common/constants/images';

import { Snackbar, Box } from '../../material-ui/material-ui';
import { Image } from '../../next/next';

type Properties = {
  imgSrc: string;
  content: React.ReactNode;
  initialContent: React.ReactNode;
};

const ExpandableCard: React.FC<Properties> = ({
  content,
  initialContent,
  imgSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <AnimatePresence>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={() => setOpen(false)}
        message="To get back, click the window anywhere"
        key="pop-up-info-message"
      />
      {isOpen ? (
        <motion.div
          layout
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999,
            overflowY: 'auto',
            padding: '2rem',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          {/* <motion.div layout> */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: 'background.default',
              boxShadow: '1px 1px 11px 0px rgba(0,0,0,0.75)',
              borderRadius: '20px',
              overflow: 'hidden',
              '& img#banner': {
                width: '100%',
                height: '40%',
                objectFit: 'cover',
                objectPosition: 'center',
              },
              '& img#lemon-logo': {
                position: 'absolute',
                bottom: 0,
                right: 0,
                margin: '2rem',
              },
            }}
          >
            <Image
              id="banner"
              alt="banner"
              src={imgSrc}
              width={1500}
              height={300}
            />
            <Image
              id="lemon-logo"
              alt="lemon-icon"
              src={images.lemon}
              width={50}
              height={50}
            />
            {content}
          </Box>
        </motion.div>
      ) : (
        <motion.div
          layout
          onClick={() => setIsOpen(true)}
          style={{
            padding: '1rem',
            boxShadow: 'none',
            cursor: 'pointer',
          }}
        >
          {initialContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ExpandableCard };

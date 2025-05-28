'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            background: '#fff',
            zIndex: 999,
            overflowY: 'auto',
            padding: '2rem',
            boxSizing: 'border-box',
          }}
        >
          <motion.div layout>
            <Box
              sx={{
                width: '100%',
                '& img': {
                  width: '100%',
                  objectFit: 'cover',
                },
              }}
            >
              <Image alt="banner" src={imgSrc} width={1500} height={300} />
            </Box>
          </motion.div>
          <motion.div layout style={{ marginTop: '2rem' }}>
            {content}
          </motion.div>
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

import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './Header.scss';

const pages = [
  { id: 1, name: '대회일정', link: 'schedule' },
  { id: 2, name: '용병모집', link: 'recruitment' },
  { id: 3, name: '아카데미', link: 'academy' },
];

const DenseAppBar = () => {
  return (
    <header className='toolbar__container'>
      <div className='title__section'>
        <Link to='/'>
          <h4> 풋살몬의 비밀창고</h4>
        </Link>
      </div>
      <Box sx={{ display: 'flex' }}>
        {pages.map((page) => (
          <Link key={page.id} to={page.link}>
            <Button variant='text' size='small' sx={{ my: 2, color: 'black', display: 'block', margin: 0 }}>
              {page.name}
            </Button>
          </Link>
        ))}
      </Box>
    </header>
  );
};

export default DenseAppBar;

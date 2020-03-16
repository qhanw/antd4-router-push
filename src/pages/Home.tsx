import React from 'react';
import { router, Link } from 'umi';

export default () => (
  <div>
    Home 点击跳转到：<a onClick={() => router.push('/about')}>About</a>
    Link跳转到： <Link to="/about">About</Link>
  </div>
);

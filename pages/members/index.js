import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Members = () => {
    return (
        <div className='text-center text-8xl mt-40'>members only</div>
    );
};

export default Members;

export const getServerSideProps = withPageAuthRequired ();

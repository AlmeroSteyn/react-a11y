import React from 'react';

const LazyBlock = () => (
    <section className="well">
        <h2>Lazy loaded block</h2>
        <span aria-hiden="true">I am hidden to screen readers.</span>
    </section>
);

export default LazyBlock;
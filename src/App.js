/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React from 'react'
import { CardCart, Container } from './components'

function App() {
    const products = require('./products.json')

    return (
        <Container>
            {products.map((product, i) => {
                return <CardCart key={i} product={product} />
            })}
        </Container>
    )
}

export default App

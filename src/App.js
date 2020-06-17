/* eslint-disable global-require */
import React from 'react'
import { CardCart, Container } from './components'

function App() {
    const products = require('./products.json')

    return (
        <Container>
            {products.map((product) => {
                return <CardCart product={product} />
            })}
        </Container>
    )
}

export default App

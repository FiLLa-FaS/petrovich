import React from 'react'
import './UiButton.scss'

const UiButton = ({ children }) => {
    return (
        <button type="button" className="ui-button">
            <ion-icon name="cart-outline" className="ui-button__icon" />
            <span className="ui-button__text">{children}</span>
        </button>
    )
}

export default UiButton

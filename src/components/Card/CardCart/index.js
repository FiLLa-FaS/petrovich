/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { UiButton } from '../../Ui'
import './CardCart.scss'

const CardCart = ({ product }) => {
    const tools = product.assocProducts.split(';')
    tools.pop()

    const code = product.code.replace(/^0+/, '')

    return (
        <div className="card-cart">
            <div className="card-cart__content">
                <div className="card-cart__addition">
                    <div className="card-cart__addition--content">
                        <span className="card-cart__code">Код: {code}</span>
                        <span className="card-cart__status">Наличие</span>
                    </div>
                </div>
                <div className="card-cart__grid">
                    <div className="card-cart__column card-cart__column--image">
                        <div className="card-cart__image">
                            <img
                                className="card-cart__img"
                                src={product.primaryImageUrl}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="card-cart__column card-cart__column--big">
                        <a href="#" className="card-cart__title">
                            {product.title}
                        </a>
                        <div className="card-cart__tools">
                            Могут понадобиться:
                            <span className="card-cart__list">
                                {tools.map((tool) => {
                                    return (
                                        <a href="#" className="card-cart__tool">
                                            {tool},
                                        </a>
                                    )
                                })}
                            </span>
                        </div>
                    </div>
                    <div className="card-cart__column card-cart__column--price">
                        <div className="card-cart-price">
                            <div className="card-cart-price__flex">
                                <span className="card-cart-price__title">
                                    По карте клуба
                                </span>
                                <span className="card-cart-price__primary">
                                    375,71 ₽
                                </span>
                            </div>

                            <div className="card-cart-price__secondary">
                                391,09 ₽
                            </div>
                        </div>
                        <div className="card-cart__points">
                            Можно купить за 231,75 балла
                        </div>
                        <div className="card-cart-tabs">
                            <div className="card-cart-tabs__tab card-cart-tabs__tab--active">
                                За м. кв.
                            </div>
                            <div className="card-cart-tabs__tab">
                                За упаковку
                            </div>
                        </div>
                        {product.unitRatio !== product.unitRatioAlt &&
                            product.unit !== product.unitAlt && (
                                <div className="card-cart-info">
                                    <ion-icon
                                        name="information-circle"
                                        className="card-cart-info__icon"
                                    />

                                    <p className="card-cart-info__text">
                                        Продается упаковками: <br />
                                        {product.unitRatio}
                                        {product.unit} = {product.unitRatioAlt}
                                        {product.unitAlt}
                                    </p>
                                </div>
                            )}

                        <div className="card-cart-buy">
                            <div className="card-cart-counter">
                                <div className="card-cart-counter__col">1</div>
                                <div className="card-cart-counter__col">
                                    <div className="card-cart-counter__row">
                                        <ion-icon name="chevron-up-outline" />
                                    </div>
                                    <div className="card-cart-counter__row">
                                        <ion-icon name="chevron-down-outline" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-cart-buy__button">
                                <UiButton>В корзину</UiButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCart

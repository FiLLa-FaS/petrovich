/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { UiButton } from '../../Ui'
import './CardCart.scss'

const CardCart = ({ product, count = 1 }) => {
    const tools = product.assocProducts.split(';')
    tools.pop()

    const code = product.code.replace(/^0+/, '')

    const [showAltPrice, setShowAltPrice] = useState(false)

    const CountPlus = (count) => {
        count += 1
        return count
    }
    const CountMinus = (count) => {
        if (count === 0) {
            return count
        }
        count -= 1
        return count
    }
    // В функции showCardCartInfo выполняется сравнение unit и unitAlt, unitRatio и unitRatioAlt, чтобы не показывать информацию, если товар продается только в одном виде (в штуках или в упаковках)
    // const showCardCartInfo = () => {
    //     if (product.unitRatio !== product.unitRatioAlt &&
    //         product.unit !== product.unitAlt) {
    //         return (
    //                 <div className="card-cart-info">
    //                 <ion-icon
    //                     name="information-circle"
    //                     className="card-cart-info__icon"
    //                 />
    //                 <p className="card-cart-info__text">
    //                     Продается упаковками: <br />
    //                     {product.unitRatio}
    //                     {product.unit} = {product.unitRatioAlt}
    //                     {product.unitAlt}
    //                 </p>
    //             </div>
    //         )
    // }

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
                                {tools.map((tool, i) => {
                                    return (
                                        <a
                                            href="#"
                                            className="card-cart__tool"
                                            key={i}
                                        >
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
                                    {showAltPrice
                                        ? +product.priceGoldAlt.toFixed(2)
                                        : product.priceGold}
                                    ₽
                                </span>
                            </div>

                            <div className="card-cart-price__secondary">
                                {showAltPrice
                                    ? +product.priceRetailAlt.toFixed(2)
                                    : product.priceRetail}
                                ₽
                            </div>
                        </div>
                        <div className="card-cart__points">
                            Можно купить за 231,75 балла
                        </div>
                        <div className="card-cart-tabs">
                            <div
                                onClick={() => setShowAltPrice(true)}
                                className={`${
                                    showAltPrice
                                        ? 'card-cart-tabs__tab card-cart-tabs__tab--active'
                                        : 'card-cart-tabs__tab'
                                }`}
                            >
                                За м. кв.
                            </div>
                            <div
                                onClick={() => setShowAltPrice(false)}
                                className={`${
                                    showAltPrice
                                        ? 'card-cart-tabs__tab'
                                        : 'card-cart-tabs__tab card-cart-tabs__tab--active'
                                }`}
                            >
                                За упаковку
                            </div>
                        </div>
                        {/* {showCardCartInfo()} */}
                        {/* {product.unitRatio !== product.unitRatioAlt &&
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
                            )} */}
                        <div className="card-cart-buy">
                            <div className="card-cart-counter">
                                <div className="card-cart-counter__col">
                                    {count}
                                </div>
                                <div className="card-cart-counter__col">
                                    <div
                                        onClick={() => CountPlus(count)}
                                        className="card-cart-counter__row"
                                    >
                                        <ion-icon name="chevron-up-outline" />
                                    </div>
                                    <div
                                        onClick={() => CountMinus(count)}
                                        className="card-cart-counter__row"
                                    >
                                        <ion-icon name="chevron-down-outline" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-cart-buy__button">
                                <UiButton data-product-id={product.productId}>
                                    В корзину
                                </UiButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCart

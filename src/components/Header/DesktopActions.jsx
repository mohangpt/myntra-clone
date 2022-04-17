import React from 'react';
import './css/DesktopActions.css';
function DesktopActions() {
    return (<div className="desktop-actions">
            <div className="desktop-user">
                <div className="desktop-userIconsContainer">
                    <span className="myntraweb-sprite desktop-iconUser sprites-headerUser">
                    </span>
                    <span className="desktop-userTitle">Profile</span>
                </div>
                <div className="desktop-userActions">
                    <div className="desktop-userActionsArrow">

                    </div>
                    <div className="desktop-userActionsContent">
                        <div className="desktop-contentInfo">
                            <div className="desktop-infoTitle">Welcome</div>
                            <div className="desktop-infoEmail">To access account and manage orders</div>
                        </div>
                        <div>
                            <div className="desktop-getUserInLinks desktop-getInLinks">
                                <a href="#" data-track="login" className="desktop-linkButton">login / Signup</a>
                            </div>
                            <div className="desktop-getInLinks">
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Orders </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Wishlist </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Gift Cards </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Contact Us </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Myntra Insider <span className="desktop-superscriptTag"> New
                                    </span> </div>
                                </a>
                            </div>
                            <div className="desktop-getInLinks">
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Myntra Credit </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Coupons </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Saved Cards </div>
                                </a>
                                <a href="#" data-track="coupons" className="desktop-info">
                                    <div className="desktop-infoSection"> Saved Addresses </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="desktop-wishlist">
                <span className="myntraweb-sprite desktop-iconWishlist sprites-headerWishlist">
                </span>
                <span className="desktop-userTitle">Wishlist</span>
            </a>
            <a href="#" className="desktop-cart">
                <span className="myntraweb-sprite desktop-iconBag sprites-headerBag"></span>
                <span className="desktop-badge desktop-grey">0</span>
                <span className="desktop-userTitle">Bag</span>
            </a>
        </div>);
}
export default DesktopActions;

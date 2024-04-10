define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'in_store_payment',
                component: 'Learningmagento_CustomPayment/js/view/payment/method-renderer/in_store_payment'
            }
        );
        return Component.extend({});
    }
);
